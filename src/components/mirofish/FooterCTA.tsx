import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section
      id="footer"
      className="relative overflow-hidden py-40"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-8 text-center">

        <p className="text-sm uppercase tracking-[0.45em] text-emerald-400">
          What's Next?
        </p>

        <h2 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
          Empowering people
          <br />
          through AI.
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-gray-400">
          Miro Fish demonstrates how Artificial Intelligence can bridge
          information gaps for farmers and students by delivering
          accessible, reliable and practical guidance through one platform.
        </p>

        <div className="mt-16 flex flex-wrap justify-center gap-6">

          <a
            href="https://github.com/Ankit-MajumderXD"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-10 py-4 font-semibold text-black transition duration-300 hover:scale-105"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankit-majumder-a52818370?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-10 py-4 transition duration-300 hover:bg-white/10"
          >
            LinkedIn
          </a>

        </div>

        <div className="mt-28 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <p className="uppercase tracking-[0.35em] text-sm text-gray-400">
            Continue Exploring
          </p>

          <h3 className="mt-6 text-4xl font-black">
            Fidus
          </h3>

          <p className="mt-6 text-gray-400 leading-8">
            Discover an AI-powered healthcare platform focused on
            smarter appointments, personalized recommendations and
            accessible digital healthcare.
          </p>

          <Link
            to="/projects/fidus"
            className="mt-10 inline-flex rounded-full bg-emerald-500 px-8 py-4 font-semibold transition hover:scale-105"
          >
            Next Case Study →
          </Link>

        </div>

      </div>
    </section>
  );
}