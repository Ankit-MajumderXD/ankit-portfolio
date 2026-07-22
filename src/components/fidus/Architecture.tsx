export default function Architecture() {
  const modules = [
    {
      title: "👤 Patients",
      description:
        "Access healthcare services, receive AI recommendations and manage appointments through one interface.",
    },
    {
      title: "🤖 AI Decision Engine",
      description:
        "Processes symptoms, preferences and location to recommend the most appropriate healthcare pathway.",
    },
    {
      title: "🩺 Verified Doctors",
      description:
        "Connects users with trusted specialists based on expertise, availability and proximity.",
    },
    {
      title: "🏥 Hospitals & Clinics",
      description:
        "Healthcare providers receive appointment requests and deliver both physical and virtual consultations.",
    },
    {
      title: "📊 Health Analytics",
      description:
        "Aggregates anonymized healthcare trends to support public health planning and operational insights.",
    },
    {
      title: "🔐 Privacy Layer",
      description:
        "Protects patient information through secure authentication and privacy-preserving data handling.",
    },
  ];

  return (
    <section
      id="architecture"
      className="mx-auto max-w-7xl px-8 py-32 md:px-20"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
        System Architecture
      </p>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
        Connecting every
        <br />
        healthcare
        <br />
        interaction.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        Fidus acts as the intelligent coordination layer between patients,
        healthcare professionals and medical institutions, enabling
        seamless healthcare experiences through Artificial Intelligence.
      </p>

      <div className="mt-20">

        {/* Central AI Engine */}

        <div className="mx-auto mb-16 max-w-md rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-10 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-black text-cyan-400">
            FIDUS AI CORE
          </h3>

          <p className="mt-3 text-gray-300">
            Intelligent Healthcare Coordination Engine
          </p>
        </div>

        {/* Connected Modules */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              <h3 className="text-2xl font-bold">
                {module.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {module.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}