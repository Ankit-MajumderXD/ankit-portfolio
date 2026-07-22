import { Link } from "react-router-dom";
import heroImg from "../../assets/case-studies/fidus-hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* Cyan Glow */}
      <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 py-32 md:flex-row md:px-20">

        {/* Left */}
        <div className="flex-1">

          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="text-sm uppercase tracking-[0.3em] text-gray-500 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>

          <p className="mt-16 text-sm uppercase tracking-[0.45em] text-cyan-400">
            Healthcare AI Platform
          </p>

          <h1 className="mt-6 text-7xl font-black leading-none md:text-[8rem]">
            FIDUS
          </h1>

          <h2 className="mt-8 max-w-3xl text-2xl font-light leading-tight md:text-5xl">
            AI-Powered
            <br />
            Healthcare
            <br />
            Ecosystem
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-400">
            Connecting patients with verified specialists through
            intelligent recommendations, teleconsultation,
            personalized healthcare guidance and population-level
            health analytics.
          </p>

          <div className="mt-16 flex flex-wrap gap-5">

            <a
              href="#architecture"
              className="rounded-full bg-white px-10 py-5 font-semibold text-black transition hover:scale-105"
            >
              Explore Platform
            </a>

            <a
              href="#footer"
              className="rounded-full border border-white/20 px-10 py-5 transition hover:bg-white/10"
            >
              Connect
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1">

          <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">

            <img
              src={heroImg}
              alt="Fidus Dashboard"
              className="w-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}