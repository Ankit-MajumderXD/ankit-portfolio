import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import Hero from "../components/astro/Hero";
import Problem from "../components/astro/Problem";
import Solution from "../components/astro/Solution";
import Architecture from "../components/astro/Architecture";
import TechStack from "../components/astro/TechStack";
import Workflow from "../components/astro/Workflow";
import Challenges from "../components/astro/Challenges";
import Results from "../components/astro/Results";
import Roadmap from "../components/astro/Roadmap";
import FooterCTA from "../components/astro/FooterCTA";

export default function AstroRescue() {
  return (
    <CaseStudyLayout projectId="astro-rescue-ai">
      <Hero />
      <Problem />
      <Solution />
      <Architecture />
      <TechStack />
      <Workflow />
      <Challenges />
      <Results />
      <Roadmap />
      <FooterCTA />
    </CaseStudyLayout>
  );
}
