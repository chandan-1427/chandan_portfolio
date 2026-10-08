import type { ToolGroup } from "@/types/content";

export const ABOUT: string[] = [
  "I'm Dakka Chandan. I've been building software for about a year and a half, mostly on my own. That means I've handled every part of it: the database, the API, the interface and the deployment.",
  "Most of what I know came from things breaking. Jyo made me think about privacy: how much should a stranger know about your location before they've committed to showing up? Repo Pilot taught me that some bugs only appear once two services talk over a real network, like cross-origin cookies, database drivers and connection timeouts.",
  "At Bindu I was one of two engineers. When something was broken or unclear, there was nobody else to ask, so we worked it out ourselves. Since then I try to understand how a tool works before I reach for it.",
  "I learn new tools when a project needs them. Hono, Drizzle and GitHub App authentication are all things I picked up to solve a specific problem.",
];

export const TOOLS: ToolGroup[] = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "Express", "Hono", "REST APIs", "JWT", "PostgreSQL", "MongoDB", "Prisma", "Drizzle"] },
  { group: "AI and agents", items: ["Agno", "LangChain", "Pydantic", "Tool design", "Agent architecture"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Vercel", "Render", "Cloudflare", "Postman", "pgAdmin", "AgentMail", "LangSmith", "Resend"] },
];
