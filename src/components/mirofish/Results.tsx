import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const highlights = [
  {
    title: "Unified AI Platform",
    description:
      "Brings agriculture, education, finance and weather assistance into one intelligent interface.",
  },
  {
    title: "Multi-Domain Assistance",
    description:
      "Supports both farmers and students without requiring separate applications or services.",
  },
  {
    title: "Government-Oriented Information",
    description:
      "Designed to integrate trusted government schemes, weather data and educational resources.",
  },
  {
    title: "Accessible Experience",
    description:
      "Built as a lightweight web platform with a simple interface for broad accessibility.",
  },
];

export default function Results() {
  return (
    <CaseStudySection
      index="08"
      eyebrow="Project Highlights"
      title={
        <>
          Designed to create meaningful impact{" "}
          <em className="text-fg-muted">through AI.</em>
        </>
      }
      intro={
        <p>
          Miro Fish demonstrates how one intelligent platform can simplify
          access to critical information for farmers and students by combining
          multiple services into a single AI-powered experience.
        </p>
      }
    >
      {/* Qualitative highlights (no metrics in the source), in one panel. */}
      <div className="rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-12">
        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {highlights.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 2) * 0.05}>
                <p className="font-mono text-eyebrow uppercase text-project">Highlight {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-[1.875rem] leading-tight text-fg">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </CaseStudySection>
  );
}
