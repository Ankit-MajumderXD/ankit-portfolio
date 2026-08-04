export default function Roadmap() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "AI Healthcare Assistant",
      description:
        "Launch the core AI platform with intelligent doctor discovery, appointment booking and teleconsultation support.",
    },
    {
      phase: "Phase 2",
      title: "Healthcare Network",
      description:
        "Expand partnerships with hospitals, clinics and verified healthcare professionals across multiple regions.",
    },
    {
      phase: "Phase 3",
      title: "Predictive Health Intelligence",
      description:
        "Introduce AI-driven health predictions, preventive care recommendations and personalized wellness insights.",
    },
    {
      phase: "Phase 4",
      title: "National Digital Healthcare Platform",
      description:
        "Scale Fidus into a nationwide AI healthcare ecosystem supporting patients, providers and public health initiatives.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Future Roadmap
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Building the
        <br />
        future of digital
        <br />
        healthcare.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Fidus is designed as a long-term healthcare platform that grows
        from intelligent patient assistance into a nationwide ecosystem
        connecting every stakeholder in healthcare.
      </p>

      <div className="mt-12 sm:mt-20 space-y-6 sm:space-y-8">

        {roadmap.map((item) => (
          <div
            key={item.phase}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cyan-400">
              {item.phase}
            </p>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}