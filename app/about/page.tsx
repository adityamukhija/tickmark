export default function AboutPage() {
  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            About TickMark
          </h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TickMark was founded with a simple mission: to provide high-quality safety 
                products that protect and enhance the lives of our customers. We understand 
                that safety is not a luxury—it's a necessity.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Starting as a small business, we've grown into a trusted brand known for 
                reliability, quality, and customer satisfaction. Our commitment to excellence 
                drives us to source and offer only the best safety products in the market.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To make quality safety products accessible to everyone. We believe that 
                everyone deserves access to reliable protection, whether it's for personal 
                use, professional environments, or healthcare settings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Rubber Gloves</h3>
                  <p className="text-gray-700">
                    Durable, comfortable gloves for industrial, medical, and household use.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Safety Masks</h3>
                  <p className="text-gray-700">
                    N95 and surgical masks that meet international safety standards.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Walking Sticks</h3>
                  <p className="text-gray-700">
                    Ergonomic and adjustable walking aids for enhanced mobility and support.
                  </p>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">More Products</h3>
                  <p className="text-gray-700">
                    A growing range of safety and protective equipment for various needs.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong className="text-gray-900">Quality First:</strong> We never compromise on the quality of our products.</li>
                <li><strong className="text-gray-900">Customer Focus:</strong> Your safety and satisfaction are our top priorities.</li>
                <li><strong className="text-gray-900">Accessibility:</strong> Making safety products available through multiple channels.</li>
                <li><strong className="text-gray-900">Innovation:</strong> Continuously improving and expanding our product range.</li>
              </ul>
            </section>

            <section className="text-center bg-blue-100 border-2 border-blue-200 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Have questions or want to know more about our products? We'd love to hear from you!
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

