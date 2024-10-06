import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Link
        href="/upload-csv"
        className="border-2 border-gray-300 p-4 rounded-md"
      >
        <button className="font-bold text-2xl">Upload CSV</button>
      </Link>
      <div className="text-xl">or</div>
      <Link
        href="/products"
        className="border-2 border-gray-300 p-4 rounded-md"
      >
        <button className="font-bold text-2xl">View Products Dashboard</button>
      </Link>
    </div>
  );
}
