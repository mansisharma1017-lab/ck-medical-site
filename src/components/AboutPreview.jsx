export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            About CK Medical Systems
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            CK Medical Systems Pvt Ltd delivers reliable and compliant
            medical technology solutions to hospitals, clinics and
            diagnostic centers across India. We focus on quality,
            speed and long-term service support.
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
            Learn More
          </button>
        </div>

        <img
         src="/about.jpg"
         className="rounded-xl shadow-lg w-full h-[320px] object-cover"
        />


      </div>
    </section>
  );
}
