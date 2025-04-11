import React, { useState } from "react";
import {
  Search,
  Calendar,
  ChevronDown,
  Filter,
  Download,
  PieChart,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  User,
} from "lucide-react";

// Define type for application status
type ApplicationStatus =
  | "applied"
  | "in-review"
  | "interview"
  | "offered"
  | "rejected";

// Define interface for application
interface Application {
  id: number;
  jobTitle: string;
  company: string;
  location: string;
  appliedDate: string;
  status: ApplicationStatus;
  logo: string;
  accepted?: boolean;
}

export default function ApplicationHistory() {
  const [filterYear, setFilterYear] = useState("All time");
  const [filterStatus, setFilterStatus] = useState("All status");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  // Add state for controlling dropdown visibility
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);

  const years = ["All time", "2025", "2024", "2023"];
  const statuses = [
    "All status",
    "Applied",
    "In Review",
    "Interview",
    "Offer",
    "Rejected",
  ];

  const applications: Application[] = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      appliedDate: "2025-04-03",
      status: "in-review",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 2,
      jobTitle: "UX Designer",
      company: "Creative Solutions",
      location: "Remote",
      appliedDate: "2025-03-28",
      status: "interview",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "Global Enterprises",
      location: "New York, NY",
      appliedDate: "2025-03-20",
      status: "rejected",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 4,
      jobTitle: "Backend Developer",
      company: "Data Systems",
      location: "Austin, TX",
      appliedDate: "2025-04-05",
      status: "applied",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 5,
      jobTitle: "Marketing Specialist",
      company: "Brand Forward",
      location: "Chicago, IL",
      appliedDate: "2025-03-15",
      status: "offered",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 6,
      jobTitle: "Mobile Developer",
      company: "App Solutions",
      location: "Seattle, WA",
      appliedDate: "2024-12-10",
      status: "rejected",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 7,
      jobTitle: "Data Analyst",
      company: "Analytics Pro",
      location: "Remote",
      appliedDate: "2024-11-05",
      status: "rejected",
      logo: "/api/placeholder/48/48",
    },
    {
      id: 8,
      jobTitle: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Boston, MA",
      appliedDate: "2024-10-20",
      status: "offered",
      accepted: true,
      logo: "/api/placeholder/48/48",
    },
  ];

  // Filter applications
  const filteredApplications = applications.filter((app) => {
    // Filter by year
    if (filterYear !== "All time" && !app.appliedDate.includes(filterYear)) {
      return false;
    }

    // Filter by status
    if (filterStatus !== "All status") {
      const status = filterStatus.toLowerCase();
      if (status === "offer" && app.status !== "offered") return false;
      if (status === "rejected" && app.status !== "rejected") return false;
      if (status === "applied" && app.status !== "applied") return false;
      if (status === "in review" && app.status !== "in-review") return false;
      if (status === "interview" && app.status !== "interview") return false;
    }

    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        app.jobTitle.toLowerCase().includes(term) ||
        app.company.toLowerCase().includes(term) ||
        app.location.toLowerCase().includes(term)
      );
    }

    return true;
  });

  // Sort applications
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (sortBy === "date") {
      return sortOrder === "asc"
        ? new Date(a.appliedDate).getTime() - new Date(b.appliedDate).getTime()
        : new Date(b.appliedDate).getTime() - new Date(a.appliedDate).getTime();
    } else if (sortBy === "company") {
      return sortOrder === "asc"
        ? a.company.localeCompare(b.company)
        : b.company.localeCompare(a.company);
    } else if (sortBy === "title") {
      return sortOrder === "asc"
        ? a.jobTitle.localeCompare(b.jobTitle)
        : b.jobTitle.localeCompare(a.jobTitle);
    }
    return 0;
  });

  const toggleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const getStatusBadge = (status: ApplicationStatus) => {
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
            <User size={12} className="mr-1" /> Interview
          </span>
        );
      case "offered":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" /> Offer
          </span>
        );
      case "rejected":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle size={12} className="mr-1" /> Rejected
          </span>
        );
      default:
        return null;
    }
  };

  const calculateMetrics = () => {
    const total = applications.length;
    const interviewed = applications.filter(
      (app) =>
        app.status === "interview" ||
        app.status === "offered" ||
        (app.status === "rejected" && Math.random() > 0.5) // Just for demo purposes
    ).length;
    const offers = applications.filter(
      (app) => app.status === "offered"
    ).length;
    const rejected = applications.filter(
      (app) => app.status === "rejected"
    ).length;
    const pending = total - offers - rejected;

    return {
      total,
      interviewed,
      interviewRate: Math.round((interviewed / total) * 100),
      offers,
      offerRate: interviewed > 0 ? Math.round((offers / interviewed) * 100) : 0,
      pending,
    };
  };

  const metrics = calculateMetrics();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Application History
        </h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <Download size={16} className="mr-2" />
            Export History
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            <PieChart size={16} className="mr-2" />
            View Analytics
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">
              Total Applications
            </h3>
            <span className="p-2 bg-blue-100 rounded-full">
              <FileText size={16} className="text-blue-600" />
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{metrics.total}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <TrendingUp size={16} className="mr-1 text-green-500" />
            <span>12% increase from last year</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">
              Interview Rate
            </h3>
            <span className="p-2 bg-purple-100 rounded-full">
              <User size={16} className="text-purple-600" />
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {metrics.interviewRate}%
          </p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>Based on all applications</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">Offer Rate</h3>
            <span className="p-2 bg-green-100 rounded-full">
              <CheckCircle size={16} className="text-green-600" />
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">
            {metrics.offerRate}%
          </p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>Based on interviews</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-gray-500 text-sm font-medium">
              Pending Response
            </h3>
            <span className="p-2 bg-yellow-100 rounded-full">
              <Clock size={16} className="text-yellow-600" />
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-800">{metrics.pending}</p>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Calendar size={16} className="mr-1" />
            <span>Applications in progress</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <button
                  className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
                >
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-500" />
                    {filterYear}
                  </span>
                  <ChevronDown size={16} className="ml-2" />
                </button>
                <div
                  id="yearDropdown"
                  className={`${
                    yearDropdownOpen ? "" : "hidden"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {years.map((year) => (
                      <button
                        key={year}
                        className={`${
                          filterYear === year
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                        } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
                        onClick={() => {
                          setFilterYear(year);
                          setYearDropdownOpen(false);
                        }}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <button
                  className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
                >
                  <span className="flex items-center">
                    <Filter size={16} className="mr-2 text-gray-500" />
                    {filterStatus}
                  </span>
                  <ChevronDown size={16} className="ml-2" />
                </button>
                <div
                  id="statusDropdown"
                  className={`${
                    statusDropdownOpen ? "" : "hidden"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {statuses.map((status) => (
                      <button
                        key={status}
                        className={`${
                          filterStatus === status
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700"
                        } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100`}
                        onClick={() => {
                          setFilterStatus(status);
                          setStatusDropdownOpen(false);
                        }}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("company")}
                >
                  <div className="flex items-center">
                    Company
                    {sortBy === "company" && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transform ${
                          sortOrder === "asc" ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => toggleSort("date")}
                >
                  <div className="flex items-center">
                    Date Applied
                    {sortBy === "date" && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transform ${
                          sortOrder === "asc" ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedApplications.length > 0 ? (
                sortedApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
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
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {application.company}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {application.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(application.appliedDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(application.status)}
                      {application.accepted && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Accepted
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Notes
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No applications found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium">{sortedApplications.length}</span> of{" "}
            <span className="font-medium">{applications.length}</span>{" "}
            applications
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 text-center text-sm text-gray-500">
        <p>
          Need help with your job applications? Check out our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            resources
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
