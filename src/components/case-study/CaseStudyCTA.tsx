import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../../data/contact";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

type CaseStudyCTAProps = {
  /** Keep "footer"/"contact" where existing in-page links target it. */
  id?: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  /** Override link text per destination, e.g. { GitHub: "View GitHub" }. */
  linkLabels?: Partial<Record<(typeof SOCIAL_LINKS)[number]["label"], string>>;
};

// Closing invitation of a case study, with the same GitHub and LinkedIn
// destinations as the rest of the site.
export default function CaseStudyCTA({ id, eyebrow, title, children, linkLabels = {} }: CaseStudyCTAProps) {
  const titleId = `${id ?? "case-study-cta"}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="border-t border-line">
      <Reveal className="container-page py-section">
        <Eyebrow accent>{eyebrow}</Eyebrow>
        <h2 id={titleId} className="mt-4 max-w-[52rem] font-display text-display-lg text-fg">
          {title}
        </h2>
        {children && (
          <div className="mt-8 max-w-[38rem] text-lg leading-relaxed text-fg-muted">{children}</div>
        )}
        <ul className="mt-10 flex flex-wrap gap-3">
          {[...SOCIAL_LINKS].reverse().map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-2 rounded-control border border-line-strong px-6 text-[0.9375rem] font-medium text-fg transition-colors duration-200 hover:border-fg/40 hover:bg-surface-2"
              >
                {linkLabels[link.label] ?? link.label}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-fg-muted transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
