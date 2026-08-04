export default function Solution() {
  const features = [
    {
      title: "Satellite Image Analysis",
      description:
        "Processes high-resolution satellite imagery to identify terrain, water bodies, vegetation and potential hazards.",
    },
    {
      title: "Safe Landing Prediction",
      description:
        "Uses AI models to rank possible landing locations based on terrain stability, accessibility and surrounding risks.",
    },
    {
      title: "Risk Detection",
      description:
        "Automatically detects mountains, dense forests, urban regions and dangerous terrain that could affect recovery operations.",
    },
    {
      title: "Mission Dashboard",
      description:
        "Provides rescue teams with a single command interface containing AI recommendations, confidence scores and live mission insights.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Solution
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        AI that transforms
        <br />
        satellite data into
        <br />
        rescue intelligence.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
        Astro Rescue AI combines computer vision, satellite imagery and
        predictive machine learning to assist mission teams during rescue
        operations. Instead of manually analysing complex datasets, the
        platform provides actionable recommendations within seconds.
      </p>

      <div className="mt-14 sm:mt-20 grid gap-5 sm:gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}