"use client";

import Navbar from "@/components/landingpage/Navbar";
import Hero from "@/components/landingpage/Hero";
import Card from "@/components/landingpage/CardComponent";
import Video from "@/components/landingpage/Video";
import ZigZag from "@/components/landingpage/ZigZagSection";
import ThreeCards from "@/components/landingpage/ThreeCardSection";
import Testimonials from "@/components/landingpage/Testimonials";
import ChooseYourPlan from "@/components/landingpage/Plan";
import Faqs from "@/components/landingpage/faqs";
import Cal from "@/components/landingpage/Calculator";
import Footer from "@/components/landingpage/Footer";

import Script from "next/script";
// import { redirect } from "next/navigation";
// import { auth } from "@clerk/nextjs/server";
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
      "https://www.tiktok.com/@skuhunt",
    ],
  },
  screenshot: "https://www.skuhunt.com/dashboard-preview.jpg",
  softwareVersion: "1.0",
};

export default function Home() {
  // const { userId } = auth();
  // if (userId) {
  //   redirect("/profit/dashboard");
  // }
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main>
        <div className="">
          {/* Navbar Component */}
          <Navbar />

          {/* Hero Section Component. This section contains the main hero content of the page   */}
          <div className=" md:p-3 p-3 py-4 ">
            <Hero />
          </div>

          {/* Card Component with top and bottom padding */}
          <div className="mb-4 md:px-0 px-3 py-0 pb-4 ">
            <Card />
          </div>
          {/* Video Component */}
          <Video />
          <div className="md:pt-[3rem] pt-0 md:pb-[7rem] pb-[2rem] p-4 lg:p-9">
            {/*This section displays a calculater with some padding */}
            <Cal />
          </div>
          {/* This section displays content in a zigzag layout*/}
          <div className="p-2 lg:p-9">
            <ZigZag />
          </div>
          {/* This section displays content in three cards layout*/}
          <div className="md:py-8 py-0 lg:py-12">
            <ThreeCards />
          </div>
          {/* This section displays testimonial layout*/}
          <div className="">
            <Testimonials />
          </div>
          {/* This section displays the plan layout*/}
          <ChooseYourPlan />
          {/* This section displays the faqs layout*/}
          <Faqs />
          {/* This section displays the footer layout*/}
          <Footer />
        </div>
      </main>
    </>
  );
}
