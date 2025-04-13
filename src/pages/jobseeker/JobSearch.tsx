import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  keyword: z.string().optional(),
  location: z.string().optional(),
  jobType: z
    .enum(["fulltime", "parttime", "contract", "internship", "remote", ""])
    .optional(),
  salary: z.enum(["any", "under50k", "50kto100k", "over100k", ""]).optional(),
});

type SearchForm = z.infer<typeof searchSchema>;

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  postedDate: string;
}

const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
    salary: "$120,000 - $150,000",
    type: "fulltime",
    description:
      "We are looking for an experienced software engineer to join our team.",
    postedDate: "2025-03-15",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Digital Innovations",
    location: "San Francisco, CA",
    salary: "$140,000 - $180,000",
    type: "fulltime",
    description: "Leading product development for our flagship application.",
    postedDate: "2025-03-20",
  },
  {
    id: "3",
    title: "Marketing Specialist",
    company: "Brand Elevate",
    location: "Remote",
    salary: "$70,000 - $90,000",
    type: "remote",
    description: "Create and implement marketing strategies for our clients.",
    postedDate: "2025-03-25",
  },
];

export default function JobSearch() {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      keyword: "",
      location: "",
      jobType: "",
      salary: "",
    },
  });

  const onSubmit = (data: SearchForm) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Filter the jobs based on search criteria (this is a simple example)
      const filteredJobs = MOCK_JOBS.filter((job) => {
        if (
          data.keyword &&
          !job.title.toLowerCase().includes(data.keyword.toLowerCase())
        )
          return false;
        if (
          data.location &&
          !job.location.toLowerCase().includes(data.location.toLowerCase())
        )
          return false;
          

          if (data.jobType && job.type !== data.jobType) return false;
        // Add more filters as needed
        return true;
      });

      setJobs(filteredJobs);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Dream Job</h1>

      {/* Search Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div>
            <label
              htmlFor="keyword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Keywords
            </label>
            <input
              {...register("keyword")}
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Job title or keywords"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              {...register("location")}
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="City, state, or remote"
            />
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Job Type
            </label>
            <select
              {...register("jobType")}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Any</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Salary Range
            </label>
            <select
              {...register("salary")}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Any</option>
              <option value="under50k">Under $50,000</option>
              <option value="50kto100k">$50,000 - $100,000</option>
              <option value="over100k">Over $100,000</option>
            </select>
          </div>

          <div className="md:col-span-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? "Searching..." : "Search Jobs"}
            </button>
          </div>
        </form>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">
          {jobs.length} Jobs Found
        </h2>

        {isLoading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Searching for jobs...</p>
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-10 text-gray-600">
            <p>
              No jobs found matching your criteria. Try adjusting your search.
            </p>
          </div>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{job.company}</p>
                  <p className="text-gray-600 mt-1">{job.location}</p>
                  <p className="text-gray-700 mt-2">{job.salary}</p>
                </div>
                <div className="mt-4 md:mt-0">
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
                  <p className="text-sm text-gray-500 mt-2">
                    Posted: {new Date(job.postedDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{job.description}</p>
              <div className="mt-4 flex space-x-3">
  <a
    href={`/jobseeker/payment/${job.id}`}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    View Details
  </a>
  <a
    href={`/jobseeker/payment/${job.id}`} 
    className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
  >
    Quick Apply
  </a>
</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
