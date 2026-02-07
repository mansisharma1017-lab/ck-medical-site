export default function Values() {
  const items = [
    "Quality by Design",
    "Trust & Transparency",
    "Innovation Mindset",
    "Reliability",
    "Customer First"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {items.map((v, i) => (
            <div key={i} className="p-6 border rounded-xl text-center shadow-sm">
              <div className="text-3xl mb-3">✓</div>
              <p className="font-semibold">{v}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
