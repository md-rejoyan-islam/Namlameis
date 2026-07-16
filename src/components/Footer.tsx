import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { Container } from "./ui/Container";

/**
 * The chevron that marks each footer entry as a link. aria-hidden — the <a> is
 * already announced as a link, so this is purely the visual cue.
 */
function LinkArrow() {
  return (
    <svg
      className="nm-footer-arrow flex-none"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI-Powered Cybersecurity", href: "/solutions/ai-powered-cybersecurity" },
      { label: "Vulnerability Discovery", href: "/solutions/vulnerability-discovery" },
      { label: "Detection & Response", href: "/solutions/threat-detection-response" },
      { label: "Reputation Defense", href: "/solutions/reputation-narrative-defense" },
      { label: "Data Security", href: "/solutions/data-security" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "FinTech", href: "/industries/fintech" },
      { label: "Government & Defense", href: "/industries/government-defense" },
      { label: "Critical Infrastructure", href: "/industries/critical-infrastructure" },
      { label: "Overview", href: "/industries" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "The suite", href: "/products" },
      { label: "Client Portal", href: "/products/client-portal" },
      { label: "Findings Dashboard", href: "/products/findings-dashboard" },
      { label: "Trust Center", href: "/products/trust-center" },
      { label: "Briefing Hub", href: "/products/briefing-hub" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Data Discovery", href: "/services/data-discovery" },
      { label: "Access Review", href: "/services/access-review" },
      { label: "Shadow-AI", href: "/services/shadow-ai" },
      { label: "DLP Tuning", href: "/services/dlp-tuning" },
      { label: "Managed Monitoring", href: "/services/managed-monitoring" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Vision & Goals", href: "/company/vision" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Research", href: "/company/research" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-deep text-taupe">
      <Container className="pb-4 pt-10">
        <div
          className="nm-footer-grid grid gap-8"
          style={{ gridTemplateColumns: "1.7fr 1fr 1fr 1fr 1fr 1fr" }}
        >
          <div className="max-w-[300px]">
            <div className="mb-4 flex items-center gap-3">
              <BrandMark size={38} />
              <span className="font-brand text-base font-extrabold tracking-[0.02em] text-white">
                NAMLAMEIS
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-taupe">
              Defense-grade cybersecurity, AI, and complex vulnerability
              discovery. We find what others miss — before it finds you.
            </p>
            {/* Was rgba(226,232,241,0.42) at 11px — 3.46:1. This is the
                company's own contact address; it needs to be readable.
                Icons are aria-hidden: each already sits next to the text that
                names it, so announcing them would just repeat the label. */}
            <address className="font-mono text-xs not-italic tracking-[0.06em] text-taupe">
              <a
                href="mailto:hello@namlameis.com"
                className="nm-footer-link inline-flex min-h-11 items-center gap-2.5 hover:text-white"
              >
                <svg className="nm-footer-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                hello@namlameis.com
              </a>
              <div className="flex items-center gap-2.5">
                <svg className="nm-footer-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                A branch in Salzburg, Austria
              </div>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              {/* #8C41CC on ink is 3.26:1 — the accent must be the light violet
                  on dark surfaces. */}
              <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-violet-on-dark">
                {col.title}
              </h2>
              <ul className="flex flex-col">
                {col.links.map((lk) => (
                  <li key={lk.href + lk.label}>
                    {/* min-h-11 gives a 44px target; these were ~18px tall. */}
                    <Link
                      href={lk.href}
                      className="nm-footer-link flex min-h-11 items-center gap-1.5 text-[13px] text-taupe hover:text-white"
                    >
                      <LinkArrow />
                      {lk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-1">
          <p className="text-sm text-taupe">
            © 2024–2026 Namlameis — a branch in Salzburg, Austria.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {[
              { href: "/legal/privacy", label: "Privacy" },
              { href: "/legal/terms", label: "Terms" },
              { href: "/legal/security", label: "Security" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nm-footer-link flex min-h-11 items-center text-[13px] text-taupe hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://linkedin.com/company/namlameis"
              className="nm-footer-link flex min-h-11 items-center text-[13px] font-medium text-violet-on-dark hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
