import { useEffect, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import Tooltip from "../components/ToolTip";

const NAME = "CHANDAN";
const LETTERS = NAME.split("");
const TAGLINE = "Full Stack Developer & AI Engineer";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  const entrance = (delay, y = "1rem") => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : `translateY(${y})`,
    transition: `opacity 700ms ease-out, transform 700ms ease-out`,
    transitionDelay: `${delay}ms`,
  });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="flex min-h-screen w-full items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          <p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40 sm:mb-4"
            style={entrance(120, "0.5rem")}
          >
            Hello! I&apos;m
          </p>

          <h1 aria-label={NAME} className="flex flex-wrap items-center justify-center">
            {LETTERS.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="inline-block text-[50px] font-thin tracking-[0.12em] text-white/90 md:text-[90px] lg:text-[110px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : index % 2 === 0
                    ? "translateY(-1.5rem)"
                    : "translateY(1.5rem)",
                  transition: "opacity 700ms ease-out, transform 700ms ease-out",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p
            className="mt-5 uppercase max-w-[90%] text-sm font-light tracking-[0.10em] text-white/70 sm:mt-6 md:max-w-2xl md:text-"
            style={entrance(LETTERS.length * 80 + 200)}
          >
            {TAGLINE}
          </p>

          <a
            href="/chandan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-8 flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs tracking-wide text-white/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_8px_-2px_rgba(0,0,0,0.2)] transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.07] hover:text-white/70 active:bg-white/[0.03] active:shadow-none sm:mt-10"
            style={{
              ...entrance(LETTERS.length * 80 + 500),
              transition: "opacity 700ms ease-out, transform 700ms ease-out, background-color 300ms ease, color 300ms ease, box-shadow 300ms ease",
            }}
          >
            <HiOutlineDocumentText size={14} />
            Resume
            <Tooltip label="View PDF" position="top-compact" />
          </a>

        </div>
      </div>
    </section>
  );
}