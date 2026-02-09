import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ params }) {
  const product = products.find(
    p => String(p.id) === params.id
  );

  if (!product) {
    return (
      <div className="container-ck section-pad">
        Product not found
      </div>
    );
  }

  return (
    <section className="section-pad">
      <div className="container-ck grid md:grid-cols-2 gap-12">

        {/* Image */}
        <div className="relative h-[420px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="mb-4">{product.name}</h1>

          <p className="text-slate-600 mb-6">
            {product.desc}
          </p>

          <ul className="space-y-2 text-sm text-slate-700 mb-8">
            <li>✔ Certified Device</li>
            <li>✔ Clinical Grade Build</li>
            <li>✔ Service Support</li>
          </ul>

          <Link
            href={`/contact?product=${encodeURIComponent(product.name)}`}
            className="btn-primary"
          >
            Enquire This Product
          </Link>

        </div>

      </div>

      {/* Spec Table */}
      <div className="container-ck mt-16">
        <h3 className="font-bold mb-6">Standard Specifications</h3>

        <table className="w-full border text-sm">
          <tbody>
            <tr className="border">
              <td className="p-3 font-medium">Category</td>
              <td className="p-3 capitalize">{product.category}</td>
            </tr>
            <tr className="border">
              <td className="p-3 font-medium">Compliance</td>
              <td className="p-3">ISO / CE</td>
            </tr>
            <tr className="border">
              <td className="p-3 font-medium">Warranty</td>
              <td className="p-3">1 Year</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
}
