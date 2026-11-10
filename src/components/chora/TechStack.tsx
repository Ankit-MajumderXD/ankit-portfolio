import CaseStudySection from "../case-study/CaseStudySection";
import TechSpec, { type TechGroup } from "../case-study/TechSpec";

// The original twelve technologies, grouped by role. Grouping is
// presentational only; no technologies were added or removed.
const groups: TechGroup[] = [
  { label: "Frontend", items: ["React", "TypeScript"] },
  { label: "Backend & APIs", items: ["Python", "FastAPI"] },
  { label: "AI & Computer Vision", items: ["PyTorch", "OpenCV", "TensorFlow"] },
  { label: "Data", items: ["PostgreSQL", "Redis"] },
  { label: "Infrastructure & Delivery", items: ["Docker", "Vercel", "GitHub Actions"] },
];

export default function TechStack() {
  return (
    <CaseStudySection
      index="04"
      eyebrow="Technology Stack"
      title={
        <>
          Built using modern{" "}
          <em className="block text-fg-muted">AI infrastructure.</em>
        </>
      }
      intro={
        <p>
          CHÕRA combines modern frontend technologies with scalable AI
          infrastructure to deliver fast, reliable and intelligent mission
          support.
        </p>
      }
    >
      <TechSpec groups={groups} />
    </CaseStudySection>
  );
}
