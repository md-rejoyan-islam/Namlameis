import Link from "next/link";
import { AntMark } from "./AntMark";
import { Container } from "./ui/Container";
import {
  site,
  solutionsNav,
  industriesNav,
} from "@/lib/site";

const companyLinks = [
  { label: "About", href: "/company/about" },
  { label: "Leadership", href: "/company/leadership" },
  { label: "Platform", href: "/platform" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Security", href: "/legal/security" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-paper/40">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_0.9fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <AntMark className="h-7 w-7 text-paper" />
              <span className="font-display text-xl font-semibold tracking-tight">
                {site.name}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              {site.footerLine}
            </p>
          </div>

          <Column
            title="Solutions"
            links={solutionsNav.map((s) => ({
              // Shorten the long card titles for the footer
              label: s.label.replace(" & Offensive Security", ""),
              href: s.href,
            }))}
          />
          <Column title="Industries" links={industriesNav} />
          <Column title="Company" links={companyLinks} />
          <Column title="Legal" links={legalLinks} />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/50">
            © {site.founded}–2026 {site.name} · {site.location}
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Namlameis on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors hover:border-white/40 hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.59 22 10.3 22 13.6V21h-4v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.43V21H9V9Z" />
            </svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
