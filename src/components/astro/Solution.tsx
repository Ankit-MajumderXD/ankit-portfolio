import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const features = [
  {
    title: "Satellite Image Analysis",
    description:
      "Processes high-resolution satellite imagery to identify terrain, water bodies, vegetation and potential hazards.",
  },
  {
    title: "Safe Landing Prediction",
    description:
      "Uses AI models to rank possible landing locations based on terrain stability, accessibility and surrounding risks.",
  },
  {
    title: "Risk Detection",
    description:
      "Automatically detects mountains, dense forests, urban regions and dangerous terrain that could affect recovery operations.",
  },
  {
    title: "Mission Dashboard",
    description:
      "Provides rescue teams with a single command interface containing AI recommendations, confidence scores and live mission insights.",
  },
];

export default function Solution() {
  return (
    <CaseStudySection
      index="02"
      eyebrow="Solution"
      title={
        <>
          AI that transforms satellite data{" "}
          <em className="block text-project">into rescue intelligence.</em>
        </>
      }
      intro={
        <p>
          Astro Rescue AI combines computer vision, satellite imagery and
          predictive machine learning to assist mission teams during rescue
          operations. Instead of manually analysing complex datasets, the
          platform provides actionable recommendations within seconds.
        </p>
      }
    >
      {/* Capabilities as a ruled specification list. */}
      <dl className="border-b border-line">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={Math.min(index, 2) * 0.05}>
            <div className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-8">
              <dt className="flex items-baseline gap-4 md:col-span-5">
                <span className="font-mono text-xs text-project">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-display text-[1.75rem] leading-tight text-fg">{feature.title}</span>
              </dt>
              <dd className="leading-relaxed text-fg-muted md:col-span-7 md:pt-1.5 md:text-lg">{feature.description}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </CaseStudySection>
  );
}
