import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  User,
  CheckCircle,
  ArrowLeft,
  Info,
  MessageSquare,
} from "lucide-react";

export default function ScheduleInterview() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [interviewDetails] = useState({
    company: "TechCorp Inc.",
    position: "Senior Frontend Developer",
    interviewer: "Sarah Johnson, HR Manager",
    duration: "45 minutes",
    logo: "/api/placeholder/80/80",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          dateStr: date.toISOString().split("T")[0],
          dayOfWeek: date.toLocaleDateString("en-US", { weekday: "short" }),
          day: date.getDate(),
          month: date.toLocaleDateString("en-US", { month: "short" }),
        });
      }
    }

    return dates;
  };

  const availableDates = generateDates();

  const availableTimes = [
    { id: 1, time: "09:00 AM" },
    { id: 2, time: "10:00 AM" },
    { id: 3, time: "11:00 AM" },
    { id: 4, time: "01:00 PM" },
    { id: 5, time: "02:00 PM" },
    { id: 6, time: "03:00 PM" },
    { id: 7, time: "04:00 PM" },
  ];

  const interviewTypes = [
    {
      id: "video",
      name: "Video Call",
      icon: <Video size={24} className="text-blue-500" />,
    },
    {
      id: "phone",
      name: "Phone Call",
      icon: <Phone size={24} className="text-green-500" />,
    },
    {
      id: "inperson",
      name: "In Person",
      icon: <User size={24} className="text-purple-500" />,
    },
  ];

  const handleConfirm = () => {
    // Here you would typically send the interview details to a server
    setIsConfirmed(true);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  if (isConfirmed) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-500" size={32} />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Interview Scheduled!
          </h2>
          <p className="text-gray-600 mb-8">
            Your interview has been confirmed. Details have been sent to your
            email.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <img
                src={interviewDetails.logo}
                alt={interviewDetails.company}
                className="rounded-lg"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              {interviewDetails.position}
            </h3>
            <p className="text-gray-600 mb-4">{interviewDetails.company}</p>

            <div className="flex items-center justify-center mb-2">
              <Calendar size={18} className="text-gray-500 mr-2" />
              <span className="text-gray-800 font-medium">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center justify-center mb-2">
              <Clock size={18} className="text-gray-500 mr-2" />
              <span className="text-gray-800 font-medium">
                {selectedTime} ({interviewDetails.duration})
              </span>
            </div>

            <div className="flex items-center justify-center">
              {selectedType === "video" && (
                <Video size={18} className="text-blue-500 mr-2" />
              )}
              {selectedType === "phone" && (
                <Phone size={18} className="text-green-500 mr-2" />
              )}
              {selectedType === "inperson" && (
                <User size={18} className="text-purple-500 mr-2" />
              )}
              <span className="text-gray-800 font-medium">
                {interviewTypes.find((type) => type.id === selectedType)?.name}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => (window.location.href = "/application-status")}
            >
              View Applications
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => (window.location.href = "/dashboard")}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <button
          onClick={() => (window.location.href = "/application-status")}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={18} className="mr-1" />
          Back to Applications
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <img
              src={interviewDetails.logo}
              alt={interviewDetails.company}
              className="w-16 h-16 rounded-lg mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {interviewDetails.position}
              </h1>
              <p className="text-gray-600">{interviewDetails.company}</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  You're scheduling an interview with{" "}
                  {interviewDetails.interviewer}. The interview will last
                  approximately {interviewDetails.duration}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex mb-6">
            <div
              className={`flex-1 border-b-2 pb-2 text-center ${
                currentStep >= 1
                  ? "border-blue-500 text-blue-600"
                  : "border-gray-200 text-gray-400"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                  currentStep >= 1
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-400"
                } mr-2`}
              >
                1
              </span>
              Select Date
            </div>
            <div
              className={`flex-1 border-b-2 pb-2 text-center ${
                currentStep >= 2
                  ? "border-blue-500 text-blue-600"
                  : "border-gray-200 text-gray-400"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                  currentStep >= 2
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-400"
                } mr-2`}
              >
                2
              </span>
              Select Time
            </div>
            <div
              className={`flex-1 border-b-2 pb-2 text-center ${
                currentStep >= 3
                  ? "border-blue-500 text-blue-600"
                  : "border-gray-200 text-gray-400"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                  currentStep >= 3
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-400"
                } mr-2`}
              >
                3
              </span>
              Interview Type
            </div>
          </div>

          {/* Step 1: Select Date */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Select a Date
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {availableDates.map((date) => (
                  <button
                    key={date.dateStr}
                    className={`flex flex-col items-center p-4 rounded-lg border-2 transition-colors ${
                      selectedDate === date.dateStr
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedDate(date.dateStr)}
                  >
                    <span className="text-sm font-medium text-gray-500">
                      {date.dayOfWeek}
                    </span>
                    <span className="text-xl font-bold text-gray-800">
                      {date.day}
                    </span>
                    <span className="text-sm text-gray-500">{date.month}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Time */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Select a Time
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableTimes.map((timeSlot) => (
                  <button
                    key={timeSlot.id}
                    className={`flex items-center justify-center p-4 rounded-lg border-2 transition-colors ${
                      selectedTime === timeSlot.time
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedTime(timeSlot.time)}
                  >
                    <Clock size={16} className="mr-2 text-gray-500" />
                    <span className="font-medium">{timeSlot.time}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Interview Type */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Select Interview Type
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {interviewTypes.map((type) => (
                  <button
                    key={type.id}
                    className={`flex flex-col items-center p-6 rounded-lg border-2 transition-colors ${
                      selectedType === type.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className="mb-3">{type.icon}</div>
                    <span className="font-medium">{type.name}</span>
                    {type.id === "video" && (
                      <span className="text-xs text-gray-500 mt-1">
                        Via Zoom
                      </span>
                    )}
                    {type.id === "phone" && (
                      <span className="text-xs text-gray-500 mt-1">
                        We'll call you
                      </span>
                    )}
                    {type.id === "inperson" && (
                      <span className="text-xs text-gray-500 mt-1">
                        At company office
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {selectedType === "inperson" && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Office Location
                  </h3>
                  <p className="text-gray-600">
                    123 Tech Street, San Francisco, CA 94103
                  </p>
                  <p className="text-gray-600 mt-1">
                    Please arrive 15 minutes before your scheduled time.
                  </p>
                </div>
              )}

              {selectedType === "video" && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">
                    Preparation
                  </h3>
                  <p className="text-gray-600">
                    A Zoom link will be sent to your email. Please test your
                    camera and microphone before the interview.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className={`px-6 py-2 border border-gray-300 rounded-md text-gray-700 ${
              currentStep === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-50"
            } transition-colors`}
            disabled={currentStep === 1}
          >
            Previous
          </button>

          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${
                currentStep === 1 && !selectedDate
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } ${
                currentStep === 2 && !selectedTime
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                (currentStep === 1 && !selectedDate) ||
                (currentStep === 2 && !selectedTime)
              }
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className={`px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors ${
                !selectedType ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedType}
            >
              Confirm Interview
            </button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <MessageSquare size={20} className="mr-2 text-blue-500" />
            Interview Tips
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
              <span>
                Research the company thoroughly before your interview.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
              <span>
                Prepare answers for common questions about your experience and
                skills.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
              <span>
                Have specific examples ready to demonstrate your achievements.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
              <span>
                Prepare questions to ask the interviewer about the role and
                company.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mr-2 mt-1" />
              <span>
                Dress professionally and test your tech setup if it's a virtual
                interview.
              </span>
            </li>
          </ul>

          <button className="mt-4 w-full py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
            View More Interview Resources
          </button>
        </div>
      </div>
    </div>
  );
}
