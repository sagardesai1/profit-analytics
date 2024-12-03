import Navigation from "@/components/navigation";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default DashboardLayout;
