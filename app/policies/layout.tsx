import Navbar from "@/components/landingpage/Navbar";

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
