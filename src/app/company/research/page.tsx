import type { Metadata } from "next";
import Link from "next/link";
import { rise, mono, serif, sans } from "@/components/inner";
import { SuiteIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Field notes from the seam where code, intelligence, and narrative meet — written for practitioners, not for search engines.",
};

const streams = [
  { name: "Technical research & disclosures", desc: "Original analysis and, when we find them, responsibly-disclosed vulnerabilities. Our first paper examines why the most consequential AI-application vulnerabilities are invisible to conventional scanners.", tint: "rgba(22,185,166,0.12)", iconKey: "scan", color: "#16B9A6" },
  { name: "Compliance guides", desc: "Practical, defender-focused readings of DORA, NIS2, and the EU AI Act, for the institutions that must live by them.", tint: "rgba(22,185,166,0.12)", iconKey: "doc", color: "#16B9A6" },
  { name: "Threat & AI-security briefings", desc: "A recurring, sharp analysis of the emerging threats at the frontier of artificial intelligence.", tint: "rgba(31,169,143,0.12)", iconKey: "dlp", color: "#1FA98F" },
];

export default function ResearchPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#13294a 0%,#0B1A2E 52%,#081320 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "86px 32px 64px", textAlign: "center" }}>
          <div style={{ ...rise(".7s", "entry 0% cover 18%"), fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#16B9A6", marginBottom: 26 }}>RESEARCH</div>
          <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: 54, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 22px" }}>Credibility is not claimed. It is <span style={{ fontStyle: "italic", color: "#16B9A6" }}>published</span>.</h1>
          <p style={{ ...rise(".85s", "entry 0% cover 28%"), fontSize: 18, lineHeight: 1.7, color: "rgba(226,232,241,0.72)", maxWidth: 660, margin: "0 auto" }}>Field notes from the seam where code, intelligence, and narrative meet — written for practitioners, not for search engines.</p>
        </div>
        {/* FEATURED */}
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "0 32px 72px" }}>
          <Link href="/company/research" className="nm-ghost-dark nm-research-feature" style={{ ...rise("1s", "entry 0% cover 30%"), textDecoration: "none", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", border: "1px solid rgba(226,232,241,0.16)", borderRadius: 20, overflow: "hidden", background: "linear-gradient(160deg,rgba(13,28,48,0.6),rgba(8,18,30,0.85))", boxShadow: "0 30px 80px rgba(0,0,0,0.45)" }}>
            <div style={{ padding: "44px 40px" }}>
              <span style={{ display: "inline-block", fontFamily: mono, fontSize: 10.5, letterSpacing: "0.18em", color: "#16B9A6", border: "1px solid rgba(22,185,166,0.4)", borderRadius: 20, padding: "5px 12px", marginBottom: 24 }}>FEATURED · FIRST PAPER</span>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 32, lineHeight: 1.16, color: "#FFFFFF", margin: "0 0 16px" }}>The Unseen Attack Surface</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.66, color: "rgba(226,232,241,0.66)", margin: "0 0 24px" }}>Why the most dangerous LLM-application vulnerabilities live in the model&apos;s interpretation of language — where no scanner can follow.</p>
              <span style={{ fontFamily: mono, fontSize: 12, color: "#16B9A6" }}>Read the paper →</span>
            </div>
            <div style={{ background: "#081320", position: "relative", overflow: "hidden", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.08) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
              <svg viewBox="0 0 260 220" style={{ width: "78%", position: "relative" }}>
                <rect x="30" y="40" width="200" height="50" rx="9" fill="rgba(22,185,166,0.1)" stroke="rgba(22,185,166,0.4)" />
                <text x="130" y="60" textAnchor="middle" fill="rgba(226,232,241,0.7)" fontFamily={mono} fontSize="9">&quot;ignore previous…&quot;</text>
                <text x="130" y="76" textAnchor="middle" fill="rgba(226,232,241,0.4)" fontFamily={mono} fontSize="8">scanner sees valid text</text>
                <path d="M130 90 V124" stroke="rgba(22,185,166,0.5)" strokeWidth="1.2" strokeDasharray="3 4" />
                <circle cx="130" cy="150" r="26" fill="rgba(22,185,166,0.12)" stroke="#16B9A6" />
                <circle cx="130" cy="150" r="8" fill="#16B9A6" style={{ animation: "nm-pulse 2.4s ease-in-out infinite" }} />
                <text x="130" y="196" textAnchor="middle" fill="#16B9A6" fontFamily={mono} fontSize="8.5">interpretation = the vuln</text>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* WHY WE PUBLISH */}
      <section style={{ background: "#FFFFFF", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.36fr 0.64fr", gap: 56 }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%") }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 16 }}>WHY WE PUBLISH</div>
              <div style={{ fontFamily: serif, fontSize: 26, lineHeight: 1.22, color: "#0A1424", letterSpacing: "-0.01em" }}>A security firm earns trust in exactly one durable way.</div>
            </div>
            <div>
              <p style={{ ...rise(".8s", "entry 0% cover 28%"), fontSize: 17, lineHeight: 1.78, color: "#475569", margin: "0 0 22px" }}>By demonstrating capability in the open, where it can be examined and tested. Our research is the engine of that trust. We publish original technical analysis, responsibly-disclosed findings, practical guidance on the regulations that shape our clients&apos; world, and recurring briefings on the threats we see forming on the horizon.</p>
              <p style={{ ...rise(".8s", "entry 0% cover 32%"), fontSize: 17, lineHeight: 1.78, color: "#475569", margin: 0 }}>Where we can prove something, we prove it; where we are still learning, we say so.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL FIND */}
      <section style={{ background: "#FFFFFF", padding: "96px 32px", borderTop: "1px solid #E2E8F1" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", margin: "0 0 40px" }}>WHAT YOU WILL FIND HERE</h2>
          <div className="nm-disc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {streams.map((s) => (
              <div key={s.name} className="nm-feature-card" style={{ ...rise(".8s", "entry 0% cover 30%"), background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 16, padding: 32 }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: s.tint, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}><SuiteIcon k={s.iconKey} color={s.color} /></div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 18, color: "#0A1424", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.64, color: "#64748b", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1A2E", padding: "84px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...rise(".85s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 400, fontSize: 34, lineHeight: 1.16, color: "#FFFFFF", margin: "0 0 26px" }}>Receive our briefings as they publish.</h2>
          <Link href="/contact" className="nm-cta-primary" style={{ ...rise(".85s", "entry 0% cover 34%"), display: "inline-block", padding: "15px 30px", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 10px 30px rgba(22,185,166,0.3)" }}>Subscribe to the briefing</Link>
        </div>
      </section>
    </div>
  );
}
