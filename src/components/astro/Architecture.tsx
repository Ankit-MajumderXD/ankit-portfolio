import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const pipeline = [
  "Satellite Images",
  "Image Preprocessing",
  "Cloud Removal AI",
  "Terrain Analysis",
  "Risk Detection",
  "Safe Landing Prediction",
  "Mission Dashboard",
];

export default function Architecture() {
  const last = pipeline.length - 1;

  return (
    <CaseStudySection
      id="architecture"
      index="03"
      eyebrow="Architecture"
      title={
        <>
          End-to-end AI <em className="block text-fg-muted">rescue pipeline</em>
        </>
      }
      intro={
        <p>
          Astro Rescue AI transforms raw satellite imagery into actionable
          rescue intelligence using multiple AI models working together in a
          single pipeline.
        </p>
      }
    >
      {/* Trajectory diagram: one track from source imagery to the dashboard. */}
      <div className="rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-10">
        <p className="font-mono text-eyebrow uppercase text-fg-subtle">
          Raw satellite imagery → actionable rescue intelligence
        </p>

        <ol className="relative mt-10 grid gap-8 lg:grid-cols-7 lg:gap-4">
          {/* Vertical track (below lg) */}
          <span aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-px bg-line-strong lg:hidden" />
          {pipeline.map((stage, index) => {
            const isEnd = index === 0 || index === last;
            return (
              <li key={stage} className="relative pl-10 lg:pl-0">
                {/* Horizontal track segment to the next stage (lg) */}
                {index < last && (
                  <span aria-hidden="true" className="absolute -right-4 left-6 top-[7px] hidden h-px bg-line-strong lg:block" />
                )}
                <Reveal delay={Math.min(index, 6) * 0.04}>
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 h-[15px] w-[15px] rounded-full border-2 border-project lg:relative lg:block ${
                      isEnd ? "bg-project" : "bg-surface"
                    }`}
                  />
                  <p className="font-mono text-eyebrow uppercase text-fg-subtle lg:mt-5">
                    {String(index + 1).padStart(2, "0")}
                    {index === 0 && <span className="text-project"> · Input</span>}
                    {index === last && <span className="text-project"> · Output</span>}
                  </p>
                  <h3 className={`mt-2 font-display text-[1.5rem] leading-tight lg:text-[1.375rem] ${isEnd ? "text-project" : "text-fg"}`}>
                    {stage}
                  </h3>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </CaseStudySection>
  );
}
