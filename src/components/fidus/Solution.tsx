import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const pillars = [
  {
    title: "AI Healthcare Assistant",
    description:
      "An intelligent assistant that understands patient needs and guides them toward the right healthcare services.",
  },
  {
    title: "Smart Doctor Discovery",
    description:
      "Recommends verified nearby specialists based on medical requirements, location and availability.",
  },
  {
    title: "Teleconsultation",
    description:
      "Book appointments, attend online consultations and manage follow-up care through a unified experience.",
  },
  {
    title: "Health Intelligence",
    description:
      "Transforms anonymized healthcare trends into valuable insights that support better planning and public health awareness.",
  },
];

export default function Solution() {
  return (
    <CaseStudySection
      index="02"
      eyebrow="The Solution"
      layout="stacked"
      title={
        <>
          One ecosystem. <em className="text-project">Every healthcare interaction.</em>
        </>
      }
      intro={
        <p>
          Fidus combines Artificial Intelligence, healthcare expertise and
          intelligent recommendations into a unified platform that connects
          patients, doctors and healthcare providers through one seamless
          experience.
        </p>
      }
    >
      {/* Four pillars standing side by side, divided by vertical rules. */}
      <ul className="grid sm:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.title}
            className={`border-t border-line-strong py-8 sm:pr-8 xl:border-t-0 xl:border-l xl:border-l-line xl:px-8 xl:py-2 ${index === 0 ? "xl:border-l-0 xl:pl-0" : ""}`}
          >
            <Reveal delay={Math.min(index, 3) * 0.05}>
              <p className="font-mono text-eyebrow uppercase text-fg-subtle">Pillar {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-[1.875rem] leading-tight text-fg">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{pillar.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
