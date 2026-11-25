import type { Metadata } from "next";
import { Prose } from "@/components/Prose";
import { getPage } from "@/lib/content";
import styles from "./page.module.css";

const statement = () => getPage("statement-long.md");

export function generateMetadata(): Metadata {
  const { title, description } = statement();
  return { title, description };
}

export default function About() {
  const { title, body } = statement();
  return (
    <main className={styles.page}>
      <h1 className="visually-hidden">{title}</h1>
      <div className="prose">
        <Prose nodes={body} />
      </div>
    </main>
  );
}
