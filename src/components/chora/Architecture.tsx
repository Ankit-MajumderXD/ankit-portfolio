import { ArrowDown, ArrowRight } from "lucide-react";
import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const stages = [
  {
    title: "Telemetry",
    description:
      "Live mission data collected from satellites, underwater systems and autonomous robots.",
  },
  {
    title: "AI Processing",
    description:
      "Machine learning models clean, analyse and correlate incoming telemetry in real time.",
  },
  {
    title: "Risk Engine",
    description:
      "Predictive algorithms estimate mission risks and detect anomalies before they escalate.",
  },
  {
    title: "Decision Support",
    description:
      "Operators receive AI-generated recommendations, confidence scores and actionable insights.",
  },
];

export default function Architecture() {
  return (
    <CaseStudySection
      id="architecture"
      index="03"
      eyebrow="System Architecture"
      title={
        <>
          Turning raw telemetry{" "}
          <em className="block text-fg-muted">into intelligent decisions.</em>
        </>
      }
      intro={
        <p>
          CHÕRA follows a streamlined AI pipeline that transforms thousands of
          mission signals into meaningful predictions and recommendations
          within seconds.
        </p>
      }
    >
      {/* Pipeline diagram: stages in order, arrows show the data flow. */}
      <div className="rounded-panel border border-line bg-surface p-5 sm:p-8 md:p-10">
        <p className="font-mono text-eyebrow uppercase text-fg-subtle">AI pipeline · data flow</p>
        <ol className="mt-6 grid gap-12 lg:grid-cols-4 lg:gap-10">
          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <Reveal delay={index * 0.06} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-line bg-canvas p-5 md:p-6">
                  <p className="font-mono text-eyebrow uppercase text-project">
                    Stage {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[1.75rem] leading-tight text-fg">{stage.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{stage.description}</p>
                </div>
              </Reveal>
              {index < stages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-9 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center text-project lg:-right-8 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
                >
                  <ArrowDown className="h-5 w-5 lg:hidden" strokeWidth={1.75} />
                  <ArrowRight className="hidden h-5 w-5 lg:block" strokeWidth={1.75} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </CaseStudySection>
  );
}
