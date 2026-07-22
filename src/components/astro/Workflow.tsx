export default function Workflow() {
  const workflow = [
    {
      step: "01",
      title: "Satellite Emergency",
      description:
        "A satellite experiences an unexpected failure or uncontrolled descent, triggering the rescue workflow.",
    },
    {
      step: "02",
      title: "Data Collection",
      description:
        "Satellite imagery, telemetry and environmental information are gathered from multiple sources.",
    },
    {
      step: "03",
      title: "AI Analysis",
      description:
        "Computer vision models analyse terrain, remove cloud interference and identify hazardous regions.",
    },
    {
      step: "04",
      title: "Landing Prediction",
      description:
        "The AI ranks the safest landing zones using terrain quality, accessibility and mission constraints.",
    },
    {
      step: "05",
      title: "Mission Dashboard",
      description:
        "Rescue teams receive interactive recommendations, confidence scores and operational insights.",
    },
    {
      step: "06",
      title: "Recovery Operation",
      description:
        "Ground teams execute the rescue using AI-assisted guidance to reduce response time and operational risk.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">
      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Workflow
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        From emergency
        <br />
        detection to
        <br />
        successful recovery.
      </h2>

      <div className="mt-20 space-y-10">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="flex gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl font-black text-white">
              {item.step}
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}