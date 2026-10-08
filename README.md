### Portfolio

A clean and minimal portfolio website built with Next.js.

#### Description

This is my portfolio website showcasing my work as a Full Stack Developer & AI Engineer. The site features a minimal design with a responsive layout and clean typography.

View in your browser - [portfolio-1-two-lovat.vercel.app](https://portfolio-1-two-lovat.vercel.app)

#### Why I Built This

I wanted to build a portfolio that is minimal, clean, and simple. I wanted to avoid making something overly flashy, messy, or overdesigned. I wanted to prove that a good portfolio does not need unnecessary animations, too many colors, or complicated layouts.

I also wanted to remind myself and others that not everything AI generates is correct. AI can help, but developers still need to make good decisions, simplify things, and keep a clear mindset. A developer should know when to remove unnecessary things instead of always adding more.

This project is a small example of choosing clarity, simplicity, and readability over complexity.

#### Tech Stack

- Next.js 16 (App Router), with every section rendered on the server
- React 19 and TypeScript (strict mode)
- Tailwind CSS 4
- Inter, Fraunces and Stalemate, self-hosted through `next/font` (Latin subset only)

#### Features

- One column of content with section labels beside it on wide screens
- Sticky header that shows which section you're reading
- Projects written as what it is, what was hard, and what it's built with
- Experience timeline and a short about section with the tools I use
- Email link with a copy button that confirms inline and announces to screen readers
- Name animation that plays once per visit, and not when reduced motion is on
- Consistent keyboard focus ring, skip link, and readable contrast
- Resume as a PDF

#### Project Structure

```
src/
  app/
    layout.tsx            # Fonts, metadata, and the play-once intro script
    page.tsx              # Renders the page
  components/
    Header.tsx            # Sticky navigation with the current section (client)
    Section.tsx           # Label column + content column layout
    TextLink.tsx          # Inline link, marks external links
    CopyEmail.tsx         # Copy-to-clipboard button (client)
  data/
    profile.ts            # Name, intro, email, links
    projects.ts           # Projects
    experience.ts         # Work history
    about.ts              # About text and tools
  sections/
    Intro.tsx             # Name, one-line intro, main links
    Work.tsx              # Projects
    Experience.tsx        # Timeline
    About.tsx             # About text and tools
    Contact.tsx           # Email and profiles
    Footer.tsx            # Signature and links
  types/
    content.ts            # Types for the content in data/
    css.d.ts              # Allows CSS variables in style props
  App.tsx                 # Page layout
  index.css               # Theme tokens and global styles
```

#### Design Approach

- The UI is minimal because I believe less is more. Subtle transparency in theme creates depth without distraction. Spacing, typography, and layout are kept simple to maintain readability across all devices.

- Reusable components are used to keep the code maintainable and consistent. The sidebar navigation and section layouts follow the same patterns throughout the site.

- Experience, skills, projects, and social links are kept in dedicated data files. This separates portfolio content from the UI and makes updates simpler without changing the section components.

- Readability and maintainability were prioritized over complex effects. The animations are subtle and purposeful, enhancing the user experience without overwhelming the content.

#### What I Learned

— Simplicity is harder than adding more features.

— Good UI is often about consistency rather than creativity.

— Small design choices matter more than I initially thought.

— Reusable components make the code cleaner and easier to maintain.

*AI suggestions should be reviewed carefully instead of copied directly because sometimes the best solution is the simplest one.*

#### Final Thoughts

This is a small project, but it represents my design mindset. I prefer clean and maintainable interfaces. I want to continue building products that are simple, useful, and easy to understand.

#### Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/chandan-1427/chandan_portfolio.git
   ```
2. Move into the project directory:
   ```bash
   cd chandan_portfolio
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

#### Build

To build for production:
```bash
pnpm build
```

Run the production build:
```bash
pnpm start
```

#### Lint

To check the code with ESLint:
```bash
pnpm lint
```

#### Contributions, suggestions, and feedback are always welcome. Have a good day - CHANDAN
