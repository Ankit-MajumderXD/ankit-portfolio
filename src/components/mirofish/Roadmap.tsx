import CaseStudySection from "../case-study/CaseStudySection";
import ProcessSteps from "../case-study/ProcessSteps";

const roadmap = [
  {
    label: "Phase 1",
    title: "AI Assistant Foundation",
    description:
      "Develop the core conversational AI capable of assisting farmers and students through a unified platform.",
  },
  {
    label: "Phase 2",
    title: "Government Data Integration",
    description:
      "Connect official agricultural schemes, weather services, MSP information and educational resources.",
  },
  {
    label: "Phase 3",
    title: "Regional Language Support",
    description:
      "Expand multilingual capabilities to support major Indian regional languages for improved accessibility.",
  },
  {
    label: "Phase 4",
    title: "Personalized AI Guidance",
    description:
      "Introduce personalized recommendations based on user profiles, location, crops and academic interests.",
  },
];

export default function Roadmap() {
  return (
    <CaseStudySection
      index="09"
      eyebrow="Future Roadmap"
      title={
        <>
          Growing into a nationwide{" "}
          <em className="block text-fg-muted">AI assistance platform.</em>
        </>
      }
    >
      {/* Phases as a horizontal track; markers are neutral (no completion claimed). */}
      <ProcessSteps steps={roadmap} />
    </CaseStudySection>
  );
}
