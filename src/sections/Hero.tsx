import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import portrait from "../assets/profile-portrait.webp";

// 1×1 transparent GIF: below lg the portrait is hidden, so this source stops
// the browser downloading the real image there.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
import BackgroundPaths from "../components/ui/background-paths";
import ButtonLink from "../components/ui/ButtonLink";

const EASE = [0.22, 1, 0.36, 1] as const;

// Small upward fade; MotionConfig drops the movement for reduced motion.
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: EASE },
});

// Facts taken from the About and Journey sections.
const FACTS = [
  { label: "Studying", value: "B.Tech CSE (AI & ML)" },
  { label: "Based in", value: "Bangalore, India" },
  { label: "Exploring", value: "AI · Product · Modern web · Hackathons" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Decorative paths, faded out behind the left-aligned text and at the bottom edge. */}
      <BackgroundPaths className="[mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent_10%,black_75%),linear-gradient(to_bottom,black_60%,transparent)]" />
      <div className="container-page pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <motion.p
              {...rise(0)}
              className="flex items-start gap-3 font-mono text-eyebrow uppercase text-fg-muted"
            >
              <span aria-hidden="true" className="mt-[0.3rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              AI Engineer · Builder · Problem Solver
            </motion.p>

            <motion.h1
              {...rise(0.06)}
              id="hero-title"
              className="mt-6 font-display text-display-xl text-fg"
            >
              Ankit <em className="text-fg-muted">Majumder</em>
            </motion.h1>

            <motion.p
              {...rise(0.12)}
              className="mt-8 max-w-[36rem] text-lg leading-relaxed text-fg-muted md:text-xl md:leading-relaxed"
            >
              A B.Tech Computer Science &amp; Engineering (AI&nbsp;&amp;&nbsp;ML)
              student building{" "}
              <span className="whitespace-nowrap text-accent">AI-powered products</span>,
              intuitive web experiences and technology that solves meaningful{" "}
              <span className="whitespace-nowrap">real-world</span> problems.
            </motion.p>

            <motion.div
              {...rise(0.18)}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4"
            >
              <ButtonLink to="/" state={{ scrollTo: "projects" }} variant="primary">
                View projects
                <ArrowDownRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </ButtonLink>
              <ButtonLink to="/" state={{ scrollTo: "contact" }} variant="secondary">
                Contact
              </ButtonLink>
              <ButtonLink
                to="/"
                state={{ scrollTo: "about" }}
                variant="ghost"
                className="sm:ml-2"
              >
                About me
              </ButtonLink>
            </motion.div>
          </div>

          {/* Portrait: desktop only; the navbar already shows it on small screens. */}
          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="hidden lg:col-span-4 lg:block"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-panel border border-line bg-surface-2">
              <picture>
                <source media="(max-width: 1023px)" srcSet={BLANK} />
                {/* Largest above-the-fold element on desktop: fetch it first. */}
                <img
                  src={portrait}
                  alt="Portrait of Ankit Majumder"
                  width={800}
                  height={1202}
                  fetchPriority="high"
                  className="h-full w-full object-cover object-[50%_25%]"
                />
              </picture>
            </div>
          </motion.figure>
        </div>

        <motion.dl
          {...rise(0.24)}
          className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 md:mt-20"
        >
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-eyebrow uppercase text-fg-subtle">
                {fact.label}
              </dt>
              <dd className="mt-2 text-[0.9375rem] text-fg">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
