export default function Results() {
  const highlights = [
    {
      title: "Unified AI Platform",
      description:
        "Brings agriculture, education, finance and weather assistance into one intelligent interface.",
    },
    {
      title: "Multi-Domain Assistance",
      description:
        "Supports both farmers and students without requiring separate applications or services.",
    },
    {
      title: "Government-Oriented Information",
      description:
        "Designed to integrate trusted government schemes, weather data and educational resources.",
    },
    {
      title: "Accessible Experience",
      description:
        "Built as a lightweight web platform with a simple interface for broad accessibility.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Project Highlights
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Designed to create
        <br />
        meaningful impact
        <br />
        through AI.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Miro Fish demonstrates how one intelligent platform can simplify
        access to critical information for farmers and students by combining
        multiple services into a single AI-powered experience.
      </p>

      <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">

        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}