import React from "react";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm">Full name</label>
          <input
            type="text"
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            className="mt-1 w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm">Confirm</label>
            <input
              type="password"
              className="mt-1 w-full border rounded px-3 py-2"
            />
          </div>
        </div>
        <div>
          <button className="w-full py-2 rounded bg-indigo-600 text-white">
            Create account
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
