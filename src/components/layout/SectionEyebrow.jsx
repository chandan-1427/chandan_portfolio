import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export default function SectionEyebrow({ label, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      className={cn("text-[0.758rem] uppercase tracking-[0.282em] text-white/90 font-medium", className)}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span
        className="box-decoration-clone rounded-[4px] px-[0.55em] py-[0.25em] border-t-2 border-white/40"
        style={{ backgroundColor: "rgba(51, 112, 209, 0.55)" }}
      >
        {label}
      </span>
    </motion.p>
  );
}