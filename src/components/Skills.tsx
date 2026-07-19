import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Artificial Intelligence",
    skills: ["Python", "TensorFlow", "OpenCV", "LLMs", "Machine Learning"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-10 py-32"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Skills
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Technologies I work with.
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:bg-white/6 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br from-white/5 via-transparent to-transparent"></div>

            <div className="relative">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                {group.title}
              </div>

              <div className="mt-8 space-y-4">
                {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 text-gray-300 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white"
                >
                  <div className="h-2 w-2 rounded-full bg-white/70"></div>
                  <span>{skill}</span>
                </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}