import { getProject } from "../../data/caseStudies";
import CaseStudyHero from "../case-study/CaseStudyHero";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  const cover = getProject("astro-rescue-ai")?.image;

  return (
    <CaseStudyHero
      projectId="astro-rescue-ai"
      eyebrow="Featured AI Project"
      title="ASTRO RESCUE AI"
      subtitle="AI-Powered Satellite Rescue Platform"
      description={
        <p>
          An intelligent rescue platform that predicts safe landing zones,
          analyses satellite imagery, detects terrain risks and assists
          mission teams with faster recovery decisions using AI.
        </p>
      }
      actions={
        // In-page jumps through ScrollManager (router state).
        <>
          <ButtonLink to="." state={{ scrollTo: "architecture" }} variant="primary">
            Explore Architecture
          </ButtonLink>
          <ButtonLink to="." state={{ scrollTo: "footer" }} variant="secondary">
            Connect
          </ButtonLink>
        </>
      }
      mediaLayout="wide"
      media={
        cover && (
          <figure>
            <div className="aspect-[16/9] overflow-hidden rounded-panel border border-line bg-surface-2 md:aspect-[21/8]">
              <img
                src={cover}
                alt=""
                width={900}
                height={1600}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_58%]"
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
