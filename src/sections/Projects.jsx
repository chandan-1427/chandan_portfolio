import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { PROJECT_ITEMS } from "@/data/projects";
import SectionEyebrow from "@/components/layout/SectionEyebrow";
import SectionHeading from "@/components/layout/SectionHeading";
import Card from "@/components/content/Card";
import TagList from "@/components/ui/TagList";
import Description from "@/components/content/Description";
import MetaDataRow from "@/components/content/MetaDataRow";
import LinkButton from "@/components/ui/LinkButton";
import { cn } from "@/lib/cn";

function ProjectCard({ title, value, description, tech, github, live, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Card className="h-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 text-left md:pointer-events-none"
      >
        <div className="flex-1">
          <MetaDataRow title={title} value={value} />
        </div>
        <IoIosArrowDown
          className={cn(
            "shrink-0 transition-transform duration-300 md:hidden",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "flex-1 flex-col gap-4 overflow-hidden transition-all duration-300",
          isOpen ? "flex" : "hidden",
          "md:flex"
        )}
      >
        <Description desc={description} />
        <TagList tags={tech} className="gap-[0.618rem]" />

        <div className="mt-auto flex justify-end gap-[0.564rem] border-t border-white/[0.08] pt-[0.8rem]">
          {live && (
            <LinkButton href={live} variant="live">
              <span className="flex items-center gap-1"> Live <IoIosArrowForward /></span>
            </LinkButton>
          )}

          <LinkButton href={github}>
            <span className="flex items-center gap-1"> Code <IoIosArrowForward /></span>
          </LinkButton>
        </div>
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
          <SectionHeading>My work across AI agents, and full-stack applications.</SectionHeading>
        </div>

        <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
          {PROJECT_ITEMS.map((item, index) => (
            <ProjectCard key={item.title} {...item} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}