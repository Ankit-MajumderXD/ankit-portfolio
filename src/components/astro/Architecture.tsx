export default function Architecture() {
  const pipeline = [
    "Satellite Images",
    "Image Preprocessing",
    "Cloud Removal AI",
    "Terrain Analysis",
    "Risk Detection",
    "Safe Landing Prediction",
    "Mission Dashboard",
  ];

  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-8 py-32 md:px-20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Architecture
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        End-to-end AI
        <br />
        rescue pipeline
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Astro Rescue AI transforms raw satellite imagery into actionable
        rescue intelligence using multiple AI models working together in a
        single pipeline.
      </p>

      <div className="mt-24 flex flex-col items-center">

        {pipeline.map((step, index) => (
          <div
            key={step}
            className="flex w-full max-w-3xl flex-col items-center"
          >
            <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:border-blue-400/30 hover:bg-white/10">
              <h3 className="text-2xl font-bold">
                {step}
              </h3>
            </div>

            {index !== pipeline.length - 1 && (
              <div className="my-6 h-12 w-0.5 bg-linear-to-b from-blue-400 to-transparent" />
            )}
          </div>
        ))}

      </div>
    </section>
  );
}