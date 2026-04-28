# RealCore Solutions — Enterprise ERP & CRM Platform

<div align="center">

![RealCore Solutions](public/images/darklogo.png)

**Enterprise ERP, CRM & Business Software — Built with Next.js 16**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Private-red)](LICENSE)

[Live Site](https://rcs.realcoresolutions.com) · [Request Demo](https://rcs.realcoresolutions.com/request-demo) · [Contact](https://rcs.realcoresolutions.com/contact)

</div>

---

## Overview

RealCore Solutions is a Karachi-based enterprise software company delivering **ERP, CRM, POS, and communication platforms** to 500+ businesses across 15+ industries worldwide. This repository contains the full frontend codebase for the official marketing and product website.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, Server Components |
| **Language** | TypeScript 5 |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) |
| **Animations** | [Aceternity UI](https://ui.aceternity.com) + [GSAP](https://gsap.com) + [Motion](https://motion.dev) |
| **Theme** | [next-themes](https://github.com/pacocoursey/next-themes) — Dark / Light mode |
| **Font** | Whitney SSm (custom) |
| **CMS** | [Strapi v5](https://strapi.io) — Blog & Articles |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Maps** | Pure SVG (zero dependency) |

---

## Features

- ⚡ **Next.js 16 App Router** — Server Components, streaming, ISR
- 🌙 **Dark / Light Mode** — System-aware, persistent, FOUC-free
- 🎨 **Aceternity UI** — Hero Parallax, Card Spotlight, Tracing Beam, Infinite Moving Cards
- 📝 **Blog System** — Strapi v5 CMS with pagination and dynamic routes
- 🗺️ **World Map** — Animated dotted map with arc connections (no API key)
- 📱 **Fully Responsive** — Mobile-first, tested across all breakpoints
- 🔍 **SEO Ready** — Dynamic metadata, Open Graph, Twitter cards, canonical URLs
- 🚀 **Performance** — Dynamic imports, image optimization, lazy loading
- 📧 **Contact Forms** — Multi-field with validation and success states
- 🗂️ **Products System** — 6 products with individual detail pages

---

## Project Structure

```
realcoresolutions/
│
├── app/                            # Next.js App Router
│   ├── layout.tsx                  # Root layout — ThemeProvider, Header, Footer
│   ├── page.tsx                    # Home page
│   │
│   ├── about/
│   │   └── page.tsx                # About Us page
│   │
│   ├── blog/
│   │   ├── page.tsx                # All blogs + pagination
│   │   └── [slug]/
│   │       └── page.tsx            # Single blog post
│   │
│   ├── products/
│   │   ├── page.tsx                # Products overview
│   │   └── [slug]/
│   │       └── page.tsx            # Individual product detail
│   │
│   ├── contact/
│   │   └── page.tsx                # Contact page + Google Maps
│   │
│   ├── request-demo/
│   │   └── page.tsx                # Request a Demo form
│   │
│   ├── free-consultation/
│   │   └── page.tsx                # Free Consultation form
│   │
│   ├── industries/
│   │   └── page.tsx                # Industries We Serve
│   │
│   ├── privacy/
│   │   └── page.tsx                # Privacy Policy
│   │
│   ├── terms/
│   │   └── page.tsx                # Terms & Conditions
│   │
│   └── globals.css                 # Global styles + CSS variables
│
├── components/
│   │
│   ├── ui/                         # Base UI components (shadcn + Aceternity)
│   │   ├── button.tsx
│   │   ├── card-hover-effect.tsx
│   │   ├── card-spotlight.tsx
│   │   ├── container-scroll-animation.tsx
│   │   ├── dotted-glow-background.tsx
│   │   ├── infinite-moving-cards.tsx
│   │   ├── hero-parallax.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── sheet.tsx
│   │   ├── spotlight.tsx
│   │   ├── tabs.tsx
│   │   ├── theme-provider.tsx
│   │   ├── tracing-beam.tsx
│   │   ├── world-map.tsx
│   │   └── SectionHeading.tsx      # Global reusable heading component
│   │
│   ├── layout/                     # Layout components
│   │   ├── header/
│   │   │   ├── Header.tsx          # Sticky header wrapper
│   │   │   ├── TopBar.tsx          # Email, phone, support, login
│   │   │   ├── MainNav.tsx         # Logo + mega menu + mobile
│   │   │   ├── MegaMenuContent.tsx # Reusable mega menu renderer
│   │   │   └── nav-data.ts         # All navigation link data
│   │   └── footer/
│   │       ├── Footer.tsx          # Footer with 4 columns + watermark
│   │       └── style.css           # Footer watermark styles
│   │
│   ├── home/                       # Home page sections
│   │   ├── HeroSection.tsx         # Hero Parallax + flip text
│   │   ├── WhatWeOffer.tsx         # Bento grid — 6 product cards
│   │   ├── StatsSection.tsx        # Animated counters
│   │   ├── WorldMapSection.tsx     # Sticky map + Why RealCore
│   │   ├── IndustryTabs.tsx        # Industries tabs
│   │   ├── PlatformShowcase.tsx    # Container Scroll animation
│   │   ├── Testimonials.tsx        # Infinite Moving Cards — 2 rows
│   │   ├── BlogSection.tsx         # Latest 6 blogs from Strapi
│   │   └── CTA.tsx                 # Dotted Glow background CTA
│   │
│   ├── about/                      # About page sections
│   │   ├── AboutHero.tsx           # Spotlight hero
│   │   ├── MissionVision.tsx       # Card Spotlight — 6 cards
│   │   ├── OurStory.tsx            # Tracing Beam timeline
│   │   └── CoreValues.tsx          # Card Hover Effect
│   │
│   ├── products/                   # Products components
│   │   ├── ProductsGrid.tsx        # Bento grid overview (client)
│   │   ├── ProductFeatures.tsx     # Features border grid
│   │   ├── ProductHowItWorks.tsx   # 3-step process
│   │   ├── ProductIndustries.tsx   # Industry badge pills
│   │   └── ProductRelated.tsx      # Related products cards
│   │
│   ├── blog/                       # Blog components
│   │   ├── BlogCard.tsx            # Single blog card
│   │   └── BlogGrid.tsx            # Blog cards grid
│   │
│   └── contact/                    # Contact components
│       ├── ContactForm.tsx         # Contact form with validation
│       └── Pagination.tsx          # Blog pagination
│
├── lib/                            # Utilities & data
│   ├── utils.ts                    # cn() helper
│   ├── metadata.ts                 # createMetadata() helper
│   ├── strapi.ts                   # Strapi API fetch functions
│   └── products-data.ts            # All 6 products data
│
├── public/                         # Static assets
│   ├── images/
│   │   ├── lightlogo.png
│   │   ├── darklogo.png
│   │   ├── offers/                 # Product section images
│   │   ├── industries/             # Industry tab images
│   │   ├── products/               # Product detail hero images
│   │   └── story/                  # Our Story timeline images
│   └── videos/
│       └── platform-demo.mp4       # Platform showcase video
│
├── .env.local                      # Environment variables (not committed)
├── .env.example                    # Environment variables template
├── next.config.ts                  # Next.js config + image domains
├── tailwind.config.ts              # Tailwind config + scroll animation
├── tsconfig.json                   # TypeScript config
└── README.md                       # This file
```

---

## Getting Started

### Prerequisites

```bash
Node.js >= 20
npm >= 10
Strapi v5 (for blog system)
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-org/realcoresolutions.git
cd realcoresolutions

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create `.env.local` in the root:

```env
# Strapi CMS
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337

# Site URL
NEXT_PUBLIC_SITE_URL=https://rcs.realcoresolutions.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

---

## Key Components

### `SectionHeading` — Global Reusable Heading
```tsx
import SectionHeading from "@/components/ui/SectionHeading";

<SectionHeading
  badge="What We Offer"
  title="Everything your business"
  highlight="needs to scale"
  description="Optional description text here."
  align="center" // "left" | "center" | "right"
/>
```

### `createMetadata` — SEO Helper
```tsx
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description: "Learn about RealCore Solutions...",
  path: "/about",
});
```

### Strapi Blog API
```tsx
import { getLatestArticles, getArticles, getArticleBySlug } from "@/lib/strapi";

// Latest 6 for home page
const articles = await getLatestArticles(6);

// Paginated for blog page
const { articles, meta } = await getArticles(page, 6);

// Single post
const article = await getArticleBySlug(slug);
```

---

## Aceternity UI Components Used

| Component | Used In |
|---|---|
| `HeroParallax` | Home — Hero section |
| `ContainerScroll` | Home — Platform Showcase |
| `InfiniteMovingCards` | Home — Testimonials |
| `WorldMap` | Home — Global reach |
| `CardSpotlight` | About — Mission & Vision |
| `TracingBeam` | About — Our Story |
| `CardHoverEffect` | About — Core Values, Products |
| `Spotlight` | About — Hero |
| `Tabs` | Home — Industries |
| `DottedGlowBackground` | Home — CTA section |

---

## Pages

| Route | Page | Type |
|---|---|---|
| `/` | Home | Server |
| `/about` | About Us | Server |
| `/products` | Products Overview | Server |
| `/products/[slug]` | Product Detail | Server (6 pages) |
| `/blog` | All Blogs | Server |
| `/blog/[slug]` | Single Blog | Server |
| `/contact` | Contact | Server |
| `/request-demo` | Request Demo | Server |
| `/free-consultation` | Free Consultation | Server |
| `/industries` | Industries | Server |
| `/privacy` | Privacy Policy | Server |
| `/terms` | Terms & Conditions | Server |

---

## Blog System (Strapi v5)

The blog is powered by **Strapi v5** as a headless CMS.

### Strapi Setup

```bash
# Start Strapi locally
cd strapi-backend
npm run develop
```

### API Endpoints Used

```
GET /api/articles?populate=*&sort=publishedAt:desc
GET /api/articles?pagination[page]=1&pagination[pageSize]=6
GET /api/articles?filters[slug][$eq]={slug}&populate=*
```

### Required Strapi Fields

| Field | Type |
|---|---|
| `title` | Text |
| `description` | Text (max 80 chars) |
| `slug` | UID |
| `cover` | Media (image) |
| `content` | Rich Text (Blocks) |
| `author` | Relation |
| `category` | Relation |

---

## Tailwind Config — Scroll Animation

Add to `tailwind.config.ts` for Infinite Moving Cards:

```ts
theme: {
  extend: {
    animation: {
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
    keyframes: {
      scroll: {
        to: { transform: "translate(calc(-50% - 0.5rem))" },
      },
    },
  },
},
```

---

## Next.js Config — Image Domains

```ts
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: "http",
      hostname: "localhost",
      port: "1337",
      pathname: "/uploads/**",
    },
    {
      protocol: "https",
      hostname: "your-strapi-domain.com",
      pathname: "/uploads/**",
    },
  ],
},
```

---

## Contributing

This is a private repository. For internal team members:

1. Create a feature branch from `develop`
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes with clear commit messages
3. Open a Pull Request to `develop`
4. Request review from the lead developer

### Commit Convention

```
feat:     New feature
fix:      Bug fix
style:    UI/styling changes
refactor: Code refactoring
docs:     Documentation updates
chore:    Config, dependencies
```

---

## Team

Built and maintained by the **Digitize Bird** development team for **RealCore Solutions**.

---

## License

Private — All rights reserved © 2024 RealCore Solutions.  
Unauthorized copying, distribution, or use is strictly prohibited.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://sms.digitizebird.com">Digitize Bird</a> for <a href="https://rcs.realcoresolutions.com">RealCore Solutions</a></p>
</div>