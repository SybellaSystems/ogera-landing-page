"use client";


import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const role = useSelector((state: any) => state.auth.role);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="h-screen w-64 bg-[#0F172A] text-gray-300 flex flex-col fixed left-0 top-0 overflow-y-auto scrollbar-hide rounded-tr-3xl rounded-br-3xl shadow-lg">

      {/* Header / Logo */}
      <div className="flex items-center gap-3 p-6">
        <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
          O
        </div>
        <div>
          <h2 className="text-white font-semibold text-lg">Ogera</h2>
          <p className="text-xs text-gray-400 uppercase">{role}</p>
        </div>
      </div>

      
      {/* ========================= ADMIN MENU ========================= */}
      {role === "admin" && (
        <nav className="flex-1 p-4 space-y-2">

          {/* Dashboard */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <HomeIcon className="h-5 w-5" />
            <span>Dashboard</span>
          </div>

          {/* Users */}
          <div>
            <div
              className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
              onClick={() => toggleMenu("users")}
            >
              <div className="flex items-center gap-3">
                <UsersIcon className="h-5 w-5" />
                <span>Users</span>
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openMenu === "users" ? "rotate-180" : ""
                }`}
              />
            </div>

            {openMenu === "users" && (
              <ul className="pl-11 space-y-1 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">All Users</li>
                <li className="hover:text-white cursor-pointer">Students</li>
                <li className="hover:text-white cursor-pointer">Employers</li>
                <li className="hover:text-white cursor-pointer">Pending Approval</li>
                <li className="hover:text-white cursor-pointer">Suspended</li>
              </ul>
            )}
          </div>

          {/* Jobs */}
          <div>
            <div
              className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
              onClick={() => toggleMenu("jobs")}
            >
              <div className="flex items-center gap-3">
                <BriefcaseIcon className="h-5 w-5" />
                <span>Jobs</span>
              </div>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  openMenu === "jobs" ? "rotate-180" : ""
                }`}
              />
            </div>

            {openMenu === "jobs" && (
              <ul className="pl-11 space-y-1 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">All Jobs</li>
                <li className="hover:text-white cursor-pointer">Active Jobs</li>
                <li className="hover:text-white cursor-pointer">Completed</li>
                <li className="hover:text-white cursor-pointer">Pending Approval</li>
              </ul>
            )}
          </div>

          {/* Disputes */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <span>Disputes</span>
          </div>

          {/* Analytics */}
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <ChartBarIcon className="h-5 w-5" />
            <span>Analytics</span>
          </div>
        </nav>
      )}

      {/* ========================= STUDENT MENU ========================= */}
      {role === "student" && (
        <nav className="flex-1 p-4 space-y-2">

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <HomeIcon className="h-5 w-5" />
            <span>Student Dashboard</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <BriefcaseIcon className="h-5 w-5" />
            <span>My Jobs</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <ChartBarIcon className="h-5 w-5" />
            <span>Earnings</span>
          </div>

        </nav>
      )}

      {/* ========================= EMPLOYER MENU ========================= */}
      {role === "employer" && (
        <nav className="flex-1 p-4 space-y-2">

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <HomeIcon className="h-5 w-5" />
            <span>Employer Dashboard</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <BriefcaseIcon className="h-5 w-5" />
            <span>Post Jobs</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <UsersIcon className="h-5 w-5" />
            <span>Applicants</span>
          </div>

        </nav>
      )}
    </div>
  );
};

export default Sidebar;
