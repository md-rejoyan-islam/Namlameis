import Link from "next/link";
import { BrandMark } from "./BrandMark";

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
    <footer style={{ background: "#0B0420", borderTop: "1px solid rgba(226,232,241,0.1)", fontFamily: "var(--font-sans)", color: "rgba(226,232,241,0.6)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 32px 40px" }}>
        <div className="nm-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr 1fr 1fr 1fr", gap: 32 }}>
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 18 }}>
              <BrandMark size={38} />
              <span style={{ fontFamily: "var(--font-brand)", fontWeight: 800, fontSize: 15, letterSpacing: "0.02em", color: "#FFFFFF" }}>NAMLAMEIS</span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "rgba(226,232,241,0.55)", margin: "0 0 20px" }}>
              Defense-grade cybersecurity, AI, and complex vulnerability discovery. We find what others miss — before it finds you.
            </p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", color: "rgba(226,232,241,0.42)", lineHeight: 1.9 }}>
              <div>hello@namlameis.com</div>
              <div>A branch in Salzburg, Austria</div>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8A39C0", marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map((lk) => (
                  <Link key={lk.href + lk.label} href={lk.href} className="nm-footer-link" style={{ fontSize: 13.5, color: "rgba(226,232,241,0.62)", textDecoration: "none" }}>{lk.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, paddingTop: 26, borderTop: "1px solid rgba(226,232,241,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
          <div style={{ fontSize: 12.5, color: "rgba(226,232,241,0.45)" }}>© 2024–2026 Namlameis — a branch in Salzburg, Austria.</div>
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <Link href="/legal/privacy" style={{ fontSize: 12.5, color: "rgba(226,232,241,0.5)", textDecoration: "none" }}>Privacy</Link>
            <Link href="/legal/terms" style={{ fontSize: 12.5, color: "rgba(226,232,241,0.5)", textDecoration: "none" }}>Terms</Link>
            <Link href="/legal/security" style={{ fontSize: 12.5, color: "rgba(226,232,241,0.5)", textDecoration: "none" }}>Security</Link>
            <a href="https://linkedin.com/company/namlameis" style={{ fontSize: 12.5, color: "#8A39C0", textDecoration: "none", fontWeight: 500 }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
