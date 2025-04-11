import React, { useState } from "react";
import {
  Bell,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  MessageSquare,
} from "lucide-react";

// Define the possible status types
type StatusType =
  | "applied"
  | "in-review"
  | "interview"
  | "offered"
  | "rejected";

// Define the application type
interface Application {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  status: StatusType;
  nextStep?: string;
  nextStepDate?: string;
  offerDetails?: {
    salary: string;
    deadline: string;
  };
  logo: string;
}

export default function ApplicationStatus() {
  const [filter, setFilter] = useState<"all" | StatusType>("all");

  const applications: Application[] = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      appliedDate: "Apr 3, 2025",
      status: "in-review",
      nextStep: "Technical Interview",
      nextStepDate: "Apr 15, 2025",
      logo: "/api/placeholder/64/64",
    },
    {
      id: 2,
      jobTitle: "UX Designer",
      company: "Creative Solutions",
      location: "Remote",
      appliedDate: "Mar 28, 2025",
      status: "interview",
      nextStep: "Final Interview",
      nextStepDate: "Apr 12, 2025",
      logo: "/api/placeholder/64/64",
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "Global Enterprises",
      location: "New York, NY",
      appliedDate: "Mar 20, 2025",
      status: "rejected",
      logo: "/api/placeholder/64/64",
    },
    {
      id: 4,
      jobTitle: "Backend Developer",
      company: "Data Systems",
      location: "Austin, TX",
      appliedDate: "Apr 5, 2025",
      status: "applied",
      logo: "/api/placeholder/64/64",
    },
    {
      id: 5,
      jobTitle: "Marketing Specialist",
      company: "Brand Forward",
      location: "Chicago, IL",
      appliedDate: "Mar 15, 2025",
      status: "offered",
      offerDetails: {
        salary: "$85,000",
        deadline: "Apr 18, 2025",
      },
      logo: "/api/placeholder/64/64",
    },
  ];

  const filteredApplications =
    filter === "all"
      ? applications
      : applications.filter((app) => app.status === filter);

  const getStatusBadge = (status: StatusType) => {
    switch (status) {
      case "applied":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock size={12} className="mr-1" /> Applied
          </span>
        );
      case "in-review":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FileText size={12} className="mr-1" /> In Review
          </span>
        );
      case "interview":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            <MessageSquare size={12} className="mr-1" /> Interview Stage
          </span>
        );
      case "offered":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" /> Offer Received
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle size={12} className="mr-1" /> Not Selected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Your Applications</h1>

        <div className="flex space-x-3 mt-4 md:mt-0">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "applied"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("applied")}
          >
            Applied
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "in-review"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("in-review")}
          >
            In Review
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              filter === "interview"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setFilter("interview")}
          >
            Interview
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {filteredApplications.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No applications found
            </h3>
            <p className="text-gray-500">
              {filter === "all"
                ? "You haven't applied to any jobs yet."
                : `You don't have any applications with '${filter}' status.`}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Job
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Applied
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Next Step
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={application.logo}
                            alt={application.company}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {application.jobTitle}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.company}
                          </div>
                          <div className="text-xs text-gray-400">
                            {application.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {application.appliedDate}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(application.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.status === "rejected" ? (
                        <span className="text-sm text-gray-500">N/A</span>
                      ) : application.status === "offered" &&
                        application.offerDetails ? (
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Respond to Offer
                          </div>
                          <div className="text-xs text-gray-500">
                            by {application.offerDetails.deadline}
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {application.nextStep || "Waiting for review"}
                          </div>
                          {application.nextStepDate && (
                            <div className="text-xs text-gray-500">
                              {application.nextStepDate}
                            </div>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {application.status === "offered" ? (
                        <div className="flex justify-end space-x-2">
                          <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                            Accept
                          </button>
                          <button className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors">
                            Decline
                          </button>
                        </div>
                      ) : application.status === "interview" ? (
                        <a
                          href="/schedule-interview"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Schedule Interview
                        </a>
                      ) : (
                        <a
                          href={`/application/${application.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          View Details
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Application Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-blue-600 font-semibold mb-1">
              Total Applications
            </div>
            <div className="text-3xl font-bold mb-2">{applications.length}</div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" />
              <span>Last 30 days</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-green-600 font-semibold mb-1">
              Interview Rate
            </div>
            <div className="text-3xl font-bold mb-2">60%</div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-green-500 font-medium">↑ 10%</span>
              <span className="ml-1">from last month</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-purple-600 font-semibold mb-1">
              Pending Response
            </div>
            <div className="text-3xl font-bold mb-2">2</div>
            <div className="flex items-center text-sm text-gray-500">
              <Bell size={14} className="mr-1" />
              <span>Set alerts for updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
