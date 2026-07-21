const technologies = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "PyTorch",
  "OpenCV",
  "TensorFlow",
  "PostgreSQL",
  "Docker",
  "Redis",
  "Vercel",
  "GitHub Actions",
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-40">

      <p className="text-sm uppercase tracking-[0.4em] text-violet-400">
        Technology Stack
      </p>

      <h2 className="mt-8 text-5xl font-black">
        Built using modern AI infrastructure.
      </h2>

      <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-400">
        CHÕRA combines modern frontend technologies with scalable AI
        infrastructure to deliver fast, reliable and intelligent
        mission support.
      </p>

      <div className="mt-20 flex flex-wrap gap-5">

        {technologies.map((tech) => (

          <div
            key={tech}
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-lg transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
          >
            {tech}
          </div>

        ))}

      </div>

    </section>
  );
}