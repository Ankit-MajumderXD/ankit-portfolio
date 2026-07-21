export default function Solution() {
  const cards = [
    {
      title: "Predictive AI",
      description:
        "Machine learning models analyse incoming telemetry to forecast anomalies before they become mission-critical.",
    },
    {
      title: "Unified Dashboard",
      description:
        "A single interface combines mission status, system health, alerts and AI insights for faster decision making.",
    },
    {
      title: "Risk Intelligence",
      description:
        "Every subsystem receives a continuously updated confidence score so operators instantly know where attention is needed.",
    },
    {
      title: "Decision Support",
      description:
        "Instead of replacing engineers, CHÕRA assists them by recommending the safest and most efficient next actions.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        The Solution
      </p>

      <h2 className="mt-8 max-w-4xl text-5xl font-black leading-tight">
        CHÕRA transforms thousands of telemetry signals into
        intelligent mission decisions in real time.
      </h2>

      <p className="mt-10 max-w-3xl text-lg leading-9 text-gray-400">
        Rather than overwhelming operators with raw data,
        CHÕRA continuously analyses mission telemetry,
        predicts operational risks, highlights anomalies,
        and recommends the next best action through an
        AI-assisted command platform.
      </p>

      <div className="mt-24 grid gap-8 md:grid-cols-2">

        {cards.map((card) => (

          <div
            key={card.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
          >

            <div className="mb-8 h-3 w-20 rounded-full bg-violet-500 transition-all duration-500 group-hover:w-32"></div>

            <h3 className="text-3xl font-bold">
              {card.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {card.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}