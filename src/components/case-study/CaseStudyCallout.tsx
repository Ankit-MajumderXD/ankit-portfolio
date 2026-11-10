import type { ReactNode } from "react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

type CaseStudyCalloutProps = {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
};

// Highlighted panel for a key aside inside a section (e.g. takeaways or
// current project status): heading on the left, content on the right.
export default function CaseStudyCallout({ eyebrow, title, children }: CaseStudyCalloutProps) {
  return (
    <Reveal>
      <aside className="grid gap-8 rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow accent>{eyebrow}</Eyebrow>
          <h3 className="mt-4 font-display text-display-md text-fg">{title}</h3>
        </div>
        <div className="lg:col-span-7">{children}</div>
      </aside>
    </Reveal>
  );
}
