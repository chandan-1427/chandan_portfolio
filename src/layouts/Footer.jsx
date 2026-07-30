import { useState } from "react";
import { scrollTo } from "@/lib/scrollTo";
import MyImage from "@/assets/blue-me.png";
import Tooltip from "@/components/ui/ToolTip";

const label = "Back to top";

export default function Footer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <footer className="flex min-h-screen flex-col items-center justify-center pb-8 md:pb-16 bg-gradient-to-t from-[#B85A0D] from-0% via-[#5A3410] via-60% to-[#1B1A19] to-100% rounded-2xl">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-8">
        {/* Image with reserved space — no layout shift */}
        <div className="relative h-64 w-64 shrink-0 rounded-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
          {!loaded && (
            <div className="absolute inset-0 rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.08]" />
          )}
          <img
            src={MyImage}
            alt="Chandan"
            onLoad={() => setLoaded(true)}
            className={`h-full w-full bg-black/30 rounded-2xl object-cover ring-1 ring-white/[0.10] transition-opacity duration-700 backdrop-blur-md shadow-[inset_0_4px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Name — below image on mobile, beside on desktop */}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollTo("hero")}
          className="group relative cursor-pointer select-none"
        >
          <span className="font-stalemate text-5xl tracking-wide text-white transition-all duration-500 group-hover:text-white/70 active:text-[#EBEBEB] md:text-6xl lg:text-7xl inline-block">
            Chandan.
          </span>
          <Tooltip label={label} position="right" />
        </button>
      </div>
    </footer>
  );
}