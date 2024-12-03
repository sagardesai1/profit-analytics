import CategoryBadge from "@/components/blog/CategoryBadge";
import { formatDate } from "@/lib/utils";

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
}

export default function BlogHeader({
  title,
  date,
  author,
  category,
}: BlogHeaderProps) {
  return (
    <header className="mb-8">
      <CategoryBadge category={category} />
      <h1 className="text-4xl font-bold mt-4 mb-4">{title}</h1>
      <div className="flex items-center text-gray-600">
        <span className="mr-4">By {author}</span>
        <time dateTime={date}>{formatDate(date)}</time>
      </div>
    </header>
  );
}
