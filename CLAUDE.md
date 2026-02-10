# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (Next.js, http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config, `eslint.config.mjs`)
- `npx shadcn add <component>` — Add a new shadcn UI component

## Architecture

Next.js 16 app using the App Router with React 19, TypeScript, and Tailwind CSS v4.

**UI layer:** shadcn/ui with the `radix-vega` style, configured via `components.json`. Components live in `components/ui/` and use `class-variance-authority` for variants, `radix-ui` primitives, and the `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge). Icons come from `lucide-react`.

**Styling:** Tailwind v4 via PostCSS (`@tailwindcss/postcss`). Theme tokens (colors, radii) are CSS custom properties defined in `app/globals.css` using oklch, with light/dark mode variants. The dark mode variant uses `&:is(.dark *)`.

**Path aliases:** `@/*` maps to the project root (configured in `tsconfig.json`).

**Fonts:** Inter (`--font-sans`), Geist, and Geist Mono loaded via `next/font/google` in `app/layout.tsx`.

**RSC:** Server Components are the default. Add `"use client"` only when needed (state, effects, browser APIs).
