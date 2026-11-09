import Hero from "../sections/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  // Stays dark in both themes until these sections move onto the design
  // tokens (Phase 3).
  return (
    <div className="dark bg-black text-white">
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
