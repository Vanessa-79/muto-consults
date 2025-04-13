import React, { useState, FormEvent, useEffect } from "react";
import {
  // CreditCard,
  Calendar,
  Lock,
  CheckCircle,
  Smartphone,
  // CreditCard as BankCard,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

// Mock job data
const MOCK_JOBS = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Digital Innovations",
  },
  {
    id: "3",
    title: "Marketing Specialist",
    company: "Brand Elevate",
  },
];

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("mtn");
  const [mobileNumber, setMobileNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    id: "",
    title: "",
    company: "",
  });

  const navigate = useNavigate();
  // Get the id parameter from the URL
  const { id } = useParams();

  // Fetch job details if ID is provided
  useEffect(() => {
    if (id) {
      const job = MOCK_JOBS.find((job) => job.id === id);
      if (job) {
        setJobDetails(job);
      }
    }
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-6">
            Your application fee has been processed. You can now complete your
            application for{" "}
            {jobDetails.title
              ? `${jobDetails.title} at ${jobDetails.company}`
              : "the position"}
            .
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() =>
              navigate(
                id
                  ? `/jobseeker/application-form/${id}`
                  : "/jobseeker/application-form"
              )
            }
          >
            Continue to Application
          </button>
        </div>
      </div>
    );
  }

  const renderPaymentForm = () => {
    if (paymentMethod === "mtn" || paymentMethod === "airtel") {
      return (
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Money Number
          </label>
          <div className="relative">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="mobileNumber"
              type="text"
              placeholder="07XXXXXXXX"
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/\D/g, ""))
              }
              maxLength={10}
              required
            />
            <Smartphone
              className="absolute right-3 top-3 text-gray-400"
              size={20}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            You will receive a prompt on your phone to confirm the payment.
          </p>
        </div>
      );
    } else if (paymentMethod === "bank") {
      return (
        <>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="cardName"
            >
              Cardholder Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              id="cardName"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <div className="relative">
              <input
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(
                    e.target.value
                      .replace(/\D/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()
                  )
                }
                maxLength={19}
                required
              />
              {/* <CreditCard
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              /> */}
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="expiry"
              >
                Expiry Date
              </label>
              <div className="relative">
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  maxLength={5}
                  required
                />
                <Calendar
                  className="absolute right-3 top-3 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <div className="flex-1">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <div className="relative">
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  id="cvv"
                  type="text"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  maxLength={3}
                  required
                />
                <Lock
                  className="absolute right-3 top-3 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Application Payment Required
      </h1>
      <p className="text-gray-600 mb-6">
        {jobDetails.title ? (
          <>
            To apply for the position of{" "}
            <span className="font-medium">{jobDetails.title}</span> at{" "}
            <span className="font-medium">{jobDetails.company}</span>, a
            one-time application fee is required.
          </>
        ) : (
          "A one-time application fee is required to continue."
        )}
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

            <div className="mb-4">
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  className={`flex-1 p-3 rounded-md border ${
                    paymentMethod === "mtn"
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("mtn")}
                  type="button"
                >
                  <div className="flex items-center">
                    <Smartphone className="mr-2 text-yellow-600" size={20} />
                    <span className="font-medium">MTN Mobile Money</span>
                  </div>
                </button>
                <button
                  className={`flex-1 p-3 rounded-md border ${
                    paymentMethod === "airtel"
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("airtel")}
                  type="button"
                >
                  <div className="flex items-center">
                    <Smartphone className="mr-2 text-red-600" size={20} />
                    <span className="font-medium">Airtel Money</span>
                  </div>
                </button>
                {/* <button
                  className={`flex-1 p-3 rounded-md border ${
                    paymentMethod === "bank"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("bank")}
                  type="button"
                >
                  <div className="flex items-center">
                    <BankCard className="mr-2 text-blue-600" size={20} />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                </button> */}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {renderPaymentForm()}

              <button
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                type="submit"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Processing...
                  </div>
                ) : (
                  `Pay ${
                    paymentMethod === "mtn" || paymentMethod === "airtel"
                      ? "UGX 35,000"
                      : "$9.99"
                  }`
                )}
              </button>

              <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
                <Lock size={16} className="mr-1" />
                <span>Secure payment processing</span>
              </div>
            </form>
          </div>
        </div>

        <div className="flex-1 md:max-w-xs">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Application Fee</h3>
            <div className="text-2xl font-bold mb-4">
              {paymentMethod === "mtn" || paymentMethod === "airtel"
                ? "UGX 35,000"
                : "$9.99"}
              <span className="text-sm font-normal text-gray-500">
                {" "}
                one-time payment
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Priority application review</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Application status tracking</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Feedback on your application</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>30-day support from our career advisors</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <p className="text-sm text-blue-800">
                <strong>Why do we charge an application fee?</strong> This helps
                us maintain high-quality job listings and ensures serious
                candidates apply, making the process more efficient for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
