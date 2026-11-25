import Link from "next/link";
import type { CSSProperties } from "react";
import { Meta } from "@/components/Meta";
import { Picture } from "@/components/Picture";
import { Prose } from "@/components/Prose";
import { getPage, getWorks, type WorkSummary } from "@/lib/content";
import { hero, pictures } from "@/lib/pictures";
import styles from "./page.module.css";

const ratio = (slug: string) => {
  const { width, height } = pictures[slug][0].image;
  return width / height;
};

function Label({ work }: { work: WorkSummary }) {
  return (
    <div className={styles.label}>
      <h2>
        <Link href={`/works/${work.slug}`}>{work.title}</Link>
      </h2>
      <Meta year={work.year} medium={work.medium} />
      <div className={styles.blurb}>
        <Prose nodes={work.blurb} />
      </div>
    </div>
  );
}

export default function Home() {
  const works = getWorks();
  const pair = works
    .filter((work) => hero.includes(work.slug))
    .sort((a, b) => hero.indexOf(a.slug) - hero.indexOf(b.slug));
  const rest = works.filter((work) => !hero.includes(work.slug));
  const sum = pair.reduce((total, work) => total + ratio(work.slug), 0);

  return (
    <main>
      <div className={styles.hero} style={{ "--sum": sum } as CSSProperties}>
        {pair.map((work) => (
          <article
            key={work.slug}
            className={styles.heroWork}
            style={{ "--ratio": ratio(work.slug) } as CSSProperties}
          >
            <Picture
              picture={pictures[work.slug][0]}
              href={`/works/${work.slug}`}
              sizes="(max-width: 700px) 100vw, 56vw"
              preload
            />
            <Label work={work} />
          </article>
        ))}
      </div>

      <div className={styles.statement}>
        <Prose nodes={getPage("statement.md").body} />
      </div>

      {rest.map((work) => (
        <article key={work.slug} className={styles.work}>
          <Picture
            picture={pictures[work.slug][0]}
            href={`/works/${work.slug}`}
            sizes="(max-width: 800px) 100vw, 60vw"
          />
          <Label work={work} />
        </article>
      ))}
    </main>
  );
}
