import { Metadata } from "next";

const BASE_URL = "https://skuhunt.com/";

export const metadata: Metadata = {
  title: {
    default: "Accurate Profit Analytics For Top TikTok Sellers",
    template: `%s | SKUHunt`,
  },
  description:
    "Empower your TikTok business with accurate data, helping you elevate performance and scale to meet higher demands.",

  metadataBase: new URL(BASE_URL),
  keywords: [
    "Tiktok Finance",
    "Tiktok Profits Dashboard",
    "Tiktok Profits Analytics",
    "Tiktok Seller Analytics",
    "Profit and loss tracking for TikTok shop",
  ],
  openGraph: {
    title: {
      default: "Accurate Profit Analytics For Top TikTok Sellers",
      template: `%s | SKUHunt`,
    },
    description:
      "Empower your TikTok business with accurate data, helping you elevate performance and scale to meet higher demands.",
    url: new URL(BASE_URL),
    type: "website",
  },
};
