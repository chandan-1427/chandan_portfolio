import { cn } from "../lib/cn";

export default function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={cn(
        "text-2xl leading-tight tracking-tight text-white/90 md:text-4xl lg:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}