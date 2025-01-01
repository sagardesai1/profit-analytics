import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/fee-calculator", "/blog"],
        disallow: ["/auth/*", "/api/*", "/profit/dashboard"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
