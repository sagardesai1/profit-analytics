import Link from "next/link";

interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const slug = category.toLowerCase().replace(/ /g, "-");

  return (
    <Link href={`/blog/categories/${slug}`}>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
        {category}
      </span>
    </Link>
  );
}
