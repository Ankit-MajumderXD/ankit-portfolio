// Development-only preview of the shared case-study components, assembled
// with Chõra's existing copy. Mounted at /__case-study when running
// `npm run dev`; excluded from production builds (see App.tsx).
import CaseStudyCTA from "../components/case-study/CaseStudyCTA";
import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import CaseStudyNavigation from "../components/case-study/CaseStudyNavigation";
import CaseStudySection from "../components/case-study/CaseStudySection";
import ButtonLink from "../components/ui/ButtonLink";

export default function CaseStudyKit() {
  return (
    <CaseStudyLayout projectId="chora">
      <p className="container-page pt-24 font-mono text-xs text-fg-subtle">
        Dev preview · shared case-study components · not a published page
      </p>

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
          // In-page jumps use router state so ScrollManager handles them
          // (layout position, smooth only without reduced motion).
          <ButtonLink to="." state={{ scrollTo: "contact" }} variant="primary">
            Connect
          </ButtonLink>
        }
      />

      <CaseStudySection
        index="01"
        eyebrow="The Problem"
        title={
          <>
            Current mission control systems react to problems.{" "}
            <em className="text-fg-muted">They rarely predict them.</em>
          </>
        }
        intro={
          <p>
            Space agencies, offshore industries, autonomous underwater vehicles
            and robotics teams generate massive streams of telemetry. Engineers
            must manually monitor thousands of signals while making
            mission-critical decisions under severe time pressure.
          </p>
        }
      />

      <CaseStudyCTA
        id="contact"
        eyebrow="What's Next?"
        title={
          <>
            Let's build the <em className="text-fg-muted">future together.</em>
          </>
        }
      >
        <p>
          CHÕRA represents my vision of combining Artificial Intelligence,
          Human Decision Making and Predictive Analytics into one intelligent
          mission platform. This is only the beginning.
        </p>
      </CaseStudyCTA>

      <CaseStudyNavigation currentId="chora" />
    </CaseStudyLayout>
  );
}
