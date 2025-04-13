import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const applicants = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "pending",
    appliedDate: "2023-05-20",
    resume: "john_doe_resume.pdf",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "reviewed",
    appliedDate: "2023-05-18",
    resume: "jane_smith_resume.pdf",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert@example.com",
    status: "rejected",
    appliedDate: "2023-05-15",
    resume: "robert_johnson_resume.pdf",
  },
];

export default function ReviewApplicants() {
  const { jobId } = useParams();
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const filteredApplicants =
    selectedStatus === "all"
      ? applicants
      : applicants.filter((app) => app.status === selectedStatus);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Applicants for Job #{jobId}
          </h1>
          <p className="text-gray-600">Frontend Developer Position</p>
        </div>
        <Link
          to="/employer/manage-jobs"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Back to Jobs
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <h2 className="text-lg font-medium text-gray-900">
            Filter by status:
          </h2>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="all">All Applicants</option>
            <option value="pending">Pending Review</option>
            <option value="reviewed">Reviewed</option>
            <option value="rejected">Rejected</option>
            <option value="hired">Hired</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applied Date
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
                  Resume
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
              {filteredApplicants.map((applicant) => (
                <tr key={applicant.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {applicant.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {applicant.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {applicant.appliedDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        applicant.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : applicant.status === "reviewed"
                          ? "bg-blue-100 text-blue-800"
                          : applicant.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={`/resumes/${applicant.resume}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link
                      to={`/employer/schedule-interview/${applicant.id}`}
                      className="text-green-600 hover:text-green-900"
                    >
                      Interview
                    </Link>
                    <button className="text-blue-600 hover:text-blue-900">
                      Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
