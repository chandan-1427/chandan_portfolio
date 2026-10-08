import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-8">
        {EXPERIENCE.map((item) => (
          <li key={item.place} className="grid gap-1 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6">
            <p className="pt-0.5 text-[13px] tabular-nums text-white/50">{item.dates}</p>
            <div>
              <h3 className="text-[16px] font-medium text-white">
                <TextLink href={item.href}>{item.place}</TextLink>
              </h3>
              {item.role && <p className="mt-0.5 text-[14px] text-white/55">{item.role}</p>}
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">{item.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
