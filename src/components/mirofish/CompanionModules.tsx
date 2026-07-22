export default function CompanionModules() {
  const modules = [
    {
      title: "🌾 Crop Guidance",
      description:
        "AI-powered recommendations help farmers choose suitable crops, improve productivity and adopt better farming practices.",
    },
    {
      title: "🌦 Weather Intelligence",
      description:
        "Real-time weather forecasts and alerts help farmers make informed agricultural decisions and reduce climate-related risks.",
    },
    {
      title: "💰 Financial Assistance",
      description:
        "Provides information about agricultural loans, subsidies, financial schemes and government support programs.",
    },
    {
      title: "🎓 Career Guidance",
      description:
        "Helps students discover career opportunities, educational pathways, scholarships and skill-development resources.",
    },
    {
      title: "🌟 Fortune",
      description:
        "A positive AI companion that delivers motivational guidance and encouragement to help farmers and students stay optimistic during challenges.",
    },
    {
      title: "🔍 Smart Government Search",
      description:
        "An intelligent search engine that brings together official government schemes, scholarships, agricultural programs, financial assistance, crop insurance and trusted application portals in one place.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        AI Companion Modules
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Everything users
        <br />
        need in one
        <br />
        AI platform.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Miro Fish goes beyond crop recommendations by combining
        agriculture, education, government services and AI-powered
        personal assistance into one unified experience.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {modules.map((module) => (
          <div
            key={module.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-2xl font-bold">
              {module.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {module.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}