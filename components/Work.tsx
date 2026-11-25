import Link from "next/link";
import { Meta } from "@/components/Meta";
import { Prose } from "@/components/Prose";
import { Square } from "@/components/Square";
import type { WorkSummary } from "@/lib/content";
import { pictures } from "@/lib/pictures";
import styles from "./Work.module.css";

type Props = { work: WorkSummary };

/** A work's first picture in its square, linking to the work's page. */
export function WorkSquare({ work, preload }: Props & { preload?: boolean }) {
  return (
    <Square
      picture={pictures[work.slug][0]}
      href={`/works/${work.slug}`}
      sizes="(max-width: 700px) 100vw, 45vw"
      preload={preload}
    />
  );
}

/** A work's title, year and medium, and blurb. */
export function Label({ work }: Props) {
  return (
    <div>
      <h2 className={styles.title}>
        <Link href={`/works/${work.slug}`}>{work.title}</Link>
      </h2>
      <Meta year={work.year} medium={work.medium} />
      <div className={styles.blurb}>
        <Prose nodes={work.blurb} />
      </div>
    </div>
  );
}

/** A work as a row: its square on the left, its label from the middle. */
export function WorkRow({ work, preload }: Props & { preload?: boolean }) {
  return (
    <article className={styles.row}>
      <WorkSquare work={work} preload={preload} />
      <Label work={work} />
    </article>
  );
}
