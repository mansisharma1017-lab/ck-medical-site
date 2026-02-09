export default function Solutions() {
  const items = [
    {
      title: "Hospitals",
      desc: "Critical care and general medical equipment supply",
      icon: "🏥",
    },
    {
      title: "Clinics",
      desc: "Compact and reliable clinical devices",
      icon: "🩺",
    },
    {
      title: "Diagnostic Centers",
      desc: "Monitoring and testing support systems",
      icon: "🔬",
    },
    {
      title: "Home Care",
      desc: "Portable and assisted care devices",
      icon: "🏠",
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Applications
          </p>

          <h2>
            Healthcare Segments We Serve
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-sm">
            Our medical and surgical product range is designed to support
            multiple healthcare environments with reliability, safety and
            operational efficiency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          {items.map((s, i) => (
            <div
              key={i}
              className="card-ck p-8 text-center border-b-4 border-transparent hover:border-[var(--ck-blue)]"
            >
              <div className="text-4xl mb-4">
                {s.icon}
              </div>

              <h3 className="font-bold mb-2">
                {s.title}
              </h3>

              <p className="text-sm text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
