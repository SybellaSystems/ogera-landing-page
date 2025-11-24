"use client";


import React, { useState, useRef, useEffect } from "react";
import { BellIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white h-16 shadow-sm flex items-center justify-between px-6 relative">
      {/* Left side (optional — you can add logo, breadcrumbs, or title here) */}
      <div className="text-gray-700 font-medium text-lg"></div>

      {/* Right side (notification + profile) */}
      <div className="flex items-center gap-6">
        {/* Notification icon */}
        <div className="relative cursor-pointer">
          <BellIcon className="h-6 w-6 text-gray-600 hover:text-gray-800 transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Avatar with dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center cursor-pointer border border-purple-200 hover:shadow-md transition"
          >
            <img
              src="https://i.pravatar.cc/100?img=3"
              alt="User"
              className="h-8 w-8 rounded-full"
            />
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                onClick={() => {
                  setIsDropdownOpen(false);
                  console.log("Go to Profile");
                  // navigate("/profile") or open modal
                }}
              >
                Profile
              </button>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                onClick={() => {
                  setIsDropdownOpen(false);
                  console.log("Logout clicked");
                  // add your logout logic here
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
