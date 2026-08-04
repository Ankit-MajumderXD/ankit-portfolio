export default function Architecture() {
  const modules = [
    {
      title: "🌾 Crop Advisory",
      description:
        "AI-powered recommendations for crops, fertilizers, irrigation and disease management.",
    },
    {
      title: "🌦 Weather Intelligence",
      description:
        "Real-time forecasts, rainfall predictions and weather alerts for better planning.",
    },
    {
      title: "💰 Financial Assistance",
      description:
        "Access to government schemes, subsidies, MSP information and financial guidance.",
    },
    {
      title: "🎓 Education & Careers",
      description:
        "Career guidance, scholarship recommendations and learning resources for students.",
    },
  ];

  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-8 py-32 md:px-20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Platform Architecture
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        One AI platform.
        <br />
        Multiple intelligent
        <br />
        services.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Miro Fish brings together multiple AI-powered modules under a
        unified assistant, enabling users to access agriculture,
        education and financial insights from a single interface.
      </p>

      <div className="mt-20 flex flex-col items-center">

        <div className="mb-12 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 px-6 sm:px-10 md:px-12 py-6 sm:py-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400">
            MIRO FISH AI
          </h3>

          <p className="mt-3 text-gray-300">
            Intelligent Decision Engine
          </p>
        </div>

        <div className="grid w-full gap-6 md:gap-8 md:grid-cols-2">

          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
            >
              <h3 className="text-xl sm:text-2xl font-bold">
                {module.title}
              </h3>

              <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
                {module.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}