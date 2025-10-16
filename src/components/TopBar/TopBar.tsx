import React from "react";
import { Link } from "react-router-dom";

interface TopBarProps {
  layout?: "home" | "auth" | "dashboard" | "profile";
}

export default function TopBar({ layout = "home" }: TopBarProps) {
  return (
    <header className="topbar">
      {layout === "dashboard" || layout === "profile" ? (
        <div className="menu-left">
          {/* Hamburger menu for side nav */}
          <button className="menu-button" aria-label="Open menu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      ) : (
        <nav className="menu-left">
          {/* Links for Home/Auth */}
          <Link className="menu-link" to="/">
            Home
          </Link>
          <Link className="menu-link" to="/login">
            Login
          </Link>
          <Link className="menu-link" to="/register">
            Register
          </Link>
        </nav>
      )}

      <div className="project-name">Parents Classroom</div>
    </header>
  );
}
