import CaseStudyLayout from "../components/case-study/CaseStudyLayout";
import Solution from "../components/chora/Solution";
import Hero from "../components/chora/Hero";
import Problem from "../components/chora/Problem";
import Architecture from "../components/chora/Architecture";
import TechStack from "../components/chora/TechStack";
import Results from "../components/chora/Results";
import Workflow from "../components/chora/Workflow";
import Roadmap from "../components/chora/Roadmap";
import FooterCTA from "../components/chora/FooterCTA";
import Challenges from "../components/chora/Challenges";

export default function Chora() {
  return (
    <CaseStudyLayout projectId="chora">
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
