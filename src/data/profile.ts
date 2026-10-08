import type { Profile, ProfileLink } from "@/types/content";

export const PROFILE: Profile = {
  name: "Chandan",
  fullName: "Dakka Chandan",
  intro:
    "Full-stack developer from Kadapa, India. I build web apps and AI agents, from the database to deployment.",
  status: "Software engineer intern at Abstrabit.",
  email: "chandandakka@gmail.com",
  resume: "/chandan.pdf",
  source: "https://github.com/chandan-1427/chandan_portfolio",
};

export const LINKS: ProfileLink[] = [
  { label: "GitHub", handle: "chandan-1427", href: "https://github.com/chandan-1427" },
  { label: "LinkedIn", handle: "Chandan Dakka", href: "https://www.linkedin.com/in/chandan-dakka-805068360/" },
  { label: "X", handle: "@chandan_1427", href: "https://x.com/chandan_1427" },
];
