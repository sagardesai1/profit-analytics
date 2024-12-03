import { urlFor } from "@/sanity/lib/image";

export function generateBlogPostSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
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
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `${process.env.NEXT_PUBLIC_BASE_URL}${item.url}`,
        name: item.name,
      },
    })),
  };
}

export function generateRelatedArticlesSchema(relatedPosts: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: relatedPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug.current}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
