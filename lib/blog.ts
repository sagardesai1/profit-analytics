import { client } from "@/lib/sanity";
import { urlFor } from "@/sanity/lib/image";

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  author: {
    name: string;
  };
  excerpt: string;
  body: any; // Portable Text content
  mainImage: any;
  categories: Array<{
    title: string;
  }>;
  updatedAt?: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      author->{
        name
      },
      excerpt,
      mainImage,
      categories[]->{
        title
      }
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      author->{
        name
      },
      excerpt,
      body,
      mainImage,
      categories[]->{
        title
      },
      "updatedAt": _updatedAt
    }
  `,
    { slug }
  );
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function generateArticleSchema(post: BlogPost) {
  const readingTime = calculateReadingTime(post.body);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name,
    },
    publisher: {
      "@type": "Organization",
      name: "SkuHunt",
      logo: {
        "@type": "ImageObject",
        url: "https://www.skuhunt.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
    },
    wordCount: post.body.split(/\s+/).length,
    timeRequired: `PT${readingTime}M`,
  };
}

// Optional: Add helper function for related posts
export async function getRelatedPosts(
  currentPost: BlogPost,
  limit = 3
): Promise<BlogPost[]> {
  return client.fetch(
    `
    *[_type == "post" && 
      count(categories[@._ref in $categories]) > 0 && 
      _id != $currentId
    ] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      categories[]->{
        title
      }
    }
  `,
    {
      categories: currentPost.categories.map((cat: any) => cat._ref),
      currentId: currentPost._id,
      limit: limit - 1,
    }
  );
}
