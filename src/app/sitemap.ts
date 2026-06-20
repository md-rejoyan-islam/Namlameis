import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions, industries } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/solutions",
    "/industries",
    "/platform",
    "/company/about",
    "/company/leadership",
    "/contact",
  ];

  const solutionRoutes = solutions.map((s) => `/solutions/${s.slug}`);
  const industryRoutes = industries.map((i) => `/industries/${i.slug}`);

  const all = [...staticRoutes, ...solutionRoutes, ...industryRoutes];

  return all.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
