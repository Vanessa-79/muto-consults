import React from "react";
import {
  UsersIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const AdminDashboard = () => {
  // Sample data for the dashboard
  const stats = [
    {
      name: "Total Users",
      value: "1,256",
      icon: UsersIcon,
      change: "+12%",
      changeType: "increase",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Active Jobs",
      value: "83",
      icon: BriefcaseIcon,
      change: "+5%",
      changeType: "increase",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      name: "Revenue",
      value: "$24,350",
      icon: CreditCardIcon,
      change: "+18%",
      changeType: "increase",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Pending Applications",
      value: "42",
      icon: ClockIcon,
      change: "-7%",
      changeType: "decrease",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const recentJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Remote",
      applications: 28,
      status: "Active",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignHouse",
      location: "New York",
      applications: 15,
      status: "Active",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateLabs",
      location: "San Francisco",
      applications: 32,
      status: "Active",
    },
    {
      id: 4,
      title: "Backend Engineer",
      company: "CloudSystems",
      location: "Remote",
      applications: 18,
      status: "Active",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "GrowthGenius",
      location: "Chicago",
      applications: 7,
      status: "Active",
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="mt-1 text-gray-600">
          Welcome back! Here's what's happening with your job platform today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden bg-white rounded-lg shadow"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-md ${stat.bgColor}`}>
                  <stat.icon
                    className={`w-6 h-6 ${stat.iconColor}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 w-0 ml-5">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="flex items-center mt-4">
                {stat.changeType === "increase" ? (
                  <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <ArrowTrendingUpIcon className="w-4 h-4 text-red-500 transform rotate-180" />
                )}
                <span
                  className={`ml-1 text-sm ${
                    stat.changeType === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change} from last month
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Jobs Table */}
      <div className="overflow-hidden bg-white rounded-lg shadow">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recent Job Postings
          </h3>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Job Title
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Company
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Location
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-navy-700">
                          {job.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">
                          {job.company}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">
                          {job.location}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">
                          {job.applications}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircleIcon className="w-4 h-4 mr-1" />
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Activity and Tasks Section */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Activity */}
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">
                        New user registered
                      </h3>
                      <p className="text-sm text-gray-500">2h ago</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Emily Johnson registered as a job seeker
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">New job posted</h3>
                      <p className="text-sm text-gray-500">5h ago</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      TechCorp posted 'Full Stack Developer' position
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex space-x-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">Payment received</h3>
                      <p className="text-sm text-gray-500">8h ago</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      $299 received from DesignHouse for premium listing
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Pending Tasks
            </h3>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                      <span className="text-sm font-medium leading-none text-red-600">
                        1
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Review new applicants for Senior Dev position
                    </p>
                    <p className="text-sm text-gray-500">Due today</p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100">
                      <span className="text-sm font-medium leading-none text-yellow-600">
                        2
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Update pricing structure for premium listings
                    </p>
                    <p className="text-sm text-gray-500">Due in 2 days</p>
                  </div>
                </div>
              </li>
              <li className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                      <span className="text-sm font-medium leading-none text-green-600">
                        3
                      </span>
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Prepare monthly financial report
                    </p>
                    <p className="text-sm text-gray-500">Due in 5 days</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
