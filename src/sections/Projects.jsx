import { IoIosArrowForward } from "react-icons/io";
import { PROJECT_ITEMS } from "../data/projects";
import SectionEyebrow from "../components/SectionEyebrow";
import TagList from "../components/TagList";
import Description from "../components/Description";
import MetaDataRow from "../components/MetaDataRow";
import LinkButton from "../components/LinkButton";

function ProjectCard({ title, value, description, tech, github, live }) {
  return (
    <div className="flex flex-col gap-[1.618rem] rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[4px]">
      <MetaDataRow title={title} value={value} />

      <Description desc={description} />

      <TagList tags={tech} className="gap-[0.618rem]"/>

      <div className="flex justify-end gap-[0.764rem] border-t border-white/[0.08] pt-[0.8rem]">
        {live && (
          <LinkButton href={live} variant="live">
            <span className="flex items-center gap-1"> Live <IoIosArrowForward /></span>
          </LinkButton>
        )}

        <LinkButton href={github} variant="code">
          <span className="flex items-center gap-1"> Code <IoIosArrowForward /></span>
        </LinkButton>
      </div>
    </div>
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
          <h2 className="max-w-[48rem] text-[1.418rem] leading-[1] text-white/[0.918] md:text-[2.218rem] lg:text-[3.236rem]">
            My work across AI agents, and full-stack applications.
          </h2>
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