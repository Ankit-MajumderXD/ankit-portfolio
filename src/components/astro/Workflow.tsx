import CaseStudySection from "../case-study/CaseStudySection";
import ProcessSteps from "../case-study/ProcessSteps";

const workflow = [
  {
    title: "Satellite Emergency",
    description:
      "A satellite experiences an unexpected failure or uncontrolled descent, triggering the rescue workflow.",
  },
  {
    title: "Data Collection",
    description:
      "Satellite imagery, telemetry and environmental information are gathered from multiple sources.",
  },
  {
    title: "AI Analysis",
    description:
      "Computer vision models analyse terrain, remove cloud interference and identify hazardous regions.",
  },
  {
    title: "Landing Prediction",
    description:
      "The AI ranks the safest landing zones using terrain quality, accessibility and mission constraints.",
  },
  {
    title: "Mission Dashboard",
    description:
      "Rescue teams receive interactive recommendations, confidence scores and operational insights.",
  },
  {
    title: "Recovery Operation",
    description:
      "Ground teams execute the rescue using AI-assisted guidance to reduce response time and operational risk.",
  },
];

export default function Workflow() {
  return (
    <CaseStudySection
      index="05"
      eyebrow="Workflow"
      title={
        <>
          From emergency detection{" "}
          <em className="block text-fg-muted">to successful recovery.</em>
        </>
      }
    >
      {/* Six steps, two rows of three on large screens. */}
      <ProcessSteps steps={workflow} perRow={3} />
    </CaseStudySection>
  );
}
