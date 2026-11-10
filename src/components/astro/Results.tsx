import CaseStudySection from "../case-study/CaseStudySection";
import StatBand from "../case-study/StatBand";
import Eyebrow from "../ui/Eyebrow";

const metrics = [
  { value: "94%", label: "Landing Zone Prediction Accuracy" },
  { value: "< 2 sec", label: "Average AI Processing Time" },
  { value: "87%", label: "Terrain Classification Accuracy" },
  { value: "24/7", label: "Mission Monitoring Capability" },
];

export default function Results() {
  return (
    <CaseStudySection
      index="07"
      eyebrow="Prototype Results"
      title={
        <>
          Measuring the impact{" "}
          <em className="block text-fg-muted">of intelligent rescue.</em>
        </>
      }
      intro={
        <p>
          Astro Rescue AI is designed as a prototype demonstrating how
          artificial intelligence can improve satellite rescue operations.
          These metrics represent the intended performance goals of the system
          architecture.
        </p>
      }
    >
      {/* Labelled at the figures themselves, per the section's own framing. */}
      <Eyebrow className="mb-4">Intended performance goals</Eyebrow>
      <StatBand stats={metrics} accent />
    </CaseStudySection>
  );
}
