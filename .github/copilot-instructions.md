## Quick orientation for AI coding agents

This repository hosts PaintingA2 — a Next.js (App Router) site and directory for painting companies in Ann Arbor. Use these notes to be productive immediately.

- Project root to operate in: `my-next-wordpress-project/` (run dev/build from here).
- Key commands (from `my-next-wordpress-project/`):
  - `npm run dev` — development server (Turbopack, HMR)
  - `npm run build` — production build (Turbopack)
  - `npm start` — serve the built app
  - `npm run lint` — run ESLint

## Big-picture architecture
- Framework: Next.js App Router (routes live in `src/app/`). Pages and layouts are Server Components by default.
- Styling: Tailwind CSS v4 via PostCSS; global styles in `src/app/globals.css`.
- Fonts: loaded with `next/font/google` inside `src/app/layout.tsx`.
- Data: local example data lives in `src/data/` (e.g. `businesses.ts`, `blog-articles.tsx`). Use these for mock content and patterns.
- Components: `src/components/` contains UI pieces (e.g. `BusinessCard.tsx`, `EstimateCalculator.tsx`, `SearchBar.tsx`). Prefer small, pure components.

## Conventions & important patterns
- Server Components by default. If a component needs client-side state, event handlers or hooks, add the exact directive line: `"use client"` at the top of the file.
- Routes and dynamic segments follow App Router conventions: for example `src/app/listings/[slug]/page.tsx` and `src/app/blog/[slug]/page.tsx`.
- Metadata is provided using the `export const metadata` pattern in layouts/pages for SEO (see `src/app/layout.tsx`). Keep metadata server-side when possible.
- TypeScript path alias: project uses `@/*` → `./src/*` (see repo TS config). Use the alias in imports when appropriate.

## Integration points to watch
- Headless WordPress: blog content is intended to come from a headless WP backend — look for places that fetch remote posts (or replace mocks in `src/data/blog-articles.tsx`).
- Stripe: server endpoints under `src/app/api/checkout/route.ts` and `src/app/api/webhooks/stripe/route.ts` handle payments and webhooks. Keep secrets out of repo; use env vars.
- Contact form: design expects a third-party form handler (Formspree/EmailJS) — see `.github/instructions/instructions.instructions.md` for intent.

## Developer workflow notes (non-obvious)
- Always run commands from `my-next-wordpress-project/` — the top-level directory contains the actual Next.js app and package.json.
- Turbopack is used by default in dev and build scripts; expect faster but occasionally different behavior than Webpack.
- ESLint is configured via `eslint-config-next` — run `npm run lint` before larger PRs.

## File examples to reference
- App entry & global layout: `my-next-wordpress-project/src/app/layout.tsx`
- Home route: `my-next-wordpress-project/src/app/page.tsx`
- Listings: `my-next-wordpress-project/src/app/listings/` (list + `[slug]` pages)
- Blog: `my-next-wordpress-project/src/app/blog/` (index + `[slug]`)
- API endpoints: `my-next-wordpress-project/src/app/api/` (checkout, webhooks)

## How to edit safely
- Preserve Server/Client boundary: avoid adding `use client` unless necessary.
- For data changes that are examples (e.g., `src/data/*.ts`), prefer editing those mocks rather than implementing remote fetches unless you add new env variables and tests.
- When adding new page-level metadata, export `metadata` from the route file to keep SEO consistent.

## What I merged from repo docs
- This guidance synthesizes `CLAUDE.md` and `.github/instructions/instructions.instructions.md` (project intent, commands, and architecture). If you need more detail on WordPress integration or env setup, point to `my-next-wordpress-project` and I will extract/follow any README or dev docs there.

If any of the integration details (WP endpoint, env names, or deployment steps) are missing, tell me which one to expand and I will update this file.
