import { useEffect, useState } from "react";
import { SOCIALS } from "../data/socials";
import SectionEyebrow from "../components/SectionEyebrow";
import Tooltip from "../components/ToolTip";

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
    } catch {}
  };

  return (
    <section id="contact" className="relative overflow-visible px-6 py-28 text-white md:px-10 lg:px-16">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10">
        <SectionEyebrow label="Contact" />

        <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-white/[0.06]">

            {/* Email column */}
            <div className="flex flex-col gap-3 p-6">
              <span className="text-[0.65rem] uppercase tracking-widest text-white/50">
                Email
              </span>

              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.925rem] tracking-wide text-data">
                  {EMAIL}
                </p>

                <button
                  type="button"
                  onClick={handleCopy}
                  className={`shrink-0 rounded-md border text-white/70 px-3 py-1.5 text-xs tracking-wide transition-all duration-200
                    ${copied
                      ? "border-white/[0.14] bg-white/[0.06] shadow-none"
                      : "border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:border-white/[0.12] hover:bg-white/[0.07] hover:text-white/70 active:shadow-none"
                    }`}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* Divider for mobile */}
            <div className="border-t border-white/[0.06] md:hidden" />

            {/* Socials column */}
            <div className="flex flex-col gap-3 p-6">
              <span className="text-[0.65rem] uppercase tracking-widest text-white/50">
                Socials
              </span>

              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] text-white/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.08] hover:text-white/90 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_8px_-2px_rgba(0,0,0,0.2)] active:shadow-none"
                  >
                    <Icon size={16} />
                    <Tooltip label={label} position="top" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}