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
  // Stays dark in both themes until this page moves onto the design tokens.
  return (
    <div className="dark bg-black text-white">
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
    </div>
  );
}