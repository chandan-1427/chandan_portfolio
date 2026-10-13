import TextLink from "@/components/TextLink";
import { PROFILE, LINKS } from "@/data/profile";
import { EXPERIENCE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { GMAIL_COMPOSE_URL } from "@/lib/email";

const LETTER_STAGGER = 40;

// Every claim in the intro links to something a reader can check.
// The URLs come from the experience and project data, and the build fails if one goes missing.
function required(url: string | undefined, what: string): string {
  if (!url) throw new Error(`Intro link for ${what} is missing from the data files`);
  return url;
}

const ABSTRABIT_URL = required(EXPERIENCE.find((item) => item.place === "Abstrabit Technologies")?.href, "Abstrabit");
const BINDU_URL = required(EXPERIENCE.find((item) => item.place === "Bindu")?.href, "Bindu");
const JYO_URL = required(PROJECTS.find((project) => project.name === "Jyo")?.live, "Jyo");

export default function Intro() {
  const letters = PROFILE.name.split("");
  const afterName = 120 + letters.length * LETTER_STAGGER;

  return (
    <section id="top" className="pb-16 pt-16 md:pb-24 md:pt-28">
      <h1
        aria-label={PROFILE.name}
        className="font-serif text-[clamp(56px,11vw,120px)] font-normal leading-none tracking-tight text-white"
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="rise inline-block"
            style={{
              "--delay": `${120 + index * LETTER_STAGGER}ms`,
              "--rise-from": index % 2 === 0 ? "-18px" : "18px",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <div className="rise mt-8 max-w-[36rem] space-y-4" style={{ "--delay": `${afterName}ms` }}>
        <p className="text-[clamp(19px,2.4vw,24px)] leading-snug text-white/90">
          I&apos;m a software engineer intern at <TextLink href={ABSTRABIT_URL}>Abstrabit</TextLink>, where I
          work mostly on the frontend.
        </p>
        <p className="text-[16px] leading-relaxed text-white/70">
          Before that, I was one of two engineers at <TextLink href={BINDU_URL}>Bindu</TextLink> and built their
          email agent for sorting job applications. On my own, I built <TextLink href={JYO_URL}>Jyo</TextLink>, a
          food-sharing app that people in Tirupati use.
        </p>
        <p className="text-[15px] text-white/55">Based in Kadapa, India.</p>
      </div>

      <ul
        className="rise -mx-2.5 mt-6 flex flex-wrap text-[15px]"
        style={{ "--delay": `${afterName + 80}ms` }}
      >
        <li>
          <TextLink href={GMAIL_COMPOSE_URL} accent padded>
            Email
          </TextLink>
        </li>
        {LINKS.slice(0, 2).map((link) => (
          <li key={link.label}>
            <TextLink href={link.href} padded>{link.label}</TextLink>
          </li>
        ))}
        <li>
          <TextLink href={PROFILE.resume} padded>
            Resume <span className="text-white/50">PDF</span>
          </TextLink>
        </li>
      </ul>
    </section>
  );
}
