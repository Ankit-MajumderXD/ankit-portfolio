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

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        From question
        <br />
        to intelligent
        <br />
        guidance.
      </h2>

      <div className="mt-20 space-y-10">
        {workflow.map((item) => (
          <div
            key={item.step}
            className="flex gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-2xl font-black text-white">
              {item.step}
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}