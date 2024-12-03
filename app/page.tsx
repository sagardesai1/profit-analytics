import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Testimonals from "@/components/Testimonals";
import Trust from "@/components/Trust";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Faqs from "@/components/Faqs";
import Logos from "@/components/Logos";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Script from "next/script";

// Structured data object
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SkuHunt - TikTok Shop Analytics Platform",
  description:
    "Professional analytics and profit tracking platform for TikTok Shop sellers. Monitor sales, calculate profits, and optimize your business performance.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
  },
  features: [
    "TikTok Shop Analytics",
    "Profit Tracking",
    "Sales Monitoring",
    "Fee Calculator",
    "Performance Metrics",
  ],
  creator: {
    "@type": "Organization",
    name: "SkuHunt",
    url: "https://www.skuhunt.com",
  },
};

export default function Home() {
  const { userId } = auth();
  if (userId) {
    redirect("/profit/dashboard");
  }
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <Hero />
        <Logos />
        <Benefits />
        <Features />
        <HowItWorks />
        <Testimonals />
        <Trust />
        <Faqs />
        <Pricing />
        <Cta />
        <Footer />
      </main>
    </>
  );
}

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-4">
//       <Link
//         href="/upload-csv"
//         className="border-2 border-gray-300 p-4 rounded-md"
//       >
//         <button className="font-bold text-2xl">Upload CSV</button>
//       </Link>
//       <div className="text-xl">or</div>
//       <Link
//         href="/products"
//         className="border-2 border-gray-300 p-4 rounded-md"
//       >
//         <button className="font-bold text-2xl">View Products Dashboard</button>
//       </Link>
//     </div>
//   );
// }
