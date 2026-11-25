import { Label, WorkRow, WorkSquare } from "@/components/Work";
import { getPage, getWorks } from "@/lib/content";
import { hero } from "@/lib/pictures";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export default function Home() {
  const works = getWorks();
  const pair = works
    .filter((work) => hero.includes(work.slug))
    .sort((a, b) => hero.indexOf(a.slug) - hero.indexOf(b.slug));
  const rest = works.filter((work) => !hero.includes(work.slug));

  return (
    <main>
      <h1 className="visually-hidden">{site.name}</h1>
      <div className={styles.hero}>
        {pair.map((work) => (
          <article key={work.slug}>
            <WorkSquare work={work} preload />
            <Label work={work} />
          </article>
        ))}
      </div>

      <div className={styles.statement}>
        <p>{getPage("statement.md").description}</p>
      </div>

      {rest.map((work) => (
        <WorkRow key={work.slug} work={work} />
      ))}
    </main>
  );
}
