import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

type Skill = { name: string; concept?: boolean };

// Same groups and items as the original Skills section. `concept` marks
// fields and practices, as opposed to specific languages, libraries or tools.
const SKILL_GROUPS: { title: string; skills: Skill[] }[] = [
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "OpenCV" },
      { name: "LLMs", concept: true },
      { name: "Machine Learning", concept: true },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "FastAPI" },
      { name: "REST APIs", concept: true },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
  },
];

const TECH_CHIP = "border border-line-strong bg-surface text-fg";
const CONCEPT_CHIP = "border border-dashed border-line-strong text-fg-muted italic";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line">
      <div className="container-page py-section">
        <Reveal>
          <SectionHeader
            eyebrow="Skills"
            titleId="skills-title"
            title={
              <>
                Technologies{" "}
                <em className="block text-fg-muted">I work with.</em>
              </>
            }
            aside={
              <ul aria-label="Legend" className="flex flex-wrap gap-3 lg:justify-end">
                <li className={`rounded-control px-3 py-1 text-sm ${TECH_CHIP}`}>Technology</li>
                <li className={`rounded-control px-3 py-1 text-sm ${CONCEPT_CHIP}`}>Concept</li>
              </ul>
            }
          />
        </Reveal>

        <div className="mt-14 border-b border-line md:mt-20">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={Math.min(index, 2) * 0.05}>
              <div className="grid gap-4 border-t border-line py-7 md:grid-cols-12 md:gap-8 md:py-8">
                <div className="flex items-baseline gap-4 md:col-span-4">
                  <span className="font-mono text-xs text-fg-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold text-fg">{group.title}</h3>
                </div>
                <ul aria-label={`${group.title} skills`} className="flex flex-wrap gap-2 md:col-span-8">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className={`rounded-control px-3.5 py-1.5 text-[0.9375rem] ${skill.concept ? CONCEPT_CHIP : TECH_CHIP}`}
                    >
                      {skill.name}
                      {skill.concept && <span className="sr-only"> (concept)</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
