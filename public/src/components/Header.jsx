// src/components/Header.jsx

import { Link, NavLink } from 'react-router-dom';

export default function Header({ siteName }) {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          {siteName}
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/lectures"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-500'
            }
          >
            Lectures
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'hover:text-blue-500'
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
