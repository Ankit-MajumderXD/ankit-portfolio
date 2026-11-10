import Reveal from "../ui/Reveal";

export type ProcessStep = {
  title: string;
  description: string;
  /** Optional label above the title, e.g. "Phase 1". */
  label?: string;
  /** Future or proposed step: dashed marker and a "Planned" tag. */
  planned?: boolean;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  /** Steps per row on large screens (defaults to all in one row). */
  perRow?: number;
  /** "auto": horizontal track on large screens; "vertical": always a rail. */
  orientation?: "auto" | "vertical";
};

// Static class names so Tailwind generates them.
const COLUMNS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

// Numbered sequence: a horizontal track on large screens (optionally wrapped
// into rows), a vertical rail below that or when orientation="vertical".
export default function ProcessSteps({ steps, perRow, orientation = "auto" }: ProcessStepsProps) {
  const per = perRow ?? steps.length;
  const horizontal = orientation === "auto" ? COLUMNS[per] : undefined;

  return (
    <ol className={`relative grid gap-10 ${horizontal ? `${horizontal} lg:gap-x-8 lg:gap-y-16` : ""}`}>
      {/* Vertical rail through the markers */}
      <span aria-hidden="true" className={`absolute bottom-6 left-5 top-6 w-px bg-line-strong ${horizontal ? "lg:hidden" : ""}`} />

      {steps.map((step, index) => {
        const hasConnector = horizontal && index < steps.length - 1 && (index + 1) % per !== 0;
        return (
          <li key={step.title} className={`relative pl-16 ${horizontal ? "lg:pl-0" : ""}`}>
            {/* Horizontal connector to the next step in the same row (lg) */}
            {hasConnector && (
              <span aria-hidden="true" className="absolute -right-6 left-12 top-5 hidden h-px bg-line-strong lg:block" />
            )}
            <Reveal delay={Math.min(index, 4) * 0.05}>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border bg-canvas font-mono text-xs ${
                  step.planned ? "border-dashed border-fg-subtle text-fg-subtle" : "border-project text-project"
                } ${horizontal ? "lg:relative" : ""}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              {(step.label || step.planned) && (
                <p className={`flex flex-wrap items-center gap-2 font-mono text-eyebrow uppercase text-project ${horizontal ? "lg:mt-6" : ""}`}>
                  {step.label}
                  {step.planned && (
                    <span className="rounded-control border border-dashed border-line-strong px-2 py-0.5 text-fg-muted">
                      Planned
                    </span>
                  )}
                </p>
              )}
              <h3
                className={`text-lg font-semibold leading-snug text-fg ${step.label || step.planned ? "mt-2" : horizontal ? "lg:mt-6" : ""}`}
              >
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{step.description}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
