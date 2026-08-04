import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section
      id="footer"
      className="relative overflow-hidden py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">

        <p className="text-sm uppercase tracking-[0.45em] text-blue-400">
          What's Next?
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
          Building AI for
          <br />
          critical missions.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400 px-2">
          Astro Rescue AI explores how Artificial Intelligence,
          Computer Vision and Satellite Intelligence can transform
          emergency response for future aerospace missions.
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

        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10 backdrop-blur-xl">

          <p className="uppercase tracking-[0.35em] text-sm text-gray-400">
            Continue Exploring
          </p>

          <h3 className="mt-5 text-3xl sm:text-4xl font-black">
            Miro Fish
          </h3>

          <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">
            Explore an AI-powered assistant designed to help farmers and
            students with crop guidance, weather insights, finance and
            career support.
          </p>

          <Link
            to="/projects/miro-fish"
            className="mt-8 inline-flex rounded-full bg-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition hover:scale-105"
          >
            Next Case Study →
          </Link>

        </div>

      </div>
    </section>
  );
}