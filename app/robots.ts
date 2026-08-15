import { MetadataRoute } from "next";

const BASE_URL = "https://ogera.sybellasystems.co.rw";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard/",
        "/api/",
        "/auth/",
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}