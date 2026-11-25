import type { MetadataRoute } from "next";
import { getWorks } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", ...getWorks().map(({ slug }) => `/works/${slug}`)];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
