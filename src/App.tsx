import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;