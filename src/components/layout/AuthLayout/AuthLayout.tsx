import React from "react";
import TopBar from "@/components/TopBar/TopBar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TopBar for Auth pages */}
      <TopBar layout="auth" />
      <main className="flex-1">{children}</main>
    </div>
  );
}
