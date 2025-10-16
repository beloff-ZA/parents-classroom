import React from "react";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold mb-4">Log in</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm">Password</label>
          <input
            type="password"
            className="mt-1 w-full border rounded px-3 py-2"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="text-sm">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-sm text-indigo-600">
            Forgot?
          </a>
        </div>
        <div>
          <button className="w-full py-2 rounded bg-indigo-600 text-white">
            Log in
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
