import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
              PD
            </div>
            <span className="font-bold text-lg tracking-tight">Pawan Digital</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#templates" className="hover:text-blue-600 transition">Templates</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="#contact" className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">
            Hire Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Premium Web Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto text-gray-900">
            We build digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">drive growth.</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Pawan Digital provides top-tier freelance web development services and premium, ready-to-use UI templates for startups and businesses across India.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#templates" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Browse Templates
            </a>
            <a href="#services" className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Freelance Services</h2>
          <p className="text-gray-500">Custom solutions tailored to your business needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Custom Web Development", price: "Starts at ₹15,000", desc: "Full-stack development using React, Next.js, and Node.js. Fast, secure, and scalable." },
            { title: "UI/UX Design", price: "Starts at ₹8,000", desc: "User-centric design focusing on conversion rates and modern aesthetics. Mobile-first approach." },
            { title: "E-Commerce Setup", price: "Starts at ₹25,000", desc: "End-to-end e-commerce solutions including payment gateways, carts, and admin dashboards." }
          ].map((s) => (
            <div key={s.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
              <div className="text-blue-600 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Premium UI Templates</h2>
              <p className="text-gray-400 max-w-lg">Instantly download high-quality, responsive HTML/React templates to kickstart your next project.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Business Pro UI Kit", price: "₹499", tag: "Best Seller" },
              { title: "SaaS Landing Page", price: "₹399", tag: "New" },
              { title: "E-Commerce Dashboard", price: "₹799", tag: "Admin" },
              { title: "Portfolio Starter", price: "₹299", tag: "Minimal" }
            ].map((t) => (
              <div key={t.title} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:border-gray-500 transition group">
                <div className="h-40 bg-gray-700 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition duration-500"></div>
                  <span className="text-gray-400 text-sm font-medium z-10">Preview Image</span>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-100">{t.title}</h3>
                  </div>
                  <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded mb-4">{t.tag}</span>
                  <div className="flex justify-between items-center mt-2 border-t border-gray-700 pt-4">
                    <span className="text-white font-bold">{t.price}</span>
                    <button className="text-sm bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded transition font-medium">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white border-t border-gray-200 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">PD</div>
              <span className="font-bold text-lg">Pawan Digital</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevating brands through clean code and beautiful design. Your trusted partner for web development in India.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Email: pawandigital@gmail.com</li>
              <li>Location: Indore, Madhya Pradesh, India</li>
              <li>Hours: Mon-Sat, 9AM - 6PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-gray-500 hover:text-blue-600 transition">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-gray-500 hover:text-blue-600 transition">Refund & Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400 border-t border-gray-100 pt-8">
          © 2026 Pawan Digital Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
