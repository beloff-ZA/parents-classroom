import React from "react";
import TopBar from "@/components/TopBar/TopBar";
import SideBar from "@/components/Sidebar/Sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="profile-layout flex min-h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <TopBar layout="profile" />
        <main className="p-8 flex-1 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
