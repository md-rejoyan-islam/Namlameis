import type { ReactNode } from "react";
import Link from "next/link";
import { Prism } from "@/components/Prism";
import { solutions } from "@/lib/content";

const DISCIPLINE_ICONS: Record<string, ReactNode> = {
  "ai-powered-cybersecurity": (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4945FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path d="M6 18a4 4 0 0 1-1.967-.516" />
        <path d="M12 13h4" />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" />
        <path d="M12 8h8" />
        <path d="M16 8V5a2 2 0 0 1 2-2" />
        <circle cx="16" cy="13" r=".5" />
        <circle cx="18" cy="3" r=".5" />
        <circle cx="20" cy="21" r=".5" />
        <circle cx="20" cy="8" r=".5" />
      </svg>
  ),
  "vulnerability-discovery": (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4945FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
        <path d="m16 16-1.9-1.9" />
      </svg>
  ),
  "threat-detection-response": (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4945FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
        <path d="M4 6h.01" />
        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
        <path d="M12 18h.01" />
        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
        <circle cx="12" cy="12" r="2" />
        <path d="m13.41 10.59 5.66-5.66" />
      </svg>
  ),
  "reputation-narrative-defense": (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4945FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
        <path d="M8 6v8" />
      </svg>
  ),
  "data-security": (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4945FF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
        <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
        <rect width="8" height="5" x="3" y="17" rx="1" />
      </svg>
  ),
};

// Series colours: blue leads (it is the action colour and matches the CTAs),
// violet is the brand/secondary, warm grey is the baseline. The headline bar —
// the novel/chained flaw this whole firm is built around — takes the blue.
const originBars = [
  { label: "Novel / chained / human-shaped flaws", pct: "72%", w: "92%", color: "#4945FF" },
  { label: "Misconfiguration & access excess", pct: "48%", w: "61%", color: "#8C41CC" },
  { label: "Known, signed vulnerabilities", pct: "21%", w: "27%", color: "#6E6E8C" },
  { label: "Reputation & narrative attacks", pct: "34%", w: "44%", color: "#7C35B8" },
];

