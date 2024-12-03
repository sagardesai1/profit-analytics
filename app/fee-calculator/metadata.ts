import { Metadata } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

export const metadata: Metadata = {
  title: "TikTok Shop Fee Calculator | Free Profit & Fee Calculator",
  description:
    "Free TikTok Shop fee calculator. Calculate your selling fees, profit margins, shipping costs, and more. Make informed decisions for your TikTok Shop business.",
  keywords:
    "tiktok shop calculator, tiktok fees, tiktok profit calculator, tiktok shop profit margin, ecommerce calculator, selling fees calculator",
  openGraph: {
    title: "TikTok Shop Fee Calculator | Free Profit & Fee Calculator",
    description:
      "Calculate TikTok Shop fees, profit margins, and expenses instantly. Join thousands of sellers making informed decisions.",
    type: "website",
    url: `${BASE_URL}/fee-calculator`,
    images: [
      {
        url: `${BASE_URL}/images/calculator-og.jpg`,
        width: 1200,
        height: 630,
        alt: "TikTok Shop Fee Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Shop Fee Calculator | Free Profit & Fee Calculator",
    description:
      "Calculate TikTok Shop fees, profit margins, and expenses instantly. Join thousands of sellers making informed decisions.",
    images: [`${BASE_URL}/images/calculator-og.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/fee-calculator`,
  },
};
