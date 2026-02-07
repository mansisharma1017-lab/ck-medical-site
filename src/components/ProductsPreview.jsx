import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.slice(0,3).map(p => (
            <ProductCard key={p.id} p={p}/>
          ))}
        </div>

      </div>
    </section>
  );
}
