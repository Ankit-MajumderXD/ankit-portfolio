import CaseStudyCallout from "../case-study/CaseStudyCallout";
import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const challenges = [
  {
    title: "Interpreting Complex Telemetry",
    description:
      "Mission data originates from multiple heterogeneous sensors, making real-time interpretation difficult without a unified intelligence layer.",
  },
  {
    title: "Balancing Accuracy & Explainability",
    description:
      "Predictions are valuable only when operators understand why they were generated. CHÕRA prioritises transparent AI recommendations over black-box outputs.",
  },
  {
    title: "Scalable Mission Architecture",
    description:
      "The platform is designed to support space missions, underwater robotics and autonomous systems without changing the core intelligence engine.",
  },
];

const learnings = [
  "Human-AI collaboration produces better mission decisions than complete automation.",
  "Explainable AI is essential in safety-critical environments.",
  "Modular system design makes future expansion significantly easier.",
  "Prediction is valuable only when paired with actionable insights.",
];

export default function Challenges() {
  return (
    <CaseStudySection
      index="06"
      eyebrow="Engineering Journey"
      title={
        <>
          Challenges <em className="text-fg-muted">&amp; Learnings</em>
        </>
      }
      intro={
        <p>
          Building CHÕRA wasn't just about designing an AI platform—it was
          about understanding how intelligent systems should support people
          making high-stakes decisions.
        </p>
      }
    >
      <ol className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {challenges.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 0.06} className="border-t border-line-strong pt-6">
              <p className="font-mono text-eyebrow uppercase text-project">
                Challenge {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-[1.75rem] leading-tight text-fg">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-16 md:mt-24">
        <CaseStudyCallout eyebrow="Key Takeaways" title="What This Project Taught Me">
          <ol className="border-t border-line">
            {learnings.map((item, index) => (
              <li key={item} className="flex items-baseline gap-5 border-b border-line py-5">
                <span className="font-mono text-xs text-project">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed text-fg">{item}</p>
              </li>
            ))}
          </ol>
        </CaseStudyCallout>
      </div>
    </CaseStudySection>
  );
}
