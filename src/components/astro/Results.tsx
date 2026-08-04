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

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Measuring the
        <br />
        impact of
        <br />
        intelligent rescue.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
        Astro Rescue AI is designed as a prototype demonstrating how
        artificial intelligence can improve satellite rescue operations.
        These metrics represent the intended performance goals of the
        system architecture.
      </p>

      <div className="mt-14 sm:mt-20 grid gap-5 sm:gap-8 md:grid-cols-2">

        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-400 wrap-break-word">
              {metric.value}
            </h3>

            <p className="mt-4 text-sm sm:text-base md:text-lg leading-6 text-gray-300">
              {metric.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}