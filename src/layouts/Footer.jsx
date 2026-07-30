import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { scrollTo } from "@/lib/scrollTo";
import MyImage from "@/assets/blue-me.png";
import Tooltip from "@/components/ui/ToolTip";
import { useHover } from "@/lib/useHover";

const label = "Back to top";

const liquidSpring = { type: "spring", stiffness: 120, damping: 14, mass: 0.6 };
const liquidHoverSpring = { type: "spring", stiffness: 260, damping: 12 };

export default function Footer() {
  const [loaded, setLoaded] = useState(false);
  const [nameHovered, nameHoverProps] = useHover();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="flex min-h-screen flex-col items-center justify-center pb-8 md:pb-16 bg-red-800 m-10 rounded-[50px]">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:gap-8">
        {/* Image with reserved space — no layout shift */}
        <div className="relative h-64 w-64 shrink-0 rounded-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
          {!loaded && (
            <div className="absolute inset-0 rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.08]" />
          )}
          <motion.img
            src={MyImage}
            alt="Chandan"
            onLoad={() => setLoaded(true)}
            className="h-full w-full bg-black/20 rounded-2xl object-cover ring-1 ring-white/[0.10] backdrop-blur-md shadow-[inset_0_4px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)]"
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.85, y: 24 }}
            animate={
              shouldReduceMotion
                ? undefined
                : loaded
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.85, y: 24 }
            }
            transition={liquidSpring}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03, transition: liquidHoverSpring }}
          />
        </div>

        {/* Name — below image on mobile, beside on desktop */}
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollTo("hero")}
          className="group relative cursor-pointer select-none"
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.08, transition: liquidHoverSpring }
          }
          whileTap={
            shouldReduceMotion
              ? undefined
              : { scale: 0.94, rotate: 1, transition: { type: "spring", stiffness: 400, damping: 15 } }
          }
          {...nameHoverProps}
        >
          <motion.span
            className="font-stalemate text-5xl tracking-wide text-white md:text-6xl lg:text-7xl inline-block"
            animate={
              shouldReduceMotion
                ? undefined
                : { color: nameHovered ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,1)" }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Chandan.
          </motion.span>
          <Tooltip label={label} position="right" visible={nameHovered} />
        </motion.button>
      </div>
    </footer>
  );
}