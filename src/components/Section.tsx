import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
}

// A label column and a content column. At 1080px wide that is 360 + 720,
// which keeps 15–17px text at a readable line length.
// The label sticks until its section ends: beside the content on desktop, and as a
// solid bar above it on smaller screens, with a short fade below so content dissolves under it
export default function Section({ id, label, children }: SectionProps) {
  const labelId = `${id}-label`;

  return (
    <section
      id={id}
      aria-labelledby={labelId}
      className="rule-t py-16 md:py-24"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-0">
        <h2
          id={labelId}
          className="section-label sticky top-0 z-10 -mx-5 -mt-3 self-start px-5 py-3 font-serif text-[clamp(1.875rem,4vw,2.5rem)] font-light leading-tight text-fg sm:-mx-8 sm:px-8 lg:top-12 lg:m-0 lg:px-0 lg:py-0"
        >
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
