import CaseStudySection from "../case-study/CaseStudySection";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const impacts = [
  {
    title: "Better Patient Access",
    description:
      "Makes it easier for patients to discover trusted healthcare professionals and receive timely medical guidance.",
  },
  {
    title: "Smarter Healthcare Decisions",
    description:
      "AI-assisted recommendations help users navigate healthcare options with greater confidence.",
  },
  {
    title: "Operational Efficiency",
    description:
      "Supports hospitals and doctors with streamlined appointment management and patient coordination.",
  },
  {
    title: "Public Health Intelligence",
    description:
      "Anonymized healthcare trends can assist organizations in understanding regional healthcare needs.",
  },
];

export default function Impact() {
  return (
    <CaseStudySection
      index="08"
      eyebrow="Potential Impact"
      title={
        <>
          Technology that improves{" "}
          <em className="block text-fg-muted">healthcare experiences.</em>
        </>
      }
      intro={
        <p>
          Fidus is designed to simplify healthcare journeys through
          intelligent recommendations, stronger coordination and accessible
          digital services while supporting the broader healthcare ecosystem.
        </p>
      }
    >
      {/* Intended benefits (the source frames these as potential, not measured). */}
      <div className="rounded-panel border border-line bg-surface p-6 sm:p-8 md:p-12">
        <Eyebrow>Potential impact</Eyebrow>
        <ul className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {impacts.map((item, index) => (
            <li key={item.title} className="border-t border-line pt-6">
              <Reveal delay={(index % 2) * 0.05}>
                <h3 className="font-display text-[1.75rem] leading-tight text-fg">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </CaseStudySection>
  );
}
