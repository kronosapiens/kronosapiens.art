import { hero, pictures } from "@/lib/pictures";
import { preview } from "@/lib/preview";

export { contentType, size } from "@/lib/preview";

const pair = hero.map((slug) => pictures[slug][0]);

export const alt = pair.map((picture) => picture.alt).join(" ");

/** The home page's link preview: the two hero pictures, as on the page. */
export default function Image() {
  return preview(pair);
}
