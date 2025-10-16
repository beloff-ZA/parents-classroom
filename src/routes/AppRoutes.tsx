// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

// Layouts
import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, layout }) => {
          const Layout = layout === "dashboard" ? DashboardLayout : AuthLayout;
          return (
            <Route
              key={path}
              path={path}
              element={<Layout>{element}</Layout>}
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
