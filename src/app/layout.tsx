import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan Digital — Web Development & Templates",
  description: "Freelance web development and premium UI templates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
          © 2026 Pawan Digital Solutions · <a href="/terms" className="hover:text-gray-600">Terms</a> · <a href="/refund" className="hover:text-gray-600">Refund Policy</a>
        </footer>
      </body>
    </html>
  );
}
