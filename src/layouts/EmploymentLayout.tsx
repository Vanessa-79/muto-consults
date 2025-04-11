import React from "react";
import { Outlet } from "react-router-dom";
import { BriefcaseIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";

const EmployerLayout: React.FC = () => {
  const navigation = [
    { name: "Dashboard", href: "/employer", icon: HomeIcon },
    { name: "Post Jobs", href: "/employer/post-job", icon: BriefcaseIcon },
    { name: "Applicants", href: "/employer/applicants", icon: UserIcon },
    { name: "Profile", href: "/employer/profile", icon: UserIcon },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Employer Portal</h2>
        </div>
        <nav className="mt-5">
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700"
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployerLayout;