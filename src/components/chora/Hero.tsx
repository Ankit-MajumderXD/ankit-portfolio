import { getProject } from "../../data/caseStudies";
import CaseStudyHero from "../case-study/CaseStudyHero";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  const cover = getProject("chora")?.image;

  return (
    <CaseStudyHero
      projectId="chora"
      eyebrow="Flagship Project"
      title="CHÕRA"
      subtitle="AI-Assisted Predictive Command Platform"
      description={
        <p>
          Predicting mission outcomes, analysing telemetry, identifying
          operational risks and supporting critical decisions across space
          exploration, underwater systems and autonomous robotics.
        </p>
      }
      actions={
        // In-page jumps through ScrollManager (router state).
        <>
          <ButtonLink to="." state={{ scrollTo: "architecture" }} variant="primary">
            Explore Architecture
          </ButtonLink>
          <ButtonLink to="." state={{ scrollTo: "contact" }} variant="secondary">
            Connect
          </ButtonLink>
        </>
      }
      media={
        cover && (
          <figure>
            <div className="aspect-[16/10] overflow-hidden rounded-panel border border-line bg-surface-2 lg:aspect-[4/5]">
              <img
                src={cover}
                alt=""
                width={816}
                height={1456}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_45%]"
              />
            </div>
            {/* Mood artwork, not a product interface. */}
            <figcaption className="mt-3 font-mono text-xs text-fg-subtle">Cover artwork</figcaption>
          </figure>
        )
      }
    />
  );
}
