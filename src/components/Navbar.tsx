"use client";

import { useEffect, useState } from "react";
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
  { no: "01", name: "Client Portal", desc: "Engagement & findings, one secure place.", href: "/products/client-portal", dot: "#8A39C0" },
  { no: "02", name: "Request Intake & Triage", desc: "Captured and routed in seconds.", href: "/products/request-intake", dot: "#8A39C0" },
  { no: "03", name: "Findings Dashboard", desc: "Signal, turned into a narrative.", href: "/products/findings-dashboard", dot: "#6D28D9" },
  { no: "04", name: "Trust Center", desc: "We practise what we sell.", href: "/products/trust-center", dot: "#6D28D9" },
  { no: "05", name: "Threat-Briefing Hub", desc: "The credibility engine, published.", href: "/products/briefing-hub", dot: "#8A39C0" },
  { no: "06", name: "Secure Data Vault", desc: "Where sensitive client data lives.", href: "/products/data-vault", dot: "#8A39C0" },
];

const services: Item[] = [
  { no: "01", name: "Data Discovery & Classification", href: "/services/data-discovery" },
  { no: "02", name: "Data Access Review", href: "/services/access-review" },
  { no: "03", name: "Shadow-AI & AI Data-Exposure", href: "/services/shadow-ai" },
  { no: "04", name: "DLP Strategy & Tuning", href: "/services/dlp-tuning" },
  { no: "05", name: "Managed Data-Risk Monitoring", href: "/services/managed-monitoring" },
];

