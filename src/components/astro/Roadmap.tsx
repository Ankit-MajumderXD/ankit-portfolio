export default function Roadmap() {
  const roadmap = [
    {
      phase: "Phase 1",
      title: "Prototype Development",
      description:
        "Build the initial AI pipeline capable of analysing satellite imagery and predicting safe landing zones.",
    },
    {
      phase: "Phase 2",
      title: "Computer Vision Integration",
      description:
        "Integrate terrain classification, cloud removal and hazard detection using advanced vision models.",
    },
    {
      phase: "Phase 3",
      title: "Mission Command Dashboard",
      description:
        "Develop a real-time dashboard providing rescue teams with AI insights, confidence scores and mission analytics.",
    },
    {
      phase: "Phase 4",
      title: "Real-World Deployment",
      description:
        "Expand the platform with live satellite feeds, GIS integration and operational support for future aerospace missions.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
        Future Roadmap
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Building toward
        <br />
        the future of
        <br />
        AI-assisted missions.
      </h2>

      <div className="mt-20 space-y-8">

        {roadmap.map((item) => (
          <div
            key={item.phase}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/30"
          >
            <p className="text-blue-400 font-semibold uppercase tracking-widest">
              {item.phase}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {item.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}