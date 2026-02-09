import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[var(--ck-blue-dark)] to-[var(--ck-blue)] text-white">
      <div className="container-ck section-pad text-center">

        <h2 className="mb-4 text-white font-bold">
          Looking for Reliable Medical Equipment Supply?
        </h2>


        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Connect with our team for product details, technical specifications
          and quick quotations for your healthcare facility needs.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link href="/contact" className="btn-primary">
            Send Enquiry
          </Link>

          <a
            href="https://wa.me/91-9899366774"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold shadow-lg">
            WhatsApp Now
          </a>

        </div>

      </div>
    </section>
  );
}
