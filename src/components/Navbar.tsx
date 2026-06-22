"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./BrandMark";

type Item = { no?: string; name: string; desc?: string; href: string; dot?: string };

const solutions: Item[] = [
  { no: "01", name: "AI-Powered Cybersecurity", desc: "Defense at machine speed, governed by human judgment.", href: "/solutions/ai-powered-cybersecurity" },
  { no: "02", name: "Vulnerability Discovery", desc: "Find the flaw automation was never built to see.", href: "/solutions/vulnerability-discovery" },
  { no: "03", name: "Threat Detection & Response", desc: "See the attack as it forms; answer before it lands.", href: "/solutions/threat-detection-response" },
  { no: "04", name: "Reputation & Narrative Defense", desc: "A reputation is a perimeter. We defend it.", href: "/solutions/reputation-narrative-defense" },
  { no: "05", name: "Data Security", desc: "Protection that travels with the data itself.", href: "/solutions/data-security" },
];

const products: Item[] = [
  { no: "01", name: "Client Portal", desc: "Engagement & findings, one secure place.", href: "/products/client-portal", dot: "#16B9A6" },
  { no: "02", name: "Request Intake & Triage", desc: "Captured and routed in seconds.", href: "/products/request-intake", dot: "#16B9A6" },
  { no: "03", name: "Findings Dashboard", desc: "Signal, turned into a narrative.", href: "/products/findings-dashboard", dot: "#1FA98F" },
  { no: "04", name: "Trust Center", desc: "We practise what we sell.", href: "/products/trust-center", dot: "#1FA98F" },
  { no: "05", name: "Threat-Briefing Hub", desc: "The credibility engine, published.", href: "/products/briefing-hub", dot: "#16B9A6" },
  { no: "06", name: "Secure Data Vault", desc: "Where sensitive client data lives.", href: "/products/data-vault", dot: "#16B9A6" },
];

const services: Item[] = [
  { no: "01", name: "Data Discovery & Classification", href: "/services/data-discovery" },
  { no: "02", name: "Data Access Review", href: "/services/access-review" },
  { no: "03", name: "Shadow-AI & AI Data-Exposure", href: "/services/shadow-ai" },
  { no: "04", name: "DLP Strategy & Tuning", href: "/services/dlp-tuning" },
  { no: "05", name: "Managed Data-Risk Monitoring", href: "/services/managed-monitoring" },
];

const industries: Item[] = [
  { name: "Financial Services", dot: "#16B9A6", href: "/industries/fintech" },
  { name: "Government & Defense", dot: "#16B9A6", href: "/industries/government-defense" },
  { name: "Critical Infrastructure", dot: "#1FA98F", href: "/industries/critical-infrastructure" },
  { name: "All industries", dot: "rgba(226,232,241,0.4)", href: "/industries" },
];

const company: Item[] = [
  { name: "About Namlameis", desc: "Founded 2024 to find what others miss.", href: "/company/about" },
  { name: "Vision & Goals", desc: "The next decade, fought in code and trust.", href: "/company/vision" },
  { name: "Leadership", desc: "In their own words.", href: "/company/leadership" },
  { name: "Research", desc: "Credibility, published.", href: "/company/research" },
];

type Key = "platform" | "solutions" | "products" | "services" | "industries" | "company";

