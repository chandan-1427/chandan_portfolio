import { IoIosArrowForward } from "react-icons/io";
import { PROJECT_ITEMS } from "../data/projects";
import SectionEyebrow from "../components/SectionEyebrow";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import TagList from "../components/TagList";
import Description from "../components/Description";
import MetaDataRow from "../components/MetaDataRow";
import LinkButton from "../components/LinkButton";

function ProjectCard({ title, value, description, tech, github, live }) {
  return (
    <Card>
      <MetaDataRow title={title} value={value} />
      <Description desc={description} />
      <TagList tags={tech} className="gap-[0.618rem]"/>

      <div className="flex justify-end gap-[0.764rem] border-t border-white/[0.08] pt-[0.8rem]">
        {live && (
          <LinkButton href={live} variant="live">
            <span className="flex items-center gap-1"> Live <IoIosArrowForward /></span>
          </LinkButton>
        )}

        <LinkButton href={github}>
          <span className="flex items-center gap-1"> Code <IoIosArrowForward /></span>
        </LinkButton>
      </div>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]"
    >
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <div className="space-y-[1.618rem]">
          <SectionEyebrow label="Projects" />
          <SectionHeading className="max-w-[48rem]">My work across AI agents, and full-stack applications.</SectionHeading>
        </div>

        <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
          {PROJECT_ITEMS.map((item) => (
            <ProjectCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}