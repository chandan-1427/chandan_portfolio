import Header from "./components/Header";
import HashlessAnchors from "./components/HashlessAnchors";
import Intro from "./sections/Intro";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { PROFILE } from "./data/profile";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-1.5 focus:text-[13px] focus:text-black"
      >
        Skip to work
      </a>
      <HashlessAnchors />
      <Header name={PROFILE.name} />
      <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <main>
          <Intro />
          <Work />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
