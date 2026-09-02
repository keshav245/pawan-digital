export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
          <span className="text-white font-bold">PD</span>
        </div>
        <h1 className="text-4xl font-bold mb-3">Pawan Digital Solutions</h1>
        <p className="text-gray-500 text-lg">Freelance web development & premium UI templates based in Indore, India.</p>
      </div>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-6">Services</h2>
        <div className="space-y-4">
          {[
            { title: "Website Development", price: "From ₹15,000" },
            { title: "UI/UX Design", price: "From ₹8,000" },
            { title: "E-commerce Setup", price: "From ₹25,000" },
          ].map((s) => (
            <div key={s.title} className="flex justify-between items-center p-4 border border-gray-100 rounded-lg">
              <span className="font-medium">{s.title}</span>
              <span className="text-blue-600 font-semibold text-sm">{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-6">Templates for Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Business Website Template", price: "₹499" },
            { title: "Portfolio Starter Kit", price: "₹299" },
            { title: "E-commerce UI Kit", price: "₹799" },
            { title: "Landing Page Pack", price: "₹399" },
          ].map((t) => (
            <div key={t.title} className="p-5 border border-gray-100 rounded-lg">
              <div className="w-full h-24 bg-gray-50 rounded mb-3 flex items-center justify-center text-gray-300 text-xs">Preview</div>
              <p className="font-medium text-sm">{t.title}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-600 font-bold">{t.price}</span>
                <button className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-md">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <p className="text-gray-500 text-sm">Email: pawandigital@gmail.com</p>
        <p className="text-gray-500 text-sm">Location: Indore, Madhya Pradesh, India</p>
      </section>
    </div>
  );
}
