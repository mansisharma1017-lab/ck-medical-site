export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Reliable equipment and fast delivery."</p>
            <p className="mt-4 font-semibold">Hospital Partner</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Excellent after-sales support."</p>
            <p className="mt-4 font-semibold">Diagnostic Center</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>"Quality products and compliance ready."</p>
            <p className="mt-4 font-semibold">Healthcare Buyer</p>
          </div>

        </div>
      </div>
    </section>
  );
}
