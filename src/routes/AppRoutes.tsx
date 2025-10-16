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
        {/* Default Home page */}
        <Route
          path="/"
          element={
            !isAuthenticated ? <Home /> : <Navigate to="/dashboard" replace />
          }
        />

        {/* Auth routes */}
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

        {/* Other routes from routes.tsx */}
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

        {/* Catch-all: redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
