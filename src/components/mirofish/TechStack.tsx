import CaseStudySection from "../case-study/CaseStudySection";
import TechSpec, { type TechGroup } from "../case-study/TechSpec";

// Original categories and items, unchanged.
const groups: TechGroup[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Artificial Intelligence", items: ["OpenAI API", "Claude API", "Prompt Engineering", "Natural Language Processing"] },
  { label: "Backend & APIs", items: ["FastAPI", "Python", "REST API", "Weather API"] },
  { label: "Data Sources", items: ["Government Data", "Agricultural Data", "Weather Services", "Education Resources"] },
];

export default function TechStack() {
  return (
    <CaseStudySection
      index="05"
      eyebrow="Technology Stack"
      title={
        <>
          Built with modern AI{" "}
          <em className="block text-fg-muted">and trusted data sources.</em>
        </>
      }
      intro={
        <p>
          Miro Fish combines large language models, government datasets and
          modern web technologies to deliver intelligent guidance for
          agriculture and education.
        </p>
      }
    >
      <TechSpec groups={groups} />
    </CaseStudySection>
  );
}
