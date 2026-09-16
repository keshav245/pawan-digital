import Link from "next/link";

export default function PaymentSuccess({
  searchParams,
}: {
  searchParams: { txnid?: string; productinfo?: string; amount?: string };
}) {
  const { txnid, productinfo, amount } = searchParams;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          Payment Successful! 🎉
        </h1>
        <p className="text-gray-500 mb-8">
          Thank you for your purchase. Your template is ready to download.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left space-y-3">
          {productinfo && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Template</span>
              <span className="font-semibold text-gray-800">{productinfo}</span>
            </div>
          )}
          {amount && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-semibold text-green-600">₹{amount}</span>
            </div>
          )}
          {txnid && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono text-xs text-gray-700">{txnid}</span>
            </div>
          )}
        </div>

        {/* Download Button */}
        <a
          href="mailto:pawandigital@gmail.com?subject=Template Download Request"
          className="w-full block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mb-3 shadow-lg shadow-blue-200"
        >
          📥 Get Your Template
        </a>

        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-blue-600 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
