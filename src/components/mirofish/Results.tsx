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

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Designed to create
        <br />
        meaningful impact
        <br />
        through AI.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Miro Fish demonstrates how one intelligent platform can simplify
        access to critical information for farmers and students by combining
        multiple services into a single AI-powered experience.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}