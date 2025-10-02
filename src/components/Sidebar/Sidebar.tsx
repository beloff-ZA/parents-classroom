import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, User, Settings } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    { name: "Profile", icon: <User size={18} />, path: "/profile" },
    { name: "Classes", icon: <BookOpen size={18} />, path: "/classes" },
    { name: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col h-screen">
      <div className="p-6 text-xl font-bold border-b">Parents Classroom</div>

      <nav className="flex-1 flex flex-col p-4 space-y-2 overflow-auto">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 transition-colors ${
              location.pathname === item.path ? "bg-gray-100 font-semibold" : ""
            }`}
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
