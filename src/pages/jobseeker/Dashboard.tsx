/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import {
  ClipboardDocumentListIcon,
  CalendarIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const JobSeekerDashboard = () => {
  // Mock data for demonstration purposes
  const recentApplications = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "TechCorp",
      status: "Applied",
      date: "2025-04-08",
    },
    {
      id: 2,
      position: "UX Designer",
      company: "DesignHub",
      status: "Interview Scheduled",
      date: "2025-04-05",
    },
    {
      id: 3,
      position: "Project Manager",
      company: "AgileWorks",
      status: "Pending Payment",
      date: "2025-04-03",
    },
  ];

  const upcomingInterviews = [
    {
      id: 1,
      position: "UX Designer",
      company: "DesignHub",
      date: "2025-04-12",
      time: "10:00 AM",
    },
  ];

  const recommendedJobs = [
    {
      id: 1,
      position: "Senior Frontend Developer",
      company: "InnovateX",
      location: "Remote",
      salary: "$90K - $120K",
    },
    {
      id: 2,
      position: "UI/UX Designer",
      company: "CreativeMinds",
      location: "New York, NY",
      salary: "$80K - $100K",
    },
    {
      id: 3,
      position: "Product Manager",
      company: "SoftSolutions",
      location: "San Francisco, CA",
      salary: "$110K - $140K",
    },
  ];

  const stats = [
    {
      name: "Total Applications",
      value: "12",
      icon: ClipboardDocumentListIcon,
      color: "bg-blue-500",
    },
    {
      name: "Interviews Scheduled",
      value: "3",
      icon: CalendarIcon,
      color: "bg-green-500",
    },
    {
      name: "Active Applications",
      value: "5",
      icon: BriefcaseIcon,
      color: "bg-purple-500",
    },
    {
      name: "Pending Payments",
      value: "1",
      icon: CurrencyDollarIcon,
      color: "bg-orange-500",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-navy-700">
          Welcome Back, Jane!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your job search activities.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${stat.color}`}>
                  <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-navy-700">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Recent Applications */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h2 className="text-lg font-medium text-navy-700">
              Recent Applications
            </h2>
            <Link
              to="/jobseeker/status"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              View all
            </Link>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {recentApplications.map((application) => (
                <li key={application.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <BriefcaseIcon className="h-10 w-10 text-navy-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-navy-700">
                          {application.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {application.company}
                        </div>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          application.status === "Applied"
                            ? "bg-blue-100 text-blue-800"
                            : application.status === "Interview Scheduled"
                            ? "bg-green-100 text-green-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {application.status}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        {application.date}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
            <h2 className="text-lg font-medium text-navy-700">
              Upcoming Interviews
            </h2>
            <Link
              to="/jobseeker/schedule"
              className="text-sm font-medium text-orange-500 hover:text-orange-600"
            >
              View all
            </Link>
          </div>
          <div className="border-t border-gray-200">
            {upcomingInterviews.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {upcomingInterviews.map((interview) => (
                  <li key={interview.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <CalendarIcon className="h-10 w-10 text-navy-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-navy-700">
                            {interview.position}
                          </div>
                          <div className="text-sm text-gray-500">
                            {interview.company}
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex flex-col items-end">
                        <div className="text-sm text-gray-900">
                          {interview.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {interview.time}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-8">
                <ClockIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No upcoming interviews
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Apply for more jobs to schedule interviews.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="mt-5 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h2 className="text-lg font-medium text-navy-700">
            Recommended for You
          </h2>
          <Link
            to="/jobseeker/search"
            className="text-sm font-medium text-orange-500 hover:text-orange-600"
          >
            Browse all jobs
          </Link>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {recommendedJobs.map((job) => (
              <li key={job.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <Link to={`/jobseeker/jobs/${job.id}`} className="block">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <BriefcaseIcon className="h-10 w-10 text-navy-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-navy-700">
                          {job.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {job.company}
                        </div>
                        <div className="text-sm text-gray-500">
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0">
                      <div className="text-sm font-medium text-navy-700">
                        {job.salary}
                      </div>
                      <button className="mt-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        View Job
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
