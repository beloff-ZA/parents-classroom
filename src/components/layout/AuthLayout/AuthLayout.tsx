import React from "react";
import TopBar from "@/components/TopBar/TopBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <TopBar layout="auth" />
      <main>{children}</main>
    </div>
  );
}
