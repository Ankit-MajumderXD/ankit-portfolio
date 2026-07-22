import { useEffect } from "react";
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