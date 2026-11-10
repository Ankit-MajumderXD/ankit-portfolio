import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  /** Optional supporting text, placed beside the title on desktop. */
  aside?: ReactNode;
  /** Colour the eyebrow with the project accent (case studies). */
  eyebrowAccent?: boolean;
};

// Section opening: mono label, serif heading, optional aside. Used on the
// homepage and in case studies; matches the Projects header layout.
export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  aside,
  eyebrowAccent = false,
}: SectionHeaderProps) {
  return (
    <header className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
      <div className="lg:col-span-7">
        <Eyebrow accent={eyebrowAccent}>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="mt-4 font-display text-display-lg text-fg">
          {title}
        </h2>
      </div>
      {aside && (
        <div className="max-w-[34rem] leading-relaxed text-fg-muted lg:col-span-5">
          {aside}
        </div>
      )}
    </header>
  );
}
