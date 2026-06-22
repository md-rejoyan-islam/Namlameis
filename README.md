# Namlameis — Cyber · AI · Defense

Marketing / brand website for **Namlameis**, a cybersecurity firm (founded 2024, Salzburg,
Austria). The site presents the firm's solutions, products, services, industries, platform, and
brand, and lets prospects start a confidential engagement.

Built to the *Website Content & Design Strategy* comps kept in
[`Website content and design strategy/`](Website%20content%20and%20design%20strategy/) — the
implementation reproduces those design comps page-for-page.

> Tagline: **“We find what others miss — before it finds you.”**
> Positioning: *Machines find the known. We find the unknown.*

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| UI runtime | **React 19** + **TypeScript** |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config`) + scoped inline styles for the design-comp ports |
| Validation | **Zod v4** (server-side form validation) |
| Fonts | **Newsreader** (display serif) · **Geist** (body) · **Geist Mono** (micro-labels) · **Syne** (the NAMLAMEIS wordmark), via `next/font` |
| Rendering | Fully static / SSG |

## Scripts

```bash
npm run dev     # local dev  → http://localhost:3000
npm run build   # production build (static / SSG)
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

The site has **34 content pages** plus styled **404 / 500** states.

### Index / top-level pages

| Route | Page |
|---|---|
| `/` | Homepage — animated signal-field hero, the thesis, five disciplines, the method timeline, the landscape in numbers, closing CTA |
| `/platform` | The Platform — signal to narrative |
| `/solutions` | Solutions index |
| `/products` | Products index — the six-product suite + platform architecture |
| `/services` | Services index — the five data-security service engagements |
| `/industries` | Industries index |
| `/company/about` | About — founding story, the ant metaphor |
| `/company/vision` | Vision & Goals — the three inseparable disciplines, the four goals |
| `/company/leadership` | Leadership messages |
| `/company/research` | Research — featured paper, why we publish, research streams |
| `/contact` | Contact details + service-request form |

### Dynamic detail pages (22)

| Route | Count | Slugs |
|---|---|---|
| `/solutions/[slug]` | 5 | ai-powered-cybersecurity · vulnerability-discovery · threat-detection-response · reputation-narrative-defense · data-security |
| `/products/[slug]` | 6 | client-portal · request-intake · findings-dashboard · trust-center · briefing-hub · data-vault |
| `/services/[slug]` | 5 | data-discovery · access-review · shadow-ai · dlp-tuning · managed-monitoring |
| `/industries/[slug]` | 3 | fintech · government-defense · critical-infrastructure |
| `/legal/[slug]` | 3 | privacy · terms · security (placeholder copy, `noindex`) |

### Error states

| File | Page |
|---|---|
| `not-found.tsx` | Branded **404** — "Trail lost" |
| `error.tsx` | Branded **500** runtime error boundary with a **Try again** (`reset()`) action |

`sitemap.xml`, `robots.txt`, and the ant-mark favicon (`icon.svg`) are generated automatically
by Next metadata routes.

## Project structure

```
src/
  app/
    layout.tsx          # fonts (Newsreader/Geist/Geist Mono/Syne), global metadata/OG, Navbar + Footer
    page.tsx            # homepage (design-comp port: canvas signal field, charts, method timeline)
    globals.css         # Tailwind v4 @theme: teal brand tokens + the nm-* keyframe motion system
    icon.svg            # ant-mark favicon
    not-found.tsx       # branded 404
    error.tsx           # branded 500 error boundary ("use client")
    sitemap.ts / robots.ts
    solutions/ products/ services/ industries/ platform/ company/ contact/ legal/
    contact/actions.ts  # "use server" form action (Zod + honeypot + rate limit)
  components/
    Navbar.tsx          # dark sticky header, Syne wordmark, hover dropdowns (Solutions/Products/Services/Industries/Company), mobile menu
    Footer.tsx          # dark ink footer, 5 link columns
    BrandMark.tsx       # the ant mark on a black tile (shared by Navbar/Footer/error pages)
    HeroSignalField.tsx # animated homepage hero canvas ("use client")
    inner.tsx           # shared inner-page primitives: DarkHero, CtaBand, DetailPage template
    diagrams.tsx        # the bespoke per-page figures for every product & service detail page
    icons.tsx           # inline SVG icon set for suite/service cards
    (legacy) cards.tsx, CTASection.tsx, SignalMap.tsx, Reveal.tsx, ui/  — used by not-yet-converted pages
  lib/
    site.ts             # brand + navigation
    content.ts          # solution & industry page copy as data
    products.ts         # product suite + per-product detail content
    services.ts         # service catalogue + per-service detail content
    contact-schema.ts   # shared Zod schema + select options
    cn.ts               # classnames helper
```

