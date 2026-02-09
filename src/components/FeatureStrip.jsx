export default function FeatureStrip() {
  const items = [
    {
      title: "Certified Medical Equipment",
      sub: "Quality checked & standards aligned",
      icon: "🏥",
    },
    {
      title: "Pan-India Supply",
      sub: "Reliable distribution network",
      icon: "🚚",
    },
    {
      title: "Compliance Ready",
      sub: "Industry & safety compliant",
      icon: "📋",
    },
    {
      title: "After-Sales Support",
      sub: "Responsive technical assistance",
      icon: "🛠️",
    },
  ];

  return (
    <section className="relative -mt-16 z-10">
      <div className="container-ck">
        <div className="grid md:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <div
              key={i}
              className="card-ck p-6 text-center border-t-4 border-[var(--ck-blue)]"
            >
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="font-bold text-base mb-1">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600">
                {item.sub}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
