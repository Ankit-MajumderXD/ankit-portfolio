import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";
import { FIDUS_ICONS } from "./icons";

const stakeholders = [
  {
    icon: FIDUS_ICONS.patients,
    title: "Patients",
    description:
      "Receive AI-guided healthcare recommendations, discover specialists and manage appointments effortlessly.",
  },
  {
    icon: FIDUS_ICONS.doctor,
    title: "Doctors",
    description:
      "Connect with the right patients, reduce administrative work and improve consultation efficiency.",
  },
  {
    icon: FIDUS_ICONS.hospital,
    title: "Hospitals",
    description:
      "Streamline patient flow, appointment management and healthcare coordination across departments.",
  },
  {
    icon: FIDUS_ICONS.government,
    title: "Government",
    description:
      "Leverage anonymized healthcare trends for better public health planning and resource allocation.",
  },
  {
    icon: FIDUS_ICONS.insurance,
    title: "Insurance",
    description:
      "Enable faster verification processes and support digital healthcare ecosystems with trusted data.",
  },
  {
    icon: FIDUS_ICONS.chart,
    title: "Researchers",
    description:
      "Study aggregated healthcare patterns and population insights while preserving patient privacy.",
  },
];

export default function Ecosystem() {
  return (
    <CaseStudySection
      index="06"
      eyebrow="Healthcare Ecosystem"
      title={
        <>
          One platform. <em className="block text-fg-muted">Every stakeholder.</em>
        </>
      }
      intro={
        <p>
          Fidus isn't built solely for patients. It creates value across the
          entire healthcare ecosystem by connecting people, providers and
          institutions through intelligent coordination.
        </p>
      }
    >
      {/* Stakeholder grid: one joined panel, six cells. */}
      <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stakeholders.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.title} className="bg-canvas p-6 md:p-8">
              <Reveal delay={(index % 3) * 0.05}>
                <Icon aria-hidden="true" className="h-6 w-6 text-project" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-[1.75rem] leading-tight text-fg">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{item.description}</p>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
}
