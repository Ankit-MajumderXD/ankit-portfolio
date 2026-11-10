import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import SkipLink, { MAIN_CONTENT_ID } from "./components/SkipLink";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Chora from "./pages/Chora";
import Fidus from "./pages/Fidus";
import AstroRescue from "./pages/AstroRescue";
import MiroFish from "./pages/MiroFish";

// Dev-only previews (design foundation, shared case-study components). The
// DEV check is a build-time constant, so production builds drop them.
const Foundation = import.meta.env.DEV
  ? lazy(() => import("./pages/Foundation"))
  : null;
const CaseStudyKit = import.meta.env.DEV
  ? lazy(() => import("./pages/CaseStudyKit"))
  : null;

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <SkipLink />
      <Navbar />

      <main
        id={MAIN_CONTENT_ID}
        tabIndex={-1}
        className="min-h-screen bg-canvas text-fg focus:outline-none"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/chora" element={<Chora />} />
          <Route path="/projects/fidus" element={<Fidus />} />
          <Route path="/projects/astro-rescue-ai" element={<AstroRescue />} />
          <Route path="/projects/miro-fish" element={<MiroFish />} />
          {Foundation && (
            <Route
              path="/__foundation"
              element={
                <Suspense fallback={null}>
                  <Foundation />
                </Suspense>
              }
            />
          )}
          {CaseStudyKit && (
            <Route
              path="/__case-study"
              element={
                <Suspense fallback={null}>
                  <CaseStudyKit />
                </Suspense>
              }
            />
          )}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
