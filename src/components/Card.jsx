import { cn } from "../lib/cn";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[1.618rem] rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[4px]",
        className
      )}
    >
      {children}
    </div>
  );
}