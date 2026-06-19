import { IoIosArrowForward } from "react-icons/io";
import { EXPERIENCE_ITEMS } from "../data/experience_items";
import SectionEyebrow from "../components/SectionEyebrow";
import Description from "../components/Description";

const ABOUT_PARAGRAPHS = [
  "I'm Dakka Chandan, a full-stack developer and AI engineer from Kadapa, Andhra Pradesh, India. I design and build agents and web applications that are understandable, maintainable, and focused on solving real problems rather than chasing hype.",
  "I like to deeply understand a problem before writing a single line of code. For me, good engineering means breaking complex systems into clear, achievable pieces and solving them step by step. I care more about reliability and maintainability than fast shipping at the cost of quality.",
  "I enjoy learning new technologies because they offer exposure to better architectures and cleaner developer experiences. Exploring new tools, frameworks, and workflows is part of my daily routine, and I'm comfortable adapting quickly when a project demands it.",
  "I strongly believe great products are built by teamwork. Clear communication, honest feedback, and close collaboration across engineering, design, and product are, in my experience, the fastest way to build something meaningful.",
];

function ExperienceCard({ title, value, description, link, domain }) {
  return (
    <div className="flex flex-col gap-[1.618rem] rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[4px]">
      <div className="flex flex-col gap-[0.764rem] sm:flex-row sm:items-start sm:justify-between sm:gap-[1rem]">
        <h3 className="text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
          {title}
        </h3>
        <span className="w-fit shrink-0 text-[0.76rem] tracking-[0.06em] text-white/[0.618] sm:text-right">
          {value}
        </span>
      </div>

      <Description desc={description} />

      <div className="flex justify-end border-t border-white/[0.08] pt-[0.8rem]">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex w-fit shrink-0 items-center gap-1 rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem]
            tracking-wide text-[0.75rem] text-white/[0.618] transition-colors duration-300 hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]"
        >
          <span>{domain}</span>
          <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]"
    >
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[4.236rem]">
        <div className="space-y-[2.618rem]">
          <div className="space-y-[1.618rem]">
            <SectionEyebrow label="About" />

            <h2 className="text-[1.418rem] leading-[1.2] text-white/[0.918] md:text-[2.218rem] md:leading-[1] lg:text-[3.236rem]">
              Building practical AI agents and full-stack systems that are
              reliable, scalable, and grounded in real-world problems.
            </h2>
          </div>

          <div className="space-y-[1.618rem] text-white/[0.618]">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-[1.08rem] leading-[1.618]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-[2.618rem]">
          <SectionEyebrow label="Experience" className="text-[0.758rem] text-white/[0.582]" />
          
          <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
            {EXPERIENCE_ITEMS.map((item) => (
              <ExperienceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}