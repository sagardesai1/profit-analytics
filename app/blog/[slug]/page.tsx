import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/lib/metadata";
import Script from "next/script";
import { generateBlogPostSchema } from "@/lib/structuredData";

async function getPost(slug: string) {
  return await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      mainImage,
      body,
      publishedAt,
      excerpt,
      author->{
        name
      },
      categories[]->{
        title
      },
      seo {
        metaTitle,
        metaDescription,
        keywords,
        ogImage
      }
    }
  `,
    { slug }
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return {};

  return generateSEOMetadata({
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    ogImage: post.seo?.ogImage || post.mainImage,
    keywords: post.seo?.keywords,
    url: `/blog/${params.slug}`,
  });
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const structuredData = generateBlogPostSchema(post);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={post.body} />
        </div>
      </article>
    </>
  );
}
