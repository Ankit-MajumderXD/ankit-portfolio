import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import Hero from "../components/mirofish/Hero";
import Problem from "../components/mirofish/Problem";
import Solution from "../components/mirofish/Solution";
import Architecture from "../components/mirofish/Architecture";
import TechStack from "../components/mirofish/TechStack";
import Workflow from "../components/mirofish/Workflow";
import Challenges from "../components/mirofish/Challenges";
import Results from "../components/mirofish/Results";
import Roadmap from "../components/mirofish/Roadmap";
import FooterCTA from "../components/mirofish/FooterCTA";
import CompanionModules from "../components/mirofish/CompanionModules";

export default function MiroFish() {
  return (
    <CaseStudyLayout projectId="miro-fish">
      <Hero />
      <Problem />
      <Solution />
      <CompanionModules />
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
