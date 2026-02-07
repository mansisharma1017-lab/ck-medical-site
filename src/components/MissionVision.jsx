export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To power the future of healthcare by making dependable,
            innovative medical technology easily accessible to every
            care provider.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To deliver high-quality, compliant medical equipment
            with speed, transparency and strong after-sales support.
          </p>
        </div>

      </div>
    </section>
  );
}
