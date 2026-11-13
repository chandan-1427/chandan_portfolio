import Section from "@/components/Section";
import TextLink from "@/components/TextLink";
import { PROJECTS } from "@/data/projects";
import type { Project as ProjectData } from "@/types/content";

function Project({ project, index }: { project: ProjectData; index: number }) {
  const { name, meta, summary, details, stack, live, code } = project;

  return (
    <article className="py-10 not-last:rule-b first:pt-0 last:pb-0">
      {/* Title and links share one row at every width: a long title wraps in its own column,
          and the links keep their place on the right */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6">
        <h3 className="flex min-w-0 items-baseline gap-3 font-serif text-[1.625rem] font-light leading-tight text-fg">
          <span aria-hidden="true" className="font-sans text-[0.8125rem] font-normal tabular-nums text-ink-60">
            {String(index + 1).padStart(2, "0")}
          </span>
          {name}
        </h3>

        <ul className="-mx-2.5 -my-2 flex whitespace-nowrap text-[0.875rem]">
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

      <p className="mt-2 text-[0.8125rem] text-ink-60">{meta.join(" · ")}</p>

      <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-90">{summary}</p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed text-ink-65 marker:text-fg/30">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>

      <ul aria-label="Built with" className="mt-5 flex flex-wrap gap-2">
        {stack.map((tool) => (
          <li key={tool} className="rounded-md bg-fg/[0.06] px-2.5 py-1 text-[0.8125rem] font-medium text-ink-80">
            {tool}
          </li>
        ))}
      </ul>
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
