import { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

export const metadata: Metadata = {
  title: "TikTok Shop Blog | SkuHunt",
  description:
    "Learn about TikTok Shop success strategies, analytics tips, and e-commerce insights.",
  keywords:
    "tiktok shop blog, tiktok shop tips, ecommerce blog, tiktok analytics",
  openGraph: {
    title: "TikTok Shop Blog | SkuHunt",
    description:
      "Learn about TikTok Shop success strategies, analytics tips, and e-commerce insights.",
    type: "website",
    url: `${BASE_URL}/blog`,
    images: [
      {
        url: `${BASE_URL}/images/blog-og.jpg`,
        width: 1200,
        height: 630,
        alt: "SkuHunt Blog",
      },
    ],
  },
};
