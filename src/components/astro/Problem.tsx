import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const columns = [
  {
    title: "Current Situation",
    body: "During satellite emergencies, engineers receive large amounts of imagery and telemetry within minutes. Identifying safe landing zones, terrain hazards and rescue paths often requires manual analysis across multiple systems.",
  },
  {
    title: "Why It Matters",
    body: "Every minute of delay increases mission cost and operational risk. An AI-assisted platform can rapidly analyse incoming satellite data, rank potential landing sites and support faster rescue decisions.",
  },
];

export default function Problem() {
  return (
    <CaseStudySection
      index="01"
      eyebrow="The Problem"
      layout="stacked"
      title={
        <>
          Rescue missions lose valuable time because{" "}
          <em className="text-fg-muted">critical satellite data is difficult to interpret.</em>
        </>
      }
    >
      {/* Situation and consequence side by side, joined by a hairline. */}
      <div className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-2">
        {columns.map((column, index) => (
          <Reveal key={column.title} delay={index * 0.06} className="bg-canvas p-6 sm:p-8 md:p-10">
            <p className="font-mono text-eyebrow uppercase text-project">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 font-display text-[2rem] leading-tight text-fg">{column.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-fg-muted">{column.body}</p>
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}
