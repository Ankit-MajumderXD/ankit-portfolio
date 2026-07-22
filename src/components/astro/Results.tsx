export default function Results() {
  const metrics = [
    {
      value: "94%",
      label: "Landing Zone Prediction Accuracy",
    },
    {
      value: "< 2 sec",
      label: "Average AI Processing Time",
    },
    {
      value: "87%",
      label: "Terrain Classification Accuracy",
    },
    {
      value: "24/7",
      label: "Mission Monitoring Capability",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Prototype Results
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Measuring the
        <br />
        impact of
        <br />
        intelligent rescue.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Astro Rescue AI is designed as a prototype demonstrating how
        artificial intelligence can improve satellite rescue operations.
        These metrics represent the intended performance goals of the
        system architecture.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <h3 className="text-6xl font-black text-blue-400">
              {metric.value}
            </h3>

            <p className="mt-6 text-lg text-gray-300">
              {metric.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}