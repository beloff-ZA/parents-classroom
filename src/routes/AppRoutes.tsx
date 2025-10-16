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
import Home from "@/pages/Home/index";
import Login from "@/pages/Login/index";
import Register from "@/pages/Register/index";

const AppRoutes = () => {
  const { isAuthenticated } = useStore();

  return (
    <Router>
      <Routes>
        {/* Home page - shown if not authenticated */}
        <Route
          path="/"
          element={
            !isAuthenticated ? <Home /> : <Navigate to="/dashboard" replace />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <AuthLayout>
                <Login />
              </AuthLayout>
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <AuthLayout>
                <Register />
              </AuthLayout>
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* Dashboard/Profile routes */}
        {routes.map(({ path, element, layout }) => {
          let Layout;
          switch (layout) {
            case "dashboard":
              Layout = DashboardLayout;
              break;
            case "profile":
              Layout = ProfileLayout;
              break;
            default:
              Layout = AuthLayout;
          }

          // Redirect unauthenticated users to home
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

          return (
            <Route
              key={path}
              path={path}
              element={<Layout>{element}</Layout>}
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
