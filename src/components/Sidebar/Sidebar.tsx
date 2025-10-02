import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Classes", path: "/classes" },
  { name: "Profile", path: "/profile" },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Parent Portal
      </div>

      <nav className="flex flex-col flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg hover:bg-gray-700 ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
