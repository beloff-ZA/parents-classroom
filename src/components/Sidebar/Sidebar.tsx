import React from "react";

export default function Sidebar({}: { children?: React.ReactNode }) {
  return (
    <aside className="w-72 min-h-screen border-r p-4 bg-white">
      <div className="h-20 flex items-center justify-center">
        <a href="/dashboard" className="text-lg font-bold">
          📚
        </a>
      </div>
      <nav className="mt-6 flex flex-col gap-2">
        <a href="/dashboard" className="px-3 py-2 rounded hover:bg-gray-100">
          Overview
        </a>
        <a
          href="/dashboard/profile"
          className="px-3 py-2 rounded hover:bg-gray-100"
        >
          Profile
        </a>
        <a
          href="/dashboard/children"
          className="px-3 py-2 rounded hover:bg-gray-100"
        >
          Children
        </a>
        <a
          href="/dashboard/settings"
          className="px-3 py-2 rounded hover:bg-gray-100"
        >
          Settings
        </a>
      </nav>
      <div className="mt-auto text-sm text-gray-500">MVP Sidebar</div>
    </aside>
  );
}
