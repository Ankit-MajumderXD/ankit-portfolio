import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToSection from "./components/ScrollToSection";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Chora from "./pages/Chora";
import Fidus from "./pages/Fidus";
import AstroRescue from "./pages/AstroRescue";
import MiroFish from "./pages/MiroFish";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <main className="bg-black text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/chora" element={<Chora />} />
          <Route path="/projects/fidus" element={<Fidus />} />
          <Route path="/projects/astro-rescue-ai" element={<AstroRescue />} />
          <Route path="/projects/miro-fish" element={<MiroFish />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;