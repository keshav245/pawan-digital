"use client";

import { useState } from "react";

interface BuyButtonProps {
  templateId: string;
  templateName: string;
  price: number;
}

export default function BuyButton({
  templateId,
  templateName,
  price,
}: BuyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleBuy = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.phone) {
      setError("All fields are required.");
      return;
    }
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateId,
          buyerName: form.name,
          buyerEmail: form.email,
          buyerPhone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error("Payment initiation failed");
      }

      // Response is an HTML form — write it to document to auto-submit
      const html = await res.text();
      document.open();
      document.write(html);
      document.close();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {/* Buy Now Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded transition font-medium text-white"
      >
        Buy Now
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Complete Purchase</h2>
              <p className="text-gray-500 text-sm mt-1">
                {templateName} —{" "}
                <span className="text-blue-600 font-semibold">₹{price}</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleBuy} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Pawan Jhagekar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  maxLength={10}
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
              >
                {loading ? "Redirecting to PayU..." : `Pay ₹${price} Securely`}
              </button>

              <p className="text-xs text-center text-gray-400">
                🔒 Secured by PayU • UPI / Card / Netbanking
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
