import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  companyLogo?: string;
}

// Mock data - in a real app, this would come from an API
const MOCK_JOB: Job = {
  id: "1",
  title: "Senior Software Engineer",
  company: "Tech Solutions Inc.",
  location: "New York, NY (Hybrid)",
  salary: "$120,000 - $150,000",
  type: "fulltime",
  description:
    "We are seeking a talented Senior Software Engineer to join our growing team. In this role, you will design, develop, and maintain software applications that power our platform. You will work closely with product managers, designers, and other engineers to deliver high-quality solutions.",
  requirements: [
    "Bachelor's degree in Computer Science or related field",
    "5+ years of experience in software development",
    "Strong proficiency in JavaScript/TypeScript and React",
    "Experience with Node.js and REST API design",
    "Knowledge of database systems (SQL and NoSQL)",
    "Familiarity with cloud services (AWS/Azure/GCP)",
  ],
  benefits: [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "Unlimited PTO policy",
    "Remote work flexibility",
    "401(k) matching",
    "Professional development budget",
  ],
  postedDate: "2025-03-15",
};

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch job details
    setIsLoading(true);
    setTimeout(() => {
      if (id === "1" || !id) {
        setJob(MOCK_JOB);
      } else {
        // Create a variation of the mock job for other IDs
        setJob({
          ...MOCK_JOB,
          id,
          title: `${MOCK_JOB.title} (ID: ${id})`,
        });
      }
      setIsLoading(false);
    }, 600);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return <div className="bg-red-50 text-red-600 p-4 rounded-md">{error}</div>;
  }

  if (!job) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">Job not found</h2>
        <p className="mt-2 text-gray-600">
          The job you're looking for doesn't exist.
        </p>
        <Link
          to="/jobseeker/search"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-md"
        >
          Back to Job Search
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm">
        <Link to="/jobseeker" className="text-blue-600 hover:underline">
          Dashboard
        </Link>
        <span className="mx-2">/</span>
        <Link to="/jobseeker/search" className="text-blue-600 hover:underline">
          Job Search
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{job.title}</span>
      </div>

      {/* Job Header */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
            <div className="mt-2">
              <p className="text-lg font-medium text-gray-700">{job.company}</p>
              <p className="text-gray-600">{job.location}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                {job.type === "fulltime"
                  ? "Full-time"
                  : job.type === "parttime"
                  ? "Part-time"
                  : job.type === "contract"
                  ? "Contract"
                  : job.type === "internship"
                  ? "Internship"
                  : "Remote"}
              </span>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                {job.salary}
              </span>
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800">
                {`Posted: ${new Date(job.postedDate).toLocaleDateString()}`}
              </span>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 flex flex-col space-y-3">
            <Link
              to={`/jobseeker/apply/${job.id}`}
              className="px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700"
            >
              Apply Now
            </Link>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
              Save Job
            </button>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">
          {job.description}
        </p>

        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-gray-700">
              {req}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc pl-5 space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Company Info */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">About {job.company}</h2>
        <p className="text-gray-700">
          {job.company} is a leading technology company specializing in
          innovative solutions for enterprise clients. With offices around the
          world, we are committed to creating products that transform how
          businesses operate. Our team consists of passionate individuals who
          thrive in a collaborative environment and are dedicated to solving
          complex problems.
        </p>
        <div className="mt-4">
          <a href="#" className="text-blue-600 hover:underline">
            Visit Company Website
          </a>
        </div>
      </div>

      {/* Similar Jobs */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border-b pb-4 last:border-0">
              <h3 className="font-medium text-lg text-blue-700">
                <Link to={`/jobseeker/job/${index + 2}`}>
                  {index === 0
                    ? "Frontend Developer"
                    : index === 1
                    ? "Full Stack Engineer"
                    : "DevOps Engineer"}
                </Link>
              </h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-600 text-sm">{job.location}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-gray-600 text-sm">Posted 3 days ago</span>
                <Link
                  to={`/jobseeker/payment/${index + 2}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
