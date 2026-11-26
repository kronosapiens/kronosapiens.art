import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Meta } from "@/components/Meta";
import { Picture } from "@/components/Picture";
import { Prose } from "@/components/Prose";
import { Square } from "@/components/Square";
import { getWork, getWorks } from "@/lib/content";
import { pictures } from "@/lib/pictures";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getWorks().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const work = getWork((await params).slug);
  return { title: work?.title, description: work?.description };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const [main, ...more] = pictures[slug];

  return (
    // The data-work attribute sets the page's colors; see globals.css.
    <main className={styles.page} data-work={slug}>
      <Picture
        picture={main}
        sizes="(max-width: 800px) 100vw, 70vw"
        modal
        preload
      />
      <h1 className={styles.title}>{work.title}</h1>
      <Meta year={work.year} medium={work.medium} />
      <div className={`prose ${styles.prose}`}>
        <Prose nodes={work.body} />
      </div>
      {more.length > 0 && (
        <div className={styles.more}>
          {more.map((picture) => (
            <Square
              key={picture.image.src}
              picture={picture}
              sizes="(max-width: 800px) 33vw, 16rem"
              modal
            />
          ))}
        </div>
      )}
      {work.links.length > 0 && (
        <ul className={styles.links}>
          {work.links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
