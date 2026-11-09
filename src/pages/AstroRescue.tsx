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
  // Stays dark in both themes until this page moves onto the design tokens.
  return (
    <div className="dark bg-black text-white">
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
    </div>
  );
}