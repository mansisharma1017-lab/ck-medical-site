export default function MissionVision() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-ck">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[var(--ck-blue)] uppercase tracking-wider mb-3">
            Our Direction
          </p>
          <h2>
            Vision & Mission
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Vision */}
          <div className="card-ck p-10 border-l-4 border-[var(--ck-blue)]">
            <h3 className="text-xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To advance the future of healthcare by making dependable,
              innovative and standards-aligned medical technology
              accessible to care providers across diverse clinical
              environments.
            </p>
          </div>

          {/* Mission */}
          <div className="card-ck p-10 border-l-4 border-[var(--ck-blue)]">
            <h3 className="text-xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To deliver high-quality medical equipment with compliance,
              speed and transparency, backed by responsive service
              support and long-term customer partnerships.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
