# Namlameis — Cyber · AI · Defense

Marketing/brand website for **Namlameis**, a cybersecurity firm (founded 2024, Salzburg, Austria).
Built from the *Website Content & Build Specification (v1.0)* and the *Cybersecurity Website Roadmap*
(both in [`docs/`](docs/)).

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme tokens in [`src/app/globals.css`](src/app/globals.css))
- **Zod** for server-side form validation
- Fonts: **Fraunces** (display serif), **Inter** (body), **JetBrains Mono** (labels)

## Scripts

```bash
npm run dev     # local dev (http://localhost:3000)
npm run build   # production build (fully static / SSG)
npm run start   # serve the production build
npm run lint    # eslint
```

## Routes

| Route | Page |
|---|---|
| `/` | Homepage |
| `/solutions` + `/solutions/[slug]` | Solutions index + 5 solution pages |
| `/industries` + `/industries/[slug]` | Industries index + 3 industry pages |
| `/platform` | The Platform |
| `/company/about`, `/company/leadership` | Company |
| `/contact` | Contact + service-request form |
| `/legal/[slug]` | Privacy / Terms / Security (placeholder copy) |

`sitemap.xml`, `robots.txt`, and the ant-mark favicon (`icon.svg`) are generated automatically.

## Architecture notes

- **Content as data** — all solution/industry copy lives in [`src/lib/content.ts`](src/lib/content.ts);
  navigation/brand in [`src/lib/site.ts`](src/lib/site.ts). Pages render from these, so copy and nav
  stay in sync.
- **Security** — strict HTTP headers (CSP, HSTS, X-Frame-Options, etc.) in
  [`next.config.ts`](next.config.ts). The contact form validates server-side (Zod), uses a honeypot
  field, and applies best-effort per-IP rate limiting in
  [`src/app/contact/actions.ts`](src/app/contact/actions.ts).
- **Brand** — palette/typography tokens are defined once in `globals.css` and consumed via Tailwind
  utility classes (`bg-navy`, `text-amber`, `font-display`, …).

## Before going live

- Wire the contact form to a real sink (DB and/or email via Resend) and a shared-store rate limiter.
- Publish real Privacy / Terms / Security pages.
- Add an Open Graph image and per-page OG art.
- "Defense-grade" is a quality descriptor, **not** a claim of government accreditation — keep it that way.
