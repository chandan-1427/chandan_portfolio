import { useEffect, useState } from "react";
import { SOCIALS } from "../data/socials";
import SectionEyebrow from "../components/SectionEyebrow";

const EMAIL = "chandandakka@gmail.com";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timeout);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // silently fail
    }
  };

  return (
    <section id="contact" className="relative overflow-visible px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="relative z-10 mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <SectionEyebrow label="Contact" className="text-[0.858rem]" />

        <div className="grid gap-[2rem] md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start md:gap-[2.618rem]">
          <div className="space-y-[0.764rem] md:space-y-[1rem]">
            <SectionEyebrow label="Email" className="text-[0.75rem] text-white/[0.5] tracking-widest" />

            <div className="rounded-[0.5rem] border border-white/[0.146] bg-black/[0.24] p-[1rem] backdrop-blur-[14px] sm:p-[1.25rem] md:p-[1.618rem]">
              <div className="flex flex-wrap items-center gap-[0.764rem]">
                <span className="min-w-0 flex-1 truncate text-[0.92rem] tracking-[0.04em] text-white/[0.9] sm:text-[0.95rem] md:text-[1.05rem]">
                  {EMAIL}
                </span>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="shrink-0 cursor-pointer rounded-[0.3rem] border border-white/[0.18] bg-white/[0.06] tracking-wide px-[0.75rem] py-[0.42rem] text-[0.75rem] text-white/[0.8] transition-colors duration-200 hover:border-white/[0.16] hover:bg-white/[0.1] sm:px-[0.9rem]"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-[0.764rem] md:space-y-[1rem]">
            <SectionEyebrow label="social" className="text-[0.75rem] text-white/[0.5] tracking-widest" />

            <div className="flex min-w-max gap-[0.764rem] pb-[0.25rem]">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group relative z-20 flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center rounded-[0.4rem] border border-white/[0.18] bg-white/[0.04] text-white/[0.78] transition-all duration-200 hover:border-white/[0.16] hover:bg-white/[0.08] hover:text-white"
                >
                  <Icon size={18} />

                  <span className="pointer-events-none absolute left-1/2 top-[-2.4rem] z-30 -translate-x-1/2 whitespace-nowrap tracking-wide rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.7rem] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.7rem] group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}