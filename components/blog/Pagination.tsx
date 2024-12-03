import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link
          href={`${basePath}/${currentPage - 1}`}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`${basePath}/${page}`}
          className={`px-4 py-2 border rounded ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`${basePath}/${currentPage + 1}`}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Next
        </Link>
      )}
    </div>
  );
}
