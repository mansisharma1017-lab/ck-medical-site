import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id.toString() === params.id);

  if (!product) return <div>Not found</div>;

  return (
    <>
      <Navbar />

      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

          <div className="relative h-[420px]">
            <Image src={product.image} alt={product.name} fill className="object-cover rounded-xl"/>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.desc}</p>

            <ul className="space-y-2 text-gray-700">
              <li>✔ Certified device</li>
              <li>✔ Clinical grade</li>
              <li>✔ Warranty support</li>
            </ul>

            <a
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded"
            >
              Enquire This Product
            </a>
          </div>

        </div>
      </section>
      
      <div className="mt-8">
  <h3 className="font-bold mb-4">Specifications</h3>

  <table className="w-full border">
    <tbody>
      <tr className="border">
        <td className="p-3 font-medium">Category</td>
        <td className="p-3">Medical Device</td>
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


      <Footer />
    </>
  );
}