## Design system

The visual system reproduces the design comps: a calm light theme with a near-black navigation,
teal accent, and editorial serif display type.

- **Palette** — navy `#0B1A2E`, ink `#0A1424`, **teal `#16B9A6`** (primary accent), deep teal
  `#1FA98F`, bright teal `#42E6D2`, paper `#FFFFFF`, mist `#EAF8F5`.
- **Type** — **Newsreader** serif for display headings (often with an italic accent word),
  **Geist** for body, **Geist Mono** for eyebrows / micro-labels, **Syne** for the wordmark.
- **Motion** — a shared `nm-*` keyframe system in [`globals.css`](src/app/globals.css)
  (`nm-rise`, `nm-drift`, `nm-glow`, `nm-pulse`, `nm-grow`, `nm-donut`, `nm-line`, `nm-fill`,
  `nm-bar`, `nm-ring`, `nm-close`, `nm-breathe`, `nm-flow`, `nm-orbit`). Reveals use scroll-driven
  `animation-timeline: view()` and degrade to a single play where unsupported; everything respects
  `prefers-reduced-motion`.
- **Inner-page template** — `DarkHero` (radial-navy hero, centered for products / split for
  services), `DetailPage` (overview + feature grid + CTA), and `CtaBand` keep all detail pages
  consistent; each page's unique figure lives in `diagrams.tsx`.

## Conversion status

Pages reproduced in the new same-to-same design: **homepage**, all **Products** (index + 6),
all **Services** (index + 5), **Vision**, **Research**, and the **404 / 500** states.

Still on the earlier styling (functional, but not yet reproduced from the comps): **Solutions**,
**Industries**, **Platform**, **About**, **Leadership**, **Contact**, and **Legal**.

## Security & SEO

- **HTTP headers** ([`next.config.ts`](next.config.ts)): Content-Security-Policy, HSTS,
  `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, Referrer-Policy, Permissions-Policy;
  `poweredByHeader` disabled.
- **Contact form** ([`src/app/contact/actions.ts`](src/app/contact/actions.ts)): a React server
  action that validates with Zod, uses a hidden **honeypot** field, and applies best-effort
  **per-IP rate limiting** (5 / min). On success it returns the confirmation message; secrets are
  never exposed to the client.
- **SEO**: per-page `title`/`description`, Open Graph + Twitter tags, JSON sitemap, robots,
  semantic headings.

## Before going live

- Wire the contact form to a real sink (DB and/or email via Resend) and back the rate limiter
  with a shared store (e.g. Upstash/Redis) — the in-memory limiter is per-instance only.
- Convert the remaining sections (Solutions, Industries, Platform, About, Leadership, Contact)
  to the new design, then retire the legacy components in `src/components/ui/`.
- Replace the placeholder Privacy / Terms / Security pages with real copy.
- Add a real Open Graph image and per-page OG art.
- Supply final logo/leadership assets (the leadership page uses monogram avatars until then).
- Tighten the CSP to a nonce-based policy if you remove the inline-script allowance.
- **“Defense-grade” is a quality descriptor, not a claim of government accreditation** — keep it
  that way (per the spec's dev notes).
