import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 flex items-center justify-center border-b bg-white">
          <div className="text-sm font-medium">(Logo)</div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
