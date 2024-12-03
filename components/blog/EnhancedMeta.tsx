import Head from "next/head";

interface EnhancedMetaProps {
  post: any;
  readingTime: number;
}

export default function EnhancedMeta({ post, readingTime }: EnhancedMetaProps) {
  return (
    <Head>
      {/* Article specific meta tags */}
      <meta property="article:published_time" content={post.publishedAt} />
      <meta property="article:author" content={post.author.name} />
      {post.categories?.map((category: any) => (
        <meta
          key={category.title}
          property="article:tag"
          content={category.title}
        />
      ))}

      {/* Reading time */}
      <meta property="og:reading_time" content={`${readingTime} minutes`} />

      {/* Additional social media tags */}
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={post.author.name} />
      <meta name="twitter:label2" content="Reading time" />
      <meta name="twitter:data2" content={`${readingTime} min read`} />
    </Head>
  );
}
