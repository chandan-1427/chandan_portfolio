import { SKILL_GROUPS } from "../data/skills";

function SkillCard({ title, description, skills }) {
  return (
    <div className="flex flex-col gap-[1.618rem] rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[4px]">
      <div className="space-y-[0.764rem]">
        <h3 className="text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
          {title}
        </h3>
        <p className="text-[0.95rem] leading-[1.618] tracking-wide text-white/[0.618]">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-[0.764rem]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.78rem] tracking-wide text-white/[0.618]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <div className="space-y-[1.618rem]">
          <p className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Skills
          </p>
          <h2 className="max-w-[48rem] text-[1.418rem] leading-[1] text-white/[0.918] md:text-[2.218rem] lg:text-[3.236rem]">
            Skills built through real projects and practical work.
          </h2>
        </div>

        <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}