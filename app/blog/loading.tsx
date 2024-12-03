import LoadingCard from "@/components/blog/LoadingCard";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-8 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
}
