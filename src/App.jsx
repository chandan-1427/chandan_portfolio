import { lazy, Suspense, useEffect, useState } from "react";
import Lenis from "lenis";

import Sidebar from "./layouts/Sidebar";
import DotGridLoader from "./components/layout/DotGridLoader";

const HeroSection     = lazy(() => import("./sections/Hero"));
const AboutSection    = lazy(() => import("./sections/About"));
const SkillsSection   = lazy(() => import("./sections/Skills"));
const ProjectsSection = lazy(() => import("./sections/Projects"));
const ContactSection  = lazy(() => import("./sections/Contact"));
const Footer          = lazy(() => import("./layouts/Footer"));

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

    const raf = (time) => lenis.raf(time) || requestAnimationFrame(raf);
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Wait for custom fonts to actually be loaded (not just the CSS parsed)
    const fontsReady = document.fonts
      ? document.fonts.ready
      : Promise.resolve();

    // Small minimum duration so the loader doesn't flash for 1 frame
    const minDelay = new Promise((resolve) => setTimeout(resolve, 400));

    Promise.all([fontsReady, minDelay]).then(() => setReady(true));
  }, []);

  return (
    <main className="min-h-screen">
      <DotGridLoader visible={!ready} />
      <Sidebar />
      <Suspense fallback={null}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </main>
  );
}