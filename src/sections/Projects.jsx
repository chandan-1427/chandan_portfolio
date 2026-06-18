import { IoIosArrowForward } from "react-icons/io";
import { PROJECT_ITEMS } from "../data/projects";

function LinkButton({ href, variant = "code", children }) {
  const variants = {
    live: "bg-white/[0.136] text-white hover:bg-white/[0.226] active:bg-white/[0.146]",
    code: "bg-white/[0.056] text-white/[0.618] hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-fit shrink-0 rounded-[0.3rem] border border-white/[0.146] px-[0.764rem] py-[0.382rem] text-[0.75rem] text-white/80 transition-colors duration-300 tracking-wide ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function ProjectCard({ title, value, description, tech, github, live }) {
  return (
    <div className="flex flex-col gap-[1.618rem] rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[4px]">
      <div className="flex flex-col gap-[0.764rem] sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
          {title}
        </h3>
        <span className="w-fit shrink-0 text-[0.76rem] tracking-[0.06em] text-white/[0.618] sm:text-right">
          {value}
        </span>
      </div>

      <p className="text-[1rem] leading-[1.618] text-white/[0.618]">
        {description}
      </p>

      <div className="flex flex-wrap gap-[0.618rem]">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.75rem] text-white/[0.618] tracking-wide"
          >
            {t}
          </span>
        ))}
      </div>

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
          <p className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Projects
          </p>
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