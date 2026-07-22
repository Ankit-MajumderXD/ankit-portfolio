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
        "LLMs",
        "Prompt Engineering",
      ],
    },
    {
      title: "Backend",
      items: [
        "FastAPI",
        "Python",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      title: "Healthcare Services",
      items: [
        "Maps API",
        "Doctor Directory",
        "Teleconsultation",
        "Health Analytics",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Technology Stack
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Built with
        <br />
        modern AI
        <br />
        technologies.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Fidus combines modern web technologies, Artificial Intelligence,
        secure backend services and healthcare integrations to create a
        scalable digital healthcare ecosystem.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
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