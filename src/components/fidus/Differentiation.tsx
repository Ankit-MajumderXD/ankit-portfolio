import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const points = [
  {
    title: "AI-Powered Recommendations",
    description:
      "Instead of showing every available doctor, Fidus intelligently recommends the most suitable specialist based on symptoms, location and medical needs.",
  },
  {
    title: "Healthcare Coordination",
    description:
      "Patients receive guidance before, during and after consultations, creating a continuous healthcare journey rather than a single appointment.",
  },
  {
    title: "Privacy-First Analytics",
    description:
      "Healthcare insights are generated from anonymized data, helping improve public health without exposing personal information.",
  },
  {
    title: "Multi-Stakeholder Platform",
    description:
      "Patients, doctors, hospitals, researchers and government agencies all benefit from one connected healthcare ecosystem.",
  },
];

export default function Differentiation() {
  return (
    <CaseStudySection
      index="07"
      eyebrow="Why Fidus?"
      layout="stacked"
      title={
        <>
          Designed to go beyond{" "}
          <em className="text-fg-muted">traditional healthcare apps.</em>
        </>
      }
      intro={
        <p>
          Fidus isn't simply another appointment platform. It combines
          Artificial Intelligence, healthcare coordination and data-driven
          insights into one connected experience.
        </p>
      }
    >
      <ol className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {points.map((point, index) => (
          <li key={point.title}>
            <Reveal delay={(index % 2) * 0.06} className="grid grid-cols-[auto_1fr] gap-x-6">
              <span aria-hidden="true" className="font-display text-[3.25rem] leading-[0.85] text-project">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold leading-snug text-fg">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-fg-muted">{point.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
}
