// src/routes/routes.tsx
import Home from "@/pages/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Profile from "@/pages/Profile/Profile";

export const routes = [
  {
    path: "/",
    element: <Home />,
    layout: "auth", // you can check this to decide layout later
  },
  {
    path: "/login",
    element: <Login />,
    layout: "auth",
  },
  {
    path: "/register",
    element: <Register />,
    layout: "auth",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    layout: "dashboard",
  },
  {
    path: "/profile",
    element: <Profile />,
    layout: "dashboard",
  },
];
