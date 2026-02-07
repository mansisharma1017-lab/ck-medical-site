export default function FeatureStrip() {
  const items = [
    "Certified Medical Equipment",
    "Pan-India Supply",
    "Compliance Ready",
    "After-Sales Support"
  ];

  return (
    <section className="bg-white -mt-10 relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">

        {items.map((t, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-xl text-center">
            <div className="text-2xl mb-2">✔️</div>
            <p className="font-semibold">{t}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
