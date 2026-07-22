import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[180px]" />

      <div className="relative mx-auto w-full max-w-7xl px-8 md:px-20">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            state={{ scrollTo: "projects" }}
            className="text-sm uppercase tracking-[0.25em] text-gray-500 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-16 text-sm uppercase tracking-[0.4em] text-violet-400"
        >
          Flagship Project
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-7xl font-black leading-none md:text-[9rem]"
        >
          CHÕRA
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 max-w-3xl text-2xl font-light leading-tight md:text-5xl"
        >
          AI-Assisted Predictive
          <br />
          Command Platform
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-10 max-w-2xl text-lg leading-9 text-gray-400"
        >
          Predicting mission outcomes, analysing telemetry,
          identifying operational risks and supporting
          critical decisions across space exploration,
          underwater systems and autonomous robotics.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-5"
        >
          <a
            href="#architecture"
            className="rounded-full bg-white px-10 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Explore Architecture
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-10 py-5 transition-all duration-300 hover:bg-white/10 hover:border-white/50"
          >
            Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}