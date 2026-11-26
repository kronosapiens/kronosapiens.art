import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Modal } from "@/components/Modal";
import { Prose } from "@/components/Prose";
import { parse } from "@/lib/content";
import type { Picture as PictureData } from "@/lib/pictures";
import styles from "./Picture.module.css";

type Props = {
  picture: PictureData;
  /** How wide the picture displays, for choosing a file size. */
  sizes: string;
  /** Where the picture links, if anywhere. */
  href?: string;
  /** Open the picture in a modal, with its caption, when it is clicked. */
  modal?: boolean;
  /** Load ahead of the rest of the page; for pictures on the first screen. */
  preload?: boolean;
};

/**
 * A picture at its own proportions.
 * It is as large as its column and the `--cap` height allow,
 * and it never displays wider than its pixels.
 */
export function Picture({ picture, sizes, href, modal, preload }: Props) {
  const { image, alt, caption } = picture;
  const style = {
    "--ratio": image.width / image.height,
    "--pixels": `${image.width}px`,
  } as CSSProperties;
  const img = <Image src={image} alt={alt} sizes={sizes} preload={preload} />;

  if (modal) {
    return (
      <Modal
        className={styles.frame}
        style={style}
        trigger={img}
        caption={<Prose nodes={parse(caption)} />}
      >
        <Picture picture={picture} sizes="100vw" />
      </Modal>
    );
  }

  return href ? (
    <Link href={href} className={styles.frame} style={style}>
      {img}
    </Link>
  ) : (
    <div className={styles.frame} style={style}>
      {img}
    </div>
  );
}
