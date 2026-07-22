import { useEffect } from "react";

import Hero from "../components/fidus/Hero";
import Problem from "../components/fidus/Problem";
import Solution from "../components/fidus/Solution";
import Features from "../components/fidus/Features";
import Architecture from "../components/fidus/Architecture";
import TechStack from "../components/fidus/TechStack";
import Ecosystem from "../components/fidus/Ecosystem";
import Differentiation from "../components/fidus/Differentiation";
import Impact from "../components/fidus/Impact";
import Roadmap from "../components/fidus/Roadmap";
import FooterCTA from "../components/fidus/FooterCTA";

export default function Fidus() {
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
      <Features />
      <Architecture />
      <TechStack />
      <Ecosystem />
      <Differentiation />
      <Impact />
      <Roadmap />
      <FooterCTA />
    </main>
  );
}