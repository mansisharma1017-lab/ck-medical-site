import Link from "next/link";

export default function FloatingEnquiry() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/91-9899366774"
        target="_blank"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg font-semibold text-sm transition hover:-translate-y-0.5"
      >
        WhatsApp
      </a>

      {/* Enquiry */}
      <Link href="/contact">
        <button className="bg-[var(--ck-blue)] hover:bg-[var(--ck-blue-dark)] text-white px-5 py-3 rounded-full shadow-lg font-semibold text-sm transition hover:-translate-y-0.5">
          Enquiry
        </button>
      </Link>

    </div>
  );
}
