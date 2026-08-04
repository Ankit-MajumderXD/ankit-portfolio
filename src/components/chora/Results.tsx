export default function Results() {
  const metrics = [
    {
      value: "91%",
      title: "Prediction Accuracy",
      description:
        "Designed to identify mission anomalies before they become critical operational failures.",
    },
    {
      value: "1000+",
      title: "Telemetry Parameters",
      description:
        "Architecture supports simultaneous analysis of large-scale mission telemetry streams.",
    },
    {
      value: "<2 sec",
      title: "Decision Latency",
      description:
        "Optimized workflow enables rapid AI-assisted mission recommendations.",
    },
    {
      value: "3",
      title: "Mission Domains",
      description:
        "Applicable to space exploration, underwater robotics and autonomous systems.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-40">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-20">

        <p className="uppercase tracking-[0.4em] text-sm text-violet-400">
          Results & Impact
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
          Engineering
          <br />
          Outcomes
        </h2>

        <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
          CHÕRA demonstrates how predictive artificial intelligence can
          transform mission operations from reactive monitoring into proactive
          decision support while keeping human operators in complete control.
        </p>

        <div className="mt-14 sm:mt-20 grid gap-5 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <h3 className="text-4xl sm:text-5xl font-black text-violet-400">
                {metric.value}
              </h3>

              <p className="mt-3 text-lg sm:text-xl font-semibold">
                {metric.title}
              </p>

              <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                {metric.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-16 sm:mt-24 rounded-[36px] border border-violet-500/20 bg-linear-to-br from-violet-500/10 to-transparent p-6 sm:p-8 md:p-12">

          <p className="uppercase tracking-[0.35em] text-violet-400">
            Current Status
          </p>

          <h3 className="mt-5 text-3xl sm:text-4xl font-black">
            Prototype with a Scalable Vision
          </h3>

          <p className="mt-6 max-w-4xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
            CHÕRA currently represents a research-driven prototype and product
            concept. The architecture has been intentionally designed for future
            integration with live telemetry, machine learning models, digital
            twins and explainable AI systems used in mission-critical
            environments.
          </p>
        </div>

      </div>
    </section>
  );
}