export default function Home() {
  return (
    <div className="nm-home">
      {/* ============ HERO ============ */}
      <section className="nm-hero">
        <div className="nm-grid-2 nm-hero-content">
          <div>
            <h1 className="nm-hero-h1">
              We find what others miss<br />
              <span className="nm-hl-blue">before</span> it finds you.
            </h1>
            <p className="nm-hero-lead">
              Namlameis is a defense-grade security firm built for the age in which code, intelligence, and reputation have become a single battlefield. We unite AI-powered cybersecurity, human-led vulnerability discovery, real-time detection and response, reputation defense, and data security in one disciplined practice — because the adversaries we face no longer respect the borders between them.
            </p>
            <div className="nm-hero-ctas">
              <Link href="/contact" className="nm-cta-primary">Request a briefing</Link>
              <Link href="/contact" className="nm-cta-light">Get a demo</Link>
            </div>
          </div>

          {/* signal map card */}
          <div className="nm-hero-cardwrap">
            <div className="nm-signal-card">
              <div className="nm-signal-card-head">
                <span className="nm-signal-label">SIGNAL MAP · LIVE</span>
                <span className="nm-signal-tracking">
                  <span className="nm-signal-tracking-dot" />TRACKING
                </span>
              </div>
              <svg viewBox="0 0 460 340" className="nm-svg-block">
                <defs>
                  <radialGradient id="hg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8C41CC" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4945FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <g stroke="#E9E9FF" strokeWidth="1">
                  <line x1="0" y1="68" x2="460" y2="68" /><line x1="0" y1="170" x2="460" y2="170" /><line x1="0" y1="272" x2="460" y2="272" />
                  <line x1="92" y1="0" x2="92" y2="340" /><line x1="230" y1="0" x2="230" y2="340" /><line x1="368" y1="0" x2="368" y2="340" />
                </g>
                <g fill="#DCDCE4">
                  <circle cx="46" cy="250" r="2.5" /><circle cx="120" cy="300" r="2" /><circle cx="70" cy="120" r="2" /><circle cx="160" cy="90" r="2.5" /><circle cx="200" cy="220" r="2" /><circle cx="250" cy="300" r="2" /><circle cx="300" cy="120" r="2" /><circle cx="330" cy="250" r="2.5" /><circle cx="120" cy="190" r="2" /><circle cx="270" cy="180" r="2" /><circle cx="180" cy="160" r="2" /><circle cx="380" cy="180" r="2" /><circle cx="410" cy="280" r="2" /><circle cx="40" cy="180" r="2" />
                </g>
                <path d="M40 300 C 110 280, 130 200, 200 210 S 300 250, 330 170 S 380 90, 410 70" fill="none" stroke="#4945FF" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.14" />
                <path d="M40 300 C 110 280, 130 200, 200 210 S 300 250, 330 170 S 380 90, 410 70" fill="none" stroke="#4945FF" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.95" pathLength={1} style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "nm-line 2.4s cubic-bezier(.6,0,.35,1) .35s forwards" }} />
                {/* signal packet travelling the live line */}
                <circle r="3.6" fill="#4945FF">
                  <animateMotion dur="3.6s" begin="0.6s" repeatCount="indefinite" path="M40 300 C 110 280, 130 200, 200 210 S 300 250, 330 170 S 380 90, 410 70" />
                  <animate attributeName="opacity" dur="3.6s" begin="0.6s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.9;1" />
                </circle>
                <circle cx="40" cy="300" r="4" fill="#7C35B8" />
                <circle cx="200" cy="210" r="3.5" fill="#8C41CC" />
                <circle cx="330" cy="170" r="3.5" fill="#8C41CC" />
                <circle cx="410" cy="70" r="26" fill="url(#hg)" />
                <circle cx="410" cy="70" r="6" fill="#8C41CC" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
                {/* radar ping expanding at the detection point */}
                <circle cx="410" cy="70" r="12" fill="none" stroke="#8C41CC" strokeWidth="1.2">
                  <animate attributeName="r" values="7;26" dur="2.6s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.65;0" dur="2.6s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="nm-signal-callout">
                <div className="nm-signal-callout-label">THREAT IDENTIFIED</div>
                <div className="nm-signal-callout-body">Chained auth bypass in the seam between two systems.</div>
                <div className="nm-signal-callout-tags">
                  {["novel", "chained", "human-shaped"].map((t) => (
                    <span key={t} className="nm-signal-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nm-trust-band">
          <div className="nm-trust-band-inner">
            {[
              { label: "Regulatory alignment", items: ["DORA", "NIS2", "EU AI ACT", "GDPR"] },
              { label: "Platform coverage", items: ["AWS", "AZURE", "GOOGLE CLOUD", "MICROSOFT 365"] },
            ].flatMap((group, gi) => [
              ...(gi > 0 ? [<span key="trust-div" aria-hidden="true" className="nm-trust-divider" />] : []),
              <div key={group.label} className="nm-trust-group">
                <span className="nm-trust-group-label">{group.label}</span>
                <div className="nm-trust-items">
                  {group.items.flatMap((it, ii) => [
                    ...(ii > 0 ? [<span key={`${group.label}-dot-${ii}`} aria-hidden="true" className="nm-trust-dot" />] : []),
                    <span key={it} className="nm-trust-chip">{it}</span>,
                  ])}
                </div>
              </div>,
            ])}
          </div>
        </div>
      </section>

      {/* ============ THESIS + FIG 1 ============ */}
      <section className="nm-section">
        <div className="nm-section-inner">
          <div className="nm-grid-2 nm-thesis-grid">
            <div>
              <h2 className="nm-thesis-h2">Protection is not a platform. It is a <span className="nm-hl-blue">partnership of machine and mind</span>.</h2>
              <p className="nm-thesis-p">Most security companies sell you a platform and call it protection. We believe protection is something else entirely: the union of an intelligent system that sees everything and a human mind that understands what the system cannot.</p>
              <p className="nm-thesis-p-last">Machines are magnificent at the known — the catalogued, the signed, the seen-before. But the breach that ends an institution is almost never the known one. It is the novel, the chained, the human-shaped flaw that no model was trained to recognise, surfacing in the seam between two systems nobody thought to examine together. <strong className="nm-thesis-strong">That is the threat we were built to find.</strong></p>
              <div className="nm-thesis-stats">
                <div><div className="nm-thesis-stat-num">5</div><div className="nm-thesis-stat-label">disciplines, one method</div></div>
                <div><div className="nm-thesis-stat-num">2024</div><div className="nm-thesis-stat-label">founded, Salzburg</div></div>
                <div><div className="nm-thesis-stat-num">∞</div><div className="nm-thesis-stat-label">distributed search</div></div>
              </div>
            </div>
            <figure style={{ margin: 0 }}>
              <div className="nm-fig1-card">
                <div className="nm-fig-label">FIG 1 · SIGNAL → DECISION</div>
                <div className="nm-fig1-caption">From a flood of signal to a single, confident decision — the spine of AI-powered defense.</div>
                <svg viewBox="0 0 480 250" className="nm-svg-block">
                  <g stroke="rgba(140,65,204,0.5)" strokeWidth="2" strokeLinecap="round" style={{ animation: "nm-twinkle 2.4s ease-in-out infinite" }}>
                    <line x1="20" y1="36" x2="40" y2="36" /><line x1="20" y1="58" x2="46" y2="58" /><line x1="20" y1="80" x2="38" y2="80" /><line x1="20" y1="102" x2="48" y2="102" /><line x1="20" y1="124" x2="36" y2="124" /><line x1="20" y1="146" x2="44" y2="146" /><line x1="20" y1="168" x2="40" y2="168" /><line x1="20" y1="190" x2="46" y2="190" /><line x1="20" y1="212" x2="38" y2="212" />
                  </g>
                  <text x="20" y="20" fill="#4F4F68" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">NOISE</text>
                  <path d="M60 36 L150 110 M60 124 L150 124 M60 212 L150 138" fill="none" stroke="rgba(140,65,204,0.45)" strokeWidth="1.2" strokeDasharray="5 5" style={{ animation: "nm-flow .6s linear infinite" }} />
                  <g fontFamily="var(--font-mono)" fontSize="10" fill="#292875">
                    <rect x="150" y="106" width="86" height="38" rx="8" fill="rgba(140,65,204,0.16)" stroke="#8C41CC" strokeWidth="1" /><text x="193" y="129" textAnchor="middle">COLLECT</text>
                    <rect x="252" y="106" width="92" height="38" rx="8" fill="rgba(124,53,184,0.14)" stroke="#7C35B8" strokeWidth="1" /><text x="298" y="129" textAnchor="middle">CORRELATE</text>
                  </g>
                  <path d="M236 125 L252 125 M344 125 L362 125" fill="none" stroke="#666687" strokeWidth="1.4" strokeOpacity="0.55" strokeDasharray="4 4" style={{ animation: "nm-flow .5s linear infinite" }} />
                  <g>
                    <rect x="362" y="92" width="14" height="66" rx="3" fill="rgba(140,65,204,0.18)" stroke="rgba(140,65,204,0.5)" />
                    <rect x="362" y="110" width="14" height="14" rx="3" fill="#8C41CC" />
                    <text x="369" y="176" textAnchor="middle" fill="#4F4F68" fontFamily="var(--font-mono)" fontSize="8">RANK</text>
                  </g>
                  <path d="M376 125 L404 125" fill="none" stroke="#8C41CC" strokeWidth="1.6" strokeDasharray="4 4" style={{ animation: "nm-flow .5s linear infinite" }} />
                  <circle cx="430" cy="125" r="20" fill="rgba(140,65,204,0.14)" stroke="#8C41CC" strokeWidth="1.5" />
                  <circle cx="430" cy="125" r="14" fill="none" stroke="#8C41CC" strokeWidth="1.2">
                    <animate attributeName="r" values="10;28" dur="2.8s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.6;0" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="430" cy="125" r="6" fill="#8C41CC" style={{ animation: "nm-pulse 2.8s ease-in-out infinite" }} />
                  <text x="430" y="166" textAnchor="middle" fill="#7C35B8" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1">DECIDE</text>
                </svg>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* ============ FIVE DISCIPLINES ============ */}
      <section className="nm-section-ruled">
        <div className="nm-section-inner">
          <div className="nm-disciplines-head">
            <h2 className="nm-disciplines-h2">We practise five disciplines <span className="nm-hl-blue">as though they were one</span>.</h2>
            <p className="nm-disciplines-p">Because the modern adversary moves between them without pause. A vulnerability becomes an incident; the incident becomes a story; the story decides whether the institution survives.</p>
          </div>
          {/*
            Five cards in a three-column grid left a dangling 3+2 row with a
            hole in it. This is a six-column grid where each card spans two, so
            the fourth card starts at column 2 and the last row centres itself
            under the first (see .nm-discipline-grid). Its own class, because
            .nm-disc-grid is shared with /company/research, which has exactly
            three items and needs no orphan handling.
          */}
          <div className="nm-discipline-grid" style={{ display: "grid", gap: 16 }}>
            {solutions.map((sol) => {
              // The capabilities each discipline actually sells, straight from
              // the content spec. The first one usually restates the title, so
              // drop it and show the three that add something. Substring rather
              // than equality: under "Vulnerability Discovery & Offensive
              // Security" the capability is the shorter "Vulnerability
              // Discovery", which an exact match would have let through.
              const caps = sol.capabilities
                .filter(
                  (c) =>
                    !sol.cardTitle.includes(c.name) &&
                    !c.name.includes(sol.cardTitle),
                )
                .slice(0, 3);
              return (
              // Left-aligned stack. White on a white section, so the resting
              // edge is the --shadow-disc ring alone — heavier than the site's
              // --shadow-card because nothing else separates the card from the
              // page. The border is transparent purely so hover can animate an
              // indigo edge in without stacking two borders.
              <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="nm-disc-card">
                {/* Icon on top, title beneath it, both on the left edge — the
                    glyph, title, blurb, ticks and link all start at the same x,
                    so the card reads as one column top to bottom.
                    Bare glyph: no chip, aura, gradient or shadow behind it.
                    Flat action blue, 5.87:1 on white. */}
                <span className="nm-disc-chip">
                  {DISCIPLINE_ICONS[sol.slug]}
                </span>
                <h3 className="nm-disc-title">{sol.cardTitle}</h3>
                <p className="nm-disc-blurb">{sol.cardBlurb}</p>
                {/* What the discipline actually covers — the content that turns
                    a blurb into something worth clicking. flex:1 lives here now
                    so the lists bottom-align across a row of uneven cards.
                    Items align left: a column of ticks reads as a checklist
                    only when the marks form a single vertical edge. */}
                <ul className="nm-disc-list">
                  {caps.map((c) => (
                    <li key={c.name} className="nm-disc-list-item">
                      {/* The filled badge-check from the reference. Green
                          #16A34A, not the brighter green in the image: the badge
                          sits on a white card AND carries a white tick, so both
                          ratios are the same number — the bright green measured
                          2.28:1 and would have failed on both counts at once.
                          #16A34A is the closest green that clears 3:1 (3.30). */}
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ flex: "none", marginTop: 0 }}>
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" fill="#16A34A" />
                        <path d="m9 12 2 2 4-4" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {c.name}
                    </li>
                  ))}
                </ul>
                {/* Hairline above the footer link — Stripe separates a card's
                    action from its prose rather than letting them float
                    together. It is the tint, not a grey rule. Full width so the
                    rule spans the card while the label sits on the left edge. */}
                <span className="nm-disc-link">
                  Read the full account
                  {/* A real arrow that travels on hover, rather than a "→"
                      glyph that cannot move and renders at the mercy of the
                      font's arrow metrics. */}
                  <svg className="nm-disc-arrow" width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              );
            })}
          </div>
          <figure className="nm-fig2-card nm-card-tinted">
            <div className="nm-fig2-head">
              <div>
                <div className="nm-fig-label">FIG 2 · THE METHOD</div>
                <div className="nm-fig2-title">Every engagement follows the same disciplined path — borrowed from the patience of the colony.</div>
              </div>
              <div className="nm-fig2-note">Methodical, distributed, signal-driven. A colony explores every path until the surest route emerges — then it does not stop.</div>
            </div>
            <svg viewBox="0 0 1000 150" className="nm-svg-block">
              <defs>
                <linearGradient id="nm-methodline" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C35B8" />
                  <stop offset="55%" stopColor="#8C41CC" />
                  <stop offset="100%" stopColor="#4945FF" />
                </linearGradient>
                <radialGradient id="nm-nodeglow">
                  <stop offset="0%" stopColor="#8C41CC" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#4945FF" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nm-comet">
                  <stop offset="0%" stopColor="#4945FF" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#4945FF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* base track + gradient progress line that draws in */}
              <path d="M70 75 H930" fill="none" stroke="#DCDCE4" strokeWidth="2" strokeLinecap="round" />
              <path d="M70 75 H930" fill="none" stroke="url(#nm-methodline)" strokeWidth="2.5" strokeLinecap="round" pathLength={1} style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "nm-line 3s cubic-bezier(.6,0,.35,1) .3s forwards" }} />

              {/* glowing comet sweeping the whole path */}
              <circle r="15" fill="url(#nm-comet)">
                <animateMotion dur="4.4s" begin="0.4s" repeatCount="indefinite" path="M70 75 H930" />
                <animate attributeName="opacity" dur="4.4s" begin="0.4s" repeatCount="indefinite" values="0;0.9;0.9;0.9;0" keyTimes="0;0.05;0.5;0.95;1" />
              </circle>
              <circle r="3.6" fill="#292875">
                <animateMotion dur="4.4s" begin="0.4s" repeatCount="indefinite" path="M70 75 H930" />
                <animate attributeName="opacity" dur="4.4s" begin="0.4s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.05;0.5;0.95;1" />
              </circle>

              {/* stage nodes — each pings in sequence as the comet reaches it */}
              {[
                { x: 70, label: "Discover", sub: "map the surface", t: 0.4 },
                { x: 285, label: "Signal", sub: "surface the unknown", t: 1.5 },
                { x: 500, label: "Verify", sub: "reproduce, prove", t: 2.6 },
                { x: 715, label: "Defend", sub: "contain & harden", t: 3.7 },
                { x: 930, label: "Report", sub: "written, owned", t: 4.8, last: true },
              ].map((s) => (
                <g key={s.label} fontFamily="var(--font-mono)">
                  <circle cx={s.x} cy="75" r="22" fill="url(#nm-nodeglow)" opacity={s.last ? 0.85 : 0.5} />
                  <circle cx={s.x} cy="75" r="9" fill="none" stroke="#4945FF" strokeWidth="1.6">
                    <animate attributeName="r" begin={`${s.t}s`} dur="4.4s" repeatCount="indefinite" values="8;24;8;8" keyTimes="0;0.12;0.26;1" />
                    <animate attributeName="stroke-opacity" begin={`${s.t}s`} dur="4.4s" repeatCount="indefinite" values="0.95;0;0;0" keyTimes="0;0.12;0.26;1" />
                  </circle>
                  <circle cx={s.x} cy="75" r={s.last ? 11 : 9} fill="#292875" stroke="#8C41CC" strokeWidth="2" />
                  <circle cx={s.x} cy="75" r={s.last ? 4 : 3.6} fill={s.last ? "#4945FF" : "#8C41CC"}>
                    {s.last ? <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" /> : null}
                  </circle>
                  {/* #3C38E5, not the #4945FF used on the node dot below it:
                      this is ~15px text on the card's #D2D1FF tint, where
                      #4945FF measures 4.03:1 and fails the 4.5 floor. The dot
                      is a graphic (3:1 floor) so it can stay the brighter blue. */}
                  <text x={s.x} y="36" textAnchor="middle" fill={s.last ? "#3C38E5" : "#120428"} fontSize="13">{s.label}</text>
                  <text x={s.x} y="112" textAnchor="middle" fill="#4F4F68" fontSize="10">{s.sub}</text>
                </g>
              ))}
            </svg>
          </figure>
        </div>
      </section>

      {/* ============ THE LANDSCAPE IN NUMBERS ============ */}
      <section className="nm-section-ruled">
        <div className="nm-section-inner">
          <div className="nm-landscape-head">
            <h2 className="nm-landscape-h2">The shape of the threat we were <span className="nm-hl-blue">built to meet</span>.</h2>
            <p className="nm-landscape-p">Where the danger is moving — and why the novel, chained, human-shaped flaw is the one that decides an institution&apos;s fate.</p>
          </div>

          <div className="nm-grid-2 nm-landscape-grid">
            <div className="nm-stat-card">
              <div className="nm-stat-label">WHERE THE BREACH BEGINS</div>
              <div className="nm-stat-title">The unknown dominates the consequence</div>
              <div className="nm-origin-bars">
                {originBars.map((b, i) => (
                  <div key={b.label}>
                    <div className="nm-origin-row-head">
                      <span className="nm-origin-row-label">{b.label}</span>
                      <span className="nm-origin-row-pct">{b.pct}</span>
                    </div>
                    <div className="nm-origin-track">
                      <div className="nm-origin-fill" style={{ background: b.color, width: b.w }}>
                        <div className="nm-origin-shimmer" style={{ animation: `nm-shimmer 3.2s ease-in-out ${i * 0.35}s infinite` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="nm-stat-card nm-detection-card">
              <div className="nm-stat-label-violet">THE DETECTION GAP</div>
              <svg viewBox="0 0 130 130" className="nm-donut-wrap">
                <circle cx="65" cy="65" r="54" fill="none" stroke="#DCDCE4" strokeWidth="13" />
                <circle cx="65" cy="65" r="54" fill="none" stroke="#4945FF" strokeWidth="13" strokeLinecap="round" strokeDasharray="339" strokeDashoffset="95" transform="rotate(-90 65 65)" className="nm-donut-ring" />
                <text x="65" y="60" textAnchor="middle" fill="#292875" fontFamily="var(--font-sans)" fontSize="27" fontWeight="700">72%</text>
                <text x="65" y="80" textAnchor="middle" fill="#4F4F68" fontFamily="var(--font-sans)" fontSize="9">novel &amp; unsigned</text>
              </svg>
              <p className="nm-donut-caption">Most consequential intrusions exploit flaws no signature ever catalogued — invisible to automation alone.</p>
            </div>
          </div>

          <div className="nm-stat-card nm-card-tinted">
            <div className="nm-exposure-head">
              <div>
                <div className="nm-stat-label">THE NEW EXFILTRATION PATH</div>
                <div className="nm-stat-title-tight">Sensitive data flowing into AI tools</div>
              </div>
              <div className="nm-exposure-legend">
                <span className="nm-exposure-legend-item"><span className="nm-exposure-legend-swatch" />exposure index</span>
              </div>
            </div>
            <svg viewBox="0 0 1000 220" className="nm-svg-block">
              <g stroke="#E9E9FF" strokeWidth="1">
                <line x1="40" y1="30" x2="1000" y2="30" /><line x1="40" y1="80" x2="1000" y2="80" /><line x1="40" y1="130" x2="1000" y2="130" /><line x1="40" y1="180" x2="1000" y2="180" />
              </g>
              <g fontFamily="var(--font-mono)" fontSize="11" fill="#4F4F68">
                <text x="52" y="205">2021</text><text x="290" y="205">2022</text><text x="528" y="205">2023</text><text x="766" y="205">2024</text><text x="940" y="205">2026</text>
              </g>
              <defs>
                <linearGradient id="nm-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4945FF" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#4945FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M52 178 C 250 172, 380 150, 528 120 S 800 56, 968 30 L968 180 L52 180 Z" fill="url(#nm-area)" opacity="0.5" />
              <path d="M52 178 C 250 172, 380 150, 528 120 S 800 56, 968 30" fill="none" stroke="#4945FF" strokeWidth="2.6" strokeLinecap="round" className="nm-exposure-line" pathLength={1} />
              {/* signal packet rising along the exposure curve */}
              <circle r="4" fill="#4945FF">
                <animateMotion dur="3.6s" begin="0.5s" repeatCount="indefinite" path="M52 178 C 250 172, 380 150, 528 120 S 800 56, 968 30" />
                <animate attributeName="opacity" dur="3.6s" begin="0.5s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.92;1" />
              </circle>
              <circle cx="968" cy="30" r="5.5" fill="#4945FF" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
              <circle cx="968" cy="30" r="11" fill="none" stroke="#4945FF" strokeWidth="1.4">
                <animate attributeName="r" values="7;20" dur="2.6s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.6;0" dur="2.6s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* ============ THREAD ============ */}
      <section className="nm-thread">
        <div className="nm-thread-grid-bg" />
        <div className="nm-thread-inner">
          <div className="nm-thread-prism">
            <Prism size={120} />
          </div>
          <p className="nm-thread-p">Secure the data everywhere it lives — <span className="nm-hl-violet-550">at rest, in motion, and in use</span>, whether touched by humans or by AI — as the trusted foundation on which an organisation can adopt AI <span className="nm-hl-violet-550">without fear</span>.</p>
        </div>
      </section>

      {/* ============ CLOSING ============ */}
      <section className="nm-closing">
        <div className="nm-closing-inner">
          <h2 className="nm-closing-h2">The first conversation is confidential — and it <span className="nm-hl-violet-560">costs nothing</span>.</h2>
          <p className="nm-closing-p">If you are responsible for defending something that matters — a system, an institution, a name — let us talk about what others may have missed.</p>
          <div className="nm-closing-ctas">
            <Link href="/contact" className="nm-closing-primary">Request a briefing</Link>
            <Link href="/company/research" className="nm-closing-ghost">Read our research</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
