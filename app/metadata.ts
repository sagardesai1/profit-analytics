import { Metadata } from "next";

const BASE_URL = "https://skuhunt.com/";

export const metadata: Metadata = {
  title: {
    default: "SKUhunt - TikTok Shop Analytics & Profit Tracking Platform",
    template: `%s | SKUhunt`,
  },
  description:
    "Track your TikTok Shop profits in real-time with SKUhunt. Get accurate analytics, fee calculations, and expense tracking to maximize your store's performance.",

  metadataBase: new URL(BASE_URL),
  keywords: [
    "TikTok Shop analytics",
    "TikTok profit tracking",
    "TikTok Shop dashboard",
    "TikTok seller tools",
    "TikTok Shop profit calculator",
    "TikTok Shop fee calculator",
    "ecommerce analytics",
    "sales tracking software",
  ],
  openGraph: {
    title: {
      default: "Start Growing With Accurate TikTok Shop Profit Analytics",
      template: `%s | SKUhunt`,
    },
    description:
      "Track your TikTok Shop profits in real-time with SKUhunt. Get accurate analytics, fee calculations, and expense tracking to maximize your store's performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SKUhunt TikTok Shop Analytics Platform",
      },
    ],
    siteName: "SKUhunt",
    url: new URL(BASE_URL),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKUhunt - TikTok Shop Analytics & Profit Tracking Platform",
    description:
      "Track your TikTok Shop profits in real-time with SKUhunt. Get accurate analytics, fee calculations, and expense tracking to maximize your store's performance.",
    images: ["/og-image.png"],
  },
};
