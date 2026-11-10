import Reveal from "../ui/Reveal";

export type RoadmapItem = {
  /** Year or label as written in the source, e.g. "2027" or "Future". */
  year: string;
  title: string;
  description: string;
};

// Forward-looking roadmap on a vertical rail. Markers are deliberately
// neutral rings: nothing here claims a phase is complete.
export default function RoadmapTimeline({ items }: { items: RoadmapItem[] }) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[5px] top-2 w-px bg-line-strong md:left-[calc(25%+5px)]"
      />
      {items.map((item, index) => (
        <li key={item.year + item.title} className="relative pb-12 last:pb-0 md:pb-14">
          <Reveal delay={Math.min(index, 2) * 0.05} className="grid gap-3 pl-9 md:grid-cols-4 md:gap-0 md:pl-0">
            <p className="font-display text-[2rem] leading-none text-fg md:pr-10 md:text-right md:text-display-md">
              {item.year}
            </p>
            <span
              aria-hidden="true"
              className="absolute left-0 top-3 h-[11px] w-[11px] rounded-full border-2 border-project bg-canvas md:left-1/4"
            />
            <div className="md:col-span-3 md:pl-10">
              <h3 className="text-xl font-semibold leading-snug text-fg md:text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-[40rem] leading-relaxed text-fg-muted">{item.description}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
