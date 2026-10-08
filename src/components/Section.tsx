import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

// A label column and a content column. At 1080px wide that is 360 + 720,
// which keeps 15–17px text at a readable line length
export default function Section({ id, label, children }: SectionProps) {
  const labelId = `${id}-label`;

  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className="scroll-mt-14 border-t border-white/[0.08] py-16 md:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-0">
        <h2
          id={labelId}
          className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent-text lg:sticky lg:top-24 lg:self-start"
        >
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
