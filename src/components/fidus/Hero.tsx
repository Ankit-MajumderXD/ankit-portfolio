import heroImg from "../../assets/case-studies/fidus-hero.webp";
import CaseStudyHero from "../case-study/CaseStudyHero";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <CaseStudyHero
      projectId="fidus"
      eyebrow="Healthcare AI Platform"
      title="FIDUS"
      subtitle="AI-Powered Healthcare Ecosystem"
      description={
        <p>
          Connecting patients with verified specialists through intelligent
          recommendations, teleconsultation, personalized healthcare guidance
          and population-level health analytics.
        </p>
      }
      actions={
        // In-page jumps through ScrollManager (router state).
        <>
          <ButtonLink to="." state={{ scrollTo: "architecture" }} variant="primary">
            Explore Platform
          </ButtonLink>
          <ButtonLink to="." state={{ scrollTo: "footer" }} variant="secondary">
            Connect
          </ButtonLink>
        </>
      }
      media={
        <figure>
          {/* The 2:1 logo artwork (with its own black background) fills this 2:1 frame exactly. */}
          <div className="overflow-hidden rounded-panel border border-line bg-surface-2">
            <img
              src={heroImg}
              alt="Fidus logo"
              width={1600}
              height={800}
              decoding="async"
              fetchPriority="high"
              className="aspect-[2/1] w-full object-contain"
            />
          </div>
          <figcaption className="mt-3 font-mono text-xs text-fg-subtle">Project logo</figcaption>
        </figure>
      }
    />
  );
}
