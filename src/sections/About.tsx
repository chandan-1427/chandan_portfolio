import Section from "@/components/Section";
import { ABOUT, TOOLS } from "@/data/about";

export default function About() {
  return (
    <Section id="about" label="About">
      <div className="space-y-5 text-[16px] leading-relaxed text-white/80">
        {ABOUT.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-14 text-[16px] font-medium text-white">Tools I use</h3>
      <dl className="mt-5 space-y-4">
        {TOOLS.map(({ group, items }) => (
          <div key={group} className="grid gap-1 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6">
            <dt className="text-[13px] text-white/50">{group}</dt>
            <dd className="text-[15px] leading-relaxed text-white/80">{items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