export function Navbar() {
  const [open, setOpen] = useState<Key | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const hl = (seg: string) =>
    pathname.startsWith(seg) ? "#FFFFFF" : "rgba(226,232,241,0.66)";

  const trigger = (key: Key, label: string, seg: string) => (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(key)}
      onMouseLeave={() => setOpen(null)}
    >
      <span
        style={{
          padding: "9px 12px",
          fontSize: 14,
          fontWeight: 450,
          color: hl(seg),
          cursor: "default",
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        {label}
        <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>
      </span>
      {open === key && <div style={{ position: "absolute", top: 38, left: 0, paddingTop: 10 }}>{renderMenu(key)}</div>}
    </div>
  );

  const panel: React.CSSProperties = {
    background: "#0A1424",
    border: "1px solid rgba(226,232,241,0.14)",
    borderRadius: 14,
    padding: 10,
    boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
  };

  function renderMenu(key: Key) {
    if (key === "solutions") {
      return (
        <div style={{ ...panel, width: 380 }}>
          {solutions.map((it) => (
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", gap: 13, alignItems: "flex-start", padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#16B9A6", marginTop: 2, flex: "none", width: 18 }}>{it.no}</span>
              <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 13.5, fontWeight: 550, color: "#FFFFFF" }}>{it.name}</span>
                <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", lineHeight: 1.4 }}>{it.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      );
    }
    if (key === "products") {
      return (
        <div style={{ ...panel, width: 560, padding: 12 }}>
          <Link href="/products" className="nm-menu-item" style={{ display: "block", padding: "10px 12px", marginBottom: 4, borderRadius: 9, textDecoration: "none", borderBottom: "1px solid rgba(226,232,241,0.08)" }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#16B9A6" }}>The product suite ↗</span>
            <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", marginLeft: 8 }}>a platform around the service</span>
          </Link>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 4 }}>
            {products.map((it) => (
              <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", gap: 11, alignItems: "flex-start", padding: "10px 12px", borderRadius: 9, textDecoration: "none" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: it.dot, marginTop: 3, flex: "none" }}>{it.no}</span>
                <span style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <span style={{ fontSize: 13, fontWeight: 550, color: "#FFFFFF" }}>{it.name}</span>
                  <span style={{ fontSize: 11.5, color: "rgba(226,232,241,0.5)", lineHeight: 1.35 }}>{it.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      );
    }
    if (key === "services") {
      return (
        <div style={{ ...panel, width: 400, padding: 12 }}>
          <Link href="/services" className="nm-menu-item" style={{ display: "block", padding: "10px 12px", marginBottom: 4, borderRadius: 9, textDecoration: "none", borderBottom: "1px solid rgba(226,232,241,0.08)" }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#16B9A6" }}>Data-security services ↗</span>
            <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", marginLeft: 8 }}>human-delivered</span>
          </Link>
          {services.map((it) => (
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", gap: 13, alignItems: "flex-start", padding: "10px 12px", borderRadius: 9, textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1FA98F", marginTop: 2, flex: "none", width: 16 }}>{it.no}</span>
              <span style={{ fontSize: 13, fontWeight: 520, color: "#FFFFFF" }}>{it.name}</span>
            </Link>
          ))}
        </div>
      );
    }
    if (key === "industries") {
      return (
        <div style={{ ...panel, width: 300 }}>
          {industries.map((it) => (
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", gap: 13, alignItems: "center", padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: it.dot, flex: "none" }} />
              <span style={{ fontSize: 13.5, fontWeight: 500, color: "#FFFFFF" }}>{it.name}</span>
            </Link>
          ))}
        </div>
      );
    }
    // company
    return (
      <div style={{ ...panel, width: 300, right: 0 }}>
        {company.map((it) => (
          <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", flexDirection: "column", gap: 2, padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
            <span style={{ fontSize: 13.5, fontWeight: 550, color: "#FFFFFF" }}>{it.name}</span>
            <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)" }}>{it.desc}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(8,8,10,0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <nav
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 32px",
          height: 74,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 13, textDecoration: "none", flex: "none" }}>
          <BrandMark size={40} />
          <span style={{ display: "flex", alignItems: "center", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-brand)", fontWeight: 800, fontSize: 21, letterSpacing: "0.04em", color: "#FFFFFF" }}>NAMLAMEIS</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="nm-nav-center" style={{ display: "flex", alignItems: "center", gap: 2, fontFamily: "var(--font-sans)" }}>
          <Link href="/platform" style={{ padding: "9px 12px", fontSize: 14, fontWeight: 450, color: hl("/platform"), textDecoration: "none", borderRadius: 7 }}>Platform</Link>
          {trigger("solutions", "Solutions", "/solutions")}
          {trigger("products", "Products", "/products")}
          {trigger("services", "Services", "/services")}
          {trigger("industries", "Industries", "/industries")}
          {trigger("company", "Company", "/company")}
        </div>

        <div className="nm-nav-cta" style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
          <Link href="/contact" style={{ padding: "10px 16px", fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 8 }}>Get a demo</Link>
          <Link href="/contact" style={{ padding: "11px 18px", background: "#FFFFFF", color: "#000000", fontFamily: "var(--font-sans)", fontSize: 13.5, fontWeight: 600, textDecoration: "none", borderRadius: 8 }}>Request a briefing</Link>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="nm-nav-burger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeLinecap="round">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="nm-nav-mobile" style={{ background: "#0A1424", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[{ name: "Platform", href: "/platform" }, ...solutions, ...products, ...services, ...industries, ...company, { name: "Contact", href: "/contact" }].map((it, i) => (
            <Link key={`${it.href}-${i}`} href={it.href} onClick={() => setMobileOpen(false)} style={{ padding: "10px 0", fontSize: 15, color: "rgba(226,232,241,0.82)", textDecoration: "none", fontFamily: "var(--font-sans)" }}>{it.name}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
