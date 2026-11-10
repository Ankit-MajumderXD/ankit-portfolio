import Reveal from "../ui/Reveal";

export type TechGroup = {
  label: string;
  items: string[];
};

// Technology stack as a spec sheet: one row per group, items as chips.
// Same row rhythm as the homepage Skills section.
export default function TechSpec({ groups }: { groups: TechGroup[] }) {
  return (
    <div className="border-b border-line">
      {groups.map((group, index) => (
        <Reveal key={group.label} delay={Math.min(index, 2) * 0.05}>
          <div className="grid gap-4 border-t border-line py-6 md:grid-cols-12 md:gap-8 md:py-7">
            <div className="flex items-baseline gap-4 md:col-span-4">
              <span className="font-mono text-xs text-fg-subtle">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-semibold text-fg">{group.label}</h3>
            </div>
            <ul aria-label={group.label} className="flex flex-wrap gap-2 md:col-span-8">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-control border border-line-strong bg-surface px-3.5 py-1.5 text-[0.9375rem] text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
