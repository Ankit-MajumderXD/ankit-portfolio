export default function Architecture() {
  const steps = [
    {
      title: "Telemetry",
      description:
        "Live mission data collected from satellites, underwater systems and autonomous robots.",
    },
    {
      title: "AI Processing",
      description:
        "Machine learning models clean, analyse and correlate incoming telemetry in real time.",
    },
    {
      title: "Risk Engine",
      description:
        "Predictive algorithms estimate mission risks and detect anomalies before they escalate.",
    },
    {
      title: "Decision Support",
      description:
        "Operators receive AI-generated recommendations, confidence scores and actionable insights.",
    },
  ];

  return (
    <section 
     id="architecture"
    className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        System Architecture
      </p>

      <h2 className="mt-8 text-5xl font-black max-w-4xl leading-tight">
        Turning raw telemetry into intelligent decisions.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        CHÕRA follows a streamlined AI pipeline that transforms thousands of
        mission signals into meaningful predictions and recommendations within
        seconds.
      </p>

      <div className="mt-24 flex flex-col gap-12">

        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-8">

            <div className="flex flex-col items-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500 text-xl font-bold shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div className="mt-2 h-20 w-0.5 bg-linear-to-b from-violet-500 to-transparent"></div>
              )}

            </div>

            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:border-violet-500/40 hover:bg-white/10">

              <h3 className="text-3xl font-bold">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {step.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}