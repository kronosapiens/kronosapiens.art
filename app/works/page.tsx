import type { Metadata } from "next";
import { WorkRow } from "@/components/Work";
import { getWorks } from "@/lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Works",
  description: "Every work, newest first.",
};

/** Every work as a row, in the order of materials/works.md: newest first. */
export default function Works() {
  return (
    <main className={styles.page}>
      <h1 className="visually-hidden">Works</h1>
      {getWorks().map((work, i) => (
        <WorkRow key={work.slug} work={work} preload={i === 0} />
      ))}
    </main>
  );
}
