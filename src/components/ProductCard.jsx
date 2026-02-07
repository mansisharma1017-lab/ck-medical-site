import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ p }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">

      <div className="relative h-56">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{p.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{p.brand}</p>
        <p className="text-gray-600 text-sm mb-4">{p.desc}</p>

        {/* Enquiry button with product name in URL */}
        <Link href={`/products/${p.id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
           View Details
          </button>
        </Link>


      </div>

    </div>
  );
}
