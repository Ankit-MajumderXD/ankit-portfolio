import {motion} from "framer-motion"
export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      id="about"
      className="mx-auto max-w-6xl px-10 py-32"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        About
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Building with curiosity,
        driven by purpose.
      </h2>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-lg leading-8 text-gray-300">
            I'm Ankit Majumder, a B.Tech Computer Science
            (AI & ML) student based in Bangalore, India.
            I enjoy building AI-powered products that solve
            meaningful real-world problems through technology,
            design, and innovation.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            My interests span Artificial Intelligence,
            Product Development, Modern Web Technologies,
            and Startup Innovation. Every project I build is
            an opportunity to learn, experiment, and create
            something that can make a positive impact.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="text-2xl font-bold">
            Currently Exploring
          </h3>

          <ul className="mt-8 space-y-4 text-gray-300">
            <li className="transition-all duration-300 hover:translate-x-2 hover:text-white">
             Artificial Intelligence
            </li>

            <li className="transition-all duration-300 hover:translate-x-2 hover:text-white">
             Product Development
            </li>

            <li className="transition-all duration-300 hover:translate-x-2 hover:text-white">
             Modern Web Development
            </li>

            <li className="transition-all duration-300 hover:translate-x-2 hover:text-white">
             Startup Innovation
            </li>

            <li className="transition-all duration-300 hover:translate-x-2 hover:text-white">
              Hackathons & Competitions
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}