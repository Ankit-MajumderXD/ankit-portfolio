import CaseStudySection from "../case-study/CaseStudySection";
import ProcessSteps from "../case-study/ProcessSteps";

const workflow = [
  {
    title: "Collect Telemetry",
    description:
      "Receive live mission data from satellites, underwater systems and autonomous robots.",
  },
  {
    title: "AI Analysis",
    description:
      "Machine learning models process thousands of incoming signals simultaneously.",
  },
  {
    title: "Risk Prediction",
    description:
      "The prediction engine identifies anomalies before they become critical failures.",
  },
  {
    title: "Decision Support",
    description:
      "Operators receive AI recommendations with confidence scores and possible actions.",
  },
  {
    title: "Mission Execution",
    description:
      "Human operators make informed decisions while AI continuously monitors the mission.",
  },
];

export default function Workflow() {
  return (
    <CaseStudySection
      index="05"
      eyebrow="Mission Workflow"
      title={
        <>
          From raw telemetry{" "}
          <em className="block text-fg-muted">to intelligent mission decisions.</em>
        </>
      }
    >
      <ProcessSteps steps={workflow} />
    </CaseStudySection>
  );
}
