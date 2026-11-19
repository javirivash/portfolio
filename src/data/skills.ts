export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS/Less", "SQL (PL/pgSQL)"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Tailwind CSS", "React Router", "React Query"],
  },
  {
    category: "Testing",
    items: ["Vitest", "Cypress", "Jest", "Testing Library"],
  },
  {
    category: "Platform",
    items: ["Supabase", "PostgreSQL", "Stripe", "Vercel", "GitHub Actions", "Sentry"],
  },
];
