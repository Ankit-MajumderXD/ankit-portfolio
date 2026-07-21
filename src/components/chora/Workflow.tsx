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

      <h2 className="mt-8 text-5xl font-black max-w-4xl">
        From raw telemetry to intelligent mission decisions.
      </h2>

      <div className="mt-24 space-y-10">

        {workflow.map((step, index) => (
          <div
            key={step.title}
            className="group flex items-start gap-8"
          >
            <div className="flex flex-col items-center">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500 font-bold text-xl shadow-[0_0_25px_rgba(139,92,246,.45)]">
                {index + 1}
              </div>

              {index !== workflow.length - 1 && (
                <div className="mt-3 h-16 w-0.5 bg-linear-to-b from-violet-500 to-transparent" />
              )}

            </div>

            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 group-hover:border-violet-500/40 group-hover:bg-white/10">

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}