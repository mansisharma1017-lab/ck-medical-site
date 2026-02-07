export default function Solutions() {
  const items = [
    "Hospitals",
    "Clinics",
    "Diagnostic Centers",
    "Home Care"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Solutions We Serve
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {items.map((s, i) => (
            <div key={i} className="border rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-semibold text-lg">{s}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
