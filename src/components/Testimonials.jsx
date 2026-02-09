export default function Testimonials() {
  const items = [
    {
      quote:
        "Reliable equipment quality and consistent delivery timelines. Support team is responsive and knowledgeable.",
      name: "Procurement Head",
      org: "Multi-Specialty Hospital",
    },
    {
      quote:
        "Devices are compliant and easy to deploy. After-sales service has been dependable.",
      name: "Center Director",
      org: "Diagnostic Chain",
    },
    {
      quote:
        "Good product performance and clear technical documentation. Smooth purchase experience.",
      name: "Biomedical Team",
      org: "Healthcare Facility",
    },
  ];

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Client Feedback
          </p>

          <h2>
            What Healthcare Partners Say
          </h2>

          <p className="text-slate-600 text-sm mt-4 max-w-2xl mx-auto">
            Feedback from hospitals, diagnostic centers and healthcare buyers
            using our medical equipment across applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((t, i) => (
            <div
              key={i}
              className="card-ck p-8 text-left relative"
            >
              {/* Quote mark */}
              <div className="text-5xl text-[var(--ck-blue)]/20 font-bold mb-4">
                “
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {t.quote}
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-slate-500">
                  {t.org}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
