import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";
import { FIDUS_ICONS } from "./icons";

const modules = [
  {
    icon: FIDUS_ICONS.patient,
    title: "Patients",
    description:
      "Access healthcare services, receive AI recommendations and manage appointments through one interface.",
  },
  {
    icon: FIDUS_ICONS.bot,
    title: "AI Decision Engine",
    description:
      "Processes symptoms, preferences and location to recommend the most appropriate healthcare pathway.",
  },
  {
    icon: FIDUS_ICONS.doctor,
    title: "Verified Doctors",
    description:
      "Connects users with trusted specialists based on expertise, availability and proximity.",
  },
  {
    icon: FIDUS_ICONS.hospital,
    title: "Hospitals & Clinics",
    description:
      "Healthcare providers receive appointment requests and deliver both physical and virtual consultations.",
  },
  {
    icon: FIDUS_ICONS.chart,
    title: "Health Analytics",
    description:
      "Aggregates anonymized healthcare trends to support public health planning and operational insights.",
  },
  {
    icon: FIDUS_ICONS.privacy,
    title: "Privacy Layer",
    description:
      "Protects patient information through secure authentication and privacy-preserving data handling.",
  },
];

function ModuleRow({ items, connector }: { items: typeof modules; connector: "below" | "above" }) {
  return (
    <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
      {items.map((module, index) => {
        const Icon = module.icon;
        return (
          <li key={module.title} className="relative">
            {/* Connector to the core band (md and up) */}
            <span
              aria-hidden="true"
              className={`absolute left-1/2 hidden h-6 w-px bg-project/50 md:block ${connector === "below" ? "-bottom-6" : "-top-6"}`}
            />
            <Reveal delay={index * 0.05} className="h-full">
              <div className="h-full rounded-card border border-line bg-canvas p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <Icon aria-hidden="true" className="h-5 w-5 text-project" strokeWidth={1.75} />
                  <h3 className="font-semibold text-fg">{module.title}</h3>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">{module.description}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

export default function Architecture() {
  return (
    <CaseStudySection
      id="architecture"
      index="04"
      eyebrow="System Architecture"
      title={
        <>
          Connecting every healthcare{" "}
          <em className="block text-fg-muted">interaction.</em>
        </>
      }
      intro={
        <p>
          Fidus acts as the intelligent coordination layer between patients,
          healthcare professionals and medical institutions, enabling seamless
          healthcare experiences through Artificial Intelligence.
        </p>
      }
    >
      {/* Layered diagram: the coordination core between two rows of modules.
          The core comes first in the markup (reading order), placed in the
          middle visually. */}
      <div className="flex flex-col gap-6 rounded-panel border border-line bg-surface p-5 sm:p-8 md:p-10">
        <Reveal className="md:order-2">
          <div className="rounded-card border-2 border-project/60 bg-canvas px-6 py-8 text-center">
            <p className="font-mono text-eyebrow uppercase text-project">Coordination core</p>
            <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-none text-project">FIDUS AI CORE</h3>
            <p className="mt-3 text-fg-muted">Intelligent Healthcare Coordination Engine</p>
          </div>
        </Reveal>
        <div className="md:order-1">
          <ModuleRow items={modules.slice(0, 3)} connector="below" />
        </div>
        <div className="md:order-3">
          <ModuleRow items={modules.slice(3)} connector="above" />
        </div>
      </div>
    </CaseStudySection>
  );
}
