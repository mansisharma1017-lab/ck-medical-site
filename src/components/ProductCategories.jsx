import Image from "next/image";
import Link from "next/link";

export default function ProductCategories() {
  const cats = [
    {
      title: "Respiratory Care",
      desc: "CPAP, BIPAP and respiratory support systems.",
      img: "/cats/respiratory-new.jpg",
      link: "/products?cat=respiratory",
    },
    {
      title: "Patient Monitoring",
      desc: "Multi-parameter monitoring devices.",
      img: "/cats/monitoring-new.jpg",
      link: "/products?cat=monitoring",
    },
    {
      title: "Clinical Devices",
      desc: "ICU and diagnostic equipment.",
      img: "/cats/clinical-new.jpg",
      link: "/products?cat=clinical",
    },
  ];

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Our Portfolio
          </p>

          <h2>
            Medical Product Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {cats.map((c, i) => (
            <Link
              key={i}
              href={c.link}
              className="group card-ck overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 border-t-4 border-transparent group-hover:border-[var(--ck-blue)] transition">
                <h3 className="font-bold mb-2">
                  {c.title}
                </h3>

                <p className="text-sm text-slate-600 mb-3">
                  {c.desc}
                </p>

                <span className="text-sm font-semibold text-[var(--ck-blue)]">
                  View Category →
                </span>
              </div>
            </Link>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-outline">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}
