import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

type Kind = "education" | "building" | "hackathons" | "community" | "goal";

type KindStyle = {
  label: string;
  text: string;
  marker: string;
  shape: "dot" | "diamond";
};

// Each kind differs by label and marker, not colour alone.
const KINDS: Record<Kind, KindStyle> = {
  education: { label: "Education", text: "text-accent-2", marker: "bg-accent-2 border-accent-2", shape: "dot" },
  building: { label: "Building", text: "text-accent", marker: "bg-accent border-accent", shape: "dot" },
  hackathons: { label: "Hackathons", text: "text-fg", marker: "bg-fg border-fg", shape: "dot" },
  // Diamond so Community is distinct by shape as well as label.
  community: { label: "Community", text: "text-accent-2", marker: "bg-accent-2-soft border-accent-2", shape: "diamond" },
  // Future aspiration: hollow marker so it never reads as a current role.
  goal: { label: "Goal", text: "text-fg-subtle", marker: "bg-canvas border-fg-subtle border-dashed", shape: "dot" },
};

function Marker({ kind, className = "" }: { kind: Kind; className?: string }) {
  const { marker, shape } = KINDS[kind];
  const shapeClass = shape === "diamond" ? "rotate-45 rounded-[2px] scale-90" : "rounded-full";
  return <span aria-hidden="true" className={`border-2 ${shapeClass} ${marker} ${className}`} />;
}

type Role = { organisation: string; role: string };

type Milestone = {
  /** Year when known; otherwise a non-date label (never a guessed date). */
  year: string;
  kind: Kind;
  title: string;
  description?: string;
  roles?: Role[];
};

// Milestones from the original Journey section (degree name corrected), plus
// community roles supplied by Ankit, with names and titles exactly as given.
// The community roles have no confirmed start dates, so they're grouped under
// "Campus" instead of a year. "2026" appears only where it's part of the
// official program or title name.
const TIMELINE: Milestone[] = [
  {
    year: "2025",
    kind: "education",
    title: "Started B.E. Computer Science & Engineering (AI & ML)",
    description:
      "Began my journey in Computer Science with a focus on Artificial Intelligence and Machine Learning.",
  },
  {
    year: "2026",
    kind: "building",
    title: "Building AI Products",
    description:
      "Started working on AI-driven projects focused on solving real-world problems.",
  },
  {
    year: "Now",
    kind: "hackathons",
    title: "Hackathons & Innovation",
    description:
      "Participating in hackathons, learning modern web development, and transforming ideas into products.",
  },
  {
    year: "Campus",
    kind: "community",
    title: "Student communities & programs",
    roles: [
      { organisation: "AWS Student Builder Group – EPCET", role: "Chief Technical Leader" },
      { organisation: "HackerRank Campus Crew – EPCET", role: "Campus Crew member" },
      { organisation: "Google Student Ambassador Program 2026", role: "Google Student Ambassador" },
      { organisation: "Unstop Campus", role: "Campus Champion 2026" },
      { organisation: "Student Community – EPCET", role: "Vice President" },
    ],
  },
  {
    year: "Future",
    kind: "goal",
    title: "Founder & AI Engineer",
    description:
      "Building impactful AI products that improve lives through technology.",
  },
];

export default function Journey() {
  const usedKinds = [...new Set(TIMELINE.map((item) => item.kind))];

  return (
    <section id="journey" aria-labelledby="journey-title" className="border-t border-line">
      <div className="container-page py-section">
        <Reveal>
          <SectionHeader
            eyebrow="Journey"
            titleId="journey-title"
            title={
              <>
                Every step{" "}
                <em className="block text-fg-muted">builds the next.</em>
              </>
            }
            aside={
              <ul aria-label="Legend" className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
                {usedKinds.map((kind) => (
                  <li key={kind} className="flex items-center gap-2 font-mono text-eyebrow uppercase text-fg-muted">
                    <Marker kind={kind} className="h-2.5 w-2.5" />
                    {KINDS[kind].label}
                  </li>
                ))}
              </ul>
            }
          />
        </Reveal>

        <ol className="relative mt-14 md:mt-20">
          {/* Vertical rail through the markers */}
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-[5px] top-2 w-px bg-line-strong md:left-[calc(25%+5px)]"
          />
          {TIMELINE.map((item, index) => {
            const kind = KINDS[item.kind];
            return (
              <li key={item.year} className="relative pb-12 last:pb-0 md:pb-16">
                <Reveal
                  delay={Math.min(index, 2) * 0.05}
                  className="grid gap-3 pl-9 md:grid-cols-4 md:gap-0 md:pl-0"
                >
                  {/* Year column (desktop) / header row (mobile) */}
                  <div className="flex items-baseline gap-4 md:block md:pr-10 md:text-right">
                    <p className="font-display text-[2rem] leading-none text-fg md:text-display-md">
                      {item.year}
                    </p>
                    <p className={`font-mono text-eyebrow uppercase md:mt-3 ${kind.text}`}>
                      {kind.label}
                    </p>
                  </div>

                  <Marker
                    kind={item.kind}
                    className="absolute left-0 top-3 h-[11px] w-[11px] md:left-1/4"
                  />

                  <div className="md:col-span-3 md:pl-10">
                    <h3 className="text-xl font-semibold leading-snug text-fg md:text-2xl">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 max-w-[40rem] leading-relaxed text-fg-muted">
                        {item.description}
                      </p>
                    )}
                    {item.roles && (
                      <ul className="mt-5 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
                        {item.roles.map((role) => (
                          <li key={role.organisation} className="border-b border-line py-4">
                            <p className="font-medium leading-snug text-fg">{role.organisation}</p>
                            <p className="mt-1 text-[0.9375rem] text-fg-muted">{role.role}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
