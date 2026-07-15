import { type CSSProperties } from "react";

const mono = "var(--font-mono)";
const sans = "var(--font-sans)";
const serif = "var(--font-display)";

// ── Product hero diagrams (rendered centered, below the hero text) ──
export function ProductDiagram({ slug }: { slug: string }) {
  switch (slug) {
    case "client-portal":
      return (
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", padding: "0 32px 70px" }}>
          <figure style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", margin: 0, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(226,232,241,0.16)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" } as CSSProperties}>
            <div style={{ background: "#FFFFFF", padding: "13px 18px", display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid #E2E8F1" }}>
              <span style={{ display: "flex", gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
              </span>
              <span style={{ flex: 1, textAlign: "center", fontFamily: mono, fontSize: 12, color: "#94a3b8" }}>app.namlameis.com / portal</span>
            </div>
            <div className="nm-portal-body" style={{ background: "#FFFFFF", padding: 28, display: "grid", gridTemplateColumns: "1fr 240px", gap: 22 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
                  <span style={{ width: 46, height: 46, borderRadius: 11, background: "rgba(138,57,192,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A39C0" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>
                  </span>
                  <div>
                    <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 19, color: "#0B0420" }}>Acme Financial</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>Engagement #2026-014 · Active</div>
                  </div>
                </div>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.14em", color: "#94a3b8", marginBottom: 10 }}>ENGAGEMENT PROGRESS</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
                  <div style={{ flex: 1, height: 10, borderRadius: 6, background: "#EEF2F7", overflow: "hidden" }}>
                    <div style={{ position: "relative", height: "100%", borderRadius: 6, background: "#8A39C0", width: "70%", overflow: "hidden", animation: "nm-fill 1.4s ease both", animationTimeline: "view()", animationRange: "entry 0% cover 40%" } as CSSProperties}>
                      <span style={{ position: "absolute", inset: 0, width: "40%", background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)", animation: "nm-shimmer 3.4s linear infinite" }} />
                    </div>
                  </div>
                  <span style={{ fontFamily: sans, fontWeight: 700, fontSize: 16, color: "#8A39C0" }}>70%</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
                  <div style={{ border: "1px solid #E2E8F1", borderRadius: 10, padding: 16, textAlign: "center" }}><div style={{ fontSize: 15, color: "#0B0420", fontWeight: 600 }}>12 findings</div></div>
                  <div style={{ border: "1px solid #E2E8F1", borderRadius: 10, padding: 16, textAlign: "center" }}><div style={{ fontSize: 15, color: "#0B0420", fontWeight: 600 }}>4 critical</div></div>
                  <div style={{ border: "1px solid #E2E8F1", borderRadius: 10, padding: 16, textAlign: "center" }}><div style={{ fontSize: 13.5, color: "#0B0420", fontWeight: 600 }}>remediation tracked</div></div>
                </div>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 12, padding: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                {[["Scope", false], ["Findings", true], ["Remediation", false], ["Reports", false]].map(([label, active]) => (
                  <div key={label as string} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 4px" }}>
                    <span style={{ fontSize: 15, color: active ? "#8A39C0" : "#475569", fontWeight: active ? 600 : 400 }}>{label as string}</span>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: active ? "#8A39C0" : "#cbd5e1" }} />
                  </div>
                ))}
              </div>
            </div>
          </figure>
        </div>
      );
    case "request-intake":
      return (
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", padding: "0 32px 70px" }}>
          <figure style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", margin: 0, border: "1px solid rgba(226,232,241,0.14)", borderRadius: 18, background: "linear-gradient(160deg,rgba(13,28,48,0.5),rgba(8,18,30,0.78))", padding: "40px 36px" } as CSSProperties}>
            <div style={{ textAlign: "center", fontFamily: serif, fontStyle: "italic", fontSize: 20, color: "rgba(226,232,241,0.7)", marginBottom: 36 }}>From submission to the right desk, automatically</div>
            <svg viewBox="0 0 900 150" style={{ width: "100%", display: "block" }}>
              <line x1="100" y1="60" x2="800" y2="60" stroke="rgba(226,232,241,0.18)" strokeWidth="1.5" />
              <path d="M250 60 H300 M470 60 H520 M690 60 H740" fill="none" stroke="#8A39C0" strokeWidth="1.5" strokeDasharray="6 5" style={{ animation: "nm-flow .6s linear infinite" }} />
              <circle r="4" fill="#A78BFA">
                <animateMotion dur="4.2s" begin="0.4s" repeatCount="indefinite" path="M140 60 H760" />
                <animate attributeName="opacity" dur="4.2s" begin="0.4s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.08;0.5;0.92;1" />
              </circle>
              <g>
                <g><circle cx="100" cy="60" r="40" fill="#120428" stroke="#8A39C0" strokeWidth="2" /><g transform="translate(86,46)" stroke="#8A39C0" strokeWidth="1.6" fill="none"><rect x="0" y="0" width="20" height="26" rx="3" /><path d="M5 8h10M5 14h10M5 20h6" /></g><text x="100" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="16" fontWeight="600">Request</text><text x="100" y="140" textAnchor="middle" fill="rgba(226,232,241,0.5)" fontFamily={sans} fontSize="12">Client submits</text></g>
                <g><circle cx="370" cy="60" r="40" fill="#120428" stroke="#3B1A8C" strokeWidth="2" /><g transform="translate(356,46)" stroke="#8A39C0" strokeWidth="1.6" fill="none"><rect x="0" y="0" width="20" height="26" rx="3" /><path d="M5 8h10M5 14h10M5 20h6" /></g><text x="370" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="16" fontWeight="600">Validate</text><text x="370" y="140" textAnchor="middle" fill="rgba(226,232,241,0.5)" fontFamily={sans} fontSize="12">Server-side check</text></g>
                <g><circle cx="590" cy="60" r="40" fill="#120428" stroke="#6D28D9" strokeWidth="2" /><g transform="translate(576,46)" stroke="#6D28D9" strokeWidth="1.6" fill="none"><rect x="0" y="0" width="20" height="26" rx="3" /><path d="M5 8h10M5 14h10M5 20h6" /></g><text x="590" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="16" fontWeight="600">Triage</text><text x="590" y="140" textAnchor="middle" fill="rgba(226,232,241,0.5)" fontFamily={sans} fontSize="12">Tagged &amp; scored</text></g>
                <g><circle cx="800" cy="60" r="40" fill="rgba(138,57,192,0.14)" stroke="#8A39C0" strokeWidth="2" /><g transform="translate(786,46)" stroke="#8A39C0" strokeWidth="1.6" fill="none"><rect x="0" y="0" width="20" height="26" rx="3" /><path d="M5 8h10M5 14h10M5 20h6" /></g><circle cx="800" cy="60" r="40" fill="none" stroke="#8A39C0" strokeWidth="2" opacity="0.5" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} /><text x="800" y="118" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="16" fontWeight="600">Routed</text><text x="800" y="140" textAnchor="middle" fill="rgba(226,232,241,0.5)" fontFamily={sans} fontSize="12">To the right expert</text></g>
              </g>
            </svg>
          </figure>
        </div>
      );
    case "findings-dashboard":
      return (
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", padding: "0 32px 70px" }}>
          <figure style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", margin: 0, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(226,232,241,0.16)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" } as CSSProperties}>
            <div style={{ background: "#FFFFFF", padding: "13px 18px", display: "flex", alignItems: "center", gap: 14, borderBottom: "1px solid #E2E8F1" }}>
              <span style={{ display: "flex", gap: 7 }}>
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
                <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#cbd5e1" }} />
              </span>
              <span style={{ flex: 1, textAlign: "center", fontFamily: mono, fontSize: 12, color: "#94a3b8" }}>portal / findings</span>
            </div>
            <div className="nm-portal-body" style={{ background: "#FFFFFF", padding: 30, display: "grid", gridTemplateColumns: "1fr 280px", gap: 30, alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.14em", color: "#94a3b8", marginBottom: 20 }}>BY SEVERITY</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[["Critical", "30%", "#8A39C0", 4], ["High", "52%", "#8A39C0", 7], ["Medium", "78%", "#6D28D9", 11], ["Low", "44%", "#cbd5e1", 6]].map(([name, w, color, n]) => (
                    <div key={name as string} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ width: 64, fontSize: 14, color: "#475569" }}>{name as string}</span>
                      <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ height: 18, width: w as string, borderRadius: 5, background: color as string, transformOrigin: "left", animation: "nm-bar .9s ease both", animationTimeline: "view()", animationRange: "entry 0% cover 44%" } as CSSProperties} />
                        <span style={{ fontWeight: 700, fontSize: 14, color: "#0B0420" }}>{n as number}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 120 120" style={{ width: 160, height: 160 }}>
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#EEF2F7" strokeWidth="11" />
                  <circle cx="60" cy="60" r="4" fill="none" stroke="#8A39C0" strokeWidth="1.2">
                    <animate attributeName="r" values="4;14" dur="3.2s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="0.55;0" dur="3.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#8A39C0" strokeWidth="11" strokeLinecap="round" strokeDasharray="339" strokeDashoffset="129" transform="rotate(-90 60 60)" style={{ animation: "nm-ring 1.4s ease both", animationTimeline: "view()", animationRange: "entry 0% cover 46%" } as CSSProperties} />
                  <text x="60" y="58" textAnchor="middle" fill="#0B0420" fontFamily={sans} fontSize="26" fontWeight="700">62%</text>
                  <text x="60" y="76" textAnchor="middle" fill="#64748b" fontFamily={sans} fontSize="10">remediated</text>
                </svg>
              </div>
            </div>
          </figure>
        </div>
      );
    case "trust-center":
      return (
        <div style={{ position: "relative", maxWidth: 920, margin: "0 auto", padding: "0 32px 70px" }}>
          <div className="nm-trust-grid" style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 } as CSSProperties}>
            {[
              { t: "Data Protection", d: "Encryption in transit & at rest", tint: "rgba(138,57,192,0.14)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A39C0" strokeWidth="1.6"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg> },
              { t: "Access Control", d: "Least privilege, full audit", tint: "rgba(109,40,217,0.14)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.6"><circle cx="12" cy="8" r="3.4" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" strokeLinecap="round" /></svg> },
              { t: "Compliance", d: "GDPR · Austrian DSG aligned", tint: "rgba(138,57,192,0.14)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A39C0" strokeWidth="1.6"><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" strokeLinecap="round" /></svg> },
              { t: "Disclosure", d: "Responsible-disclosure channel", tint: "rgba(109,40,217,0.14)", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.6"><path d="M7 3h7l5 5v13H7z" strokeLinejoin="round" /><path d="M14 3v5h5M10 13h6M10 17h4" strokeLinecap="round" /></svg> },
            ].map((c) => (
              <div key={c.t} style={{ background: "rgba(247,249,252,0.04)", border: "1px solid rgba(226,232,241,0.14)", borderRadius: 16, padding: 26, display: "flex", alignItems: "flex-start", gap: 16, position: "relative" }}>
                <span style={{ width: 46, height: 46, borderRadius: 11, background: c.tint, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 17, color: "#FFFFFF", marginBottom: 5 }}>{c.t}</div>
                  <div style={{ fontSize: 13.5, color: "rgba(226,232,241,0.6)", lineHeight: 1.5 }}>{c.d}</div>
                </div>
                <span style={{ position: "absolute", top: 20, right: 20, width: 9, height: 9, borderRadius: "50%", background: "#6D28D9", animation: "nm-breathe 3s ease-in-out infinite" }} />
              </div>
            ))}
          </div>
        </div>
      );
    case "briefing-hub":
      return (
        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto", padding: "0 32px 70px" }}>
          <div className="nm-brief-grid" style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 } as CSSProperties}>
            <div style={{ background: "#0B0420", border: "1px solid rgba(138,57,192,0.3)", borderRadius: 16, padding: 34, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(138,57,192,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(138,57,192,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px", animation: "nm-drift 24s linear infinite", opacity: 0.6 }} />
              <span style={{ position: "relative", fontFamily: mono, fontSize: 10, letterSpacing: "0.18em", color: "#8A39C0", marginBottom: 16 }}>FEATURED RESEARCH</span>
              <span style={{ position: "relative", fontFamily: serif, fontSize: 28, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 12 }}>The Unseen Attack Surface</span>
              <span style={{ position: "relative", fontSize: 14, color: "rgba(226,232,241,0.6)", marginBottom: 24 }}>Why AI-app flaws are invisible to every scanner</span>
              <a href="/company/research" style={{ position: "relative", alignSelf: "flex-start", padding: "11px 26px", background: "linear-gradient(180deg,#9B5DE5,#7C3AED)", color: "#FFFFFF", fontSize: 14, fontWeight: 600, textDecoration: "none", borderRadius: 30 }}>Read</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[["Compliance", "DORA in practice"], ["Research", "Adversarial testing"], ["Briefing", "AI threats this month"], ["Perspective", "Narrative as attack surface"]].map(([tag, title]) => (
                <a key={title as string} href="/company/research" style={{ textDecoration: "none", background: "rgba(247,249,252,0.04)", border: "1px solid rgba(226,232,241,0.12)", borderRadius: 13, padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: mono, fontSize: 9.5, letterSpacing: "0.06em", color: "#8A39C0", background: "rgba(138,57,192,0.12)", borderRadius: 5, padding: "3px 8px", alignSelf: "flex-start", marginBottom: 14 }}>{tag as string}</span>
                  <span style={{ fontSize: 14.5, fontWeight: 550, color: "#FFFFFF", lineHeight: 1.3, marginBottom: 12 }}>{title as string}</span>
                  <span style={{ fontFamily: mono, fontSize: 11, color: "#8A39C0" }}>Read →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    case "data-vault":
      return (
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "0 32px 64px" }}>
          <figure style={{ animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 26%", margin: 0 } as CSSProperties}>
            <svg viewBox="0 0 720 340" style={{ width: "100%", display: "block" }}>
              <g fontFamily={sans} fontSize="15">
                <g><circle cx="150" cy="100" r="7" fill="#8A39C0" /><text x="135" y="105" textAnchor="end" fill="rgba(226,232,241,0.85)">Encrypted at rest</text><line x1="157" y1="104" x2="300" y2="150" stroke="#8A39C0" strokeWidth="1.4" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }} /></g>
                <g><circle cx="570" cy="100" r="7" fill="#6D28D9" /><text x="585" y="105" fill="rgba(226,232,241,0.85)">Encrypted in transit</text><line x1="563" y1="104" x2="420" y2="150" stroke="#8A39C0" strokeWidth="1.4" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }} /></g>
                <g><circle cx="150" cy="250" r="7" fill="#8A39C0" /><text x="135" y="255" textAnchor="end" fill="rgba(226,232,241,0.85)">Least-privilege access</text><line x1="157" y1="248" x2="300" y2="195" stroke="#8A39C0" strokeWidth="1.4" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }} /></g>
                <g><circle cx="570" cy="250" r="7" fill="#8A39C0" /><text x="585" y="255" fill="rgba(226,232,241,0.85)">Full audit trail</text><line x1="563" y1="248" x2="420" y2="195" stroke="#8A39C0" strokeWidth="1.4" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }} /></g>
              </g>
              <circle cx="360" cy="172" r="76" fill="#0B0420" stroke="rgba(226,232,241,0.14)" strokeWidth="1.5" />
              <circle cx="360" cy="172" r="76" fill="none" stroke="#8A39C0" strokeWidth="1.5" opacity="0.45" style={{ transformOrigin: "360px 172px", animation: "nm-pulse 3s ease-in-out infinite" }} />
              <circle cx="360" cy="172" r="66" fill="none" stroke="#8A39C0" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="201 414" transform="rotate(-90 360 172)" style={{ animation: "nm-close 1.6s ease both", animationTimeline: "view()", animationRange: "entry 0% cover 40%" } as CSSProperties} />
              <g transform="translate(344,156)" stroke="#FFFFFF" strokeWidth="1.8" fill="none"><rect x="0" y="0" width="32" height="32" rx="8" /><circle cx="16" cy="16" r="6" /><path d="M16 22v6" strokeLinecap="round" /></g>
            </svg>
            <figcaption style={{ textAlign: "center", fontSize: 13.5, color: "rgba(226,232,241,0.5)", marginTop: 8, fontFamily: mono, letterSpacing: "0.04em" }}>Encryption · access governance · audit logging · time-boxed sharing</figcaption>
          </figure>
        </div>
      );
    default:
      return null;
  }
}

