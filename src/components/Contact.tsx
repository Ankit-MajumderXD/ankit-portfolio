import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { EMAIL, SOCIAL_LINKS } from "../data/contact";
import BackgroundPaths from "./ui/background-paths";
import Eyebrow from "./ui/Eyebrow";
import Reveal from "./ui/Reveal";

type CopyState = "idle" | "copied" | "failed";

export default function Contact() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed"); // e.g. clipboard blocked; the mailto link still works
    }
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => setCopyState("idle"), 2400);
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-line">
      {/* Mirrors the hero's paths to close the page; kept to the right, away from the email and links. */}
      <BackgroundPaths flip className="[mask-composite:intersect] [mask-image:linear-gradient(to_bottom,transparent_5%,black_55%,transparent),linear-gradient(to_right,transparent_30%,black_85%)]" />
      <div className="container-page py-section">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 id="contact-title" className="mt-4 font-display text-display-xl text-fg">
            Let's build something <em className="text-fg-muted">meaningful.</em>
          </h2>
          <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-fg-muted md:text-xl md:leading-relaxed">
            Whether it's an internship, a hackathon, a startup idea, or an AI
            project, I'd love to connect and build something impactful.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-14 border-t border-line pt-8 md:mt-20">
          <Eyebrow>Email</Eyebrow>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${EMAIL}`}
              // Inter, not the serif: Instrument Serif's "1" reads as "l".
              className="group inline-flex min-w-0 items-center gap-3 text-[clamp(1.5rem,4.2vw,3.25rem)] font-medium leading-tight tracking-tight text-fg"
            >
              <span className="break-all bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-out-soft group-hover:bg-[length:100%_1px]">
                {EMAIL}
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-[0.7em] w-[0.7em] shrink-0 text-accent transition-transform duration-300 ease-out-soft group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-10 items-center gap-2 rounded-control border border-line-strong px-4 text-sm font-medium text-fg-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
            >
              {copyState === "copied" ? (
                <Check aria-hidden="true" className="h-4 w-4 text-accent" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
              {copyState === "copied" ? "Copied" : "Copy"}
              <span className="sr-only"> email address</span>
            </button>
            <span role="status" className="sr-only">
              {copyState === "copied" && "Email address copied to clipboard"}
              {copyState === "failed" && "Couldn't copy. Use the email link instead."}
            </span>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2 rounded-control border border-line-strong px-6 text-[0.9375rem] font-medium text-fg transition-colors duration-200 hover:border-fg/40 hover:bg-surface-2"
                >
                  {link.label}
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
      </div>
    </section>
  );
}
