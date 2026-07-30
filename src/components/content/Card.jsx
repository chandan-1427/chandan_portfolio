import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export default function Card({ children, className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  // Observed separately from the animated element below — if we watched the
  // element we're translating, its own transform would shift its bounding
  // box and re-trigger the observer mid-animation, causing a feedback loop.
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
      return;
    }

    // Debounce only the exit — right at the edge of the viewport, ordinary
    // scroll jitter flips isInView back and forth rapidly.
    const timeout = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <div ref={ref} className={cn("h-full", className)}>
      <motion.div
        className="flex h-full flex-col gap-4 md:gap-6 rounded-lg border border-white/[0.20] bg-white/[0.04] p-4 md:p-6 backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_4px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)]"
        initial={false}
        animate={shouldReduceMotion ? undefined : { opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
