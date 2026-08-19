import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";
import { LOCALES } from "@/lib/locale";

// "projects" is deliberately excluded — the page is hidden from nav and de-indexed.
const ROUTES = ["", "use-cases", "products", "sectors", "about", "contact", "request/solution", "request/technology"];

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((lang) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${lang}${route ? `/${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
