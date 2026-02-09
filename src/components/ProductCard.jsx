import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ p }) {
  return (
    <div className="card-ck overflow-hidden flex flex-col group">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Brand Badge */}
        {p.brand && (
          <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold px-3 py-1 rounded shadow">
            {p.brand}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow border-t-4 border-transparent group-hover:border-[var(--ck-blue)] transition">

        <h3 className="font-bold text-lg mb-2 leading-snug">
          {p.name}
        </h3>

        <p className="text-sm text-slate-600 mb-5 line-clamp-3">
          {p.desc}
        </p>

        {/* Actions */}
        <div className="mt-auto flex gap-3">

          <Link
            href={`/products/${p.id}`}
            className="btn-outline text-sm px-4 py-2"
          >
            View Details
          </Link>

          <Link
            href={`/contact?product=${encodeURIComponent(p.name)}`}
            className="btn-primary text-sm px-4 py-2"
          >
            Enquiry
          </Link>

        </div>

      </div>
    </div>
  );
}
