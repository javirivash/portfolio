# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

---

## Project Overview

Single-page portfolio site for a frontend engineer. It shares one design system with servicios.javirivash.dev: a printed price list look — paper background, rules instead of cards, condensed uppercase Archivo headings, one blue accent. The portfolio uses it in a calmer register (fewer highlights, no pricing devices). Style guide: https://claude.ai/artifact/AVzK5MAiamqRrbpbrHZFHR

---

## Critical Rules

**These rules are non-negotiable. Violations will require immediate refactoring.**

### 1. Design Fidelity

All UI code MUST adhere to the design tokens and visual direction defined in this file and `PRD.md`. Do not introduce colors, fonts, or spacing that deviate from the system.

### 2. Git Workflow

- **ALWAYS** create a new branch for feature development
- Branch naming: `feature/<section-name>`, `fix/<bug-name>`, `refactor/<scope>`
- **NEVER** commit directly to `main`

### 3. Pre-Commit Checklist

Before committing ANY work, **ALL** of these must pass:

```bash
npm run lint      # Zero errors, zero warnings
npm run build     # Successful production build
```

### 4. Component Architecture

- **Server Components by default.** Only add `"use client"` when the component needs interactivity (event handlers, hooks).
- **One component per file.** Keep components focused on a single responsibility.
- **Composition over complexity.** Prefer small, composable pieces over monolithic components.

### 5. Accessibility

- WCAG 2.1 AA compliance is required, not optional
- All images need descriptive alt text
- All interactive elements need keyboard support
- Respect `prefers-reduced-motion` for all animations

---

## Quick Reference

### Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Run production server
npm run lint         # Run ESLint

# Git Workflow
git checkout -b feature/<name>    # Create feature branch
npm run lint && npm run build     # Verify before commit
git add <files>                   # Stage specific files
git commit -m "feat: description" # Commit with conventional message
```

### Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

feat:     New feature or section
fix:      Bug fix
refactor: Code change that neither fixes nor adds
style:    Formatting, Tailwind changes, no logic change
docs:     Documentation only
chore:    Maintenance tasks, dependency updates
```

---

## Tech Stack

| Layer      | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js (App Router)                            |
| Language   | TypeScript (strict mode)                        |
| Styling    | Tailwind CSS                                    |
| Fonts      | Archivo (width axis) via `next/font/google`     |
| Deployment | Vercel                                          |

---

## Design Tokens

Defined once in `src/app/globals.css` (`:root` + `@theme inline`). Use these, nothing else.

| Token        | Value     | Usage                                                         |
| ------------ | --------- | ------------------------------------------------------------- |
| `paper`      | `#FAFAF7` | Page background                                               |
| `ink`        | `#151413` | Primary text, 2px rules, primary button                       |
| `ink-soft`   | `#3A3833` | Supporting paragraphs                                         |
| `muted`      | `#64615B` | Labels, notes, footer                                         |
| `rule`       | `#DCD8CE` | 1px dividers between rows and list items (never text)         |
| `azul`       | `#0A62D0` | The only accent: contact band background, focus ring          |
| `azul-texto` | `#0753B5` | Small blue text and list dashes                               |
| `mark`       | `#B9DCFF` | Highlighter behind one key word or figure per section; hovers |

### Typography

One family: Archivo via `next/font/google` with the `wdth` axis (`--font-archivo`).

| Role               | Treatment                                                    |
| ------------------ | ------------------------------------------------------------ |
| Headings, figures  | 800–900 weight, `font-stretch` 62–72%, uppercase, leading ≤ .92 |
| Body               | 400 weight, normal width, 1.55 leading, ≤ 60ch               |
| Labels (`.jr-etq`) | 12px, 600, uppercase, 0.08em tracking, `muted`               |

### Components

Shared `jr-` classes live in `globals.css` (same names as the style guide): `.jr-wrap`, `.jr-seccion`, `.jr-fila`, `.jr-nivel`, `.jr-info`, `.jr-cifras`, `.jr-lista`, `.jr-btn` (`.sec`), `.jr-marca`, `.jr-detalle`, `.jr-contacto`, `.jr-telefono`. Square corners everywhere, no shadows, no rounded cards. The one exception is the phone frame (`.jr-telefono`, `PhoneVideo`) around screen recordings.

---

## Architecture

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, fonts, global styles
│   ├── page.tsx          # Single page — composes all sections
│   └── globals.css       # Tailwind directives + custom styles
│
├── components/
│   ├── sections/         # One file per page section
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── SkillsExperience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Resume.tsx
│   │   └── Footer.tsx
│   ├── ui/               # Shared reusable components
│   └── index.ts          # Barrel exports
│
├── data/                 # Static content (projects, skills, experience)
│
└── lib/                  # Utility functions, helpers
    └── hooks/            # Custom React hooks

public/
├── resume.pdf            # Downloadable resume
└── images/               # Project screenshots, portrait photo
```

### Import Conventions

Use `@/*` for all imports from `src/`:

```typescript
// Good
import { Hero } from "@/components";
import { projects } from "@/data/projects";

// Bad
import Hero from "../../../components/sections/Hero";
```

Components are barrel-exported from `src/components/index.ts`:

```typescript
// Good — single import for multiple components
import { Navbar, Hero, About, Footer } from "@/components";

// Acceptable — direct import for single component
import Hero from "@/components/sections/Hero";
```

---

## Section Order & Navigation

### Page Sections

Hero → About → Skills & Experience → Projects → Contact → Resume → Footer

### Nav Anchors

About, Experience, Projects, Contact, Resume

Each section component should have an `id` prop matching its anchor name for smooth scroll navigation.

---

## Code Patterns

### Section Component Template

```typescript
// src/components/sections/SectionName.tsx
export default function SectionName() {
  return (
    <section id="section-anchor" className="jr-wrap jr-seccion">
      <h2>Section title</h2>
      {/* Section content: rows (.jr-fila), lists (.jr-lista), buttons (.jr-btn) */}
    </section>
  );
}
```

### Responsive Approach

Mobile-first with Tailwind breakpoints:

```typescript
// Good — mobile first, then scale up
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Bad — desktop first
<div className="grid grid-cols-3 sm:grid-cols-1">
```

### Content Placeholders

Sections that need personal content should use realistic placeholder text with clear markers:

```typescript
// Good — realistic placeholder with TODO
const bio = "I'm a frontend engineer with 5+ years of experience..."; // TODO: Replace with actual bio

// Bad — lorem ipsum
const bio = "Lorem ipsum dolor sit amet...";
```

---

## Motion

Almost none: color transitions on hover and native `<details>` for case studies. No scroll-reveal or parallax. Respect `prefers-reduced-motion`.

---

## Adding a New Section or Feature

### Checklist

1. [ ] Create feature branch: `git checkout -b feature/<name>`
2. [ ] Create component in `src/components/sections/` or `src/components/ui/`
3. [ ] Export from `src/components/index.ts`
4. [ ] Add to page composition in `src/app/page.tsx`
5. [ ] Add static data to `src/data/` if needed
6. [ ] Ensure responsive behavior (mobile → tablet → desktop)
7. [ ] Verify accessibility (keyboard nav, screen reader, alt text)
8. [ ] Run `npm run lint` — must pass with zero errors
9. [ ] Run `npm run build` — must succeed
10. [ ] Commit with conventional commit message
