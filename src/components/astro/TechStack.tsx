import CaseStudySection from "../case-study/CaseStudySection";
import TechSpec, { type TechGroup } from "../case-study/TechSpec";

// Original categories and items, unchanged.
const groups: TechGroup[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
  { label: "Artificial Intelligence", items: ["PyTorch", "Computer Vision", "CNN Models", "OpenCV"] },
  { label: "Backend & APIs", items: ["FastAPI", "Python", "REST APIs", "Docker"] },
  { label: "Satellite Data", items: ["Satellite Imagery", "Terrain Maps", "Cloud Removal", "GIS Data"] },
];

export default function TechStack() {
  return (
    <CaseStudySection
      index="04"
      eyebrow="Technology Stack"
      title={
        <>
          Modern technologies powering{" "}
          <em className="block text-fg-muted">intelligent rescue operations.</em>
        </>
      }
      intro={
        <p>
          Astro Rescue AI combines modern frontend technologies, computer
          vision, machine learning and satellite intelligence to deliver fast,
          reliable rescue recommendations.
        </p>
      }
    >
      <TechSpec groups={groups} />
    </CaseStudySection>
  );
}
