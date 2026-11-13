import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-10">
        {EXPERIENCE.map((item) => (
          <li key={item.place}>
            {/* Same row as Work: name on the left, dates on the right; a long name wraps in its own column */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
              <h3 className="text-[1.0625rem] font-medium text-fg">
                <TextLink href={item.href}>{item.place}</TextLink>
              </h3>
              <p className="whitespace-nowrap text-[0.875rem] tabular-nums text-ink-60">{item.dates}</p>
            </div>
            {item.role && <p className="mt-1 text-[0.875rem] text-ink-60">{item.role}</p>}
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-75">{item.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
