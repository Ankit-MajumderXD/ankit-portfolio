export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      title: "Artificial Intelligence",
      items: [
        "OpenAI API",
        "Claude API",
        "Prompt Engineering",
        "Natural Language Processing",
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        "FastAPI",
        "Python",
        "REST API",
        "Weather API",
      ],
    },
    {
      title: "Data Sources",
      items: [
        "Government Data",
        "Agricultural Data",
        "Weather Services",
        "Education Resources",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">
      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Technology Stack
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Built with modern AI
        <br />
        and trusted
        <br />
        data sources.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Miro Fish combines large language models, government datasets
        and modern web technologies to deliver intelligent guidance
        for agriculture and education.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-2xl font-bold">
              {category.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}