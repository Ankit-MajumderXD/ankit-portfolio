export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        The Problem
      </p>

      <h2 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
        Millions of farmers and
        <br />
        students struggle to access
        <br />
        reliable information.
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-2">

        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Farmers
          </h3>

          <p className="leading-9 text-gray-400">
            Farmers often rely on fragmented information for weather,
            crop diseases, market prices and government schemes. This
            leads to delayed decisions, reduced productivity and financial
            uncertainty.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Students
          </h3>

          <p className="leading-9 text-gray-400">
            Students, especially in rural regions, face difficulty finding
            trustworthy guidance for careers, scholarships, competitive
            exams and educational resources in one accessible platform.
          </p>
        </div>

      </div>

    </section>
  );
}