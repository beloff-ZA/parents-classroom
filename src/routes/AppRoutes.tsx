import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/Login";
import DashboardPage from "@pages/Dashboard";
import NotFoundPage from "@pages/NotFound";
import Layout from "@components/layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected — all wrapped in Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
