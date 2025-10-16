import React from "react";
import TopBar from "@/components/TopBar/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Main content */}
      <main className="home-container">
        <h1>Welcome to Parents Classroom</h1>
        <p>
          Parents Classroom is a platform designed to help parents manage their
          household, track family information, and stay connected. Explore the
          dashboard to see how it can simplify family management.
        </p>
      </main>
    </div>
  );
}
