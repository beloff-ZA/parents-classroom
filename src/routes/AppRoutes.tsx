import React from "react";
import { Routes, Route } from "react-router-dom";
import PlaceholderDashboard from "../components/dashboard/PlaceholderDashboard";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PlaceholderDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
