import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";
import { MODULE_ICONS } from "./icons";

const modules = [
  {
    icon: MODULE_ICONS.crop,
    title: "Crop Guidance",
    description:
      "AI-powered recommendations help farmers choose suitable crops, improve productivity and adopt better farming practices.",
  },
  {
    icon: MODULE_ICONS.weather,
    title: "Weather Intelligence",
    description:
      "Real-time weather forecasts and alerts help farmers make informed agricultural decisions and reduce climate-related risks.",
  },
  {
    icon: MODULE_ICONS.finance,
    title: "Financial Assistance",
    description:
      "Provides information about agricultural loans, subsidies, financial schemes and government support programs.",
  },
  {
    icon: MODULE_ICONS.education,
    title: "Career Guidance",
    description:
      "Helps students discover career opportunities, educational pathways, scholarships and skill-development resources.",
  },
  {
    icon: MODULE_ICONS.fortune,
    title: "Fortune",
    description:
      "A positive AI companion that delivers motivational guidance and encouragement to help farmers and students stay optimistic during challenges.",
  },
  {
    icon: MODULE_ICONS.search,
    title: "Smart Government Search",
    description:
      "An intelligent search engine that brings together official government schemes, scholarships, agricultural programs, financial assistance, crop insurance and trusted application portals in one place.",
  },
];

export default function CompanionModules() {
  return (
    <CaseStudySection
      index="03"
      eyebrow="AI Companion Modules"
      title={
        <>
          Everything users need{" "}
          <em className="block text-fg-muted">in one AI platform.</em>
        </>
      }
      intro={
        <p>
          Miro Fish goes beyond crop recommendations by combining agriculture,
          education, government services and AI-powered personal assistance
          into one unified experience.
        </p>
      }
    >
      {/* Module index: icon, name and purpose in a two-column ruled list. */}
      <ul className="grid gap-x-12 border-b border-line md:grid-cols-2">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <li key={module.title} className="border-t border-line">
              <Reveal delay={(index % 2) * 0.05} className="flex gap-5 py-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-project-soft text-project">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-fg">{module.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{module.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
}
