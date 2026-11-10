import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const capabilities = [
  {
    title: "Predictive AI",
    description:
      "Machine learning models analyse incoming telemetry to forecast anomalies before they become mission-critical.",
  },
  {
    title: "Unified Dashboard",
    description:
      "A single interface combines mission status, system health, alerts and AI insights for faster decision making.",
  },
  {
    title: "Risk Intelligence",
    description:
      "Every subsystem receives a continuously updated confidence score so operators instantly know where attention is needed.",
  },
  {
    title: "Decision Support",
    description:
      "Instead of replacing engineers, CHÕRA assists them by recommending the safest and most efficient next actions.",
  },
];

export default function Solution() {
  return (
    <CaseStudySection
      index="02"
      eyebrow="The Solution"
      layout="stacked"
      title={
        <>
          CHÕRA transforms thousands of telemetry signals into{" "}
          <em className="text-project">intelligent mission decisions</em> in
          real time.
        </>
      }
      intro={
        <p>
          Rather than overwhelming operators with raw data, CHÕRA continuously
          analyses mission telemetry, predicts operational risks, highlights
          anomalies, and recommends the next best action through an AI-assisted
          command platform.
        </p>
      }
    >
      <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {capabilities.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={(index % 2) * 0.06} className="border-t border-line-strong pt-6">
              <p className="font-mono text-eyebrow text-project">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-[2rem] leading-tight text-fg">{item.title}</h3>
              <p className="mt-3 max-w-[30rem] leading-relaxed text-fg-muted">{item.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
