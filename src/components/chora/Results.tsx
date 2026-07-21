const metrics = [
  {
    value: "1000+",
    title: "Telemetry Signals",
    description:
      "Continuously monitored and analysed in real time.",
  },
  {
    value: "< 2s",
    title: "Prediction Speed",
    description:
      "AI-generated recommendations delivered almost instantly.",
  },
  {
    value: "24/7",
    title: "Mission Monitoring",
    description:
      "Continuous autonomous monitoring without fatigue.",
  },
  {
    value: "AI + Human",
    title: "Decision Making",
    description:
      "Keeping humans in control while AI provides intelligent support.",
  },
];

export default function Results() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        Expected Impact
      </p>

      <h2 className="mt-8 text-5xl font-black max-w-4xl">
        Designed to improve mission awareness,
        reduce response time and increase operational safety.
      </h2>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
          >
            <h3 className="text-6xl font-black text-violet-400">
              {metric.value}
            </h3>

            <h4 className="mt-6 text-2xl font-bold">
              {metric.title}
            </h4>

            <p className="mt-5 leading-8 text-gray-400">
              {metric.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}