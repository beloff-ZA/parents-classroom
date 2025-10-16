import React from "react";

export default function TopBar({}: { children?: React.ReactNode }) {
  return (
    <header className="w-full border-b py-4 px-6 flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <a href="/" className="text-xl font-semibold">
          Parents Classroom
        </a>
      </div>
      <nav className="flex items-center gap-4">
        <a href="/login" className="px-3 py-2 rounded hover:bg-gray-100">
          Log in
        </a>
        <a
          href="/register"
          className="px-3 py-2 rounded bg-indigo-600 text-white hover:opacity-95"
        >
          Register
        </a>
      </nav>
    </header>
  );
}
