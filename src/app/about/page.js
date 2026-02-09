export default function AboutPage() {
  return (
    <>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-8">

          <h1 className="text-3xl md:text-4xl font-bold">
            About CK Medical Systems
          </h1>

          <p className="text-gray-700 leading-relaxed">
            CK Medical Systems Pvt. Ltd. is a trusted supplier of
            high-quality medical equipment and healthcare solutions,
            serving hospitals, clinics, and diagnostic centers across India.
          </p>

          <p className="text-gray-700 leading-relaxed">
            We specialize in sourcing and supplying advanced medical
            devices that meet international quality standards,
            ensuring accuracy, safety, and long-term performance.
          </p>

        </div>
      </section>

      {/* Mission Vision Block */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-3">Vision</h3>
            <p>
              To power the future of healthcare by making dependable,
              innovative medical technology accessible to every provider.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p>
              To deliver high-quality, compliant medical equipment with
              speed, transparency, and strong after-sales support.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
