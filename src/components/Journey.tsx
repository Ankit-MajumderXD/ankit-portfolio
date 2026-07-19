import { motion } from "framer-motion";
export default function Journey() {
  const timeline = [
    {
      year: "2025",
      title: "Started B.Tech CSE (AI & ML)",
      description:
        "Began my journey in Computer Science with a focus on Artificial Intelligence and Machine Learning.",
    },
    {
      year: "2026",
      title: "Building AI Products",
      description:
        "Started working on AI-driven projects focused on solving real-world problems.",
    },
    {
      year: "Now",
      title: "Hackathons & Innovation",
      description:
        "Participating in hackathons, learning modern web development, and transforming ideas into products.",
    },
    {
      year: "Future",
      title: "Founder & AI Engineer",
      description:
        "Building impactful AI products that improve lives through technology.",
    },
  ];

  return (
    <motion.section
      id="journey"
      className="mx-auto max-w-6xl px-10 py-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Journey
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Every step builds the next.
      </h2>

      <div className="mt-20 space-y-8">
        {timeline.map((item) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}