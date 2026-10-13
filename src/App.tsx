import HashlessAnchors from "./components/HashlessAnchors";
import Intro from "./sections/Intro";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <HashlessAnchors />
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
