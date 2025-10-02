import { Link } from "react-router-dom";
import { LogOut, User } from "lucide-react";

export default function Nav() {
  return (
    <header className="bg-white shadow-sm h-14 flex items-center px-6">
      <div className="flex justify-between items-center w-full">
        {/* Left side */}
        <h1 className="text-lg font-semibold text-gray-800">
          Parents Classroom
        </h1>

        {/* Right side */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <User size={16} className="mr-1" />
            Profile
          </Link>
          <Link
            to="/logout"
            className="flex items-center text-red-600 hover:text-red-800 transition-colors"
          >
            <LogOut size={16} className="mr-1" />
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}