const industries: Item[] = [
  { name: "Financial Services", dot: "#8A39C0", href: "/industries/fintech" },
  { name: "Government & Defense", dot: "#8A39C0", href: "/industries/government-defense" },
  { name: "Critical Infrastructure", dot: "#6D28D9", href: "/industries/critical-infrastructure" },
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Cyera-style two-state header: translucent full-width bar at the top of the
  // page, morphing into a floating pill once the user scrolls past the hero lip.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The header is transparent until scrolled. The homepage hero is light while
  // every other route has a dark hero — so the nav text must flip: dark over the
  // light homepage hero (and the scrolled light pill), white over dark heroes.
  const lightHero = pathname === "/";
  const onDark = !scrolled && !lightHero; // white text only while over a dark hero
  const textActive = onDark ? "#FFFFFF" : "#120428";
  const textMuted = onDark ? "rgba(226,232,241,0.72)" : "rgba(11,4,32,0.62)";

  const hl = (seg: string) =>
    pathname.startsWith(seg) ? textActive : textMuted;

  const trigger = (key: Key, label: string, seg: string) => (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setOpen(key)}
      onMouseLeave={() => setOpen(null)}
    >
      <span
        style={{
          padding: "9px 11px",
          fontSize: 15.5,
          fontWeight: 500,
          color: hl(seg),
          cursor: "default",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {label}
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: 0.75,
            transition: "transform .25s ease",
            transform: open === key ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </span>
      {open === key && <div style={{ position: "absolute", top: 38, left: 0, paddingTop: 10 }}>{renderMenu(key)}</div>}
    </div>
  );

  const panel: React.CSSProperties = {
    background: "#0B0420",
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
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", flexDirection: "column", gap: 2, padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
              <span style={{ fontSize: 14, fontWeight: 550, color: "#FFFFFF" }}>{it.name}</span>
              <span style={{ fontSize: 12.5, color: "rgba(226,232,241,0.5)", lineHeight: 1.4 }}>{it.desc}</span>
            </Link>
          ))}
        </div>
      );
    }
    if (key === "products") {
      return (
        <div style={{ ...panel, width: 560, padding: 12 }}>
          <Link href="/products" className="nm-menu-item" style={{ display: "block", padding: "10px 12px", marginBottom: 4, borderRadius: 9, textDecoration: "none", borderBottom: "1px solid rgba(226,232,241,0.08)" }}>
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#8A39C0" }}>The product suite ↗</span>
            <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", marginLeft: 8 }}>a platform around the service</span>
          </Link>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 4 }}>
            {products.map((it) => (
              <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", flexDirection: "column", gap: 1, padding: "10px 12px", borderRadius: 9, textDecoration: "none" }}>
                <span style={{ fontSize: 13.5, fontWeight: 550, color: "#FFFFFF" }}>{it.name}</span>
                <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", lineHeight: 1.35 }}>{it.desc}</span>
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
            <span style={{ fontSize: 13.5, fontWeight: 600, color: "#8A39C0" }}>Data-security services ↗</span>
            <span style={{ fontSize: 12, color: "rgba(226,232,241,0.5)", marginLeft: 8 }}>human-delivered</span>
          </Link>
          {services.map((it) => (
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", alignItems: "center", padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
              <span style={{ fontSize: 13.5, fontWeight: 520, color: "#FFFFFF" }}>{it.name}</span>
            </Link>
          ))}
        </div>
      );
    }
    if (key === "industries") {
      return (
        <div style={{ ...panel, width: 300 }}>
          {industries.map((it) => (
            <Link key={it.href} href={it.href} className="nm-menu-item" style={{ display: "flex", alignItems: "center", padding: "11px 12px", borderRadius: 9, textDecoration: "none" }}>
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
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "12px 20px" : "0",
        transition: "padding .45s cubic-bezier(.22,.61,.36,1)",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: scrolled ? 1340 : 1560,
          margin: "0 auto",
          padding: scrolled ? "0 22px" : "0 34px",
          height: scrolled ? 62 : 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          background: scrolled
            ? "rgba(248,245,252,0.85)"
            : "transparent",
          // Frosted blur only for the scrolled pill and the homepage's static
          // header; every other page stays fully clean (no colour, no blur) at top.
          backdropFilter: scrolled || lightHero ? "blur(18px) saturate(150%)" : "none",
          WebkitBackdropFilter: scrolled || lightHero ? "blur(18px) saturate(150%)" : "none",
          borderRadius: scrolled ? 16 : 0,
          border: scrolled ? "1px solid rgba(11,4,32,0.07)" : "1px solid transparent",
          boxShadow: scrolled
            ? "var(--shadow-lg)"
            : "none",
          transition: "all .45s cubic-bezier(.22,.61,.36,1)",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 13, textDecoration: "none", flex: "none" }}>
          <BrandMark size={scrolled ? 36 : 40} />
          <span style={{ display: "flex", alignItems: "center", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-brand)", fontWeight: 800, fontSize: scrolled ? 19 : 21, letterSpacing: "0.02em", color: textActive, transition: "color .35s ease, font-size .35s ease" }}>NAMLAMEIS</span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="nm-nav-center" style={{ display: "flex", alignItems: "center", gap: 2, fontFamily: "var(--font-sans)" }}>
          <Link href="/platform" style={{ padding: "9px 11px", fontSize: 15.5, fontWeight: 500, color: hl("/platform"), textDecoration: "none", borderRadius: 7, transition: "color .3s ease" }}>Platform</Link>
          {trigger("solutions", "Solutions", "/solutions")}
          {trigger("products", "Products", "/products")}
          {trigger("services", "Services", "/services")}
          {trigger("industries", "Industries", "/industries")}
          {trigger("company", "Company", "/company")}
        </div>

        <div className="nm-nav-cta" style={{ display: "flex", alignItems: "center", gap: 10, flex: "none" }}>
          <Link
            href="/contact"
            style={{
              padding: "10px 16px",
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              fontWeight: 500,
              color: scrolled ? "#8A39C0" : textActive,
              textDecoration: "none",
              border: `1px solid ${scrolled ? "rgba(138,57,192,0.35)" : onDark ? "rgba(255,255,255,0.4)" : "rgba(11,4,32,0.20)"}`,
              borderRadius: 9999,
              letterSpacing: "-0.01em",
              transition: "color .3s ease, border-color .3s ease",
            }}
          >
            Get a demo
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "11px 19px",
              background: "linear-gradient(180deg,#9B5DE5 0%,#6D28D9 100%)",
              color: "#FFFFFF",
              fontFamily: "var(--font-sans)",
              fontSize: 13.5,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              textDecoration: "none",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "var(--shadow-blue)",
              transition: "background .3s ease, color .3s ease, box-shadow .3s ease",
            }}
          >
            Request a briefing
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="nm-nav-burger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" stroke={textActive} strokeWidth="1.6" fill="none" strokeLinecap="round" style={{ transition: "stroke .3s ease" }}>
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="nm-nav-mobile" style={{ pointerEvents: "auto", position: "fixed", top: scrolled ? 74 : 78, left: 0, right: 0, zIndex: 99, background: "#0B0420", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "8px 24px 28px", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 78px)", overflowY: "auto" }}>
          <Link href="/platform" onClick={() => setMobileOpen(false)} style={{ padding: "13px 0", fontSize: 15.5, fontWeight: 500, color: "#FFFFFF", textDecoration: "none", fontFamily: "var(--font-sans)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Platform</Link>

          {([
            { title: "Solutions", items: solutions },
            { title: "Products", items: products },
            { title: "Services", items: services },
            { title: "Industries", items: industries },
            { title: "Company", items: company },
          ] as { title: string; items: Item[] }[]).map((group) => (
            <div key={group.title} style={{ padding: "16px 0 10px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.2em", color: "#8A39C0", marginBottom: 8 }}>{group.title.toUpperCase()}</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {group.items.map((it) => (
                  <Link key={it.href} href={it.href} onClick={() => setMobileOpen(false)} style={{ padding: "8px 0", fontSize: 14.5, color: "rgba(226,232,241,0.78)", textDecoration: "none", fontFamily: "var(--font-sans)" }}>{it.name}</Link>
                ))}
              </div>
            </div>
          ))}

          <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 20 }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textAlign: "center", padding: "13px 18px", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 10, color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, textDecoration: "none" }}>Get a demo</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{ textAlign: "center", padding: "14px 18px", background: "linear-gradient(180deg,#9B5DE5 0%,#6D28D9 100%)", borderRadius: 10, color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 600, textDecoration: "none" }}>Request a briefing</Link>
          </div>
        </div>
      )}
    </header>
  );
}
