const roadmap = [
  {
    year: "2026",
    title: "Research & Prototype",
    description:
      "Develop the first AI-assisted predictive command platform and validate core concepts through hackathons and research.",
  },
  {
    year: "2027",
    title: "Mission Simulation",
    description:
      "Integrate realistic telemetry simulations and train predictive models using synthetic mission datasets.",
  },
  {
    year: "2028",
    title: "Industry Collaboration",
    description:
      "Collaborate with research organizations and space, marine, and robotics industries for pilot deployments.",
  },
  {
    year: "Future",
    title: "Global Mission Platform",
    description:
      "Transform CHÕRA into a scalable AI mission-control platform supporting autonomous systems across multiple domains.",
  },
];

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        Vision & Roadmap
      </p>

      <h2 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Building the future of intelligent mission control.
      </h2>

      <div className="relative mt-14 sm:mt-20">

        <div className="absolute left-6 sm:left-7 top-0 h-full w-0.5 bg-linear-to-b from-violet-500 to-transparent"></div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">

          {roadmap.map((item) => (

            <div
              key={item.year}
              className="relative flex items-start gap-4 sm:gap-6 md:gap-10"
            >

              <div className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-violet-500 text-sm sm:text-base font-bold shrink-0 shadow-[0_0_30px_rgba(139,92,246,.45)]">
                ✓
              </div>

              <div className="min-w-0 flex-1 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 transition duration-300 hover:border-violet-500/40 hover:bg-white/10">

                <p className="text-xs sm:text-sm text-violet-400 font-semibold tracking-widest uppercase">
                  {item.year}
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}