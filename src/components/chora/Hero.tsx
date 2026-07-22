import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-8 md:px-20">

        <Link
          to="/"
          state={{ scrollTo: "projects" }}
          className="text-sm uppercase tracking-[0.25em] text-gray-500 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <p className="mt-16 text-sm uppercase tracking-[0.4em] text-violet-400">
          Flagship Project
        </p>

        <h1 className="mt-8 text-8xl font-black leading-none md:text-[9rem]">
          CHÕRA
        </h1>

        <h2 className="mt-8 max-w-3xl text-2xl font-light leading-tight md:text-5xl">
          AI-Assisted Predictive
          <br />
          Command Platform
        </h2>

        <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-400">
          Predicting mission outcomes, analysing telemetry,
          identifying operational risks and supporting
          critical decisions across space exploration,
          underwater systems and autonomous robotics.
        </p>

        <div className="mt-16 flex flex-wrap gap-5">

          <a
           href="#architecture"
           className="rounded-full bg-white px-10 py-5 font-semibold text-black transition hover:scale-105"
           >
            Explore Architecture
          </a>

          <a
           href="#contact"
           className="rounded-full border border-white/20 px-10 py-5 transition hover:bg-white/10"
           >
            Connect
          </a>
        </div>

      </div>
    </section>
  );
}