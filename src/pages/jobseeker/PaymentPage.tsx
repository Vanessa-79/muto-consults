import React, { useState, FormEvent } from "react";
import { CreditCard, Calendar, Lock, CheckCircle } from "lucide-react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
            Your premium subscription has been activated.
          </p>
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => (window.location.href = "/dashboard")}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Premium Subscription
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

            <div className="mb-4">
              <div className="flex gap-4 mb-6">
                <button
                  className={`flex-1 p-3 rounded-md border ${
                    paymentMethod === "credit"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("credit")}
                >
                  <div className="flex items-center">
                    <CreditCard className="mr-2 text-blue-600" size={20} />
                    <span>Credit Card</span>
                  </div>
                </button>
                <button
                  className={`flex-1 p-3 rounded-md border ${
                    paymentMethod === "paypal"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <div className="flex items-center justify-center">
                    <span className="font-semibold text-blue-700">PayPal</span>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
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
                  <CreditCard
                    className="absolute right-3 top-3 text-gray-400"
                    size={20}
                  />
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
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, ""))
                      }
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
                  "Pay $29.99"
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
            <h3 className="text-lg font-semibold mb-4">Premium Subscription</h3>
            <div className="text-2xl font-bold mb-4">
              $29.99{" "}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Unlimited job applications</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Resume boosting tools</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Priority application review</span>
              </div>
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Interview preparation tools</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span>Personalized job matches</span>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              <p>
                Cancel anytime. Your subscription will renew automatically each
                month until canceled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
