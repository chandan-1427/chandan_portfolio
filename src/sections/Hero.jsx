import { useEffect, useMemo, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";

const NAME = "CHANDAN";
const TAGLINE = "Full Stack Developer & AI Engineer";

export default function HeroSection() {
  const letters = useMemo(() => NAME.split(""), []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="flex min-h-screen w-full items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50 transition-all duration-700 ease-out delay-[120ms] sm:mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(0.5rem)",
            }}
          >
            Hello! I&apos;m
          </p>

          <div
            className="flex flex-wrap items-center justify-center"
            role="heading"
            aria-level={1}
            aria-label={NAME}
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="inline-block text-[50px] font-medium tracking-[0.12em] text-white transition-all duration-700 ease-out md:text-[90px] lg:text-[110px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : index % 2 === 0
                    ? "translateY(-1.5rem)"
                    : "translateY(1.5rem)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <p
            className="mt-5 max-w-[90%] text-[15px] tracking-[0.15em] text-white/70 transition-all duration-700 ease-out sm:mt-6 sm:tracking-[0.13em] md:max-w-2xl md:text-[20px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
              transitionDelay: `${letters.length * 80 + 200}ms`,
            }}
          >
            {TAGLINE}
          </p>

          <a
            href="/chandan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-8 w-fit shrink-0 flex items-center gap-2 rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.618rem] uppercase tracking-[0.18em] text-white/[0.618] transition-colors duration-300 hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146] sm:mt-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
              transitionDelay: `${letters.length * 80 + 500}ms`,
              transition: "opacity 700ms ease-out, transform 700ms ease-out",
            }}
          >
              <HiOutlineDocumentText size={14} />
              Resume

              <span className="pointer-events-none absolute left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.5rem] group-hover:opacity-100">
                View PDF
              </span>
            </a>
        </div>
      </div>
    </section>
  );
}