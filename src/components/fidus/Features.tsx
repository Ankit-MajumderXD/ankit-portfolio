import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";
import { FIDUS_ICONS } from "./icons";

const features = [
  {
    icon: FIDUS_ICONS.hospital,
    title: "Smart Doctor Discovery",
    description:
      "Find verified nearby specialists using AI recommendations based on symptoms, specialty, location and availability.",
  },
  {
    icon: FIDUS_ICONS.chat,
    title: "AI Health Assistant",
    description:
      "Receive intelligent healthcare guidance before visiting a doctor, helping users make informed medical decisions.",
  },
  {
    icon: FIDUS_ICONS.calendar,
    title: "Teleconsultation & Appointments",
    description:
      "Book appointments, attend virtual consultations and manage follow-up visits from one unified platform.",
  },
  {
    icon: FIDUS_ICONS.chart,
    title: "Population Health Insights",
    description:
      "Privacy-preserving analytics help identify healthcare trends, disease patterns and regional medical demands.",
  },
];

export default function Features() {
  return (
    <CaseStudySection
      index="03"
      eyebrow="Core Capabilities"
      title={
        <>
          More than an appointment{" "}
          <em className="block text-fg-muted">booking app.</em>
        </>
      }
      intro={
        <p>
          Fidus integrates Artificial Intelligence with modern healthcare
          workflows to provide intelligent recommendations, seamless
          consultations and data-driven healthcare insights.
        </p>
      }
    >
      {/* Capability → what it does, as a ruled list. */}
      <dl className="border-b border-line">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delay={Math.min(index, 2) * 0.05}>
              <div className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-8">
                <dt className="flex items-center gap-4 md:col-span-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card border border-line-strong text-project">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-[1.625rem] leading-tight text-fg">{feature.title}</span>
                </dt>
                <dd className="leading-relaxed text-fg-muted md:col-span-7 md:self-center md:text-lg">{feature.description}</dd>
              </div>
            </Reveal>
          );
        })}
      </dl>
    </CaseStudySection>
  );
}
