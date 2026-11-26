import fs from "node:fs";
import path from "node:path";
import type { Link, Paragraph, Root, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { SKIP, visit } from "unist-util-visit";

// All prose is read from materials/ at build time, so it has one source.
const materials = path.join(process.cwd(), "materials");

export type WorkSummary = {
  slug: string;
  title: string;
  year: string;
  medium: string;
  blurb: RootContent[];
  description: string;
};

export type Work = WorkSummary & {
  body: RootContent[];
  links: { label: string; url: string }[];
};

/** Top-level nodes of markdown, without its HTML comments. */
export function parse(source: string): RootContent[] {
  const tree = unified().use(remarkParse).parse(source);
  return tree.children.filter((node) => node.type !== "html");
}

/** The nodes of a materials file. */
function read(file: string) {
  return parse(fs.readFileSync(path.join(materials, file), "utf8"));
}

/** The source puts each sentence on its own line; join them for plain text. */
const plain = (nodes: RootContent[]) => toString(nodes).replace(/\s+/g, " ");

/** A paragraph that is entirely italic: "year · medium". */
function isMeta(node: RootContent): node is Paragraph {
  return (
    node.type === "paragraph" &&
    node.children.length === 1 &&
    node.children[0].type === "emphasis"
  );
}

function splitMeta(node: Paragraph) {
  const [year, medium] = toString(node).split(" · ");
  return { year, medium };
}

/** A paragraph made only of links, with dots between them. */
function isLinkLine(node: RootContent): node is Paragraph {
  return (
    node.type === "paragraph" &&
    node.children.every(
      (child) =>
        child.type === "link" ||
        (child.type === "text" && child.value.trim() === "·"),
    )
  );
}

/** Turns an italic mention of another work's title into a link to its page. */
function linkTitles(nodes: RootContent[], self?: string): RootContent[] {
  const slugs = new Map(getWorks().map((work) => [work.title, work.slug]));
  const tree: Root = { type: "root", children: nodes };
  visit(tree, "emphasis", (node, index, parent) => {
    const slug = slugs.get(toString(node));
    if (!slug || slug === self || !parent || index === undefined) return;
    parent.children[index] = {
      type: "link",
      url: `/works/${slug}`,
      children: [node],
    };
    return SKIP;
  });
  return tree.children;
}

/** The works in the order of materials/works.md, each with its blurb. */
export function getWorks(): WorkSummary[] {
  const works: WorkSummary[] = [];
  for (const node of read("works.md")) {
    const work = works.at(-1);
    if (node.type === "heading" && node.depth === 2) {
      const link = node.children.find(
        (child): child is Link => child.type === "link",
      );
      if (!link) continue;
      works.push({
        slug: path.basename(link.url, ".md"),
        title: toString(node),
        year: "",
        medium: "",
        blurb: [],
        description: "",
      });
    } else if (work && isMeta(node)) {
      Object.assign(work, splitMeta(node));
    } else if (work) {
      work.blurb.push(node);
      work.description = plain(work.blurb);
    }
  }
  return works;
}

/** One work's page: title and meta line, prose, and documentation links. */
export function getWork(slug: string): Work | undefined {
  const summary = getWorks().find((work) => work.slug === slug);
  if (!summary) return undefined;

  const { title, body: nodes } = getPage(`works/${slug}.md`, slug);
  const meta = nodes.find(isMeta);
  const last = nodes.at(-1);
  const linkLine = last && isLinkLine(last) ? last : undefined;

  return {
    ...summary,
    title,
    ...(meta && splitMeta(meta)),
    body: nodes.filter((node) => node !== meta && node !== linkLine),
    // Links to local assets are pictures, which the page already shows.
    links: (linkLine?.children ?? [])
      .filter((child): child is Link => child.type === "link")
      .filter((link) => URL.canParse(link.url))
      .map((link) => ({ label: toString(link), url: link.url })),
  };
}

/** A materials file as a title (its h1) and the prose beneath it. */
export function getPage(file: string, self?: string) {
  const nodes = read(file);
  const heading = nodes.find(
    (node) => node.type === "heading" && node.depth === 1,
  );
  const body = nodes.filter((node) => node !== heading);
  return {
    title: heading ? toString(heading) : "",
    // The first sentence, which the source keeps on a line of its own.
    description: toString(body[0]).split("\n")[0],
    body: linkTitles(body, self),
  };
}
