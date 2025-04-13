import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  ChartPieIcon,
  BriefcaseIcon,
  UsersIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const AdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: ChartPieIcon },
    { name: "Jobs", href: "/admin/admin-jobs", icon: BriefcaseIcon },
    { name: "Users", href: "/admin/admin-users", icon: UsersIcon },
    { name: "Payments", href: "/admin/admin-payments", icon: CreditCardIcon },
    { name: "Settings", href: "/admin/admin-settings", icon: Cog6ToothIcon },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative flex flex-col w-full max-w-xs pt-5 pb-4 bg-navy-700">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <img src="/logo.svg" alt="Muto Consults" className="w-auto h-8" />
              <span className="ml-3 text-xl font-medium text-white">
                Muto Admin
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 h-0 mt-5 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "bg-navy-800 text-white"
                        : "text-gray-300 hover:bg-navy-600 hover:text-white"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${
                        isActive
                          ? "text-orange-400"
                          : "text-gray-400 group-hover:text-gray-300"
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-1 min-h-0 bg-navy-700">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-navy-800">
              <img src="/logo.svg" alt="Muto Consults" className="w-auto h-8" />
              <span className="ml-3 text-xl font-medium text-white">
                Muto Admin
              </span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? "bg-navy-800 text-white"
                          : "text-gray-300 hover:bg-navy-600 hover:text-white"
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive
                            ? "text-orange-400"
                            : "text-gray-400 group-hover:text-gray-300"
                        }`}
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="relative z-10 flex flex-shrink-0 h-16 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          <div className="flex justify-between flex-1 px-4">
            <div className="flex flex-1">
              <h1 className="text-2xl font-semibold text-navy-700 self-center">
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center ml-4 md:ml-6">
              <button className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none">
                <BellIcon className="w-6 h-6" />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-300"
                      src="/admin-avatar.png"
                      alt="Admin avatar"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="text-base font-medium text-gray-800">
                      Admin User
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      admin@mutoconsults.com
                    </div>
                  </div>
                  <Link
                    to="/login"
                    className="p-1 text-gray-400 hover:text-gray-500"
                  >
                    <ArrowRightOnRectangleIcon className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
