export default function Challenges() {
  const challenges = [
    {
      title: "Interpreting Complex Telemetry",
      description:
        "Mission data originates from multiple heterogeneous sensors, making real-time interpretation difficult without a unified intelligence layer.",
    },
    {
      title: "Balancing Accuracy & Explainability",
      description:
        "Predictions are valuable only when operators understand why they were generated. CHÕRA prioritises transparent AI recommendations over black-box outputs.",
    },
    {
      title: "Scalable Mission Architecture",
      description:
        "The platform is designed to support space missions, underwater robotics and autonomous systems without changing the core intelligence engine.",
    },
  ];

  const learnings = [
    "Human-AI collaboration produces better mission decisions than complete automation.",
    "Explainable AI is essential in safety-critical environments.",
    "Modular system design makes future expansion significantly easier.",
    "Prediction is valuable only when paired with actionable insights.",
  ];

  return (
    <section className="relative overflow-hidden py-40">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-8">

        <p className="uppercase tracking-[0.4em] text-sm text-violet-400">
          Engineering Journey
        </p>

        <h2 className="mt-6 text-6xl font-black leading-tight">
          Challenges &
          <br />
          Learnings
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          Building CHÕRA wasn't just about designing an AI platform—it was about
          understanding how intelligent systems should support people making
          high-stakes decisions.
        </p>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-violet-500/40"
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-24 rounded-[36px] border border-white/10 bg-linear-to-br from-violet-500/10 to-transparent p-12">

          <p className="uppercase tracking-[0.35em] text-violet-400">
            Key Takeaways
          </p>

          <h3 className="mt-5 text-4xl font-black">
            What This Project Taught Me
          </h3>

          <div className="mt-10 space-y-6">

            {learnings.map((item) => (
              <div
                key={item}
                className="flex items-start gap-5"
              >
                <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 font-bold">
                  ✓
                </div>

                <p className="text-lg leading-8 text-gray-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}