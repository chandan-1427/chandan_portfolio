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
            className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50 sm:mb-4"
            style={entrance(120, "0.5rem")}
          >
            Hello! I&apos;m
          </p>

          <h1 aria-label={NAME} className="flex flex-wrap items-center justify-center">
            {LETTERS.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="inline-block text-[50px] font-medium tracking-[0.12em] text-white/[0.918] md:text-[90px] lg:text-[110px]"
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
            className="mt-5 max-w-[90%] text-[15px] tracking-[0.15em] text-white/70 sm:mt-6 sm:tracking-[0.13em] md:max-w-2xl md:text-[20px]"
            style={entrance(LETTERS.length * 80 + 200)}
          >
            {TAGLINE}
          </p>

          <a
            href="/chandan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-8 flex w-fit shrink-0 items-center gap-1 tracking-wide rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.75rem] text-white/[0.618] sm:mt-10"
            style={{
              ...entrance(LETTERS.length * 80 + 500),
              transition: "opacity 700ms ease-out, transform 700ms ease-out, background-color 300ms ease, color 300ms ease",
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