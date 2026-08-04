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

      <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
        Built using modern AI infrastructure.
      </h2>

      <p className="mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
        CHÕRA combines modern frontend technologies with scalable AI
        infrastructure to deliver fast, reliable and intelligent
        mission support.
      </p>

      <div className="mt-14 sm:mt-20 flex flex-wrap gap-3 sm:gap-5">

        {technologies.map((tech) => (

          <div
            key={tech}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
          >
            {tech}
          </div>

        ))}

      </div>

    </section>
  );
}