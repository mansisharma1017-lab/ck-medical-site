import Link from "next/link";

export default function FloatingEnquiry() {
  return (
    <Link href="/contact">
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
          Enquire Now
        </button>
      </div>
    </Link>
  );
}
