import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto max-w-5xl px-10 py-32 text-center"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Contact
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Let's Build Something Meaningful.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        Whether it's an internship, a hackathon, a startup idea,
        or an AI project, I'd love to connect and build something impactful.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-5">
        <a
          href="mailto:roguefist123@gmail.com"
          className="rounded-full bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/ankit-majumder-a52818370?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Ankit-MajumderXD"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}