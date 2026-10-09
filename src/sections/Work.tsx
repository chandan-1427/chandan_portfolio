import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { PROJECTS } from "@/data/projects";
import type { Project as ProjectData } from "@/types/content";

function Project({ project, index }: { project: ProjectData; index: number }) {
  const { name, meta, summary, details, stack, live, code } = project;

  return (
    <article className="border-b border-white/[0.08] py-10 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
        <h3 className="flex items-baseline gap-3 font-serif text-[26px] font-medium leading-tight text-white">
          <span aria-hidden="true" className="font-sans text-[13px] font-normal tabular-nums text-white/50">
            {String(index + 1).padStart(2, "0")}
          </span>
          {name}
        </h3>

        {/* Padded links that touch; negative margins keep the row's height and alignment */}
        <ul className="-mx-2.5 -my-2 flex text-[14px]">
          {live && (
            <li>
              <TextLink href={live} accent padded>Live site</TextLink>
            </li>
          )}
          <li>
            <TextLink href={code} padded>Code</TextLink>
          </li>
        </ul>
      </div>

      <p className="mt-2 text-[13px] text-white/50">{meta.join(" · ")}</p>

      <p className="mt-5 text-[17px] leading-relaxed text-white/90">{summary}</p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-white/65 marker:text-white/30">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <p className="mt-5 text-[13px] leading-relaxed text-white/50">
        <span className="sr-only">Built with: </span>
        {stack.join(" · ")}
      </p>
    </article>
  );
}

export default function Work() {
  return (
    <Section id="work" label="Work">
      {PROJECTS.map((project, index) => (
        <Project key={project.name} project={project} index={index} />
      ))}
    </Section>
  );
}