// ── Service hero diagrams (rendered in the right column of a split hero) ──
const svcWrap: CSSProperties = { border: "1px solid rgba(226,232,241,0.14)", borderRadius: 18, background: "linear-gradient(160deg,rgba(13,28,48,0.55),rgba(8,18,30,0.8))", padding: 26, boxShadow: "0 30px 80px rgba(0,0,0,0.45)" };
const svcFig = { animation: "nm-rise 1s both", animationTimeline: "view()", animationRange: "entry 0% cover 30%", margin: "0 auto", maxWidth: 560 } as CSSProperties;
const svcLabel: CSSProperties = { fontFamily: mono, fontSize: 10, letterSpacing: "0.2em", color: "#8A39C0", marginBottom: 18 };

export function ServiceDiagram({ slug }: { slug: string }) {
  switch (slug) {
    case "data-discovery":
      return (
        <figure style={svcFig}>
          <div style={svcWrap}>
            <div style={{ ...svcLabel, marginBottom: 20 }}>DISCOVER ACROSS EVERY SOURCE · CLASSIFY BY TRUE SENSITIVITY</div>
            <svg viewBox="0 0 440 300" style={{ width: "100%", display: "block" }}>
              <g fontFamily={mono} fontSize="10">
                <rect x="10" y="40" width="92" height="30" rx="7" fill="rgba(247,249,252,0.04)" stroke="rgba(226,232,241,0.2)" /><text x="56" y="59" textAnchor="middle" fill="#FFFFFF">Cloud</text>
                <rect x="10" y="92" width="92" height="30" rx="7" fill="rgba(247,249,252,0.04)" stroke="rgba(226,232,241,0.2)" /><text x="56" y="111" textAnchor="middle" fill="#FFFFFF">SaaS</text>
                <rect x="10" y="144" width="92" height="30" rx="7" fill="rgba(247,249,252,0.04)" stroke="rgba(226,232,241,0.2)" /><text x="56" y="163" textAnchor="middle" fill="#FFFFFF">On-prem</text>
                <rect x="10" y="196" width="92" height="30" rx="7" fill="rgba(247,249,252,0.04)" stroke="rgba(226,232,241,0.2)" /><text x="56" y="215" textAnchor="middle" fill="#FFFFFF">Email</text>
              </g>
              <g stroke="#8A39C0" strokeWidth="1" fill="none" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }}><path d="M102 55 L186 130" /><path d="M102 107 L186 138" /><path d="M102 159 L186 146" /><path d="M102 211 L186 154" /></g>
              <circle cx="220" cy="142" r="34" fill="rgba(138,57,192,0.12)" stroke="#8A39C0" strokeWidth="1.4" />
              <circle cx="220" cy="142" r="34" fill="none" stroke="#8A39C0" strokeWidth="1.4" opacity="0.5" style={{ transformOrigin: "220px 142px", animation: "nm-pulse 2.8s ease-in-out infinite" }} />
              <g transform="translate(210,132)" stroke="#8A39C0" strokeWidth="1.8" fill="none"><circle cx="7" cy="7" r="7" /><path d="M12 12l5 5" strokeLinecap="round" /></g>
              <text x="220" y="196" textAnchor="middle" fill="#8A39C0" fontFamily={mono} fontSize="9.5">Classify</text>
              <g stroke="#8A39C0" strokeWidth="1" fill="none" strokeDasharray="5 5" style={{ animation: "nm-flow .7s linear infinite" }}><path d="M254 130 L320 70" /><path d="M254 138 L320 112" /><path d="M254 150 L320 154" /><path d="M254 158 L320 196" /></g>
              <circle r="3" fill="#A78BFA">
                <animateMotion dur="3.2s" begin="0.3s" repeatCount="indefinite" path="M254 150 L320 154" />
                <animate attributeName="opacity" dur="3.2s" begin="0.3s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.1;0.5;0.9;1" />
              </circle>
              <g fontFamily={mono} fontSize="9.5">
                <rect x="320" y="56" width="110" height="28" rx="6" fill="none" stroke="#8A39C0" /><circle cx="336" cy="70" r="4" fill="#8A39C0" /><text x="348" y="73" fill="#FFFFFF">Restricted</text>
                <rect x="320" y="98" width="110" height="28" rx="6" fill="none" stroke="#8A39C0" /><circle cx="336" cy="112" r="4" fill="#8A39C0" /><text x="348" y="115" fill="#FFFFFF">Confidential</text>
                <rect x="320" y="140" width="110" height="28" rx="6" fill="none" stroke="#6D28D9" /><circle cx="336" cy="154" r="4" fill="#6D28D9" /><text x="348" y="157" fill="#FFFFFF">Internal</text>
                <rect x="320" y="182" width="110" height="28" rx="6" fill="none" stroke="rgba(226,232,241,0.3)" /><circle cx="336" cy="196" r="4" fill="rgba(226,232,241,0.5)" /><text x="348" y="199" fill="rgba(226,232,241,0.7)">Public</text>
              </g>
            </svg>
          </div>
        </figure>
      );
    case "access-review":
      return (
        <figure style={svcFig}>
          <div style={svcWrap}>
            <div style={{ ...svcLabel, marginBottom: 20 }}>EACH IDENTITY MAPPED TO THE DATA IT CAN REACH</div>
            <svg viewBox="0 0 440 300" style={{ width: "100%", display: "block" }}>
              <g fontFamily={sans}>
                {[["User · Alice", "authorised", 30, "#6D28D9", false], ["User · Bob", "authorised", 92, "#6D28D9", false], ["Service acct", "authorised", 154, "#6D28D9", false], ["AI agent", "EXCESS ACCESS", 216, "#8A39C0", true]].map(([name, sub, y, c, warn]) => (
                  <g key={name as string} transform={`translate(8,${y})`}>
                    <rect width="34" height="34" rx="9" fill={(warn ? "rgba(138,57,192,0.18)" : "rgba(109,40,217,0.14)")} />
                    <g transform="translate(11,9)" stroke={c as string} strokeWidth="1.4" fill="none"><circle cx="6" cy="4" r="3.2" /><path d="M0.5 16a5.5 5.5 0 0 1 11 0" strokeLinecap="round" /></g>
                    <text x="44" y="15" fill="#FFFFFF" fontSize="12" fontWeight="600">{name as string}</text>
                    <text x="44" y="29" fill={(warn ? "#8A39C0" : "rgba(226,232,241,0.5)")} fontSize="10" fontWeight={warn ? 600 : 400}>{sub as string}</text>
                    {warn ? <circle cx="17" cy="17" r="17" fill="none" stroke="#8A39C0" strokeWidth="1.2" style={{ transformOrigin: "17px 17px", animation: "nm-pulse 2.4s ease-in-out infinite" }} /> : null}
                  </g>
                ))}
              </g>
              <rect x="288" y="86" width="146" height="128" rx="12" fill="rgba(247,249,252,0.03)" stroke="rgba(226,232,241,0.16)" />
              <text x="304" y="110" fill="rgba(226,232,241,0.5)" fontFamily={mono} fontSize="9">SENSITIVE DATA</text>
              <rect x="304" y="122" width="114" height="34" rx="7" fill="rgba(138,57,192,0.12)" stroke="#8A39C0" /><text x="361" y="143" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="12" fontWeight="600">Customer records</text>
              <rect x="304" y="164" width="114" height="34" rx="7" fill="rgba(138,57,192,0.12)" stroke="#8A39C0" /><text x="361" y="185" textAnchor="middle" fill="#FFFFFF" fontFamily={sans} fontSize="12" fontWeight="600">Financial data</text>
              <circle cx="361" cy="181" r="10" fill="none" stroke="#8A39C0" strokeWidth="1.2">
                <animate attributeName="r" values="10;30" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <g fill="none">
                <path d="M150 47 L286 138" stroke="rgba(226,232,241,0.22)" strokeWidth="1.2" />
                <path d="M150 109 L286 142" stroke="rgba(226,232,241,0.22)" strokeWidth="1.2" />
                <path d="M150 171 L286 175" stroke="rgba(226,232,241,0.22)" strokeWidth="1.2" />
                <path d="M150 233 L286 180" stroke="#8A39C0" strokeWidth="1.8" strokeDasharray="6 5" style={{ animation: "nm-flow 1.3s linear infinite" }} />
              </g>
              <path d="M280 175 l8 5 l-8 5" fill="none" stroke="#8A39C0" strokeWidth="1.6" />
            </svg>
          </div>
        </figure>
      );
    case "shadow-ai":
      return (
        <figure style={svcFig}>
          <div style={svcWrap}>
            <div style={svcLabel}>SANCTIONED VERIFIED · UNSANCTIONED FLAGGED · LEAK TRACED</div>
            <svg viewBox="0 0 440 290" style={{ width: "100%", display: "block" }}>
              <rect x="8" y="40" width="250" height="210" rx="12" fill="rgba(247,249,252,0.03)" stroke="rgba(226,232,241,0.14)" />
              <text x="26" y="66" fill="rgba(226,232,241,0.45)" fontFamily={mono} fontSize="9">YOUR ORGANISATION</text>
              <g fontFamily={sans} fontSize="12">
                <rect x="26" y="78" width="214" height="32" rx="7" fill="rgba(109,40,217,0.1)" stroke="#6D28D9" /><text x="42" y="98" fill="#FFFFFF">Sanctioned LLM</text><text x="224" y="99" textAnchor="end" fill="#6D28D9" fontSize="14">✓</text>
                <rect x="26" y="118" width="214" height="32" rx="7" fill="rgba(109,40,217,0.1)" stroke="#6D28D9" /><text x="42" y="138" fill="#FFFFFF">Copilot</text><text x="224" y="139" textAnchor="end" fill="#6D28D9" fontSize="14">✓</text>
                <rect x="26" y="158" width="214" height="32" rx="7" fill="rgba(138,57,192,0.1)" stroke="#8A39C0" /><text x="42" y="178" fill="#FFFFFF">Public ChatGPT</text><text x="224" y="179" textAnchor="end" fill="#8A39C0" fontSize="14" fontWeight="700">!</text>
                <rect x="26" y="198" width="214" height="32" rx="7" fill="rgba(138,57,192,0.1)" stroke="#8A39C0" /><text x="42" y="218" fill="#FFFFFF">Unknown tool</text><text x="224" y="219" textAnchor="end" fill="#8A39C0" fontSize="14" fontWeight="700">!</text>
              </g>
              <g fill="none" stroke="#8A39C0" strokeWidth="1.8" strokeDasharray="6 5">
                <path d="M258 174 L338 132" style={{ animation: "nm-flow 1.3s linear infinite" }} />
                <path d="M258 214 L338 152" style={{ animation: "nm-flow 1.3s linear infinite" }} />
              </g>
              <path d="M332 130 l8 2 l-5 7" fill="none" stroke="#8A39C0" strokeWidth="1.6" />
              <circle cx="360" cy="142" r="30" fill="rgba(138,57,192,0.12)" stroke="#8A39C0" strokeWidth="1.4" />
              <circle cx="360" cy="142" r="30" fill="none" stroke="#8A39C0" strokeWidth="1.4" opacity="0.5" style={{ transformOrigin: "360px 142px", animation: "nm-pulse 2.6s ease-in-out infinite" }} />
              <circle cx="360" cy="142" r="30" fill="none" stroke="#8A39C0" strokeWidth="1.2">
                <animate attributeName="r" values="30;46" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.45;0" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <path d="M348 142 h24" stroke="#8A39C0" strokeWidth="2.4" strokeLinecap="round" />
              <text x="360" y="192" textAnchor="middle" fill="#8A39C0" fontFamily={mono} fontSize="8.5">leak</text>
            </svg>
          </div>
        </figure>
      );
    case "dlp-tuning":
      return (
        <figure style={svcFig}>
          <div style={svcWrap}>
            <div style={svcLabel}>THE SAME TOOLING · BEFORE &amp; AFTER</div>
            <svg viewBox="0 0 440 280" style={{ width: "100%", display: "block" }}>
              <text x="14" y="28" fill="rgba(226,232,241,0.4)" fontFamily={mono} fontSize="9">BEFORE</text>
              <g fill="rgba(226,232,241,0.28)" style={{ animation: "nm-twinkle 3s ease-in-out infinite" }}>
                <circle cx="30" cy="70" r="3" /><circle cx="55" cy="50" r="2.5" /><circle cx="75" cy="95" r="3" /><circle cx="48" cy="120" r="2.5" /><circle cx="92" cy="62" r="2.5" /><circle cx="110" cy="110" r="3" /><circle cx="70" cy="150" r="2.5" /><circle cx="40" cy="175" r="3" /><circle cx="100" cy="160" r="2.5" /><circle cx="125" cy="85" r="2.5" /><circle cx="135" cy="140" r="3" /><circle cx="60" cy="205" r="2.5" /><circle cx="95" cy="200" r="2.5" /><circle cx="120" cy="180" r="2.5" /><circle cx="150" cy="115" r="2.5" /><circle cx="32" cy="100" r="2" /><circle cx="85" cy="130" r="2" />
              </g>
              <g fill="#8A39C0" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }}><circle cx="62" cy="80" r="3.2" /><circle cx="105" cy="135" r="3.2" /><circle cx="78" cy="185" r="3.2" /></g>
              <text x="220" y="125" textAnchor="middle" fill="#8A39C0" fontFamily={mono} fontSize="11" fontWeight="600">tune</text>
              <path d="M180 140 H262" stroke="#8A39C0" strokeWidth="1.6" /><path d="M262 140 l-7 -4 v8 z" fill="#8A39C0" />
              <text x="300" y="28" fill="rgba(226,232,241,0.4)" fontFamily={mono} fontSize="9">AFTER</text>
              <rect x="290" y="68" width="142" height="150" rx="12" fill="rgba(247,249,252,0.03)" stroke="rgba(226,232,241,0.14)" />
              <g fontFamily={sans} fontSize="12.5">
                <circle cx="312" cy="100" r="5" fill="#8A39C0" /><text x="326" y="105" fill="#FFFFFF">Real exfiltration</text>
                <circle cx="312" cy="143" r="5" fill="#8A39C0" /><text x="326" y="148" fill="#FFFFFF">Policy violation</text>
                <circle cx="312" cy="186" r="5" fill="#8A39C0" /><text x="326" y="191" fill="#FFFFFF">Unusual access</text>
              </g>
            </svg>
          </div>
        </figure>
      );
    case "managed-monitoring":
      return (
        <figure style={{ ...svcFig, maxWidth: 520 }}>
          <div style={svcWrap}>
            <div style={{ ...svcLabel, marginBottom: 8 }}>A CONTINUOUS LOOP · RUN BY EXPERTS</div>
            <svg viewBox="0 0 360 300" style={{ width: "100%", display: "block" }}>
              <circle cx="180" cy="150" r="100" fill="none" stroke="rgba(226,232,241,0.16)" strokeWidth="1.5" />
              <g style={{ transformOrigin: "180px 150px", animation: "nm-orbit 16s linear infinite" }}>
                <path d="M180 50 A100 100 0 0 1 280 150" fill="none" stroke="#8A39C0" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
              </g>
              <g fontFamily={sans} fontSize="14" fontWeight="600">
                <g><circle cx="180" cy="50" r="34" fill="#120428" stroke="#8A39C0" strokeWidth="2" /><text x="180" y="55" textAnchor="middle" fill="#FFFFFF">Assess</text></g>
                <g><circle cx="280" cy="150" r="34" fill="#120428" stroke="#6D28D9" strokeWidth="2" /><text x="280" y="155" textAnchor="middle" fill="#FFFFFF">Reduce</text></g>
                <g><circle cx="180" cy="250" r="34" fill="#120428" stroke="#8A39C0" strokeWidth="2" /><text x="180" y="255" textAnchor="middle" fill="#FFFFFF">Monitor</text></g>
                <g><circle cx="80" cy="150" r="34" fill="#120428" stroke="#8A39C0" strokeWidth="2" /><text x="80" y="155" textAnchor="middle" fill="#FFFFFF">Report</text></g>
              </g>
              <circle cx="180" cy="150" r="6" fill="#8A39C0" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
            </svg>
          </div>
        </figure>
      );
    default:
      return null;
  }
}
