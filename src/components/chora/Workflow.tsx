const workflow = [
  {
    title: "Collect Telemetry",
    description:
      "Receive live mission data from satellites, underwater systems and autonomous robots.",
  },
  {
    title: "AI Analysis",
    description:
      "Machine learning models process thousands of incoming signals simultaneously.",
  },
  {
    title: "Risk Prediction",
    description:
      "The prediction engine identifies anomalies before they become critical failures.",
  },
  {
    title: "Decision Support",
    description:
      "Operators receive AI recommendations with confidence scores and possible actions.",
  },
  {
    title: "Mission Execution",
    description:
      "Human operators make informed decisions while AI continuously monitors the mission.",
  },
];

export default function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        Mission Workflow
      </p>

      <h2 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        From raw telemetry to intelligent mission decisions.
      </h2>

      <div className="mt-14 sm:mt-20 space-y-6 sm:space-y-10">

        {workflow.map((step, index) => (
          <div
            key={step.title}
            className="group flex items-start gap-4 sm:gap-6 md:gap-8"
          >
            <div className="flex flex-col items-center">

              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-violet-500 text-base sm:text-xl font-bold shadow-[0_0_25px_rgba(139,92,246,.45)]">
                {index + 1}
              </div>

              {index !== workflow.length - 1 && (
                <div className="mt-2 sm:mt-3 h-12 sm:h-16 w-0.5 bg-linear-to-b from-violet-500 to-transparent" />
              )}

            </div>

            <div className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-white/10">

              <h3 className="text-xl sm:text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}