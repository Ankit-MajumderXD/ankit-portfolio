export default function Challenges() {
  const challenges = [
    {
      title: "Cloud Obstruction",
      description:
        "Satellite imagery is frequently obscured by clouds, making terrain analysis difficult and reducing prediction accuracy.",
    },
    {
      title: "Terrain Complexity",
      description:
        "Mountains, forests, water bodies and urban regions require intelligent classification before recommending landing zones.",
    },
    {
      title: "Real-Time Processing",
      description:
        "Emergency situations demand rapid AI inference while maintaining high confidence and reliability.",
    },
    {
      title: "Mission Reliability",
      description:
        "Recommendations must remain explainable, trustworthy and robust enough to support critical rescue decisions.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Engineering Challenges
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Solving problems
        <br />
        where accuracy
        <br />
        matters most.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Building an AI-assisted rescue platform involves more than
        prediction. It requires balancing speed, reliability and
        explainability while operating on complex satellite data.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <h3 className="text-2xl font-bold">
              {challenge.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {challenge.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}