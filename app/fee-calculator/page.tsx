import { Metadata } from "next";
import Script from "next/script";
import FeeCalculator from "./calculator";
import { metadata as pageMetadata } from "./metadata";

// Structured data object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "TikTok Shop Fee Calculator",
  description:
    "Free calculator for TikTok Shop sellers to calculate fees, profits, and margins.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "1000",
  },
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
