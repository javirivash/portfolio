export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  tags: string[];
  context: string;
  approach: string;
  outcome: string;
  stack: string[];
  stats?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  /** Screen recordings played one after another in a phone frame beside the row. */
  videos?: { src: string; poster: string; title: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: "organic-nails",
    title: "Organic Nails",
    period: "Apr 2026 – Present",
    description:
      "Course booking, payments and studio management platform for a nail-training business in Mexico. Designed, built and run solo.",
    tags: ["Next.js", "Supabase", "Stripe", "Full-Stack"],
    context:
      "Organic Nails is a nail-products distributor and training studio in Tepic, Mexico, selling multi-week course packages taught to groups. The studio ran on spreadsheets and WhatsApp threads. I've worked with the client since April 2026 and started development in June 2026 as the sole developer.",
    approach:
      "Online booking and Stripe Checkout (deposits, full and idempotent balance payments) with seat holds and transactional writes on payment confirmation. A full admin panel for catalog, group and session scheduling with capacity limits, in-person sales, roll call, kit hand-off and a signed per-student MXN ledger. Email (Resend) and WhatsApp (Twilio) reminders from scheduled jobs. Core business rules live in Postgres as transactional PL/pgSQL with Row-Level Security across 29 versioned migrations; money is stored as integer centavos and packages are frozen entitlements.",
    outcome:
      "Live in production with 110+ accounts and 475+ course bookings. 375+ merged PRs and 1,000+ automated tests (700+ unit, 380+ database integration). CI and a production smoke suite run on every PR, plus a nightly schema-drift check. Infrastructure under MXN $1,000/month.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vitest",
      "GitHub Actions",
      "Vercel",
    ],
    stats: [
      { label: "Merged PRs", value: "375+" },
      { label: "Accounts in production", value: "110+" },
      { label: "Automated tests", value: "1,000+" },
    ],
    liveUrl: "https://organicnailstepic.com",
    videos: [
      {
        src: "/videos/organic-nails-reserva.mp4",
        poster: "/videos/organic-nails-reserva.jpg",
        title: "Booking",
        label:
          "Screen recording on a phone: a student picks a course package, signs in, chooses a group and reaches the payment step.",
      },
      {
        src: "/videos/organic-nails-panel.mp4",
        poster: "/videos/organic-nails-panel.jpg",
        title: "Admin panel",
        label:
          "Screen recording of the admin panel on a phone: today's sessions, roll call, a student's account with her balance, and the calendar.",
      },
    ],
  },
  {
    id: "datarobot-platform",
    title: "DataRobot AI Platform",
    period: "2021 – 2025",
    description:
      "Production-scale frontend features for an enterprise AI/ML platform.",
    tags: ["React", "TypeScript", "Cypress", "Design Systems"],
    context:
      "DataRobot is an enterprise AI platform used by Fortune 500 companies. The frontend serves a complex, monolithic application with cloud and on-premises deployments.",
    approach:
      "Led 5 feature projects end to end, from technical spec writing through testing and stakeholder sign-off. Used feature flags to control each feature's rollout. Refactored legacy components during a multi-year UI overhaul.",
    outcome:
      "Contributed to the Design System library and improved test coverage by migrating 20+ test suites from Jasmine to Jest.",
    stack: ["React", "TypeScript", "JavaScript", "Cypress", "Jest", "Less"],
    stats: [
      { label: "Feature projects led", value: "5" },
      { label: "Test suites migrated to Jest", value: "20+" },
    ],
  },
  {
    id: "youtubit",
    title: "YouTubit",
    period: "2021",
    description:
      "Full-featured video app built with the YouTube API during a React bootcamp at Wizeline.",
    tags: ["React", "Firebase", "Styled Components"],
    context:
      "A capstone project for the Wizeline React Bootcamp, building a YouTube-like video application from scratch with authentication and personalization features.",
    approach:
      "Implemented video search, playback, and user authentication with persistent login via React Context. Designed public/private route architecture and a favorites system with user-specific data stored in Firebase.",
    outcome:
      "Delivered a fully functional video app with search, playback, auth, favorites, and responsive design.",
    stack: [
      "React",
      "React Router",
      "Styled Components",
      "Firebase",
      "YouTube API",
    ],
    githubUrl: "https://github.com/javirivash/youtubit",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Site",
    period: "2026",
    description:
      "This site: a portfolio built with Next.js and Tailwind CSS on a shared design system.",
    tags: ["Next.js", "Tailwind CSS", "Design Systems"],
    context:
      "A personal portfolio that shares one design system with my web services site, so both read as the same brand.",
    approach:
      "Built with the Next.js App Router and Tailwind CSS v4. Design tokens, the Archivo type scale and a small set of components come from one shared style guide.",
    outcome:
      "A fast, accessible single-page portfolio that stays consistent with the rest of my sites.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/javirivash/portfolio",
  },
];
