// Development-only preview of the Phase 1 design foundation.
// Mounted at /__foundation when running `npm run dev`; excluded from
// production builds (see App.tsx).
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "../components/ui/ThemeToggle";
import { useTheme } from "../theme/theme-context";

const SURFACES = [
  ["canvas", "bg-canvas"],
  ["surface", "bg-surface"],
  ["surface-2", "bg-surface-2"],
] as const;

const TEXT = [
  ["fg", "text-fg"],
  ["fg-muted", "text-fg-muted"],
  ["fg-subtle", "text-fg-subtle"],
] as const;

const PROJECTS = [
  ["chora", "Chõra"],
  ["astro", "Astro Rescue AI"],
  ["mirofish", "Miro Fish Assistant"],
  ["fidus", "Fidus"],
] as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="font-mono text-eyebrow uppercase text-fg-subtle">{children}</p>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-12">
      <Eyebrow>{title}</Eyebrow>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function Foundation() {
  const { theme, isExplicit, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-canvas text-fg">
      <div className="container-page pb-section pt-36">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Phase 1 · Design foundation</Eyebrow>
            <h1 className="mt-4 font-display text-display-lg">
              Tokens, type <em className="text-accent">&amp;</em> themes
            </h1>
          </div>
          <div className="flex items-center gap-3 font-mono text-sm text-fg-muted">
            <span>
              {theme} · {isExplicit ? "saved choice" : "following system"}
            </span>
            <ThemeToggle />
          </div>
        </header>

        <Block title="Surfaces & text">
          <div className="grid gap-4 sm:grid-cols-3">
            {SURFACES.map(([name, cls]) => (
              <div
                key={name}
                className={`${cls} rounded-card border border-line p-5 shadow-card`}
              >
                <p className="font-mono text-sm">{name}</p>
                <div className="mt-4 space-y-1">
                  {TEXT.map(([t, tc]) => (
                    <p key={t} className={`${tc} text-sm`}>
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Accents">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-control bg-accent-solid px-5 py-2.5 text-sm font-semibold text-on-accent">
              Primary · emerald
            </span>
            <span className="rounded-control bg-accent-soft px-4 py-2 text-sm text-accent">
              accent-soft
            </span>
            <span className="rounded-control bg-accent-2-soft px-4 py-2 text-sm text-accent-2">
              Secondary · cyan
            </span>
            <span className="rounded-control border border-line-strong px-4 py-2 text-sm">
              line-strong
            </span>
          </div>
        </Block>

        <Block title="Project identity (secondary)">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map(([id, name]) => (
              <div
                key={id}
                data-project={id}
                className="rounded-card border border-line bg-surface p-5"
              >
                <span className="rounded-control bg-project-soft px-3 py-1 font-mono text-xs text-project">
                  {id}
                </span>
                <p className="mt-4 font-display text-2xl">{name}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Typography">
          <div className="space-y-6">
            <p className="font-display text-display-xl">Ankit Majumder</p>
            <p className="font-display text-display-md">
              Building products <em>with purpose.</em>
            </p>
            <p className="max-w-prose text-lg leading-8 text-fg-muted">
              Building AI-powered products, intuitive web experiences, and
              technology that solves meaningful real-world problems.
            </p>
            <p className="font-mono text-sm text-fg-subtle">
              font-sans · Inter — font-display · Instrument Serif — font-mono ·
              JetBrains Mono
            </p>
          </div>
        </Block>

        <Block title="Radii & layout">
          <div className="flex flex-wrap items-end gap-4 font-mono text-xs text-fg-muted">
            <div className="flex h-12 items-center rounded-control border border-line-strong px-5">
              control
            </div>
            <div className="flex h-24 w-32 items-end rounded-card border border-line-strong p-3">
              card
            </div>
            <div className="flex h-32 w-44 items-end rounded-panel border border-line-strong p-3">
              panel
            </div>
            <p className="max-w-xs">
              container-page = 76rem + fluid gutter; py-section = fluid 5–8rem
              vertical rhythm.
            </p>
          </div>
        </Block>

        <Block title="Motion">
          <motion.button
            type="button"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-control border border-line-strong px-5 py-2.5 text-sm hover:bg-surface-2"
          >
            Hover me <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </motion.button>
          <p className="mt-4 font-mono text-sm text-fg-subtle">
            prefers-reduced-motion: {reduceMotion ? "reduce (movement disabled)" : "no preference"}
          </p>
          <div className="mt-6 flex gap-3 font-mono text-xs">
            <button type="button" onClick={() => setTheme("light")} className="underline underline-offset-4">
              Force light
            </button>
            <button type="button" onClick={() => setTheme("dark")} className="underline underline-offset-4">
              Force dark
            </button>
          </div>
        </Block>
      </div>
    </div>
  );
}
