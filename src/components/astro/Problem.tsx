export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        The Problem
      </p>

      <h2 className="mt-6 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
        Rescue missions lose valuable
        <br />
        time because critical satellite
        <br />
        data is difficult to interpret.
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-2">

        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Current Situation
          </h3>

          <p className="leading-9 text-gray-400">
            During satellite emergencies, engineers receive large amounts
            of imagery and telemetry within minutes. Identifying safe
            landing zones, terrain hazards and rescue paths often requires
            manual analysis across multiple systems.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold">
            Why It Matters
          </h3>

          <p className="leading-9 text-gray-400">
            Every minute of delay increases mission cost and operational
            risk. An AI-assisted platform can rapidly analyse incoming
            satellite data, rank potential landing sites and support
            faster rescue decisions.
          </p>
        </div>

      </div>

    </section>
  );
}