import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { EMAIL, SOCIAL_LINKS } from "../data/contact";

const LINK =
  "font-mono text-eyebrow uppercase text-fg-muted transition-colors duration-200 hover:text-fg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-display-md text-fg">Ankit Majumder</p>
            <p className="mt-3 max-w-[28rem] leading-relaxed text-fg-muted">
              Designing intelligent products that solve real-world problems,
              one idea at a time.
            </p>
          </div>

          <nav aria-label="Contact and social">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              <li>
                <a href={`mailto:${EMAIL}`} className={LINK}>
                  Email
                </a>
              </li>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="font-mono text-xs text-fg-subtle">
            © {year} Ankit Majumder. All rights reserved.
          </p>
          <Link
            to="/"
            state={{ scrollTo: "home" }}
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            Back to top
            <ArrowUp
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
