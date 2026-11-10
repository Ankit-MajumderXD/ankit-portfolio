import CaseStudySection from "../case-study/CaseStudySection";
import TechSpec, { type TechGroup } from "../case-study/TechSpec";

// Original categories and items, unchanged.
const groups: TechGroup[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Artificial Intelligence", items: ["OpenAI API", "Claude API", "LLMs", "Prompt Engineering"] },
  { label: "Backend", items: ["FastAPI", "Python", "REST APIs", "Authentication"] },
  { label: "Healthcare Services", items: ["Maps API", "Doctor Directory", "Teleconsultation", "Health Analytics"] },
];

export default function TechStack() {
  return (
    <CaseStudySection
      index="05"
      eyebrow="Technology Stack"
      title={
        <>
          Built with modern <em className="block text-fg-muted">AI technologies.</em>
        </>
      }
      intro={
        <p>
          Fidus combines modern web technologies, Artificial Intelligence,
          secure backend services and healthcare integrations to create a
          scalable digital healthcare ecosystem.
        </p>
      }
    >
      <TechSpec groups={groups} />
    </CaseStudySection>
  );
}
