import { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

export const metadata: Metadata = {
  title: "TikTok Shop Fee Calculator by SKUhunt | Free Profit Calculator",
  description:
    "SKUhunt's free TikTok Shop fee calculator helps you calculate selling fees, profit margins, shipping costs, and more. Make informed decisions for your TikTok Shop business.",
  keywords:
    "skuhunt calculator, tiktok shop calculator, tiktok fees, tiktok profit calculator, tiktok shop profit margin, ecommerce calculator, selling fees calculator, skuhunt tools",
  openGraph: {
    title: "SKUhunt - TikTok Shop Fee Calculator | Free Profit Calculator",
    description:
      "Use SKUhunt's free calculator to instantly calculate TikTok Shop fees, profit margins, and expenses. Join thousands of sellers making informed decisions.",
    type: "website",
    url: `${BASE_URL}/fee-calculator`,
    images: [
      {
        url: `${BASE_URL}/images/calculator-og.jpg`,
        width: 1200,
        height: 630,
        alt: "SKUhunt TikTok Shop Fee Calculator",
      },
    ],
    siteName: "SKUhunt",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKUhunt - TikTok Shop Fee Calculator | Free Profit Calculator",
    description:
      "Use SKUhunt's free calculator to instantly calculate TikTok Shop fees, profit margins, and expenses. Join thousands of sellers making informed decisions.",
    images: [`${BASE_URL}/images/calculator-og.jpg`],
    site: "@skuhunt",
  },
  alternates: {
    canonical: `${BASE_URL}/fee-calculator`,
  },
};
