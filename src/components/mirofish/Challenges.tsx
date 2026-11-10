import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const challenges = [
  {
    title: "Data Reliability",
    description:
      "Agricultural and educational information changes frequently, requiring continuous updates from trusted sources.",
  },
  {
    title: "Multilingual Accessibility",
    description:
      "Users communicate in different regional languages, making natural language understanding a key challenge.",
  },
  {
    title: "Rural Connectivity",
    description:
      "Many users have limited internet access, requiring lightweight interfaces and efficient data delivery.",
  },
  {
    title: "Trustworthy AI",
    description:
      "Recommendations must remain transparent, explainable and supported by verified information rather than assumptions.",
  },
];

export default function Challenges() {
  return (
    <CaseStudySection
      index="07"
      eyebrow="Engineering Challenges"
      layout="stacked"
      title={
        <>
          Building AI people can{" "}
          <em className="text-project">actually trust.</em>
        </>
      }
      intro={
        <p>
          Creating an assistant for millions of users requires balancing
          accessibility, accuracy and reliability while keeping the platform
          simple enough for anyone to use.
        </p>
      }
    >
      {/* Challenge → why it's hard, as a ruled two-column list. */}
      <dl className="border-b border-line">
        {challenges.map((challenge, index) => (
          <Reveal key={challenge.title} delay={Math.min(index, 2) * 0.05}>
            <div className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8 md:py-7">
              <dt className="flex items-baseline gap-4 md:col-span-4">
                <span className="font-mono text-xs text-project">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-lg font-semibold text-fg">{challenge.title}</span>
              </dt>
              <dd className="leading-relaxed text-fg-muted md:col-span-8">{challenge.description}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </CaseStudySection>
  );
}
