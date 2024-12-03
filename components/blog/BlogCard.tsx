import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: {
    slug: { current: string };
    mainImage: any;
    title: string;
    excerpt: string;
    author: { name: string };
    publishedAt: string;
    categories: Array<{ title: string }>;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-6">
        {post.categories?.map((category) => (
          <span
            key={category.title}
            className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2"
          >
            {category.title}
          </span>
        ))}
        <Link href={`/blog/${post.slug.current}`}>
          <h2 className="text-xl font-bold mt-2 mb-2 hover:text-blue-600">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author?.name}</span>
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
        </div>
      </div>
    </div>
  );
}
