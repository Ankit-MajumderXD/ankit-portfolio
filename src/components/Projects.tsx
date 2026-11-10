import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { PROJECT_ACCENT } from "../data/caseStudies";
import Eyebrow from "./ui/Eyebrow";

type Project = (typeof projects)[number];

// Presentation-only details per project id: dimensions are the source image
// sizes; focus picks the crop for the 4:3 frame.
const PRESENTATION: Record<string, { width: number; height: number; focus: string }> = {
  chora: { width: 816, height: 1456, focus: "50% 45%" },
  "astro-rescue-ai": { width: 900, height: 1600, focus: "50% 55%" },
  "miro-fish": { width: 1200, height: 1350, focus: "50% 35%" },
  fidus: { width: 700, height: 933, focus: "50% 38%" },
};

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const look = PRESENTATION[project.id];
  const number = String(index + 1).padStart(2, "0");
  const titleId = `project-${project.id}-title`;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      data-project={PROJECT_ACCENT[project.id]}
      aria-labelledby={titleId}
      // Reduced motion: fade only, from the final position.
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: EASE }}
      className="group relative flex flex-col"
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-panel border border-line bg-surface-2 transition-[border-color] duration-300 group-hover:border-line-strong group-has-[a:focus-visible]:outline-2 group-has-[a:focus-visible]:outline-offset-4 group-has-[a:focus-visible]:outline-accent">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            width={look?.width}
            height={look?.height}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: look?.focus }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-project-soft font-display text-[8rem] leading-none text-project"
          >
            {project.title.charAt(0)}
          </div>
        )}

        <span
          aria-hidden="true"
          className="absolute left-4 top-4 rounded-control bg-canvas/85 px-3 py-1 font-mono text-xs text-fg backdrop-blur-sm"
        >
          {number}
        </span>

        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-canvas text-fg shadow-card transition-colors duration-300 group-hover:bg-fg group-hover:text-canvas"
        >
          <ArrowUpRight
            className="h-5 w-5 transition-transform duration-300 ease-out-soft group-hover:rotate-45"
            strokeWidth={1.75}
          />
        </span>
      </div>

      {/* Details: always visible, nothing depends on hover */}
      <div className="mt-6 flex flex-1 flex-col">
        <p className="flex items-center gap-2 font-mono text-eyebrow uppercase text-project">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-project" />
          {project.status}
        </p>

        <h3 id={titleId} className="mt-3 font-display text-display-md text-fg">
          {/* Stretched link: the whole card is clickable, but the accessible
              name stays short. */}
          <Link
            to={`/projects/${project.id}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {project.title}
            <span className="sr-only">, read case study</span>
          </Link>
        </h3>

        <p className="mt-3 max-w-[34rem] leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <ul aria-label="Focus areas" className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li
              key={item}
              className="rounded-control border border-line px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-wider text-fg-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <span
          aria-hidden="true"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors duration-200 group-hover:text-accent"
        >
          Read case study
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <section id="projects" aria-labelledby="projects-title">
      {/* Less top padding: the hero already ends with a rule and spacing. */}
      <div className="container-page pb-section pt-12 md:pt-16">
        <header className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>Featured Products · {count}</Eyebrow>
            <h2
              id="projects-title"
              className="mt-4 font-display text-display-lg text-fg"
            >
              Building products{" "}
              <em className="block text-fg-muted">with purpose.</em>
            </h2>
          </div>
          <p className="max-w-[34rem] leading-relaxed text-fg-muted lg:col-span-5">
            Every project starts with a real-world problem. My focus is on
            combining AI, modern web technologies, and thoughtful product
            design to build solutions that create meaningful impact.
          </p>
        </header>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:mt-20 md:grid-cols-2 lg:gap-x-14 lg:[&>*:nth-child(even)]:mt-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
