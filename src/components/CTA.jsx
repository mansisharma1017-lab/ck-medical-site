import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Need Medical Equipment Solutions?
        </h2>

        <p className="mb-6">
          Talk to our team for product recommendations and quotes.
        </p>

        <Link href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
            Contact Us
          </button>
        </Link>

      </div>
    </section>
  );
}
