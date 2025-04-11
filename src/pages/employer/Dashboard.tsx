import React from "react";
import {
  ChartBarIcon,
  BriefcaseIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Dashboard: React.FC = () => {
  const stats = [
    { name: "Active Jobs", value: "5", icon: BriefcaseIcon },
    { name: "Total Applicants", value: "25", icon: UserIcon },
    { name: "Interviews Scheduled", value: "8", icon: ChartBarIcon },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Employer Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-md bg-blue-500 bg-opacity-10">
                <stat.icon className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <h2 className="text-sm font-medium text-gray-500">
                  {stat.name}
                </h2>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-4">Recent Applications</h2>
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Front-end Developer
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Apr 10, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    New
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                <td className="px-6 py-4 whitespace-nowrap">UI/UX Designer</td>
                <td className="px-6 py-4 whitespace-nowrap">Apr 9, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    In Review
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
