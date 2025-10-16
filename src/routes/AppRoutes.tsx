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
import Login from "@/pages/Login/index";

const AppRoutes = () => {
  const { isAuthenticated } = useStore();

  return (
    <Router>
      <Routes>
        {/* Default route for unauthenticated users */}
        {!isAuthenticated && (
          <Route
            path="/"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
        )}

        {/* Map all defined routes */}
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

          // Redirect to login if user is not authenticated and route requires auth
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

        {/* Catch-all: redirect to home if no match */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
