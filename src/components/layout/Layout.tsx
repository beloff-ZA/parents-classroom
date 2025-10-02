import React from "react";
import Sidebar from "@components/Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto bg-gray-100">{children}</main>
    </div>
  );
};

export default Layout;
