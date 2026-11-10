import CaseStudySection from "../case-study/CaseStudySection";
import RoadmapTimeline from "../case-study/RoadmapTimeline";

const roadmap = [
  {
    year: "2026",
    title: "Research & Prototype",
    description:
      "Develop the first AI-assisted predictive command platform and validate core concepts through hackathons and research.",
  },
  {
    year: "2027",
    title: "Mission Simulation",
    description:
      "Integrate realistic telemetry simulations and train predictive models using synthetic mission datasets.",
  },
  {
    year: "2028",
    title: "Industry Collaboration",
    description:
      "Collaborate with research organizations and space, marine, and robotics industries for pilot deployments.",
  },
  {
    year: "Future",
    title: "Global Mission Platform",
    description:
      "Transform CHÕRA into a scalable AI mission-control platform supporting autonomous systems across multiple domains.",
  },
];

export default function Roadmap() {
  return (
    <CaseStudySection
      index="08"
      eyebrow="Vision & Roadmap"
      title={
        <>
          Building the future{" "}
          <em className="block text-fg-muted">of intelligent mission control.</em>
        </>
      }
    >
      <RoadmapTimeline items={roadmap} />
    </CaseStudySection>
  );
}
