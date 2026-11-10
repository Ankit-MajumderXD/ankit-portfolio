import type { ReactNode } from "react";
import { getProject } from "../../data/caseStudies";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import BackToPortfolio from "./BackToPortfolio";

type CaseStudyHeroProps = {
  projectId: string;
  /** Short label above the title, e.g. "Flagship Project". */
  eyebrow: string;
  title: string;
  /** Serif italic line under the title. */
  subtitle?: ReactNode;
  description: ReactNode;
  /** Buttons or links, e.g. in-page jumps. */
  actions?: ReactNode;
  /** Optional image or visual. */
  media?: ReactNode;
  /** side: beside the text on large screens (default). wide: full width below. */
  mediaLayout?: "side" | "wide";
};

// Opening of a case study. Status and focus areas come from
// src/data/projects.ts so they always match the homepage card.
export default function CaseStudyHero({
  projectId,
  eyebrow,
  title,
  subtitle,
  description,
  actions,
  media,
  mediaLayout = "side",
}: CaseStudyHeroProps) {
  const project = getProject(projectId);
  const side = Boolean(media) && mediaLayout === "side";

  return (
    <header className="container-page pb-16 pt-32 md:pb-20 md:pt-40">
      <BackToPortfolio />

      <div className={`mt-12 grid gap-12 md:mt-16 ${side ? "lg:grid-cols-12 lg:items-center lg:gap-16" : ""}`}>
        <Reveal className={side ? "lg:col-span-7" : "max-w-[56rem]"}>
          <p className="flex items-start gap-3 font-mono text-eyebrow uppercase text-project">
            <span aria-hidden="true" className="mt-[0.3rem] h-1.5 w-1.5 shrink-0 rounded-full bg-project" />
            {eyebrow}
          </p>
          <h1 className="mt-6 font-display text-display-xl text-fg">{title}</h1>
          {subtitle && (
            <p className="mt-4 font-display text-display-md italic text-fg-muted">{subtitle}</p>
          )}
          <div className="mt-8 max-w-[38rem] text-lg leading-relaxed text-fg-muted md:text-xl md:leading-relaxed">
            {description}
          </div>
          {actions && <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">{actions}</div>}
        </Reveal>

        {media && (
          <Reveal className={side ? "lg:col-span-5" : ""} delay={0.08}>
            {media}
          </Reveal>
        )}
      </div>

      {project && (
        <Reveal delay={0.12}>
          <dl className="mt-16 grid gap-6 border-t border-line pt-6 sm:grid-cols-3 md:mt-20">
            <div>
              <dt><Eyebrow>Status</Eyebrow></dt>
              <dd className="mt-2 text-[0.9375rem] text-fg">{project.status}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt><Eyebrow>Focus</Eyebrow></dt>
              <dd className="mt-2 text-[0.9375rem] text-fg">{project.tech.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
      )}
    </header>
  );
}
