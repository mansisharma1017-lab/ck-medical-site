export default function ProductCategories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Product Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="font-bold mb-3">Respiratory Care</h3>
            <p className="text-gray-600">
              CPAP, BIPAP and respiratory support systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="font-bold mb-3">Patient Monitoring</h3>
            <p className="text-gray-600">
              Multi-parameter monitoring devices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="font-bold mb-3">Clinical Devices</h3>
            <p className="text-gray-600">
              ICU and diagnostic equipment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
