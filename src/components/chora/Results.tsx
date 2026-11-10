import CaseStudyCallout from "../case-study/CaseStudyCallout";
import CaseStudySection from "../case-study/CaseStudySection";
import StatBand from "../case-study/StatBand";

const metrics = [
  {
    value: "91%",
    label: "Prediction Accuracy",
    description:
      "Designed to identify mission anomalies before they become critical operational failures.",
  },
  {
    value: "1000+",
    label: "Telemetry Parameters",
    description:
      "Architecture supports simultaneous analysis of large-scale mission telemetry streams.",
  },
  {
    value: "<2 sec",
    label: "Decision Latency",
    description:
      "Optimized workflow enables rapid AI-assisted mission recommendations.",
  },
  {
    value: "3",
    label: "Mission Domains",
    description:
      "Applicable to space exploration, underwater robotics and autonomous systems.",
  },
];

export default function Results() {
  return (
    <CaseStudySection
      index="07"
      eyebrow="Results & Impact"
      title={
        <>
          Engineering <em className="text-fg-muted">Outcomes</em>
        </>
      }
      intro={
        <p>
          CHÕRA demonstrates how predictive artificial intelligence can
          transform mission operations from reactive monitoring into proactive
          decision support while keeping human operators in complete control.
        </p>
      }
    >
      <StatBand stats={metrics} accent />

      {/* Directly after the figures, so they read in the context of a prototype. */}
      <div className="mt-10 md:mt-12">
        <CaseStudyCallout eyebrow="Current Status" title="Prototype with a Scalable Vision">
          <p className="text-lg leading-relaxed text-fg-muted">
            CHÕRA currently represents a research-driven prototype and product
            concept. The architecture has been intentionally designed for
            future integration with live telemetry, machine learning models,
            digital twins and explainable AI systems used in mission-critical
            environments.
          </p>
        </CaseStudyCallout>
      </div>
    </CaseStudySection>
  );
}
