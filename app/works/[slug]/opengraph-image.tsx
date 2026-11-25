import { getWorks } from "@/lib/content";
import { pictures } from "@/lib/pictures";
import { preview } from "@/lib/preview";

export { contentType, size } from "@/lib/preview";

// With the slugs listed here, the images are drawn at build time, not on request.
export function generateStaticParams() {
  return getWorks().map(({ slug }) => ({ slug }));
}

/** A work page's link preview: the work's first picture. */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return preview([pictures[slug][0]]);
}
