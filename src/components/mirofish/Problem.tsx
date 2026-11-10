import CaseStudySection from "../case-study/CaseStudySection";
import Reveal from "../ui/Reveal";

const audiences = [
  {
    title: "Farmers",
    body: "Farmers often rely on fragmented information for weather, crop diseases, market prices and government schemes. This leads to delayed decisions, reduced productivity and financial uncertainty.",
  },
  {
    title: "Students",
    body: "Students, especially in rural regions, face difficulty finding trustworthy guidance for careers, scholarships, competitive exams and educational resources in one accessible platform.",
  },
];

export default function Problem() {
  return (
    <CaseStudySection
      index="01"
      eyebrow="The Problem"
      layout="stacked"
      title={
        <>
          Millions of farmers and students{" "}
          <em className="text-fg-muted">struggle to access reliable information.</em>
        </>
      }
    >
      {/* The two communities, set as facing pages. */}
      <div className="grid md:grid-cols-2">
        {audiences.map((audience, index) => (
          <Reveal
            key={audience.title}
            delay={index * 0.06}
            className={`border-t border-line-strong py-8 md:py-10 ${index === 0 ? "md:pr-12" : "md:border-l md:border-l-line md:pl-12"}`}
          >
            <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-project">{audience.title}</h3>
            <p className="mt-6 max-w-[32rem] text-lg leading-relaxed text-fg-muted">{audience.body}</p>
          </Reveal>
        ))}
      </div>
    </CaseStudySection>
  );
}
