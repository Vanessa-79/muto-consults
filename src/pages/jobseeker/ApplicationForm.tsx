import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form schema
const applicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  resume: z.any().refine((file) => file?.length === 1, "Resume is required"),
  coverLetter: z.any().optional(),
  linkedin: z.string().url("Enter a valid URL").or(z.string().length(0)),
  portfolio: z.string().url("Enter a valid URL").or(z.string().length(0)),
  experience: z.enum(["0-1", "1-3", "3-5", "5-10", "10+"]),
  additionalInfo: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function ApplicationForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Mock job data
  const job = {
    id: id || "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "New York, NY",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      experience: "3-5",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setSubmitSuccess(true);

      // Navigate to success page after a delay
      setTimeout(() => {
        navigate("/jobseeker/application-status");
      }, 1500);
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="max-w-3xl mx-auto my-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Your application for {job.title} at {job.company} has been
            successfully submitted.
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 justify-center">
            <Link
              to="/jobseeker/application-status"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              View Application Status
            </Link>
            <Link
              to="/jobseeker/search"
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Continue Job Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-8">
      {/* Job Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Apply for Job</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
          <p className="text-gray-700">{job.company}</p>
          <p className="text-gray-600">{job.location}</p>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name*
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.firstName.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name*
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.lastName.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address*
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number*
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message?.toString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Resume & Cover Letter */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Resume & Cover Letter
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Resume* (PDF, DOCX, DOC)
                </label>
                <input
                  {...register("resume")}
                  type="file"
                  accept=".pdf,.docx,.doc"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.resume.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cover Letter (Optional)
                </label>
                <input
                  {...register("coverLetter")}
                  type="file"
                  accept=".pdf,.docx,.doc"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.coverLetter && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.coverLetter.message?.toString()}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  LinkedIn Profile (Optional)
                </label>
                <input
                  {...register("linkedin")}
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.linkedin && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.linkedin.message?.toString()}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Portfolio Website (Optional)
                </label>
                <input
                  {...register("portfolio")}
                  type="url"
                  placeholder="https://yourportfolio.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.portfolio && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.portfolio.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Years of Relevant Experience*
              </label>
              <select
                {...register("experience")}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="0-1">Less than 1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {errors.experience && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.experience.message?.toString()}
                </p>
              )}
            </div>

            <div className="mt-4">
              <label
                htmlFor="additionalInfo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Information (Optional)
              </label>
              <textarea
                {...register("additionalInfo")}
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Share anything else you'd like the employer to know about your application"
              ></textarea>
              {errors.additionalInfo && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.additionalInfo.message?.toString()}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
              <Link
                to={`/jobseeker/job/${id}`}
                className="px-6 py-2 border border-gray-300 rounded-md text-center hover:bg-gray-50"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Help Box */}
      <div className="bg-blue-50 p-6 rounded-lg mt-6">
        <h3 className="text-lg font-medium text-blue-800 mb-2">
          Application Tips
        </h3>
        <ul className="text-blue-700 space-y-2">
          <li>
            • Make sure your resume is up-to-date and tailored to this position
          </li>
          <li>• Include a personalized cover letter if possible</li>
          <li>• Double-check all information before submitting</li>
          <li>
            • Follow up with the employer if you don't hear back within two
            weeks
          </li>
        </ul>
      </div>
    </div>
  );
}
