import { motion } from "framer-motion";
export default function Hero() {
  return (
     <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-12 md:px-20"
     >
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-gray-400">
        AI Engineer • Builder • Problem Solver
      </p>
      <motion.h1
       initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
       className="text-6xl font-black leading-[0.9] md:text-8xl"
      >
        Ankit
        <br />
        Majumder
      </motion.h1>

      <motion.p
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2, duration: 0.8 }}
       className="mt-8 max-w-2xl text-lg leading-8 text-gray-400"
      >
        Building AI-powered products, intuitive web experiences,
        and technology that solves meaningful real-world problems.
      </motion.p>
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.4, duration: 0.8 }}
       className="mt-12 flex gap-5"
      >
        <button className="rounded-full bg-white px-8 py-4 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          View Projects
        </button>

        <button className="rounded-full border border-white/20 px-8 py-4 transition-all duration-300 hover:bg-white/10 hover:border-white/50">
          Contact
        </button>
      </motion.div>
    </motion.section>
  )
}