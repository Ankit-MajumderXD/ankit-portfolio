import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getCaseStudyNeighbours, PROJECT_ACCENT, type Project } from "../../data/caseStudies";
import Eyebrow from "../ui/Eyebrow";

const CARD =
  "group relative flex flex-col rounded-card border border-line bg-surface transition-colors duration-300 hover:border-line-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent";

// Stretched link: the whole card is clickable, accessible name stays short.
const STRETCHED = "after:absolute after:inset-0 after:content-[''] focus-visible:outline-none";

type NeighbourProps = {
  project: Project;
  direction: "previous" | "next";
  /** Optional page-specific copy (used for the next card). */
  label?: string;
  description?: string;
  cta?: string;
};

function NeighbourLink({ project, direction, label, description, cta }: NeighbourProps) {
  const isNext = direction === "next";
  const Arrow = isNext ? ArrowRight : ArrowLeft;

  return (
    <div data-project={PROJECT_ACCENT[project.id]} className={`${CARD} p-6 md:p-8 ${isNext ? "md:items-end md:text-right" : ""}`}>
      <Eyebrow>{label ?? (isNext ? "Next case study" : "Previous case study")}</Eyebrow>
      <p className="mt-4 flex items-center gap-3 font-display text-display-md text-fg">
        {!isNext && <Arrow aria-hidden="true" className="h-6 w-6 shrink-0 text-project transition-transform duration-300 ease-out-soft group-hover:-translate-x-1" strokeWidth={1.5} />}
        <Link to={`/projects/${project.id}`} className={STRETCHED}>
          {project.title}
          <span className="sr-only">, {isNext ? "next" : "previous"} case study</span>
        </Link>
        {isNext && <Arrow aria-hidden="true" className="h-6 w-6 shrink-0 text-project transition-transform duration-300 ease-out-soft group-hover:translate-x-1" strokeWidth={1.5} />}
      </p>
      <p className="mt-3 max-w-[30rem] leading-relaxed text-fg-muted">{description ?? project.description}</p>
      {cta && (
        <p aria-hidden="true" className="mt-5 inline-flex items-center gap-2 font-medium text-project">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
        </p>
      )}
    </div>
  );
}

type FeatureProps = {
  project: Project;
  label: string;
  description: string;
  cta: string;
};

// Full-width "next" feature, used when there's no previous case study so the
// row isn't a lone card. The cover is the project's mood artwork (decorative).
function NextFeature({ project, label, description, cta }: FeatureProps) {
  return (
    <div data-project={PROJECT_ACCENT[project.id]} className={`${CARD} gap-6 p-4 sm:p-6 md:grid md:grid-cols-12 md:items-center md:gap-10 md:p-6`}>
      {project.image && (
        <div className="aspect-[16/10] overflow-hidden rounded-[0.875rem] bg-surface-2 md:col-span-5">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="px-2 pb-2 md:col-span-7 md:px-0 md:pb-0">
        <Eyebrow>{label}</Eyebrow>
        <p className="mt-4 font-display text-display-lg text-fg">
          <Link to={`/projects/${project.id}`} className={STRETCHED}>
            {project.title}
            <span className="sr-only">, next case study</span>
          </Link>
        </p>
        <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-fg-muted">{description}</p>
        <p aria-hidden="true" className="mt-6 inline-flex items-center gap-2 font-medium text-project">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-1" />
        </p>
      </div>
    </div>
  );
}

type CaseStudyNavigationProps = {
  currentId: string;
  /** Overrides for the next-project feature (keep a page's existing copy). */
  nextLabel?: string;
  nextDescription?: string;
  nextCta?: string;
  /** Overrides for the last page's "back to portfolio" card. */
  endLabel?: string;
  endTitle?: string;
  endDescription?: string;
  endCta?: string;
};

// Previous / next case study, in the order of src/data/projects.ts. The first
// case study shows a full-width "next" feature; the last links back to the
// portfolio instead of a next project.
export default function CaseStudyNavigation({
  currentId,
  nextLabel,
  nextDescription,
  nextCta,
  endLabel = "Explore more",
  endTitle = "All projects",
  endDescription = "Back to the portfolio's project list.",
  endCta,
}: CaseStudyNavigationProps) {
  const { previous, next } = getCaseStudyNeighbours(currentId);

  return (
    <nav aria-label="Case studies" className="border-t border-line">
      <div className="container-page grid gap-4 py-12 md:grid-cols-2 md:gap-6 md:py-16">
        {!previous && next ? (
          <div className="md:col-span-2">
            <NextFeature
              project={next}
              label={nextLabel ?? "Next case study"}
              description={nextDescription ?? next.description}
              cta={nextCta ?? "Next case study"}
            />
          </div>
        ) : (
          <>
            {previous && <NeighbourLink project={previous} direction="previous" />}
            {next ? (
              <NeighbourLink project={next} direction="next" label={nextLabel} description={nextDescription} cta={nextCta} />
            ) : (
              <div className={`${CARD} p-6 md:items-end md:p-8 md:text-right`}>
                <Eyebrow>{endLabel}</Eyebrow>
                <p className="mt-4 font-display text-display-md text-fg">
                  <Link to="/" state={{ scrollTo: "projects" }} className={STRETCHED}>
                    {endTitle}
                  </Link>
                </p>
                <p className="mt-3 max-w-[30rem] leading-relaxed text-fg-muted">{endDescription}</p>
                {endCta && (
                  <p aria-hidden="true" className="mt-5 inline-flex items-center gap-2 font-medium text-accent">
                    <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-x-1" />
                    {endCta}
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
