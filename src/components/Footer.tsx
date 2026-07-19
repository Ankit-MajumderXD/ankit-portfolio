import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-t border-white/10 mt-24 py-12"
    >
      <div className="mx-auto max-w-6xl px-8 text-center">

        <h3 className="text-2xl font-bold">
          @roguefista
        </h3>

        <p className="mt-3 text-gray-400">
          Designing intelligent products that solve real-world problems.
          <br />
          one idea at a time.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          ©️ 2026 All rights reserved.
        </p>

      </div>
    </motion.footer>
  );
}