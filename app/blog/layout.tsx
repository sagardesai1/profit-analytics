import Navbar from "@/components/landingpage/Navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
