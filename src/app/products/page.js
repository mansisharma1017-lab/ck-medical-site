"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {

  const [q, setQ] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-bold">
            Our Products
          </h1>

          {/* 🔍 Search box */}
          <input
            placeholder="Search products..."
            className="border p-3 rounded mb-10 w-full md:w-96"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map(p => (
              <ProductCard key={p.id} p={p}/>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
