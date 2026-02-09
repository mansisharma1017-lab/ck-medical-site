export default function Values() {
  const items = [
    {
      title: "Quality by Design",
      desc: "Products built with controlled quality processes",
      icon: "✔️",
    },
    {
      title: "Trust & Transparency",
      desc: "Clear specifications and honest commitments",
      icon: "🤝",
    },
    {
      title: "Innovation Mindset",
      desc: "Continuous product and process improvement",
      icon: "💡",
    },
    {
      title: "Operational Reliability",
      desc: "Consistent performance in clinical use",
      icon: "⚙️",
    },
    {
      title: "Customer First",
      desc: "Responsive support and service approach",
      icon: "📞",
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Our Strengths
          </p>

          <h2>
            Why Healthcare Providers Choose Us
          </h2>

          <p className="text-slate-600 text-sm mt-4 max-w-2xl mx-auto">
            We focus on product quality, regulatory readiness and dependable
            service — enabling healthcare teams to operate with confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

          {items.map((v, i) => (
            <div
              key={i}
              className="card-ck p-6 text-center border-b-4 border-transparent hover:border-[var(--ck-blue)]"
            >
              <div className="text-3xl mb-3">
                {v.icon}
              </div>

              <h3 className="font-bold text-sm mb-2">
                {v.title}
              </h3>

              <p className="text-xs text-slate-600">
                {v.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
