import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="section-pad">
      <div className="container-ck grid md:grid-cols-2 gap-14 items-center">

        {/* ===== Left Content ===== */}
        <div>

          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            About The Company
          </p>

          <h2 className="mb-5">
            Trusted Medical Device Partner for
            Hospitals & Healthcare Providers
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6">
            CK Medical Systems delivers reliable, standards-aligned medical
            and surgical equipment to hospitals, clinics and diagnostic
            centers across India. Our focus is on product quality,
            regulatory readiness and responsive service support.
          </p>

          {/* Trust Points */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm text-slate-700">
            <div>✔ Quality Assured Products</div>
            <div>✔ Industry Compliance</div>
            <div>✔ Fast Supply Network</div>
            <div>✔ Technical Support</div>
          </div>

          <Link href="/about" className="btn-primary">
            Read Company Profile
          </Link>
        </div>

        {/* ===== Right Image ===== */}
        <div className="relative">
          <div className="absolute -inset-4 bg-[var(--ck-accent)] rounded-2xl" />

          <Image
            src="/about.jpg"
            alt="CK Medical Facility"
            width={700}
            height={420}
            className="relative rounded-xl shadow-lg w-full h-[360px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
