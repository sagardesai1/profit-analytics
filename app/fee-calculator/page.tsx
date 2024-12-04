import { Metadata } from "next";
import Script from "next/script";
import FeeCalculator from "./calculator";
import { metadata as pageMetadata } from "./metadata";

// Structured data object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SKUhunt - TikTok Shop Fee Calculator",
  description:
    "Free calculator for TikTok Shop sellers to calculate fees, profits, and margins.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web-based",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    priceValidUntil: "2024-12-31",
    availability: "https://schema.org/OnlineOnly",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
  creator: {
    "@type": "Organization",
    name: "SKUhunt",
    url: "https://www.skuhunt.com",
  },
  featureList: [
    "TikTok Shop fee calculation",
    "Profit margin calculator",
    "Shipping cost calculator",
    "Cost of sales analysis",
    "Sample cost tracking",
    "Adjustment fee calculator",
  ],
  screenshot: "https://www.skuhunt.com/images/calculator-og.jpg",
  url: "https://www.skuhunt.com/fee-calculator",
  softwareVersion: "1.0",
  isAccessibleForFree: true,
};

export const metadata: Metadata = pageMetadata;

export default function Page() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FeeCalculator />
    </>
  );
}
