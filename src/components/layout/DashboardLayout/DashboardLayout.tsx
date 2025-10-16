import React from "react";
import TopBar from "@/components/TopBar/TopBar";
import SideBar from "@/components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout flex min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar layout="dashboard" />
        <main className="p-8 flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
