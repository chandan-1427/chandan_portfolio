import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";

const positions = {
  top: { placement: "left-1/2 top-[-2.4rem] -translate-x-1/2", offset: { y: 6 } },
  left: { placement: "right-[120%] top-1/2 -translate-y-1/2", offset: { x: 8 } },
  right: { placement: "left-[120%] top-1/2 -translate-y-1/2", offset: { x: -8 } },
  "top-compact": { placement: "left-1/2 top-[-2.2rem] z-20 -translate-x-1/2", offset: { y: 6 } },
};

export default function Tooltip({ label, position = "top", visible, className = "" }) {
  const { placement, offset } = positions[position];

  return (
    <span className={cn("pointer-events-none absolute z-30", placement, className)}>
      <AnimatePresence>
        {visible && (
          <motion.span
            className="block whitespace-nowrap rounded-md border border-white/[0.08] bg-[#1a1a1a] px-2.5 py-1 text-[0.7rem] tracking-wide text-neon shadow-[0_5px_6px_-2px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, scale: 0.9, ...offset }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, ...offset }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
