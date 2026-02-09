import Image from "next/image";

export default function CertStrip() {
  const certs = [
    { src: "/cert/iso.png", alt: "ISO Certified" },
    { src: "/cert/gmp.png", alt: "GMP Certified" },
    { src: "/cert/ce.png", alt: "CE Marked" },
    { src: "/cert/gem.png", alt: "GeM Registered" },
  ];

  return (
    <section className="bg-[var(--ck-accent)] section-pad">
      <div className="container-ck text-center">

        {/* Heading */}
        <h2 className="mb-3">
          Quality & Compliance Certifications
        </h2>

        <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-sm">
          CK Medical products and processes are aligned with recognized
          quality and regulatory standards to ensure safety, reliability
          and performance.
        </p>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">

          {certs.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm flex items-center justify-center hover:shadow-md transition"
            >
              <Image
                src={c.src}
                width={140}
                height={70}
                alt={c.alt}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
