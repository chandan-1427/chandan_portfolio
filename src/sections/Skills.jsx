import { SKILL_GROUPS } from "../data/skills";
import SectionEyebrow from "../components/SectionEyebrow";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import TagList from "../components/TagList";
import Description from "../components/Description";
import MetaDataRow from "../components/MetaDataRow";

function SkillCard({ title, description, skills }) {
  return (
    <Card>
      <div className="space-y-[0.764rem]">
        <MetaDataRow title={title} />
        <Description desc={description} />
      </div>
 
      <TagList tags={skills} />
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <div className="space-y-[1.618rem]">
          <SectionEyebrow label="Skills" />
          <SectionHeading className="max-w-[48rem]">Skills built through real projects and practical work.</SectionHeading>
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