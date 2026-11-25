import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Picture } from "@/lib/pictures";

/** The size link previews are drawn at. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const types: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

async function source({ file }: Picture) {
  const data = await readFile(
    path.join(process.cwd(), "materials/assets", file),
    "base64",
  );
  return `data:${types[path.extname(file)]};base64,${data}`;
}

/**
 * The image shown when a page is shared as a link:
 * the pictures side by side at equal height, touching, uncropped,
 * as large as the frame allows and centered on white.
 */
export async function preview(pictures: Picture[]) {
  const ratios = pictures.map(({ image }) => image.width / image.height);
  const sum = ratios.reduce((total, ratio) => total + ratio, 0);
  const height = Math.min(size.height, size.width / sum);
  const sources = await Promise.all(pictures.map(source));

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#fff",
      }}
    >
      {pictures.map((picture, index) => (
        // next/image cannot be used here: this JSX is drawn to a PNG, not sent to a browser.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={picture.file}
          src={sources[index]}
          alt=""
          width={Math.round(height * ratios[index])}
          height={Math.round(height)}
        />
      ))}
    </div>,
    size,
  );
}
