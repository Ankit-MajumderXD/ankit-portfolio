import type { ReactNode } from "react";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

type CaseStudySectionProps = {
  /** Anchor id; keep existing ids (e.g. "architecture") unchanged. */
  id?: string;
  /** Two-digit position in the case study, e.g. "02". */
  index?: string;
  eyebrow: string;
  title: ReactNode;
  /** Supporting text beside (split) or below (stacked) the title. */
  intro?: ReactNode;
  /**
   * split: title left, intro right (default).
   * stacked: long typographic statement across the width, intro below.
   */
  layout?: "split" | "stacked";
  children?: ReactNode;
};

// One chapter of a case study: numbered accent label, serif heading, then
// content. Same rhythm and widths as the homepage sections.
export default function CaseStudySection({
  id,
  index,
  eyebrow,
  title,
  intro,
  layout = "split",
  children,
}: CaseStudySectionProps) {
  const titleId = `${id ?? eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title`;
  const label = index ? `${index} — ${eyebrow}` : eyebrow;

  return (
    <section id={id} aria-labelledby={titleId} className="border-t border-line">
      <div className="container-page py-section">
        <Reveal>
          {layout === "stacked" ? (
            <header>
              <Eyebrow accent>{label}</Eyebrow>
              <h2 id={titleId} className="mt-4 max-w-[60rem] font-display text-display-lg text-fg">
                {title}
              </h2>
              {intro && (
                <div className="mt-8 grid lg:grid-cols-12">
                  <div className="max-w-[38rem] text-lg leading-relaxed text-fg-muted lg:col-span-7 lg:col-start-6">
                    {intro}
                  </div>
                </div>
              )}
            </header>
          ) : (
            <SectionHeader eyebrow={label} eyebrowAccent titleId={titleId} title={title} aside={intro} />
          )}
        </Reveal>
        {children && <div className="mt-14 md:mt-20">{children}</div>}
      </div>
    </section>
  );
}
