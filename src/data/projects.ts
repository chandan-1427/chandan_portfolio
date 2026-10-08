import type { Project } from "@/types/content";

export const PROJECTS: Project[] = [
  {
    name: "Jyo",
    meta: ["Full-stack", "Built alone", "Live"],
    summary:
      "A food-sharing app for Tirupati. People with extra food post it, and students or neighbours nearby come and pick it up. No delivery and no payment.",
    details: [
      "Two strangers have to meet in person, so the pickup address stays hidden until the poster approves a request. The person picking up sends a selfie first. Both sides get some safety without anyone uploading an ID.",
      "Each post moves through open, pending, closed, and then completed or expired. A scheduled job closes posts when their pickup window ends.",
      "Built and deployed on my own. It's live and people use it.",
    ],
    stack: ["TypeScript", "React", "Hono", "PostgreSQL", "Drizzle", "Supabase", "Resend"],
    live: "https://www.jyo.co.in",
    code: "https://github.com/chandan-1427/jyos",
  },
  {
    name: "Repo Pilot",
    meta: ["Full-stack"],
    summary:
      "Automation for GitHub repositories. You write rules, and it labels issues, comments on pull requests and sends Slack alerts when something happens in the repo.",
    details: [
      "Connects as a GitHub App with short-lived installation tokens, not a personal access token.",
      "GitHub can send the same webhook more than once. Every event is checked against its signature and handled only once.",
      "Calls to other services retry when they fail, and every action the app takes is logged.",
      "Optional AI triage for new issues and pull requests.",
    ],
    stack: ["TypeScript", "React", "Hono", "PostgreSQL", "Drizzle", "GitHub Apps API", "Slack API", "Gemini"],
    live: "https://github-automation-bot-two.vercel.app",
    code: "https://github.com/chandan-1427/github-automation-bot",
  },
  {
    name: "Bindu Mail Agent",
    meta: ["AI agent", "Built at Bindu"],
    summary:
      "An email agent that sorts job applications for HR. It reads each email and its attachments, checks whether the application is complete, and drafts a reply. It has handled real applications.",
    details: [
      "Each inbox has its own list of what a complete application needs.",
      "It uses three models based on cost: a cheap one to filter spam, a stronger one to pull out details, and the strongest one for the final decision.",
      "When it isn't confident about a field, it leaves it empty instead of guessing. When an application gets stuck, it asks a person on Slack.",
      "Incoming webhooks are verified and rate-limited. Replies go through a retry queue, and the ones that still fail go to a dead-letter queue.",
    ],
    stack: ["Python", "Bindu", "Agno", "AgentMail", "Claude Skills", "Hindsight", "PostgreSQL"],
    code: "https://github.com/chandan-1427/mail-agent",
  },
  {
    name: "Feedback Intelligence",
    meta: ["Full-stack"],
    summary:
      "Collects customer feedback, groups it by theme with an LLM, and suggests fixes on a dashboard.",
    details: [
      "I built the login and data layer as well as the AI part. Sessions use JWTs in httpOnly cookies, and each user can only see their own data.",
    ],
    stack: ["TypeScript", "React", "Node.js", "Hono", "PostgreSQL", "Zod", "Groq", "Recharts"],
    live: "https://feedback-intelligence-five.vercel.app",
    code: "https://github.com/chandan-1427/feedback-intelligence",
  },
];
