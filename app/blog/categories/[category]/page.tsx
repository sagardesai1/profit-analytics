import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/blog/BlogCard";
import { generateSEOMetadata } from "@/lib/metadata";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = params.category.replace(/-/g, " ");

  return generateSEOMetadata({
    title: `${category} Articles | SkuHunt Blog`,
    description: `Read our latest articles about ${category.toLowerCase()} on SkuHunt.`,
    url: `/blog/categories/${params.category}`,
    type: "website",
    // You could add a default category image here if desired
    // ogImage: defaultCategoryImage,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getAllPosts();
  const categoryPosts = posts.filter((post) =>
    post.categories.some(
      (cat) =>
        cat.title.toLowerCase() ===
        params.category.replace(/-/g, " ").toLowerCase()
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {params.category.replace(/-/g, " ")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryPosts.map((post) => (
          <BlogCard key={post.slug.toString()} post={post} />
        ))}
      </div>
    </div>
  );
}
