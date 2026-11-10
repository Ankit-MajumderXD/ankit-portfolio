import { getProject } from "../../data/caseStudies";
import CaseStudyHero from "../case-study/CaseStudyHero";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  const cover = getProject("miro-fish")?.image;

  return (
    <CaseStudyHero
      projectId="miro-fish"
      eyebrow="Flagship AI Platform"
      title="MIRO FISH"
      subtitle="AI Assistant for Farmers & Students"
      description={
        <p>
          A multilingual AI platform that provides crop guidance, weather
          intelligence, financial awareness and educational support through
          one intelligent assistant designed for rural India.
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
      media={
        cover && (
          <figure>
            <div className="aspect-[16/10] overflow-hidden rounded-panel border border-line bg-surface-2 lg:aspect-square">
              <img
                src={cover}
                alt=""
                width={1200}
                height={1350}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_35%]"
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
