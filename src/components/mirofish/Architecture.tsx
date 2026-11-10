import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";
import { MODULE_ICONS } from "./icons";

const modules = [
  {
    icon: MODULE_ICONS.crop,
    title: "Crop Advisory",
    description:
      "AI-powered recommendations for crops, fertilizers, irrigation and disease management.",
  },
  {
    icon: MODULE_ICONS.weather,
    title: "Weather Intelligence",
    description:
      "Real-time forecasts, rainfall predictions and weather alerts for better planning.",
  },
  {
    icon: MODULE_ICONS.finance,
    title: "Financial Assistance",
    description:
      "Access to government schemes, subsidies, MSP information and financial guidance.",
  },
  {
    icon: MODULE_ICONS.education,
    title: "Education & Careers",
    description:
      "Career guidance, scholarship recommendations and learning resources for students.",
  },
];

// Desktop placement around the hub: two modules on each side.
const PLACEMENT = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

export default function Architecture() {
  return (
    <CaseStudySection
      id="architecture"
      index="04"
      eyebrow="Platform Architecture"
      title={
        <>
          One AI platform.{" "}
          <em className="block text-fg-muted">Multiple intelligent services.</em>
        </>
      }
      intro={
        <p>
          Miro Fish brings together multiple AI-powered modules under a
          unified assistant, enabling users to access agriculture, education
          and financial insights from a single interface.
        </p>
      }
    >
      {/* Hub-and-spoke diagram: one decision engine serving four modules. */}
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_minmax(15rem,19rem)_1fr] lg:grid-rows-2 lg:gap-x-12 lg:gap-y-8">
        <Reveal className="relative sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          {/* Plain surface (not the accent tint) keeps the accent text above 4.5:1. */}
          <div className="mx-auto mb-8 flex max-w-[19rem] flex-col items-center rounded-panel border-2 border-project/60 bg-surface px-6 py-8 text-center shadow-card lg:mb-0 lg:py-12">
            <p className="font-mono text-eyebrow uppercase text-project">Hub</p>
            <h3 className="mt-3 font-display text-[2.25rem] leading-none text-project">MIRO FISH AI</h3>
            <p className="mt-3 text-fg-muted">Intelligent Decision Engine</p>
          </div>
        </Reveal>

        {modules.map((module, index) => {
          const Icon = module.icon;
          const leftSide = index % 2 === 0;
          return (
            <Reveal key={module.title} delay={index * 0.05} className={`relative ${PLACEMENT[index]}`}>
              {/* Spoke to the hub (lg) */}
              <span
                aria-hidden="true"
                className={`absolute top-1/2 hidden h-px w-12 bg-project/50 lg:block ${leftSide ? "-right-12" : "-left-12"}`}
              />
              <div className="h-full rounded-card border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <Icon aria-hidden="true" className="h-5 w-5 text-project" strokeWidth={1.75} />
                  <h3 className="text-lg font-semibold text-fg">{module.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-fg-muted">{module.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </CaseStudySection>
  );
}
