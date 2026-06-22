import type { CSSProperties } from "react";
import Link from "next/link";
import { HeroSignalField } from "@/components/HeroSignalField";

// Scroll-driven reveal, matching the design comp's
// `animation: nm-rise; animation-timeline: view()` pattern.
const rise = (dur: string, range: string): CSSProperties => ({
  animation: `nm-rise ${dur} both`,
  animationTimeline: "view()",
  animationRange: range,
} as CSSProperties);

const disciplines = [
  {
    no: "01",
    name: "AI-Powered Cybersecurity",
    desc: "Intelligence that learns your environment and defends it at machine speed, guided by human judgment.",
    href: "/solutions/ai-powered-cybersecurity",
    tint: "rgba(22,185,166,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B9A6" strokeWidth="1.6">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    ),
  },
  {
    no: "02",
    name: "Vulnerability Discovery",
    desc: "Patient, expert research that finds the flaw automation was never built to see.",
    href: "/solutions/vulnerability-discovery",
    tint: "rgba(22,185,166,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B9A6" strokeWidth="1.6">
        <circle cx="11" cy="11" r="6.5" />
        <path d="M16 16l4.5 4.5M11 8v6M8 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    no: "03",
    name: "Threat Detection & Response",
    desc: "See the attack as it forms; answer it before it lands.",
    href: "/solutions/threat-detection-response",
    tint: "rgba(31,169,143,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1FA98F" strokeWidth="1.6">
        <path d="M3 12h4l2-5 4 13 2.5-8H21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    no: "04",
    name: "Reputation & Narrative Defense",
    desc: "A reputation is a perimeter. We monitor it, defend it, and restore it.",
    href: "/solutions/reputation-narrative-defense",
    tint: "rgba(22,185,166,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B9A6" strokeWidth="1.6">
        <path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    no: "05",
    name: "Data Security",
    desc: "Protection that travels with the data itself — at rest, in motion, and in use.",
    href: "/solutions/data-security",
    tint: "rgba(22,185,166,0.12)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16B9A6" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
  },
];

const originBars = [
  { label: "Novel / chained / human-shaped flaws", pct: "72%", w: "92%", color: "#16B9A6" },
  { label: "Misconfiguration & access excess", pct: "48%", w: "61%", color: "#1FA98F" },
  { label: "Known, signed vulnerabilities", pct: "21%", w: "27%", color: "#94a3b8" },
  { label: "Reputation & narrative attacks", pct: "34%", w: "44%", color: "#16B9A6" },
];

const mono = "var(--font-mono)";
const serif = "var(--font-display)";

