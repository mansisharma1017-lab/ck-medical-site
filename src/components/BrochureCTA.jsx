export default function BrochureCTA() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-2xl font-bold mb-4">
          Download Product Catalogue
        </h2>

        <p className="mb-6 text-gray-600">
          Get detailed product specifications and compliance info.
        </p>

        <a href="/brochure.pdf" download>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
            Download PDF
          </button>
        </a>


      </div>
    </section>
  );
}
