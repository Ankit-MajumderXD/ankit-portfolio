export default function Differentiation() {
  const points = [
    {
      title: "AI-Powered Recommendations",
      description:
        "Instead of showing every available doctor, Fidus intelligently recommends the most suitable specialist based on symptoms, location and medical needs.",
    },
    {
      title: "Healthcare Coordination",
      description:
        "Patients receive guidance before, during and after consultations, creating a continuous healthcare journey rather than a single appointment.",
    },
    {
      title: "Privacy-First Analytics",
      description:
        "Healthcare insights are generated from anonymized data, helping improve public health without exposing personal information.",
    },
    {
      title: "Multi-Stakeholder Platform",
      description:
        "Patients, doctors, hospitals, researchers and government agencies all benefit from one connected healthcare ecosystem.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Why Fidus?
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Designed to go
        <br />
        beyond traditional
        <br />
        healthcare apps.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Fidus isn't simply another appointment platform. It combines
        Artificial Intelligence, healthcare coordination and data-driven
        insights into one connected experience.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold">
              {point.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {point.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}