export default function Home() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(170deg,#FFFFFF 0%,#EAF8F5 55%,#DCF3EE 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.09) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.09) 1px,transparent 1px)", backgroundSize: "60px 60px", animation: "nm-drift 26s linear infinite", opacity: 0.55 }} />
        <div style={{ position: "absolute", top: -120, right: -60, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(22,185,166,0.22),transparent 62%)", animation: "nm-glow 7s ease-in-out infinite", pointerEvents: "none" }} />
        <HeroSignalField density={70} />
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(80% 70% at 25% 45%,transparent 45%,rgba(255,255,255,0.55) 100%)" }} />
        <div className="nm-grid-2" style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "96px 32px 104px", display: "grid", gridTemplateColumns: "1.04fr 0.96fr", gap: 56, alignItems: "center" }}>
          <div>
            <div style={{ ...rise(".8s", "entry 0% cover 22%"), display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 14px", border: "1px solid rgba(22,185,166,0.32)", borderRadius: 100, marginBottom: 30 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16B9A6", boxShadow: "0 0 10px #16B9A6" }} />
              <span style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.28em", color: "#16B9A6" }}>CYBER · AI · DEFENSE</span>
            </div>
            <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: 50, lineHeight: 1.04, letterSpacing: "-0.02em", color: "#0A1424", margin: "0 0 22px" }}>
              We find what others miss —<br />
              <span style={{ fontStyle: "italic", color: "#16B9A6" }}>before</span> it finds you.
            </h1>
            <p style={{ ...rise(".85s", "entry 0% cover 26%"), fontSize: 16, lineHeight: 1.7, color: "#48566b", maxWidth: 520, margin: "0 0 32px" }}>
              Namlameis is a defense-grade security firm built for the age in which code, intelligence, and reputation have become a single battlefield. We unite AI-powered cybersecurity, human-led vulnerability discovery, real-time detection and response, reputation defense, and data security in one disciplined practice — because the adversaries we face no longer respect the borders between them.
            </p>
            <div style={{ ...rise(".85s", "entry 0% cover 28%"), display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/contact" className="nm-cta-primary" style={{ padding: "15px 28px", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 8px 28px rgba(22,185,166,0.32)" }}>Request a briefing</Link>
              <Link href="/contact" className="nm-cta-light" style={{ padding: "14px 26px", background: "#FFFFFF", border: "1px solid rgba(10,20,36,0.18)", color: "#0A1424", fontFamily: "var(--font-sans)", fontSize: 14.5, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>Get a demo</Link>
            </div>
          </div>

          {/* signal map card */}
          <div style={{ ...rise(".9s", "entry 0% cover 26%"), position: "relative" }}>
            <div style={{ position: "relative", border: "1px solid rgba(226,232,241,0.14)", borderRadius: 18, background: "linear-gradient(160deg,rgba(13,28,48,0.6),rgba(8,18,30,0.85))", padding: 20, boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.22em", color: "rgba(226,232,241,0.5)" }}>SIGNAL MAP · LIVE</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: mono, fontSize: 10, color: "#1FA98F" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1FA98F", boxShadow: "0 0 8px #1FA98F" }} />TRACKING
                </span>
              </div>
              <svg viewBox="0 0 460 340" style={{ width: "100%", display: "block" }}>
                <defs>
                  <radialGradient id="hg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#16B9A6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#16B9A6" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g stroke="rgba(22,185,166,0.12)" strokeWidth="1">
                  <line x1="0" y1="68" x2="460" y2="68" /><line x1="0" y1="170" x2="460" y2="170" /><line x1="0" y1="272" x2="460" y2="272" />
                  <line x1="92" y1="0" x2="92" y2="340" /><line x1="230" y1="0" x2="230" y2="340" /><line x1="368" y1="0" x2="368" y2="340" />
                </g>
                <g fill="rgba(226,232,241,0.22)">
                  <circle cx="46" cy="250" r="2.5" /><circle cx="120" cy="300" r="2" /><circle cx="70" cy="120" r="2" /><circle cx="160" cy="90" r="2.5" /><circle cx="200" cy="220" r="2" /><circle cx="250" cy="300" r="2" /><circle cx="300" cy="120" r="2" /><circle cx="330" cy="250" r="2.5" /><circle cx="120" cy="190" r="2" /><circle cx="270" cy="180" r="2" /><circle cx="180" cy="160" r="2" /><circle cx="380" cy="180" r="2" /><circle cx="410" cy="280" r="2" /><circle cx="40" cy="180" r="2" />
                </g>
                <path d="M40 300 C 110 280, 130 200, 200 210 S 300 250, 330 170 S 380 90, 410 70" fill="none" stroke="#16B9A6" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.12" />
                <path d="M40 300 C 110 280, 130 200, 200 210 S 300 250, 330 170 S 380 90, 410 70" fill="none" stroke="#16B9A6" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.95" />
                <circle cx="40" cy="300" r="4" fill="#1FA98F" />
                <circle cx="200" cy="210" r="3.5" fill="#16B9A6" />
                <circle cx="330" cy="170" r="3.5" fill="#16B9A6" />
                <circle cx="410" cy="70" r="26" fill="url(#hg)" />
                <circle cx="410" cy="70" r="6" fill="#16B9A6" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
                <circle cx="410" cy="70" r="12" fill="none" stroke="#16B9A6" strokeWidth="1.2" strokeOpacity="0.6" />
              </svg>
              <div style={{ ...rise(".8s", "entry 0% cover 40%"), position: "absolute", right: 30, top: 64, width: 184, background: "rgba(10,20,36,0.92)", border: "1px solid rgba(22,185,166,0.4)", borderRadius: 11, padding: "13px 14px", boxShadow: "0 16px 40px rgba(0,0,0,0.5)" }}>
                <div style={{ fontFamily: mono, fontSize: 9.5, letterSpacing: "0.18em", color: "#16B9A6", marginBottom: 7 }}>THREAT IDENTIFIED</div>
                <div style={{ fontSize: 12.5, color: "#FFFFFF", fontWeight: 550, lineHeight: 1.4, marginBottom: 8 }}>Chained auth bypass in the seam between two systems.</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {["novel", "chained", "human-shaped"].map((t) => (
                    <span key={t} style={{ fontFamily: mono, fontSize: 9, color: "rgba(226,232,241,0.6)", border: "1px solid rgba(226,232,241,0.2)", borderRadius: 5, padding: "2px 6px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", borderTop: "1px solid #D6E6E2", background: "rgba(255,255,255,0.7)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap", justifyContent: "center", fontFamily: mono, fontSize: 11, letterSpacing: "0.14em", color: "#7c8b9a" }}>
            {["DORA", "NIS2", "EU AI ACT", "GDPR", "AWS", "AZURE", "GOOGLE CLOUD", "MICROSOFT 365"].flatMap((c, i) => [
              ...(i > 0 ? [<span key={`sep-${i}`} style={{ opacity: 0.4 }}>·</span>] : []),
              <span key={c}>{c}</span>,
            ])}
          </div>
        </div>
      </section>

      {/* ============ THESIS + FIG 1 ============ */}
      <section style={{ background: "#FFFFFF", padding: "120px 32px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div className="nm-grid-2" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 72, alignItems: "center" }}>
            <div>
              <div style={{ ...rise(".8s", "entry 0% cover 22%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 22 }}>THE THESIS</div>
              <h2 style={{ ...rise(".85s", "entry 0% cover 26%"), fontFamily: serif, fontWeight: 400, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.018em", color: "#0A1424", margin: "0 0 26px" }}>Protection is not a platform. It is a partnership of machine and mind.</h2>
              <p style={{ ...rise(".85s", "entry 0% cover 30%"), fontSize: 17, lineHeight: 1.76, color: "#475569", margin: "0 0 20px" }}>Most security companies sell you a platform and call it protection. We believe protection is something else entirely: the union of an intelligent system that sees everything and a human mind that understands what the system cannot.</p>
              <p style={{ ...rise(".85s", "entry 0% cover 34%"), fontSize: 17, lineHeight: 1.76, color: "#475569", margin: "0 0 28px" }}>Machines are magnificent at the known — the catalogued, the signed, the seen-before. But the breach that ends an institution is almost never the known one. It is the novel, the chained, the human-shaped flaw that no model was trained to recognise, surfacing in the seam between two systems nobody thought to examine together. <strong style={{ color: "#0A1424", fontWeight: 600 }}>That is the threat we were built to find.</strong></p>
              <div style={{ ...rise(".85s", "entry 0% cover 38%"), display: "flex", gap: 36, paddingTop: 26, borderTop: "1px solid #E2E8F1" }}>
                <div><div style={{ fontFamily: serif, fontSize: 34, color: "#0A1424", lineHeight: 1 }}>5</div><div style={{ fontSize: 12.5, color: "#64748b", marginTop: 4 }}>disciplines, one method</div></div>
                <div><div style={{ fontFamily: serif, fontSize: 34, color: "#0A1424", lineHeight: 1 }}>2024</div><div style={{ fontSize: 12.5, color: "#64748b", marginTop: 4 }}>founded, Salzburg</div></div>
                <div><div style={{ fontFamily: serif, fontSize: 34, color: "#0A1424", lineHeight: 1 }}>∞</div><div style={{ fontSize: 12.5, color: "#64748b", marginTop: 4 }}>distributed search</div></div>
              </div>
            </div>
            <figure style={{ ...rise("1s", "entry 0% cover 30%"), margin: 0 }}>
              <div style={{ background: "linear-gradient(165deg,#0B1A2E,#081320)", borderRadius: 18, padding: "34px 30px", boxShadow: "0 24px 60px rgba(11,26,46,0.22)" }}>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 6 }}>FIG 1 · SIGNAL → DECISION</div>
                <div style={{ fontSize: 13, color: "rgba(226,232,241,0.6)", marginBottom: 26, lineHeight: 1.5 }}>From a flood of signal to a single, confident decision — the spine of AI-powered defense.</div>
                <svg viewBox="0 0 480 250" style={{ width: "100%", display: "block" }}>
                  <g stroke="rgba(22,185,166,0.5)" strokeWidth="2" strokeLinecap="round">
                    <line x1="20" y1="36" x2="40" y2="36" /><line x1="20" y1="58" x2="46" y2="58" /><line x1="20" y1="80" x2="38" y2="80" /><line x1="20" y1="102" x2="48" y2="102" /><line x1="20" y1="124" x2="36" y2="124" /><line x1="20" y1="146" x2="44" y2="146" /><line x1="20" y1="168" x2="40" y2="168" /><line x1="20" y1="190" x2="46" y2="190" /><line x1="20" y1="212" x2="38" y2="212" />
                  </g>
                  <text x="20" y="20" fill="rgba(226,232,241,0.5)" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">NOISE</text>
                  <path d="M60 36 L150 110 M60 124 L150 124 M60 212 L150 138" fill="none" stroke="rgba(22,185,166,0.45)" strokeWidth="1.2" />
                  <g fontFamily="var(--font-mono)" fontSize="10" fill="#FFFFFF">
                    <rect x="150" y="106" width="86" height="38" rx="8" fill="rgba(22,185,166,0.16)" stroke="#16B9A6" strokeWidth="1" /><text x="193" y="129" textAnchor="middle">COLLECT</text>
                    <rect x="252" y="106" width="92" height="38" rx="8" fill="rgba(31,169,143,0.14)" stroke="#1FA98F" strokeWidth="1" /><text x="298" y="129" textAnchor="middle">CORRELATE</text>
                  </g>
                  <path d="M236 125 L252 125 M344 125 L362 125" fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeOpacity="0.5" />
                  <g>
                    <rect x="362" y="92" width="14" height="66" rx="3" fill="rgba(22,185,166,0.18)" stroke="rgba(22,185,166,0.5)" />
                    <rect x="362" y="110" width="14" height="14" rx="3" fill="#16B9A6" />
                    <text x="369" y="176" textAnchor="middle" fill="rgba(226,232,241,0.55)" fontFamily="var(--font-mono)" fontSize="8">RANK</text>
                  </g>
                  <path d="M376 125 L404 125" fill="none" stroke="#16B9A6" strokeWidth="1.6" />
                  <circle cx="430" cy="125" r="20" fill="rgba(22,185,166,0.14)" stroke="#16B9A6" strokeWidth="1.5" />
                  <circle cx="430" cy="125" r="6" fill="#16B9A6" style={{ animation: "nm-pulse 2.8s ease-in-out infinite" }} />
                  <text x="430" y="166" textAnchor="middle" fill="#16B9A6" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">DECIDE</text>
                </svg>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ FIVE DISCIPLINES ============ */}
      <section style={{ background: "#FFFFFF", padding: "118px 32px", borderTop: "1px solid #E2E8F1" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 64px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 20 }}>FIVE DISCIPLINES · ONE METHOD</div>
            <h2 style={{ ...rise(".85s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: 42, lineHeight: 1.12, letterSpacing: "-0.018em", color: "#0A1424", margin: "0 0 20px" }}>We practise five disciplines as though they were one.</h2>
            <p style={{ ...rise(".85s", "entry 0% cover 32%"), fontSize: 17, lineHeight: 1.74, color: "#475569", margin: 0 }}>Because the modern adversary moves between them without pause. A vulnerability becomes an incident; the incident becomes a story; the story decides whether the institution survives.</p>
          </div>
          <div className="nm-disc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {disciplines.map((d) => (
              <Link key={d.no} href={d.href} className="nm-disc-card" style={{ ...rise(".8s", "entry 0% cover 30%"), textDecoration: "none", background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 16, padding: "30px 28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 11, background: d.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>{d.icon}</span>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "#94a3b8" }}>{d.no}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 19, color: "#0A1424", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{d.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.62, color: "#64748b", margin: "0 0 20px", flex: 1 }}>{d.desc}</p>
                <span style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.06em", color: "#16B9A6", display: "inline-flex", alignItems: "center", gap: 7 }}>Read the full account →</span>
              </Link>
            ))}
          </div>
          <figure style={{ ...rise("1s", "entry 0% cover 24%"), margin: "56px 0 0", background: "linear-gradient(165deg,#0B1A2E,#081320)", borderRadius: 20, padding: "44px 40px", boxShadow: "0 30px 70px rgba(11,26,46,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 38 }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 8 }}>FIG 2 · THE METHOD</div>
                <div style={{ fontFamily: serif, fontSize: 24, color: "#FFFFFF", maxWidth: 520, lineHeight: 1.25 }}>Every engagement follows the same disciplined path — borrowed from the patience of the colony.</div>
              </div>
              <div style={{ fontSize: 13, color: "rgba(226,232,241,0.5)", maxWidth: 240, lineHeight: 1.55 }}>Methodical, distributed, signal-driven. A colony explores every path until the surest route emerges — then it does not stop.</div>
            </div>
            <svg viewBox="0 0 1000 150" style={{ width: "100%", display: "block" }}>
              <path d="M70 75 H930" fill="none" stroke="rgba(226,232,241,0.18)" strokeWidth="1.5" />
              <path d="M70 75 H930" fill="none" stroke="#16B9A6" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />
              <g fontFamily="var(--font-mono)" fontSize="13">
                <g><circle cx="70" cy="75" r="9" fill="#0B1A2E" stroke="#16B9A6" strokeWidth="2" /><circle cx="70" cy="75" r="3.5" fill="#16B9A6" /><text x="70" y="38" textAnchor="middle" fill="#FFFFFF">Discover</text><text x="70" y="112" textAnchor="middle" fill="rgba(226,232,241,0.45)" fontSize="10">map the surface</text></g>
                <g><circle cx="285" cy="75" r="9" fill="#0B1A2E" stroke="#1FA98F" strokeWidth="2" /><circle cx="285" cy="75" r="3.5" fill="#1FA98F" /><text x="285" y="38" textAnchor="middle" fill="#FFFFFF">Signal</text><text x="285" y="112" textAnchor="middle" fill="rgba(226,232,241,0.45)" fontSize="10">surface the unknown</text></g>
                <g><circle cx="500" cy="75" r="9" fill="#0B1A2E" stroke="#1FA98F" strokeWidth="2" /><circle cx="500" cy="75" r="3.5" fill="#1FA98F" /><text x="500" y="38" textAnchor="middle" fill="#FFFFFF">Verify</text><text x="500" y="112" textAnchor="middle" fill="rgba(226,232,241,0.45)" fontSize="10">reproduce, prove</text></g>
                <g><circle cx="715" cy="75" r="9" fill="#0B1A2E" stroke="#16B9A6" strokeWidth="2" /><circle cx="715" cy="75" r="3.5" fill="#16B9A6" /><text x="715" y="38" textAnchor="middle" fill="#FFFFFF">Defend</text><text x="715" y="112" textAnchor="middle" fill="rgba(226,232,241,0.45)" fontSize="10">contain &amp; harden</text></g>
                <g><circle cx="930" cy="75" r="11" fill="rgba(22,185,166,0.15)" stroke="#16B9A6" strokeWidth="2" /><circle cx="930" cy="75" r="4" fill="#16B9A6" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} /><text x="930" y="38" textAnchor="middle" fill="#16B9A6">Report</text><text x="930" y="112" textAnchor="middle" fill="rgba(226,232,241,0.45)" fontSize="10">written, owned</text></g>
              </g>
            </svg>
          </figure>
        </div>
      </section>

      {/* ============ THE LANDSCAPE IN NUMBERS ============ */}
      <section style={{ background: "#FFFFFF", padding: "110px 32px", borderTop: "1px solid #E2E8F1" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 680, margin: "0 0 56px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 18 }}>THE LANDSCAPE, IN NUMBERS</div>
            <h2 style={{ ...rise(".85s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: 40, lineHeight: 1.12, letterSpacing: "-0.018em", color: "#0A1424", margin: "0 0 16px" }}>The shape of the threat we were built to meet.</h2>
            <p style={{ ...rise(".85s", "entry 0% cover 32%"), fontSize: 16.5, lineHeight: 1.72, color: "#475569", margin: 0 }}>Where the danger is moving — and why the novel, chained, human-shaped flaw is the one that decides an institution&apos;s fate.</p>
          </div>

          <div className="nm-grid-2" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 24, marginBottom: 24 }}>
            <div style={{ ...rise(".9s", "entry 0% cover 30%"), background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 18, padding: "34px 36px" }}>
              <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>WHERE THE BREACH BEGINS</div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, color: "#0A1424", marginBottom: 28 }}>The unknown dominates the consequence</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {originBars.map((b) => (
                  <div key={b.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                      <span style={{ fontSize: 14.5, color: "#334155", fontWeight: 500 }}>{b.label}</span>
                      <span style={{ fontFamily: mono, fontSize: 13, color: "#0A1424", fontWeight: 600 }}>{b.pct}</span>
                    </div>
                    <div style={{ height: 12, borderRadius: 7, background: "#E8EDF3", overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 7, background: b.color, width: b.w, transformOrigin: "left", animation: "nm-grow 1.1s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 0% cover 44%" } as CSSProperties} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...rise(".9s", "entry 0% cover 32%"), background: "linear-gradient(165deg,#0B1A2E,#081320)", borderRadius: 18, padding: "34px 36px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.16em", color: "#16B9A6", marginBottom: 24, alignSelf: "flex-start" }}>THE DETECTION GAP</div>
              <svg viewBox="0 0 130 130" style={{ width: 170, height: 170 }}>
                <circle cx="65" cy="65" r="54" fill="none" stroke="rgba(226,232,241,0.12)" strokeWidth="13" />
                <circle cx="65" cy="65" r="54" fill="none" stroke="#16B9A6" strokeWidth="13" strokeLinecap="round" strokeDasharray="339" strokeDashoffset="95" transform="rotate(-90 65 65)" style={{ animation: "nm-donut 1.5s cubic-bezier(.16,1,.3,1) both", animationTimeline: "view()", animationRange: "entry 0% cover 42%" } as CSSProperties} />
                <text x="65" y="60" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-sans)" fontSize="27" fontWeight="700">72%</text>
                <text x="65" y="80" textAnchor="middle" fill="rgba(226,232,241,0.55)" fontFamily="var(--font-sans)" fontSize="9">novel &amp; unsigned</text>
              </svg>
              <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "rgba(226,232,241,0.62)", margin: "22px 0 0" }}>Most consequential intrusions exploit flaws no signature ever catalogued — invisible to automation alone.</p>
            </div>
          </div>

          <div style={{ ...rise(".9s", "entry 0% cover 30%"), background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 18, padding: "34px 36px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 26 }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.16em", color: "#94a3b8", marginBottom: 6 }}>THE NEW EXFILTRATION PATH</div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, color: "#0A1424" }}>Sensitive data flowing into AI tools</div>
              </div>
              <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12.5, color: "#64748b" }}><span style={{ width: 10, height: 3, borderRadius: 2, background: "#16B9A6" }} />exposure index</span>
              </div>
            </div>
            <svg viewBox="0 0 1000 220" style={{ width: "100%", display: "block" }}>
              <g stroke="#E2E8F1" strokeWidth="1">
                <line x1="40" y1="30" x2="1000" y2="30" /><line x1="40" y1="80" x2="1000" y2="80" /><line x1="40" y1="130" x2="1000" y2="130" /><line x1="40" y1="180" x2="1000" y2="180" />
              </g>
              <g fontFamily="var(--font-mono)" fontSize="11" fill="#94a3b8">
                <text x="52" y="205">2021</text><text x="290" y="205">2022</text><text x="528" y="205">2023</text><text x="766" y="205">2024</text><text x="940" y="205">2026</text>
              </g>
              <defs>
                <linearGradient id="nm-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16B9A6" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#16B9A6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M52 178 C 250 172, 380 150, 528 120 S 800 56, 968 30 L968 180 L52 180 Z" fill="url(#nm-area)" opacity="0.5" />
              <path d="M52 178 C 250 172, 380 150, 528 120 S 800 56, 968 30" fill="none" stroke="#16B9A6" strokeWidth="2.6" strokeLinecap="round" style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "nm-line 1.8s ease both", animationTimeline: "view()", animationRange: "entry 0% cover 46%" } as CSSProperties} pathLength={1} />
              <circle cx="968" cy="30" r="5.5" fill="#16B9A6" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
              <circle cx="968" cy="30" r="11" fill="none" stroke="#16B9A6" strokeWidth="1.4" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* ============ THREAD ============ */}
      <section style={{ background: "#0B1A2E", padding: "104px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.6 }} />
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...rise(".8s", "entry 0% cover 26%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 28 }}>THE THREAD THE WHOLE FIRM HANGS ON</div>
          <p style={{ ...rise(".9s", "entry 0% cover 32%"), fontFamily: serif, fontWeight: 300, fontSize: 36, lineHeight: 1.36, letterSpacing: "-0.01em", color: "#FFFFFF", margin: 0 }}>Secure the data everywhere it lives — <span style={{ fontStyle: "italic" }}>at rest, in motion, and in use</span>, whether touched by humans or by AI — as the trusted foundation on which an organisation can adopt AI <span style={{ fontStyle: "italic" }}>without fear</span>.</p>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section style={{ background: "linear-gradient(165deg,#0A1424,#0B1A2E)", padding: "120px 32px", borderTop: "1px solid rgba(226,232,241,0.08)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...rise(".85s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 400, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 24px" }}>The first conversation is confidential — and it costs nothing.</h2>
          <p style={{ ...rise(".85s", "entry 0% cover 34%"), fontSize: 18, lineHeight: 1.7, color: "rgba(226,232,241,0.7)", margin: "0 auto 40px", maxWidth: 620 }}>If you are responsible for defending something that matters — a system, an institution, a name — let us talk about what others may have missed.</p>
          <div style={{ ...rise(".85s", "entry 0% cover 38%"), display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="nm-closing-primary" style={{ padding: "16px 32px", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 10px 30px rgba(22,185,166,0.3)" }}>Request a briefing</Link>
            <Link href="/company/research" className="nm-closing-ghost" style={{ padding: "16px 32px", background: "transparent", border: "1px solid rgba(226,232,241,0.22)", color: "#FFFFFF", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>Read our research</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
