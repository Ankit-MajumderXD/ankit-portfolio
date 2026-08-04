export default function Solution() {
  const pillars = [
    {
      title: "AI Healthcare Assistant",
      description:
        "An intelligent assistant that understands patient needs and guides them toward the right healthcare services.",
    },
    {
      title: "Smart Doctor Discovery",
      description:
        "Recommends verified nearby specialists based on medical requirements, location and availability.",
    },
    {
      title: "Teleconsultation",
      description:
        "Book appointments, attend online consultations and manage follow-up care through a unified experience.",
    },
    {
      title: "Health Intelligence",
      description:
        "Transforms anonymized healthcare trends into valuable insights that support better planning and public health awareness.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        The Solution
      </p>

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        One ecosystem.
        <br />
        Every healthcare
        <br />
        interaction.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
        Fidus combines Artificial Intelligence, healthcare expertise
        and intelligent recommendations into a unified platform that
        connects patients, doctors and healthcare providers through
        one seamless experience.
      </p>

      <div className="mt-12 sm:mt-20 grid gap-6 md:grid-cols-2">

        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold">
              {pillar.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
              {pillar.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}