import { cn } from "../lib/cn";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md shadow-[inset_0_4px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </div>
  );
}