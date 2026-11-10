import CaseStudySection from "../case-study/CaseStudySection";
import RoadmapTimeline from "../case-study/RoadmapTimeline";

const roadmap = [
  {
    year: "Phase 1",
    title: "Prototype Development",
    description:
      "Build the initial AI pipeline capable of analysing satellite imagery and predicting safe landing zones.",
  },
  {
    year: "Phase 2",
    title: "Computer Vision Integration",
    description:
      "Integrate terrain classification, cloud removal and hazard detection using advanced vision models.",
  },
  {
    year: "Phase 3",
    title: "Mission Command Dashboard",
    description:
      "Develop a real-time dashboard providing rescue teams with AI insights, confidence scores and mission analytics.",
  },
  {
    year: "Phase 4",
    title: "Real-World Deployment",
    description:
      "Expand the platform with live satellite feeds, GIS integration and operational support for future aerospace missions.",
  },
];

export default function Roadmap() {
  return (
    <CaseStudySection
      index="08"
      eyebrow="Future Roadmap"
      title={
        <>
          Building toward the future{" "}
          <em className="block text-fg-muted">of AI-assisted missions.</em>
        </>
      }
    >
      <RoadmapTimeline items={roadmap} />
    </CaseStudySection>
  );
}
