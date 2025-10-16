import React from "react";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";

export default function HomePage() {
  return (
    <AuthLayout>
      <h1 className="text-2xl font-semibold">Welcome to Parents Classroom</h1>
      <p className="mt-3 text-sm text-gray-600">
        Track your children's Google Classroom activity without switching
        classes.
      </p>
      <div className="mt-6 flex gap-3">
        <a
          href="/register"
          className="px-4 py-2 rounded bg-indigo-600 text-white"
        >
          Get started
        </a>
        <a href="/login" className="px-4 py-2 rounded border">
          Sign in
        </a>
      </div>
    </AuthLayout>
  );
}
