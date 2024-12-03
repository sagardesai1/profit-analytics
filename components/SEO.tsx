import { Metadata } from "next";
import { urlFor } from "@/lib/sanity";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: any;
  keywords?: string[];
  url: string;
  type?:
    | "article"
    | "website"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";
}

export function generateMetadata({
  title,
  description,
  ogImage,
  keywords,
  url,
  type = "article",
}: SEOProps): Metadata {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${url}`,
      type,
      images: ogImage
        ? [
            {
              url: urlFor(ogImage).url(),
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [urlFor(ogImage).url()] : [],
    },
    alternates: {
      canonical: `${BASE_URL}${url}`,
    },
  };
}
