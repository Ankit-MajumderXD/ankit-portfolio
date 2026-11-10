import CaseStudySection from "../case-study/CaseStudySection";
import RoadmapTimeline from "../case-study/RoadmapTimeline";

// All phases are future plans in the source; the timeline's neutral markers
// don't claim any phase is complete.
const roadmap = [
  {
    year: "Phase 1",
    title: "AI Healthcare Assistant",
    description:
      "Launch the core AI platform with intelligent doctor discovery, appointment booking and teleconsultation support.",
  },
  {
    year: "Phase 2",
    title: "Healthcare Network",
    description:
      "Expand partnerships with hospitals, clinics and verified healthcare professionals across multiple regions.",
  },
  {
    year: "Phase 3",
    title: "Predictive Health Intelligence",
    description:
      "Introduce AI-driven health predictions, preventive care recommendations and personalized wellness insights.",
  },
  {
    year: "Phase 4",
    title: "National Digital Healthcare Platform",
    description:
      "Scale Fidus into a nationwide AI healthcare ecosystem supporting patients, providers and public health initiatives.",
  },
];

export default function Roadmap() {
  return (
    <CaseStudySection
      index="09"
      eyebrow="Future Roadmap"
      title={
        <>
          Building the future <em className="block text-fg-muted">of digital healthcare.</em>
        </>
      }
      intro={
        <p>
          Fidus is designed as a long-term healthcare platform that grows from
          intelligent patient assistance into a nationwide ecosystem
          connecting every stakeholder in healthcare.
        </p>
      }
    >
      <RoadmapTimeline items={roadmap} />
    </CaseStudySection>
  );
}
