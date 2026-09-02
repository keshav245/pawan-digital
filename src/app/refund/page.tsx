export default function RefundPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Refund &amp; Cancellation Policy</h1>
      <p className="text-gray-400 text-sm mb-10">Last updated: September 2026</p>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Digital Products</h2>
          <p>Due to the nature of digital products (templates, UI kits, code files), all sales are generally considered final once the product has been downloaded. Since digital content can be copied and cannot be returned, we follow a strict but fair refund policy as outlined below.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Eligible Refund Scenarios</h2>
          <p>We will issue a full refund in the following cases:</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li><strong>Duplicate Purchase:</strong> If you accidentally purchased the same product twice.</li>
            <li><strong>Product Not Delivered:</strong> If a purchased product is not available for download within 24 hours of payment confirmation.</li>
            <li><strong>Significantly Different Product:</strong> If the delivered product is fundamentally different from the description on the product page.</li>
            <li><strong>Corrupted File:</strong> If the downloaded file is corrupted and we fail to provide a working replacement within 48 hours.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">3. Non-Refundable Scenarios</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Change of mind after purchase.</li>
            <li>Incompatibility with your development environment or tools.</li>
            <li>Products that have already been successfully downloaded.</li>
            <li>Dissatisfaction with subjective quality preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Custom Development Services</h2>
          <p>For custom web development projects, cancellation and refund terms are defined in the individual project agreement. Generally, any advance payment for work not yet started is refundable. Payment for completed milestones is non-refundable.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">5. How to Request a Refund</h2>
          <p>To request a refund, email us at pawandigital@gmail.com with your Order ID, product name, and reason for the refund. Refund requests must be submitted within 7 days of purchase. Approved refunds are processed within 5–10 business days to the original payment method.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Cancellation</h2>
          <p>Since digital products are delivered instantly upon payment, orders cannot be cancelled after payment is completed. If you wish to cancel before completing payment, simply close the payment window.</p>
        </section>
      </div>
    </div>
  );
}
