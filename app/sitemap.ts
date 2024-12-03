import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

async function getBlogPosts() {
  return await client.fetch(`
    *[_type == "post"] {
      slug,
      publishedAt,
      categories[]->{
        title
      }
    }
  `);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.skuhunt.com";

  const posts = await getBlogPosts();

  const blogUrls = posts.map((post: any) => {
    const priority = post.categories?.some(
      (c: any) => c.title === "TikTok Tips"
    )
      ? 0.9
      : 0.7;

    return {
      url: `${BASE_URL}/blog/${post.slug.current}`,
      lastModified: post.publishedAt,
      changeFrequency: "weekly" as const,
      priority,
    };
  });

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/fee-calculator`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/profit/dashboard`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
