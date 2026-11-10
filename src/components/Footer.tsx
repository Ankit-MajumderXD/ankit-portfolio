import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EMAIL, SOCIAL_LINKS } from "../data/contact";
import AnimatedWaveFooter from "./ui/AnimatedWaveFooter";

// Same in-page destinations as the navbar.
const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const LINK =
  "font-mono text-eyebrow uppercase text-fg-muted transition-colors duration-200 hover:text-fg";
const LABEL = "font-mono text-eyebrow uppercase text-fg-subtle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // `footer-metal`: the footer's own monochrome metallic palette (index.css).
    <footer className="footer-metal border-t border-line">
      <div className="container-page pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Statement */}
          <div className="lg:col-span-7">
            <p className="font-mono text-eyebrow uppercase text-[var(--metal-label)]">
              AI · Engineering · Experimentation
            </p>
            <p className="mt-5 font-display text-display-lg text-fg">
              Let's build something <em className="text-fg-muted">meaningful.</em>
            </p>
            <p className="mt-5 max-w-[28rem] leading-relaxed text-fg-muted">
              Designing intelligent products that solve real-world problems,
              one idea at a time.
            </p>
          </div>

          {/* Contact, location, links */}
          <div className="grid content-start gap-8 sm:grid-cols-2 lg:col-span-5">
            <div className="sm:col-span-2">
              <p className={LABEL}>Email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-2 inline-flex items-center gap-2 text-lg font-medium text-fg transition-colors duration-200 hover:text-[var(--metal-label)]"
              >
                <span className="break-all">{EMAIL}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <p className="mt-3 font-mono text-xs text-fg-subtle">Bangalore, India</p>
            </div>

            <nav aria-label="Contact and social">
              <p className={LABEL}>Elsewhere</p>
              {/* Email is the featured link above, so it isn't repeated here. */}
              <ul className="mt-3 space-y-2">
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

            <nav aria-label="Footer">
              <p className={LABEL}>Sections</p>
              <ul className="mt-3 space-y-2">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <Link to="/" state={{ scrollTo: section.id }} className={LINK}>
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Signature over the wave field. Full-bleed so the waves run edge to
          edge; the name stays on the page grid. */}
      <div className="relative isolate mt-10 overflow-hidden md:mt-12">
        {/* Faded toward the bottom so the crests carry the composition,
            rather than the layered fills stacking into a solid block. */}
        <AnimatedWaveFooter className="-z-10 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />
        <div className="container-page pb-12 pt-4 md:pb-16 md:pt-6">
          <p className="whitespace-nowrap font-display text-[clamp(2.5rem,11.5vw,3.5rem)] uppercase leading-[0.9] tracking-[-0.01em] text-fg md:text-[clamp(3.5rem,10.4vw,9.5rem)]">
            Ankit Majumder
          </p>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
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
