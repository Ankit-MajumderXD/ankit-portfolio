export default function Ecosystem() {
  const ecosystem = [
    {
      title: "👨‍⚕️ Patients",
      description:
        "Receive AI-guided healthcare recommendations, discover specialists and manage appointments effortlessly.",
    },
    {
      title: "🩺 Doctors",
      description:
        "Connect with the right patients, reduce administrative work and improve consultation efficiency.",
    },
    {
      title: "🏥 Hospitals",
      description:
        "Streamline patient flow, appointment management and healthcare coordination across departments.",
    },
    {
      title: "🏛 Government",
      description:
        "Leverage anonymized healthcare trends for better public health planning and resource allocation.",
    },
    {
      title: "💳 Insurance",
      description:
        "Enable faster verification processes and support digital healthcare ecosystems with trusted data.",
    },
    {
      title: "📊 Researchers",
      description:
        "Study aggregated healthcare patterns and population insights while preserving patient privacy.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32 md:px-20">

      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        Healthcare Ecosystem
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        One platform.
        <br />
        Every stakeholder.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Fidus isn't built solely for patients. It creates value across
        the entire healthcare ecosystem by connecting people,
        providers and institutions through intelligent coordination.
      </p>

      <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {ecosystem.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold">
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