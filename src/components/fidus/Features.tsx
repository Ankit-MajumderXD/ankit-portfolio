export default function Features() {
  const features = [
    {
      title: "🏥 Smart Doctor Discovery",
      description:
        "Find verified nearby specialists using AI recommendations based on symptoms, specialty, location and availability.",
    },
    {
      title: "💬 AI Health Assistant",
      description:
        "Receive intelligent healthcare guidance before visiting a doctor, helping users make informed medical decisions.",
    },
    {
      title: "📅 Teleconsultation & Appointments",
      description:
        "Book appointments, attend virtual consultations and manage follow-up visits from one unified platform.",
    },
    {
      title: "📊 Population Health Insights",
      description:
        "Privacy-preserving analytics help identify healthcare trends, disease patterns and regional medical demands.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Core Capabilities
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        More than an
        <br />
        appointment
        <br />
        booking app.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Fidus integrates Artificial Intelligence with modern healthcare
        workflows to provide intelligent recommendations, seamless
        consultations and data-driven healthcare insights.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}