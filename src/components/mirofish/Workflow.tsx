import CaseStudySection from "../case-study/CaseStudySection";
import ProcessSteps from "../case-study/ProcessSteps";

const workflow = [
  {
    title: "User Query",
    description:
      "A farmer or student asks a question in their preferred language through the web interface.",
  },
  {
    title: "Intent Detection",
    description:
      "The AI understands whether the request relates to farming, weather, finance, education or career guidance.",
  },
  {
    title: "Knowledge Retrieval",
    description:
      "Relevant information is collected from trusted government resources, weather services and educational databases.",
  },
  {
    title: "AI Processing",
    description:
      "The language model combines user context with retrieved knowledge to generate a reliable response.",
  },
  {
    title: "Personalized Recommendation",
    description:
      "The platform provides practical guidance tailored to the user's situation instead of generic answers.",
  },
  {
    title: "Continuous Learning",
    description:
      "Future updates will use user feedback to improve recommendations and provide more personalized assistance.",
    // The source describes this step as a future update.
    planned: true,
  },
];

export default function Workflow() {
  return (
    <CaseStudySection
      index="06"
      eyebrow="Workflow"
      title={
        <>
          From question{" "}
          <em className="block text-fg-muted">to intelligent guidance.</em>
        </>
      }
    >
      {/* A conversation reads top to bottom: vertical sequence, set right. */}
      <div className="lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8 lg:col-start-5">
          <ProcessSteps steps={workflow} orientation="vertical" />
        </div>
      </div>
    </CaseStudySection>
  );
}
