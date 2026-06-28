export const PROJECT_ITEMS = [
  {
    title: "Jyo",
    value: "Full-Stack",
    description:
      "A community food-sharing platform built for Tirupati, India — connects households with surplus food to nearby students and neighbours, no delivery and no payment involved. The core design problem was trust between strangers meeting in person: exact pickup location stays hidden until a request is approved, and pickers submit a selfie before the poster commits, resolving the privacy/safety tradeoff without requiring ID verification. Posts move through an explicit lifecycle (open → pending → closed → completed/expired), with a cron job enforcing pickup windows automatically. Built and deployed solo, live and in real use.",
    tech: ["TypeScript", "React", "Hono", "PostgreSQL", "Drizzle ORM", "Supabase", "Resend"],
    github: "https://github.com/chandan-1427/jyos",
    live: "https://www.jyo.co.in",
  },
  {
    title: "Repo Pilot",
    value: "Full-Stack",
    description:
      "An event-driven automation platform for GitHub repositories. Connects via a GitHub App (JWT-based installation tokens, not a static PAT) to react to issues, pull requests, and pushes in real time — running user-defined rules to label, comment, and trigger Slack alerts. Webhook handling is signature-verified and idempotent against GitHub's at-least-once delivery guarantees, with retry-backed external calls and full action-level audit logging. Includes optional AI-powered triage for incoming issues and PRs.",
    tech: ["TypeScript", "React", "Hono", "PostgreSQL", "Drizzle ORM", "GitHub Apps API", "Slack API", "Gemini"],
    github: "https://github.com/chandan-1427/github-automation-bot",
    live: "https://github-automation-bot-two.vercel.app",
  },
  {
    title: "Bindu Mail Agent",
    value: "AI Automation",
    description:
      "An email-driven HR triage agent that's processed real job applications end-to-end: parses incoming emails and attachments, scores completeness against configurable per-inbox requirements, and drafts responses — escalating to a human via Slack when an application stalls. Routes between three models by task cost/difficulty (cheap model for spam filtering, stronger model for extraction, strongest for triage decisions), and rejects low-confidence field extractions rather than guessing. Webhook ingestion is signature-verified and rate-limited, with a retrying async send queue and dead-letter handling for failed replies.",
    tech: ["Python", "Bindu", "Agno", "AgentMail", "Claude Skills", "Hindsight", "PostgreSQL", "HTML/CSS"],
    github: "https://github.com/chandan-1427/mail-agent",
    live: "",
  },
  {
    title: "Feedback Intelligence",
    value: "Full-Stack",
    description:
      "A feedback collection and analysis platform that runs incoming customer feedback through an LLM pipeline to extract themes, cluster related feedback, and surface AI-suggested solutions on an analytics dashboard. Built the full auth and data layer (JWT in httpOnly cookies, per-user data isolation) alongside the AI integration, rather than treating the backend as a thin wrapper around a single prompt.",
    tech: ["TypeScript", "React", "Node.js", "Hono", "PostgreSQL", "JWT", "Zod", "Groq", "TailwindCSS", "Recharts"],
    github: "https://github.com/chandan-1427/feedback-intelligence",
    live: "https://feedback-intelligence-five.vercel.app",
  },
];