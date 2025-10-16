// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "@/Routes/AppRoutes";
import "@/styles/globals.css";
import "@/styles/themes/default.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
