import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div
        className={`bg-navy-700 py-20 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Watermark */}
          <div className="absolute top-0 right-0 opacity-5 -mr-20 mt-10">
            <svg width="350" height="350" viewBox="0 0 100 100">
              <path
                d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z"
                fill="currentColor"
                className="text-orange-500"
              />
              <text
                x="50"
                y="55"
                fontFamily="Arial"
                fontSize="8"
                fill="white"
                textAnchor="middle"
              >
                MUTO
              </text>
            </svg>
          </div>

          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                About Muto Consults
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                Providing personalized consulting solutions to connect
                exceptional talent with the right opportunities across East
                Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-20 bg-gradient-to-b from-navy-700 to-transparent opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission Section */}
          <div
            ref={addToRefs}
            className="bg-white shadow-lg rounded-lg p-8 mb-12 opacity-0 transform translate-y-10 transition duration-1000"
          >
            <h2 className="text-3xl font-bold text-navy-700 mb-6 border-b border-orange-200 pb-3">
              Our Mission
            </h2>
            <div className="md:flex md:items-center">
              <div className="md:w-2/3 pr-8">
                <p className="text-lg text-gray-700 mb-4">
                  At Muto Consults, we strive to provide personalized consulting
                  solutions that meet client needs across various regional
                  business environments, with a focus on aligning diverse
                  talents with appropriate opportunities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We are committed to empowering East African businesses and
                  professionals by providing relevant tools, competence, and
                  capacity to meet growing market demands and contribute to the
                  region's economic growth.
                </p>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 text-white text-center shadow-lg">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p>
                  To be the leading provider of human resource and business
                  solutions, creating real value for clients and candidates
                  across East Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div
            ref={addToRefs}
            className="opacity-0 transform translate-y-10 transition duration-1000 delay-300"
          >
            <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Recruitment & Selection",
                  description:
                    "We help organizations find and select the best talent by identifying, screening and shortlisting qualified candidates for permanent, contract, or temporary positions.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "HR Consultancy",
                  description:
                    "Our HR consultancy services provide expert guidance to help organizations develop effective HR policies, procedures, and strategies tailored to their specific needs.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Training & Development",
                  description:
                    "We design and deliver specialized training programs that enhance employee skills, boost productivity, and contribute to organizational growth.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: "Executive Search",
                  description:
                    "We conduct comprehensive searches to identify and recruit top-tier leadership talent for executive and board-level positions.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Payroll Management",
                  description:
                    "Our payroll services ensure accurate and timely processing of employee salaries, taxes, and benefits, reducing administrative burden for our clients.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Succession Planning",
                  description:
                    "We help organizations prepare for the future by identifying and developing internal talent to fill key positions when they become vacant.",
                  icon: (
                    <svg
                      className="w-10 h-10 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div
            ref={addToRefs}
            className="mt-16 opacity-0 transform translate-y-10 transition duration-1000 delay-600"
          >
            <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">
              Our Approach
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-4">
                    For Employers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We take time to understand your business, culture, and
                    specific needs before recommending solutions. Our
                    collaborative approach ensures we deliver candidates who not
                    only have the right skills but also fit your organizational
                    culture.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Comprehensive needs assessment",
                      "Tailored recruitment strategies",
                      "Rigorous candidate screening",
                      "Cultural fit evaluation",
                      "Ongoing support and follow-up",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-4">
                    For Job Seekers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We help professionals at all career stages find
                    opportunities that match their skills, aspirations, and
                    values. Our consultants provide guidance and support
                    throughout the job search process.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Career assessment and guidance",
                      "Resume and interview preparation",
                      "Access to hidden job opportunities",
                      "Negotiation support",
                      "Long-term career development advice",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div
            ref={addToRefs}
            className="mt-16 opacity-0 transform translate-y-10 transition duration-1000 delay-900"
          >
            <div className="bg-navy-700 text-white p-10 rounded-lg shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
                <svg width="300" height="300" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="currentColor"
                    className="text-orange-500"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-bold mb-8 relative">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-y-8 gap-x-12 relative">
                {[
                  {
                    title: "Integrity",
                    description:
                      "We adhere to high ethical standards in all our interactions, building trust with our clients and candidates.",
                  },
                  {
                    title: "Excellence",
                    description:
                      "We are committed to delivering exceptional service and continuous improvement in everything we do.",
                  },
                  {
                    title: "Partnership",
                    description:
                      "We build collaborative relationships with our clients, working together to achieve mutual success.",
                  },
                  {
                    title: "Innovation",
                    description:
                      "We embrace creative approaches and new technologies to provide effective solutions to complex challenges.",
                  },
                ].map((value, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-orange-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Regional Focus */}
          <div
            ref={addToRefs}
            className="mt-16 opacity-0 transform translate-y-10 transition duration-1000 delay-1000"
          >
            <h2 className="text-3xl font-bold text-navy-700 mb-8 text-center">
              Our Regional Focus
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Muto Consults specializes in providing HR and recruitment
                solutions across East Africa, with a deep understanding of the
                regional business landscape and talent market.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    country: "Kenya",
                    description:
                      "Our headquarters and primary market, where we have extensive networks and industry expertise.",
                    icon: "🇰🇪",
                  },
                  {
                    country: "Uganda",
                    description:
                      "A growing market where we help businesses access quality talent and develop effective HR practices.",
                    icon: "🇺🇬",
                  },
                  {
                    country: "Tanzania",
                    description:
                      "We support organizations navigating this diverse and developing business environment.",
                    icon: "🇹🇿",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-navy-700 mb-2">
                      {item.country}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 mt-6">
                Our regional expertise allows us to provide contextually
                relevant solutions that address the unique challenges and
                opportunities in East African markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        ref={addToRefs}
        className="bg-orange-500 py-12 opacity-0 transform translate-y-10 transition duration-1000 delay-1200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Partner with Muto Consults Today
            </h2>
            <p className="mt-4 text-xl text-white opacity-90">
              Whether you're looking for your next career opportunity or seeking
              to build a strong team, we're here to support your journey to
              success.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/jobs"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition duration-300"
                >
                  Browse Jobs
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-orange-600 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
