import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section
      id="footer"
      className="relative overflow-hidden py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">

        <p className="text-sm uppercase tracking-[0.45em] text-cyan-400">
          Thank You
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
          Building the future
          <br />
          of healthcare
          <br />
          with AI.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
          Fidus explores how Artificial Intelligence can simplify healthcare
          journeys by connecting patients, healthcare professionals and
          intelligent digital services into one modern ecosystem.
        </p>

        <div className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">

          <a
            href="https://github.com/Ankit-MajumderXD"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black transition duration-300 hover:scale-105"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-majumder-a52818370?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base transition duration-300 hover:bg-white/10"
          >
            LinkedIn
          </a>

        </div>

        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl">

          <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
            Back to Portfolio
          </p>

          <h3 className="mt-5 text-3xl sm:text-4xl font-black">
            Explore More Projects
          </h3>

          <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
            Continue exploring AI-powered products, intelligent systems
            and modern digital experiences built to solve meaningful
            real-world problems.
          </p>

          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition duration-300 hover:scale-105"
          >
            ← Back to Portfolio
          </Link>

        </div>

      </div>
    </section>
  );
}