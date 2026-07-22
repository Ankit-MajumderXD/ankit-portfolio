import { useEffect } from "react";

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
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    } as ScrollToOptions);
  }, []);

  return (
    <main className="bg-black text-white">
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
    </main>
  );
}