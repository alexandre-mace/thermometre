# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — Start development server (Next.js, http://localhost:3000)
- `pnpm build` — Production build (the quality check: types, lint, static generation)
- `pnpm lint` — Run ESLint (flat config, `eslint.config.mjs`)
- `pnpm data` — Rebuild the OWID datasets (`scripts/build-owid-data.mjs` → `lib/owid/*.ts`). Run before a deployment that depends on data freshness.
- `npx shadcn@latest add -y -o @alexandremace/<item>` — Add a component from the personal registry

## Architecture

Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4 (PostCSS, no `tailwind.config`). Static site: no backend, no route handlers. Conventions of the perso stack live in `dev-standards/next/next-guidelines.md`.

**Content:** searchable IPCC AR6 figures plus 13 native Our World in Data charts, organized in three sections (`components/*-section.tsx`: causes, conséquences, solutions). `lib/climate-data.ts` arrays feed the search bar index.

**OWID data pipeline:** `scripts/build-owid-data.mjs` bakes the default view of each chart into `lib/owid/{id}.ts` (typed `OwidDataset`, generated header "ne pas éditer à la main", CC BY citation + extraction date). Country-level exploration fetches small filtered CSVs at runtime (`csvType=filtered&tab=chart`, in-memory cache, graceful degradation).

**Charts:** single component `components/charts/owid-native-chart.tsx` (line/multiline/stacked/bar on recharts 3). Known recharts 3 pitfalls: `Bar` needs `isAnimationActive={false}` or it renders at zero width; long OWID column names are parsed as `dataKey` paths, so bar data is normalized to `{nom, valeur}`. French labels, OWID color conventions and entity translations live in `components/charts/labels-fr.ts`.

**UI layer:** shadcn/ui style `base-nova` (Base UI via `@base-ui/react`, command palette on `cmdk`), components pulled from the `@alexandremace` registry (ui.alexandremace.fr) into `components/ui/` — never edited locally, changes go through the kit. Links styled as buttons use the `LinkButton` export; interactions use `onClick`/`disabled`; composition via the `render={...}` prop (e.g. `DialogTrigger`, `TooltipTrigger`); `CommandItem` takes `value=` + `onSelect`. Icons from `lucide-react` (1.x, no brand icons).

**Styling:** single light theme (the `.dark` class is never set; `@custom-variant dark` only neutralizes stock `dark:` rules). OkLCh tokens in `app/globals.css` (`:root` + `@theme inline`), kit palette (sand background, `#0737FF` primary).

**Fonts:** Geist Sans + Geist Mono from the `geist` npm package, variables set on `<html>`, `font-sans` on body.

**RSC:** Server Components by default. `"use client"` only for state/interaction (charts, search, selectors).
