import React from 'react';
import { FaSearch, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

// components/Navbar.tsx
const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-700 text-slate-950n p-4 flex justify-between items-center">
      {/* Search area */}
      <div className="flex items-center bg-gray-600 rounded-2xl">
        <div className="mr-4 px-2 p-3">
          <FaSearch className="text-white-600" />
        </div>
        {/* Add your search input here */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-600 px-1 py-1 rounded-2xl focus:outline-none"
        />
      </div>

      {/* User profile and dropdown */}
      <div className="flex items-center">
        {/* User profile image */}
        <div className="mr-4">
          {/* Replace with your user profile image */}
          <FaUser className="text-white-600" />
        </div>
        {/* Dropdown icon and options */}
        <div className="relative">
          <div className="cursor-pointer">
            {/* Replace with your preferred dropdown icon */}
            <svg
              className="text-white-600 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* Dropdown content */}
          <div className="hidden absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2">
            <a href="#" className="block px-4 py-2 text-black-800 hover:bg-gray-200">
              Settings
            </a>
            <a href="#" className="block px-4 py-2 text-black-800 hover:bg-gray-200">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
