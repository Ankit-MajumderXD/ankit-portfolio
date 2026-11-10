import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const features = [
  {
    title: "Crop Intelligence",
    description:
      "Provides AI-powered crop recommendations, disease identification, fertilizer guidance and seasonal farming advice.",
  },
  {
    title: "Weather Insights",
    description:
      "Delivers real-time weather forecasts and alerts to help farmers plan irrigation, harvesting and crop protection.",
  },
  {
    title: "Financial Assistance",
    description:
      "Helps users discover government schemes, subsidies, MSP information and financial resources relevant to agriculture.",
  },
  {
    title: "Career & Education",
    description:
      "Supports students with career guidance, scholarships, competitive exam resources and personalized learning recommendations.",
  },
];

export default function Solution() {
  return (
    <CaseStudySection
      index="02"
      eyebrow="Solution"
      layout="stacked"
      title={
        <>
          One intelligent platform{" "}
          <em className="text-project">serving two communities.</em>
        </>
      }
      intro={
        <p>
          Miro Fish combines Artificial Intelligence, official data sources
          and multilingual interaction to provide reliable support for farmers
          and students through one accessible platform.
        </p>
      }
    >
      {/* Four columns, each opened by a short accent rule. */}
      <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <li key={feature.title}>
            <Reveal delay={Math.min(index, 3) * 0.05}>
              <span aria-hidden="true" className="block h-1 w-10 rounded-control bg-project" />
              <h3 className="mt-6 font-display text-[1.875rem] leading-tight text-fg">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{feature.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
}
