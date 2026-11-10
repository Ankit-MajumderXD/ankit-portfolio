import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const challenges = [
  {
    title: "Cloud Obstruction",
    description:
      "Satellite imagery is frequently obscured by clouds, making terrain analysis difficult and reducing prediction accuracy.",
  },
  {
    title: "Terrain Complexity",
    description:
      "Mountains, forests, water bodies and urban regions require intelligent classification before recommending landing zones.",
  },
  {
    title: "Real-Time Processing",
    description:
      "Emergency situations demand rapid AI inference while maintaining high confidence and reliability.",
  },
  {
    title: "Mission Reliability",
    description:
      "Recommendations must remain explainable, trustworthy and robust enough to support critical rescue decisions.",
  },
];

export default function Challenges() {
  return (
    <CaseStudySection
      index="06"
      eyebrow="Engineering Challenges"
      title={
        <>
          Solving problems{" "}
          <em className="block text-fg-muted">where accuracy matters most.</em>
        </>
      }
      intro={
        <p>
          Building an AI-assisted rescue platform involves more than
          prediction. It requires balancing speed, reliability and
          explainability while operating on complex satellite data.
        </p>
      }
    >
      {/* Large numerals carry the rhythm; no boxes. */}
      <ol className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {challenges.map((challenge, index) => (
          <li key={challenge.title}>
            <Reveal delay={(index % 2) * 0.06} className="flex gap-6">
              <span aria-hidden="true" className="font-display text-[3.5rem] leading-[0.85] text-project">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="border-l border-line pl-6">
                <h3 className="text-xl font-semibold leading-snug text-fg">{challenge.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{challenge.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}
