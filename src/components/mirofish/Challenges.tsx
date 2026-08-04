export default function Challenges() {
  const challenges = [
    {
      title: "Data Reliability",
      description:
        "Agricultural and educational information changes frequently, requiring continuous updates from trusted sources.",
    },
    {
      title: "Multilingual Accessibility",
      description:
        "Users communicate in different regional languages, making natural language understanding a key challenge.",
    },
    {
      title: "Rural Connectivity",
      description:
        "Many users have limited internet access, requiring lightweight interfaces and efficient data delivery.",
    },
    {
      title: "Trustworthy AI",
      description:
        "Recommendations must remain transparent, explainable and supported by verified information rather than assumptions.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-emerald-400">
        Engineering Challenges
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Building AI people
        <br />
        can actually
        <br />
        trust.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Creating an assistant for millions of users requires balancing
        accessibility, accuracy and reliability while keeping the platform
        simple enough for anyone to use.
      </p>

      <div className="mt-12 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2">

        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-400/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              {challenge.title}
            </h3>

            <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
              {challenge.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}