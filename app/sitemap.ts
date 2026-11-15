import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/prestations", "/realisations", "/professionnels", "/a-propos", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...services.map((s) => ({ url: `${site.url}/prestations/${s.slug}` })),
  ];
}
