import Link from "next/link";

export default function PaymentFailure() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
        {/* Failure Icon */}
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          Payment Failed
        </h1>
        <p className="text-gray-500 mb-8">
          Something went wrong with your payment. No money has been deducted.
          Please try again.
        </p>

        {/* Tips */}
        <div className="bg-red-50 rounded-xl p-5 mb-8 text-left space-y-2">
          <p className="text-sm font-semibold text-red-700 mb-2">
            Common reasons:
          </p>
          <ul className="text-sm text-red-600 space-y-1">
            <li>• Incorrect card details entered</li>
            <li>• Insufficient balance</li>
            <li>• Bank declined the transaction</li>
            <li>• Session timed out</li>
          </ul>
        </div>

        {/* Actions */}
        <Link
          href="/#templates"
          className="w-full block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3 shadow-lg shadow-blue-200"
        >
          Try Again
        </Link>

        <a
          href="mailto:pawandigital@gmail.com?subject=Payment Issue"
          className="text-sm text-gray-400 hover:text-blue-600 transition"
        >
          Need help? Contact us
        </a>
      </div>
    </div>
  );
}
