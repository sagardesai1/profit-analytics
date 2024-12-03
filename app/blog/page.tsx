import { client } from "@/lib/sanity";
import BlogCard from "@/components/blog/BlogCard";
import { debugLog } from "@/lib/debug";

async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      author->{
        name
      },
      categories[]->{
        title
      }
    }
  `);

  debugLog(posts, "Blog Posts");
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {process.env.NODE_ENV === "development" && (
        <div className="mt-12 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Debug Information</h2>
          <pre className="overflow-auto">{JSON.stringify(posts, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
