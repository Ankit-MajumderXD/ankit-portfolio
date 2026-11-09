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
  // Stays dark in both themes until this page moves onto the design tokens.
  return (
    <div className="dark bg-black text-white">
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
    </div>
  );
}