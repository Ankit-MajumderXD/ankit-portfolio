export default function Workflow() {
  const workflow = [
    {
      step: "01",
      title: "User Query",
      description:
        "A farmer or student asks a question in their preferred language through the web interface.",
    },
    {
      step: "02",
      title: "Intent Detection",
      description:
        "The AI understands whether the request relates to farming, weather, finance, education or career guidance.",
    },
    {
      step: "03",
      title: "Knowledge Retrieval",
      description:
        "Relevant information is collected from trusted government resources, weather services and educational databases.",
    },
    {
      step: "04",
      title: "AI Processing",
      description:
        "The language model combines user context with retrieved knowledge to generate a reliable response.",
    },
    {
      step: "05",
      title: "Personalized Recommendation",
      description:
        "The platform provides practical guidance tailored to the user's situation instead of generic answers.",
    },
    {
      step: "06",
      title: "Continuous Learning",
      description:
        "Future updates will use user feedback to improve recommendations and provide more personalized assistance.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Workflow
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        From question
        <br />
        to intelligent
        <br />
        guidance.
      </h2>

      <div className="mt-12 md:mt-20 space-y-6 md:space-y-10">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="flex gap-4 md:gap-8 rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-base sm:text-lg md:text-2xl font-black text-white">
              {item.step}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-6 sm:leading-7 md:leading-8 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}