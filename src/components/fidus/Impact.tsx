export default function Impact() {
  const impacts = [
    {
      title: "Better Patient Access",
      description:
        "Makes it easier for patients to discover trusted healthcare professionals and receive timely medical guidance.",
    },
    {
      title: "Smarter Healthcare Decisions",
      description:
        "AI-assisted recommendations help users navigate healthcare options with greater confidence.",
    },
    {
      title: "Operational Efficiency",
      description:
        "Supports hospitals and doctors with streamlined appointment management and patient coordination.",
    },
    {
      title: "Public Health Intelligence",
      description:
        "Anonymized healthcare trends can assist organizations in understanding regional healthcare needs.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Potential Impact
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Technology that
        <br />
        improves healthcare
        <br />
        experiences.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Fidus is designed to simplify healthcare journeys through
        intelligent recommendations, stronger coordination and
        accessible digital services while supporting the broader
        healthcare ecosystem.
      </p>

      <div className="mt-12 sm:mt-20 grid gap-6 md:grid-cols-2">

        {impacts.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
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