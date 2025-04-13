import { useState } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  // State for job listings and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Sample job data - would come from API in real application
  const jobListings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechVision Inc.",
      location: "New York, NY",
      type: "Full-time",
      category: "Technology",
      salary: "$120,000 - $150,000",
      posted: "3 days ago",
      logo: "/api/placeholder/64/64",
      description:
        "We are looking for an experienced Software Engineer to join our innovative team developing cutting-edge applications.",
      requirements: [
        "5+ years of experience",
        "React & Node.js expertise",
        "Bachelor's degree in Computer Science",
      ],
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Global Brands",
      location: "Chicago, IL",
      type: "Full-time",
      category: "Marketing",
      salary: "$85,000 - $105,000",
      posted: "1 day ago",
      logo: "/api/placeholder/64/64",
      description:
        "Drive our marketing strategy and lead a team of creative professionals to expand our market reach.",
      requirements: [
        "3+ years in marketing management",
        "Digital marketing experience",
        "MBA preferred",
      ],
    },
    {
      id: 3,
      title: "Financial Analyst",
      company: "Capital Finance",
      location: "Boston, MA",
      type: "Full-time",
      category: "Finance",
      salary: "$70,000 - $90,000",
      posted: "1 week ago",
      logo: "/api/placeholder/64/64",
      description:
        "Analyze financial data and provide insights to support strategic business decisions.",
      requirements: [
        "Financial modeling expertise",
        "CFA certification",
        "Strong analytical skills",
      ],
    },
    {
      id: 4,
      title: "Graphic Designer",
      company: "Creative Solutions",
      location: "Remote",
      type: "Contract",
      category: "Design",
      salary: "$40 - $60 per hour",
      posted: "2 days ago",
      logo: "/api/placeholder/64/64",
      description:
        "Create visually stunning designs for digital and print media for our diverse client base.",
      requirements: [
        "Adobe Creative Suite proficiency",
        "Strong portfolio",
        "3+ years experience",
      ],
    },
    {
      id: 5,
      title: "Project Manager",
      company: "Build Solutions",
      location: "Denver, CO",
      type: "Full-time",
      category: "Management",
      salary: "$90,000 - $110,000",
      posted: "5 days ago",
      logo: "/api/placeholder/64/64",
      description:
        "Lead cross-functional teams to deliver complex projects on time and within budget.",
      requirements: [
        "PMP certification",
        "5+ years in project management",
        "Strong communication skills",
      ],
    },
    {
      id: 6,
      title: "Customer Support Specialist",
      company: "Service Plus",
      location: "Austin, TX",
      type: "Part-time",
      category: "Customer Service",
      salary: "$20 - $25 per hour",
      posted: "Just now",
      logo: "/api/placeholder/64/64",
      description:
        "Provide exceptional support to customers via phone, email, and chat platforms.",
      requirements: [
        "Customer service experience",
        "Problem-solving skills",
        "Clear communication",
      ],
    },
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationFilter === "" || job.location.includes(locationFilter);
    const matchesCategory =
      categoryFilter === "" || job.category === categoryFilter;
    const matchesType = typeFilter === "" || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesCategory && matchesType;
  });

  // Extract unique values for filters
  const locations = [...new Set(jobListings.map((job) => job.location))];
  const categories = [...new Set(jobListings.map((job) => job.category))];
  const types = [...new Set(jobListings.map((job) => job.type))];

  // Handle job application or view details for non-logged-in users
  const handleJobAction = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowLoginPrompt(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section - Jobs Banner */}
      <div className="bg-navy-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight">
                Discover Your Next Career Opportunity
              </h1>
              <p className="mt-3 text-xl text-gray-300">
                Browse through our curated selection of jobs from
                industry-leading companies
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="#"
                onClick={handleJobAction}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
              >
                Post a Job
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search Box */}
            <div className="flex-1 max-w-lg">
              <label htmlFor="search" className="sr-only">
                Search Jobs
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Search for jobs, companies, or keywords"
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                {types.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Listing Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy-700">
              {filteredJobs.length} Jobs Available
            </h2>
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded object-cover"
                          src={job.logo}
                          alt={`${job.company} logo`}
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-navy-700 hover:text-orange-500 transition-colors duration-300">
                            {job.title}
                          </h3>
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            {job.type}
                          </span>
                        </div>
                        <div className="mt-1">
                          <div className="text-sm text-gray-500">
                            <span className="font-medium text-navy-700">
                              {job.company}
                            </span>{" "}
                            • {job.location}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            Salary: {job.salary}
                          </div>
                        </div>
                        <p className="mt-3 text-gray-600">{job.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Posted {job.posted}
                          </span>
                          <div className="flex space-x-3">
                            <a
                              href="#"
                              onClick={handleJobAction}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-navy-700 bg-gray-200 hover:bg-gray-300 transition duration-300"
                            >
                              View Details
                            </a>
                            <a
                              href="#"
                              onClick={handleJobAction}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
                            >
                              Apply Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No jobs found
                </h3>
                <p className="mt-1 text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>

          {/* Pagination (simplified for now) */}
          {filteredJobs.length > 0 && (
            <div className="mt-12 flex items-center justify-center">
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-orange-50 text-sm font-medium text-orange-600 hover:bg-orange-100"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to take the next step in your career?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Create an account to apply for jobs, save your favorites, and get
              personalized recommendations.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
                >
                  Sign Up Now
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-500 bg-white hover:bg-gray-50 transition duration-300"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={() => setShowLoginPrompt(false)}
            ></div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                  <svg
                    className="h-6 w-6 text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-navy-700"
                    id="modal-title"
                  >
                    Sign in required
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You need to be logged in to view details or apply for
                      jobs. Create an account to access all features of Muto
                      Consults.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <Link
                  to="/signup"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none sm:col-start-2 sm:text-sm"
                >
                  Sign up
                </Link>
                <Link
                  to="/login"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Log in
                </Link>
              </div>
              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setShowLoginPrompt(false)}
                >
                  Continue browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
