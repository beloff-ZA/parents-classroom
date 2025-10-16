import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import ProfileLayout from "@/components/layout/ProfileLayout/ProfileLayout";
import { useStore } from "@/store/useStore";

const AppRoutes = () => {
  const { isAuthenticated } = useStore();

  const getLayout = (layout: string, element: React.ReactNode) => {
    switch (layout) {
      case "dashboard":
        return <DashboardLayout>{element}</DashboardLayout>;
      case "profile":
        return <ProfileLayout>{element}</ProfileLayout>;
      default:
        return <AuthLayout>{element}</AuthLayout>;
    }
  };

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, layout }) => {
          // Redirect if user not authenticated for protected pages
          if (
            !isAuthenticated &&
            (layout === "dashboard" || layout === "profile")
          ) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to="/" replace />}
              />
            );
          }

          // Redirect authenticated user away from auth pages
          if (
            isAuthenticated &&
            layout === "auth" &&
            (path === "/" || path === "/login" || path === "/register")
          ) {
            return (
              <Route
                key={path}
                path={path}
                element={<Navigate to="/dashboard" replace />}
              />
            );
          }

          return (
            <Route
              key={path}
              path={path}
              element={getLayout(layout, element)}
            />
          );
        })}

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
