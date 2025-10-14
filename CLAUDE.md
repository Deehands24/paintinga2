# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "paintinga2", an Ann Arbor painting directory. The main application is a Next.js 15 project located in `my-next-wordpress-project/` directory, built with TypeScript, React 19, and Tailwind CSS v4.

## Development Commands

All commands should be run from the `my-next-wordpress-project/` directory:

```bash
cd my-next-wordpress-project
```

**Start development server:**
```bash
npm run dev
```
- Runs Next.js with Turbopack
- Opens at http://localhost:3000
- Hot-reloading enabled

**Build for production:**
```bash
npm run build
```
- Uses Turbopack for optimized production build

**Start production server:**
```bash
npm start
```
- Requires running `npm run build` first

**Lint code:**
```bash
npm run lint
```
- Runs ESLint with Next.js configuration

## Architecture

**Framework:** Next.js 15 (App Router)
- Uses the App Router architecture (not Pages Router)
- All routes defined in `src/app/` directory
- Server Components by default

**Key Technologies:**
- React 19.1.0 (latest)
- TypeScript with strict mode enabled
- Tailwind CSS v4 (PostCSS-based, no separate config file needed)
- Turbopack for fast builds and HMR

**Project Structure:**
```
my-next-wordpress-project/
├── src/app/                 # App Router - all routes and pages
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page (route: /)
│   ├── globals.css         # Global styles including Tailwind
│   └── favicon.ico         # Site favicon
├── public/                 # Static assets served from root
├── next.config.ts          # Next.js configuration
└── tsconfig.json           # TypeScript config with @/* path alias
```

**TypeScript Configuration:**
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

**Styling:**
- Tailwind CSS v4 (using PostCSS)
- Geist and Geist Mono fonts via `next/font/google`
- CSS variables for font families: `--font-geist-sans`, `--font-geist-mono`
- Dark mode support with `dark:` prefix

## Important Notes

- This project uses Next.js App Router, NOT Pages Router
- Components are Server Components by default - add `"use client"` directive when client-side features are needed
- The project name references "wordpress" but this is a Next.js app, not WordPress
- Uses Turbopack (Next.js's faster bundler) instead of Webpack
