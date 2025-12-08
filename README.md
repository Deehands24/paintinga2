# PaintingA2.com

A modern painting contractor directory for Ann Arbor, Michigan. This platform connects homeowners and businesses with trusted, professional painting contractors while providing painters with a powerful marketing platform to grow their business.

## Overview

PaintingA2 is a comprehensive directory and lead generation platform built to serve the Ann Arbor painting industry. The site features verified painter listings, an intelligent estimate calculator, educational blog content, and a subscription-based business model for painters.

## Core Features

### For Homeowners
- **Comprehensive Directory**: Browse 15+ verified painting contractors in Ann Arbor
- **Smart Search & Filtering**: Find painters by service type, location, and specialization
- **Estimate Calculator**: Get instant painting cost estimates based on project details
- **Educational Content**: Blog articles and guides on painting projects and hiring
- **Category Browse**: Filter by residential, commercial, interior, exterior, and specialty services
- **Business Profiles**: Detailed painter information including BBB ratings, services, and contact details

### For Painters
- **Three-Tier Listing Plans**: Basic (Free), Pro ($29/month), and Premier ($79/month)
- **Stripe Integration**: Secure subscription payments and automated billing
- **Enhanced Visibility**: Featured placement for premium subscribers
- **Lead Generation**: Contact forms and estimate calculator leads
- **Profile Management**: Comprehensive business profiles with services, photos, and credentials
- **Verification Badges**: Display credentials, insurance, and BBB ratings

### Revenue Streams
1. **Subscription Revenue**: Painter listing subscriptions (Pro & Premier tiers)
2. **Affiliate Revenue**: HomeAdvisor referral partnerships
3. **Lead Generation**: Estimate calculator submissions to listed businesses

## Technology Stack

### Framework & Core
- **Next.js 15**: React framework with App Router architecture
- **React 19.1.0**: Latest React with Server Components
- **TypeScript**: Type-safe development with strict mode
- **Turbopack**: Next-generation bundler for fast builds and HMR

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework (PostCSS-based)
- **Custom Design System**: Consistent UI components and patterns
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Geist Fonts**: Modern typography via next/font/google

### Business Logic & Data
- **Static Data Model**: TypeScript interfaces for businesses, articles, and pricing
- **Type-Safe Architecture**: Full TypeScript coverage with strict null checks
- **Path Aliases**: `@/*` imports for clean module resolution

### Payments & Subscriptions
- **Stripe API v19.3.0**: Server-side payment processing
- **Stripe.js v8.3.0**: Client-side checkout integration
- **Webhook Handling**: Automated subscription lifecycle management
- **Live Mode**: Production-ready payment processing

### Analytics & Tracking
- **Google Analytics 4**: Comprehensive user behavior tracking
- **Custom Event Tracking**: Lead submissions, payment clicks, conversions
- **Real-Time Monitoring**: Page views, engagement metrics, and goal tracking

### Email & Communications
- **FormSubmit.co**: Lead form submissions
- **Transactional Email**: Stripe receipt emails
- **Manual Outreach**: Direct email communication with subscribers

## Site Architecture

### Pages
- `/` - Homepage with search, featured painters, estimate calculator
- `/listings` - Full painter directory with filtering
- `/listings/[slug]` - Individual painter profile pages
- `/blog` - Blog article listing with category filters
- `/blog/[slug]` - Individual blog post pages
- `/articles` - Educational resources landing page
- `/articles/[slug]` - Individual resource articles
- `/categories` - Service category overview
- `/category/[slug]` - Category-specific painter listings
- `/search` - Search results page
- `/for-painters` - Painter subscription plans and signup
- `/checkout/success` - Payment confirmation page

### API Routes
- `/api/checkout` - Stripe checkout session creation
- `/api/webhooks/stripe` - Stripe webhook event handling

### Components
- **Analytics**: Google Analytics integration with custom event tracking
- **SearchBar**: Intelligent search with query and category filtering
- **BusinessCard**: Reusable painter listing card component
- **EstimateCalculator**: Multi-step lead generation form
- **Logo**: Scalable site branding component

## Content Strategy

### Blog Content (5 Articles)
1. Spotlight on Ann Arbor's Best Painting Professionals
2. Benefits of Using a Painting Directory
3. Transform Your Space with Expert Painting Services
4. Tips for Hiring Trusted Painters in Ann Arbor
5. Commercial Painting Services: What to Expect

### SEO Focus
- Local keywords: "Ann Arbor painting contractors"
- Service-specific: "interior painting Ann Arbor", "commercial painters"
- Long-tail: "best time to paint house exterior Michigan"
- Educational: Painting tips, cost guides, hiring advice

## Business Model

### Subscription Tiers
- **Basic**: Free listing with name, address, phone
- **Pro**: $29/month - Enhanced profile, photos, verification badges
- **Premier**: $79/month - Top placement, lead forms, featured status

### Manual Fulfillment
Current operations use a manual approach:
1. Customer pays via Stripe
2. Webhook/dashboard notification received
3. Personal outreach to collect business details
4. Manual listing creation and management
5. Quality control and verification

This approach is intentionally simple for MVP validation and scales to approximately 50 active subscribers before automation becomes necessary.

## Development

```bash
cd my-next-wordpress-project

# Development server with hot reload
npm run dev

# Production build
npm run build

# Production server
npm start

# Linting
npm run lint
```

Development server runs at `http://localhost:3000` with Turbopack for instant hot module replacement.

## Environment Variables

Required environment variables (stored in `.env.local`):
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe public key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook signing secret
- `NEXT_PUBLIC_STRIPE_PRO_PRICE_ID` - Pro tier price ID
- `NEXT_PUBLIC_STRIPE_PREMIER_PRICE_ID` - Premier tier price ID
- `NEXT_PUBLIC_GA_ID` - Google Analytics measurement ID

## Project Structure

```
my-next-wordpress-project/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout with fonts & analytics
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── blog/              # Blog routes
│   │   ├── articles/          # Resource articles
│   │   ├── listings/          # Painter directory
│   │   ├── categories/        # Service categories
│   │   ├── for-painters/      # Subscription page
│   │   └── api/               # API routes
│   ├── components/            # React components
│   ├── data/                  # Static data & content
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Dependencies & scripts
```

## Analytics & Metrics

### Tracked Events
- Page views (automatic)
- Lead submissions (calculator forms)
- Payment button clicks
- Business profile interactions
- Search queries
- Category filtering

### Conversion Goals
1. Primary: Lead form submissions
2. Secondary: Painter subscription checkouts
3. Tertiary: Affiliate click-throughs

## Deployment

Built for deployment on Vercel, Netlify, or any Node.js hosting platform supporting Next.js 15.

### Build Requirements
- Node.js 18+
- npm or yarn
- Environment variables configured
- Stripe webhook endpoint configured

## License

Proprietary - All rights reserved

## Contact

**Email**: paintinga2@ges-development.com
**Website**: https://paintinga2.com

---

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4
