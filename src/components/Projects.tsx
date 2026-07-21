import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-10 py-32"
    >
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Featured Products
      </p>

      <h2 className="mt-4 text-5xl font-black">
        Building products with purpose.
      </h2>

      <p className="mt-6 max-w-2xl leading-8 text-gray-400">
        Every project starts with a real-world problem. My focus is on
        combining AI, modern web technologies, and thoughtful product
        design to build solutions that create meaningful impact.
      </p>

      <div className="mt-20 grid gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl"
          >
            {/* Background Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black/60" />

            <div className="relative flex h-full flex-col p-8 md:p-10">
              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-black leading-tight">
                  {project.title}
                </h3>

                <span className="w-fit rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-300">
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="mt-8 max-w-3xl leading-8 text-gray-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-10 flex gap-4">
                <Link
                  to={`/projects/${project.id}`}
                  className="rounded-full bg-white px-7 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                >
                  Case Study →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}