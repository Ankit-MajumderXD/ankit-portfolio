export default function Roadmap() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "AI Assistant Foundation",
      description:
        "Develop the core conversational AI capable of assisting farmers and students through a unified platform.",
    },
    {
      phase: "Phase 2",
      title: "Government Data Integration",
      description:
        "Connect official agricultural schemes, weather services, MSP information and educational resources.",
    },
    {
      phase: "Phase 3",
      title: "Regional Language Support",
      description:
        "Expand multilingual capabilities to support major Indian regional languages for improved accessibility.",
    },
    {
      phase: "Phase 4",
      title: "Personalized AI Guidance",
      description:
        "Introduce personalized recommendations based on user profiles, location, crops and academic interests.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Future Roadmap
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Growing into a
        <br />
        nationwide AI
        <br />
        assistance platform.
      </h2>

      <div className="mt-20 space-y-8">

        {roadmap.map((item) => (
          <div
            key={item.phase}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <p className="font-semibold uppercase tracking-widest text-emerald-400">
              {item.phase}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}