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
  name: "SKUHunt",
  alternateName: "SKUHunt TikTok Shop Analytics",
  description:
    "Professional TikTok Shop analytics platform for sellers. Track profits, monitor sales, calculate fees, and optimize your business performance with real-time insights and detailed reporting.",
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
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  features: [
    "Real-time TikTok Shop Analytics",
    "Automated Profit Tracking",
    "Sales Performance Monitoring",
    "TikTok Shop Fee Calculator",
    "Expense Tracking",
    "Business Performance Metrics",
    "Detailed Reporting Dashboard",
  ],
  creator: {
    "@type": "Organization",
    name: "SKUHunt",
    url: "https://www.skuhunt.com",
    sameAs: [
      "https://x.com/skuhunt_",
      "https://www.linkedin.com/company/skuhunt/",
      "https://www.instagram.com/skuhunt/",
      "https://www.threads.net/@skuhunt",
      "https://www.facebook.com/skuhunt",
      "https://www.youtube.com/@SKUhunt",
    ],
  },
  screenshot: "https://www.skuhunt.com/dashboard-preview.jpg",
  softwareVersion: "1.0",
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
