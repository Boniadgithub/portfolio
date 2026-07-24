import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bonsaadugna.dev";
  const projectUrls = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const routes = ["", "/about", "/work", "/resume", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...projectUrls];
}
