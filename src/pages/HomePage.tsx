import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section - Modern and impactful */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="bg-navy-700 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center pt-20 pb-16 sm:pt-32 sm:pb-28">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Your Career Journey
              <span className="block text-orange-400">Starts Here</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-lg mx-auto">
              Muto Consults connects exceptional talent with industry-leading
              companies. Discover your perfect career match today.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Link
                  to="/signup"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - New addition */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
            <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Job Placements
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-navy-700">
                5,000+
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Client Companies
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-navy-700">
                200+
              </dd>
            </div>
            <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Candidate Success
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-navy-700">98%</dd>
            </div>
            <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Industries Served
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-navy-700">12</dd>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Improved layout */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Why Choose Muto Consults
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-navy-700 sm:text-4xl">
              Transforming Career Connections
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our comprehensive recruitment platform serves both job seekers and
              employers with innovative solutions.
            </p>
          </div>

          <div className="mt-12">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-12">
              {/* Feature 1 */}
              <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-700 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-navy-700">
                    For Job Seekers
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Access premium job listings, streamlined application
                    processes, and professional career coaching to advance your
                    career journey.
                  </p>
                  <ul className="mt-4 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Personalized job matches
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Interview preparation
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Career advancement tools
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-700 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-navy-700">
                    For Employers
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Post job openings, efficiently screen candidates, and
                    leverage our AI-powered matching system to find ideal
                    talent.
                  </p>
                  <ul className="mt-4 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Targeted candidate searches
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Automated screening
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Recruitment analytics
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-navy-700 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-navy-700">
                    Secure Platform
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our enterprise-grade security ensures your data is protected
                    with advanced encryption and privacy controls.
                  </p>
                  <ul className="mt-4 text-sm text-gray-500">
                    <li className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      End-to-end encryption
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      Verified employer accounts
                    </li>
                    <li className="flex items-center mt-1">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
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
                      GDPR compliant
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials - New section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-navy-700 sm:text-4xl sm:tracking-tight">
              Success Stories
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-700 font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-navy-700">
                    John Smith
                  </h4>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Muto Consults helped me land my dream job at a leading tech
                company. Their career coaching and interview preparation made
                all the difference."
              </p>
              <div className="mt-4 flex text-orange-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-700 font-bold">EM</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-navy-700">
                    Emma Miller
                  </h4>
                  <p className="text-sm text-gray-500">HR Director</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As an employer, Muto Consults has consistently delivered
                exceptional candidates that match our company culture and
                technical requirements."
              </p>
              <div className="mt-4 flex text-orange-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-navy-700 font-bold">AK</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-navy-700">
                    Alex Kim
                  </h4>
                  <p className="text-sm text-gray-500">Marketing Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "After six months of job searching, Muto Consults connected me
                with three great opportunities within two weeks. I couldn't be
                happier with my new role."
              </p>
              <div className="mt-4 flex text-orange-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Focus on action */}
      <div className="bg-navy-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to advance your career?</span>
            <span className="block text-orange-400">
              Join Muto Consults today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-orange-50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Trusted By Industry Leaders
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-navy-700 sm:text-4xl">
              Our Corporate Partners
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            {/* Partner logos */}
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 1
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 2
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 3
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 4
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 5
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-12 text-gray-400 fill-current">
                <svg
                  className="h-full"
                  viewBox="0 0 80 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="24" fill="currentColor" />
                  <text
                    x="40"
                    y="14"
                    fontFamily="Arial"
                    fontSize="8"
                    fill="white"
                    textAnchor="middle"
                  >
                    PARTNER 6
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Common Questions
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-navy-700 sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow overflow-hidden rounded-md mb-4">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-navy-700">
                  How does Muto Consults work?
                </h3>
                <p className="mt-2 text-gray-600">
                  Our platform connects job seekers with potential employers
                  using advanced AI matching. We analyze skills, experience, and
                  company culture fit to create optimal connections for both
                  parties.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow overflow-hidden rounded-md mb-4">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-navy-700">
                  Is the service free for job seekers?
                </h3>
                <p className="mt-2 text-gray-600">
                  Yes, our service is completely free for job seekers. We offer
                  premium services for enhanced support, but our basic matching
                  and application services are always free of charge.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow overflow-hidden rounded-md mb-4">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-navy-700">
                  How do employers benefit from using Muto Consults?
                </h3>
                <p className="mt-2 text-gray-600">
                  Employers save time and resources by receiving pre-screened,
                  qualified candidates who match their specific requirements.
                  Our platform reduces hiring time by an average of 35% and
                  improves retention rates.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow overflow-hidden rounded-md">
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-navy-700">
                  What industries do you serve?
                </h3>
                <p className="mt-2 text-gray-600">
                  We currently serve 12 major industries including technology,
                  healthcare, finance, education, manufacturing, retail,
                  hospitality, marketing, legal services, engineering,
                  construction, and non-profit sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;