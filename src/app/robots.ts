import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/success"],
    },
    sitemap: "https://ansioff.com/sitemap.xml",
    host: "https://ansioff.com",
  };
}
