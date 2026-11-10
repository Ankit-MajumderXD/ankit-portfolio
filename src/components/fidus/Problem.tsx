import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const painPoints = [
  {
    title: "Fragmented Care",
    description:
      "Patients struggle to discover trusted specialists within their region and often rely on scattered information.",
  },
  {
    title: "Long Waiting Times",
    description:
      "Specialist appointments can take weeks, delaying diagnosis and treatment, especially outside metropolitan cities.",
  },
  {
    title: "No Intelligent Guidance",
    description:
      "Most healthcare apps stop at appointment booking instead of helping patients understand the next best clinical step.",
  },
];

export default function Problem() {
  return (
    <CaseStudySection
      index="01"
      eyebrow="Healthcare Challenge"
      title={
        <>
          Healthcare Shouldn't Be <em className="block text-fg-muted">This Hard.</em>
        </>
      }
      intro={
        <>
          <p>
            Accessing quality healthcare remains fragmented for millions of
            patients. Finding the right specialist often depends on location,
            availability and trust, while navigating appointments, follow-ups
            and ongoing care can become overwhelming.
          </p>
          <p className="mt-4">
            Existing healthcare platforms focus on booking appointments.
            Patients need something more—an intelligent platform that guides
            every step of their healthcare journey.
          </p>
        </>
      }
    >
      {/* Three pain points as one joined panel. */}
      <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-3">
        {painPoints.map((point, index) => (
          <li key={point.title} className="bg-canvas p-6 md:p-8">
            <Reveal delay={index * 0.05}>
              <p className="font-mono text-eyebrow uppercase text-project">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-display text-[1.875rem] leading-tight text-fg">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{point.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
