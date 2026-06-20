# Namlameis — Cyber · AI · Defense

Marketing / brand website for **Namlameis**, a cybersecurity firm (founded 2024, Salzburg,
Austria). The site presents the firm's solutions, industries, platform, and brand, and lets
prospects start a confidential engagement.

Built to the *Website Content & Build Specification (v1.0)* and the *Cybersecurity Website
Roadmap* — both kept in [`docs/`](docs/).

> Tagline: **“We find what others miss — before it finds you.”**
> Positioning: *Machines find the known. We find the unknown.*

## Tech stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| UI runtime | **React 19** + **TypeScript** |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` tokens, no `tailwind.config`) |
| Validation | **Zod v4** (server-side form validation) |
| Fonts | **Fraunces** (display serif) · **Inter** (body) · **JetBrains Mono** (labels), via `next/font` |
| Rendering | Fully static / SSG (23 prerendered routes) |

## Scripts

```bash
npm run dev     # local dev  → http://localhost:3000
npm run build   # production build (static / SSG)
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route | Page |
|---|---|
| `/` | Homepage — hero, the difference, solutions, industries, the method, CTA |
| `/solutions` | Solutions index |
| `/solutions/[slug]` | 5 solution pages (AI-powered cybersecurity, vulnerability discovery, threat detection & response, reputation & narrative defense, data security) |
| `/industries` | Industries index |
| `/industries/[slug]` | 3 industry pages (FinTech, government & defense, critical infrastructure) |
| `/platform` | The Platform — signal to narrative |
| `/company/about` | About — founding story, the ant metaphor |
| `/company/leadership` | Leadership messages |
| `/contact` | Contact details + service-request form |
| `/legal/[slug]` | Privacy / Terms / Security (placeholder copy, `noindex`) |
| `/404` | Custom branded not-found page |

`sitemap.xml`, `robots.txt`, and the ant-mark favicon (`icon.svg`) are generated automatically
by Next metadata routes.

## Project structure

```
src/
  app/
    layout.tsx          # fonts, global metadata/OG, Navbar + Footer
    page.tsx            # homepage
    globals.css         # Tailwind v4 @theme: brand tokens, eyebrow badge, utilities
    icon.svg            # ant-mark favicon
    not-found.tsx       # custom 404
    sitemap.ts / robots.ts
    solutions/ industries/ platform/ company/ contact/ legal/
    contact/actions.ts  # "use server" form action (Zod + honeypot + rate limit)
  components/
    Navbar.tsx          # sticky header, transparent→blur on scroll, dropdowns, mobile menu
    Footer.tsx
    PageHero.tsx        # navy inner-page hero
    CTASection.tsx      # reused closing call-to-action
    SignalMap.tsx       # animated hero illustration (see below)
    AntMark.tsx Logo.tsx cards.tsx Reveal.tsx ServiceRequestForm.tsx
    ui/                 # Container, Button (LinkButton), Section/Eyebrow/SectionHeading
  lib/
    site.ts             # brand + navigation (single source of truth)
    content.ts          # solution & industry page copy as data
    contact-schema.ts   # shared Zod schema + select options
    cn.ts               # classnames helper
```

## Design system

Brand tokens live once in [`src/app/globals.css`](src/app/globals.css) and are consumed as
Tailwind utilities (`bg-navy`, `text-amber`, `font-display`, `border-line`, …).

- **Palette** — navy `#0B1A2E`, ink `#0A1424`, amber `#F0712C`, azure `#3D7DD8`,
  teal `#1FA98F`, paper `#FFFFFF`, mist `#F7F9FC`.
- **Type** — Fraunces display headings, Inter body, JetBrains Mono micro-labels.
- **Eyebrow** — section kickers render as small amber pill badges (`.eyebrow`).
- **Motion** — `Reveal` fades/​lifts blocks in on scroll (IntersectionObserver), and respects
  `prefers-reduced-motion`. Grids animate as a single unit so 1px cell dividers stay crisp.
- **Tone** — calm, confident, premium; light theme; generous whitespace.

### Hero illustration (`SignalMap`)

A self-contained animated SVG that states the thesis in one picture: the **colony (ant mark)**
scans the environment, automation clears the **KNOWN** assets (Cloud, Endpoints, Database, APIs —
teal checks), and one traced trail crosses into the **UNKNOWN** to surface the **hidden threat**
(pulsing amber node), with ants crawling the discovered path.

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
- Replace the placeholder Privacy / Terms / Security pages with real copy.
- Add a real Open Graph image and per-page OG art.
- Supply final logo/leadership assets (the leadership page uses monogram avatars until then).
- Tighten the CSP to a nonce-based policy if you remove the inline-script allowance.
- **“Defense-grade” is a quality descriptor, not a claim of government accreditation** — keep it
  that way (per the spec's dev notes).
