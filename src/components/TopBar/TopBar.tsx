import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  layout?: "auth" | "dashboard" | "profile";
}

export default function TopBar({ layout = "auth" }: Props) {
  const navigate = useNavigate();

  return (
    <header className="topbar flex items-center justify-between p-4 bg-white shadow-md">
      <div className="menu-left">
        {layout === "auth" && (
          <>
            <span className="cursor-pointer mr-4" onClick={() => navigate("/")}>
              Home
            </span>
            <span
              className="cursor-pointer mr-4"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </>
        )}
        {layout !== "auth" && <span className="font-bold">Logo</span>}
      </div>
      <div className="project-name font-bold text-lg">Parents Classroom</div>
    </header>
  );
}
