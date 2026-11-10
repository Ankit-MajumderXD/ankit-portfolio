import Reveal from "../ui/Reveal";

export type Stat = {
  value: string;
  label?: string;
  description?: string;
};

type StatBandProps = {
  stats: Stat[];
  /** Colour the values with the project accent. */
  accent?: boolean;
};

// Static class names so Tailwind generates them.
const COLUMNS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
};

// Row of large figures separated by hairlines (the gap shows the line colour
// behind the cells). Used for problem statistics and outcome metrics.
export default function StatBand({ stats, accent = false }: StatBandProps) {
  return (
    <ul className={`grid gap-px overflow-hidden rounded-card border border-line bg-line ${COLUMNS[stats.length] ?? "sm:grid-cols-2"}`}>
      {stats.map((stat, index) => (
        <li key={stat.value + (stat.label ?? "")} className="bg-canvas p-6 md:p-8">
          <Reveal delay={Math.min(index, 3) * 0.05}>
            <p
              className={`font-display text-[clamp(2.75rem,5vw,4.25rem)] leading-none ${accent ? "text-project" : "text-fg"}`}
            >
              {stat.value}
            </p>
            {stat.label && <p className="mt-4 font-semibold text-fg">{stat.label}</p>}
            {stat.description && (
              <p className={`${stat.label ? "mt-2" : "mt-4"} leading-relaxed text-fg-muted`}>{stat.description}</p>
            )}
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
