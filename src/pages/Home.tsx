import Hero from "../sections/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}