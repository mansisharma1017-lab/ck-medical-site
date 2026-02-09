"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [q, setQ] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section className="section-pad">
      <div className="container-ck">

        <div className="mb-10">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Product Catalog
          </p>
          <h1>Our Products</h1>
        </div>

        {/* Search */}
        <input
          placeholder="Search products..."
          className="border rounded-lg p-3 mb-10 w-full md:w-96 focus:ring-2 focus:ring-[var(--ck-blue)]"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map(p => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
