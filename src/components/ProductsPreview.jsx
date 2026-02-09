import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function ProductsPreview() {
  const featured = products.slice(0, 6);

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Featured Range
          </p>

          <h2>
            Selected Medical Products
          </h2>

          <p className="text-slate-600 text-sm mt-4 max-w-2xl mx-auto">
            Explore some of our widely used and trusted medical devices
            designed for performance, safety and clinical reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
