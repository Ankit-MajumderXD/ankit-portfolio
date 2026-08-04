export default function Solution() {
  const features = [
    {
      title: "Crop Intelligence",
      description:
        "Provides AI-powered crop recommendations, disease identification, fertilizer guidance and seasonal farming advice.",
    },
    {
      title: "Weather Insights",
      description:
        "Delivers real-time weather forecasts and alerts to help farmers plan irrigation, harvesting and crop protection.",
    },
    {
      title: "Financial Assistance",
      description:
        "Helps users discover government schemes, subsidies, MSP information and financial resources relevant to agriculture.",
    },
    {
      title: "Career & Education",
      description:
        "Supports students with career guidance, scholarships, competitive exam resources and personalized learning recommendations.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Solution
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        One intelligent platform
        <br />
        serving two communities.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Miro Fish combines Artificial Intelligence, official data sources
        and multilingual interaction to provide reliable support for
        farmers and students through one accessible platform.
      </p>

      <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}