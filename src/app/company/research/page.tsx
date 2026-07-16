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
  { name: "Technical research & disclosures", desc: "Original analysis and, when we find them, responsibly-disclosed vulnerabilities. Our first paper examines why the most consequential AI-application vulnerabilities are invisible to conventional scanners.", tint: "rgba(140,65,204,0.12)", iconKey: "scan", color: "#8C41CC" },
  { name: "Compliance guides", desc: "Practical, defender-focused readings of DORA, NIS2, and the EU AI Act, for the institutions that must live by them.", tint: "rgba(140,65,204,0.12)", iconKey: "doc", color: "#8C41CC" },
  { name: "Threat & AI-security briefings", desc: "A recurring, sharp analysis of the emerging threats at the frontier of artificial intelligence.", tint: "rgba(124,53,184,0.12)", iconKey: "dlp", color: "#7C35B8" },
];

export default function ResearchPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#1E0B4E 0%,#120428 52%,#080214 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(52px, 13vw, 86px) clamp(20px, 5vw, 32px) clamp(35px, 10vw, 64px)", textAlign: "center" }}>
          <div style={{ ...rise(".7s", "entry 0% cover 18%"), fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#A5A2FF", marginBottom: 26 }}>RESEARCH</div>
          <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 6.4vw, 54px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 22px" }}>Credibility is not claimed. It is <span style={{ fontStyle: "italic", color: "#B77BEE" }}>published</span>.</h1>
          <p style={{ ...rise(".85s", "entry 0% cover 28%"), fontSize: "clamp(15.5px, 2.4vw, 18px)", lineHeight: 1.7, color: "rgba(200,200,220,0.72)", maxWidth: 660, margin: "0 auto" }}>Field notes from the seam where code, intelligence, and narrative meet — written for practitioners, not for search engines.</p>
        </div>
        {/* FEATURED */}
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(0px, 13vw, 0px) clamp(20px, 5vw, 32px) clamp(40px, 10vw, 72px)" }}>
          <Link href="/company/research" className="nm-ghost-dark nm-research-feature" style={{ ...rise("1s", "entry 0% cover 30%"), textDecoration: "none", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", border: "1px solid rgba(200,200,220,0.16)", borderRadius: 20, overflow: "hidden", background: "linear-gradient(160deg,rgba(30,11,78,0.6),rgba(18,4,40,0.85))", boxShadow: "var(--shadow-card)" }}>
            <div style={{ padding: "clamp(29px, 4vw, 44px) clamp(26px, 4vw, 40px)" }}>
              <span style={{ display: "inline-block", fontFamily: mono, fontSize: 10.5, letterSpacing: "0.18em", color: "#B77BEE", border: "1px solid rgba(140,65,204,0.4)", borderRadius: 20, padding: "5px 12px", marginBottom: 24 }}>FEATURED · FIRST PAPER</span>
              <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 32px)", lineHeight: 1.16, color: "#FFFFFF", margin: "0 0 16px" }}>The Unseen Attack Surface</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.66, color: "rgba(200,200,220,0.66)", margin: "0 0 24px" }}>Why the most dangerous LLM-application vulnerabilities live in the model&apos;s interpretation of language — where no scanner can follow.</p>
              <span style={{ fontFamily: mono, fontSize: 12, color: "#A5A2FF" }}>Read the paper →</span>
            </div>
            <div style={{ background: "#080214", position: "relative", overflow: "hidden", minHeight: 240, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.08) 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
              <svg viewBox="0 0 260 220" style={{ width: "78%", position: "relative" }}>
                <rect x="30" y="40" width="200" height="50" rx="9" fill="rgba(140,65,204,0.1)" stroke="rgba(140,65,204,0.4)" />
                <text x="130" y="60" textAnchor="middle" fill="rgba(200,200,220,0.7)" fontFamily={mono} fontSize="9">&quot;ignore previous…&quot;</text>
                <text x="130" y="76" textAnchor="middle" fill="rgba(200,200,220,0.75)" fontFamily={mono} fontSize="8">scanner sees valid text</text>
                <path d="M130 90 V124" stroke="rgba(140,65,204,0.5)" strokeWidth="1.2" strokeDasharray="3 4" />
                <circle r="2.6" fill="#B77BEE">
                  <animateMotion dur="3.4s" repeatCount="indefinite" path="M130 90 V124" />
                  <animate attributeName="opacity" dur="3.4s" repeatCount="indefinite" values="0;1;1;1;0" keyTimes="0;0.1;0.5;0.9;1" />
                </circle>
                <circle cx="130" cy="150" r="26" fill="rgba(140,65,204,0.12)" stroke="#8C41CC" />
                <circle cx="130" cy="150" r="26" fill="none" stroke="#8C41CC" strokeWidth="1.2">
                  <animate attributeName="r" values="26;40" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="130" cy="150" r="8" fill="#8C41CC" style={{ animation: "nm-pulse 2.4s ease-in-out infinite" }} />
                <text x="130" y="196" textAnchor="middle" fill="#B77BEE" fontFamily={mono} fontSize="8.5">interpretation = the vuln</text>
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* WHY WE PUBLISH */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.36fr 0.64fr", gap: 56 }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%") }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 16 }}>WHY WE PUBLISH</div>
              <div style={{ fontFamily: serif, fontSize: "clamp(20px, 3.4vw, 26px)", lineHeight: 1.22, color: "#292875", letterSpacing: "-0.01em" }}>A security firm earns trust in exactly one durable way.</div>
            </div>
            <div>
              <p style={{ ...rise(".8s", "entry 0% cover 28%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: "0 0 22px" }}>By demonstrating capability in the open, where it can be examined and tested. Our research is the engine of that trust. We publish original technical analysis, responsibly-disclosed findings, practical guidance on the regulations that shape our clients&apos; world, and recurring briefings on the threats we see forming on the horizon.</p>
              <p style={{ ...rise(".8s", "entry 0% cover 32%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: 0 }}>Where we can prove something, we prove it; where we are still learning, we say so.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL FIND */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)", borderTop: "1px solid #E9E9FF" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", margin: "0 0 40px" }}>WHAT YOU WILL FIND HERE</h2>
          <div className="nm-disc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {streams.map((s) => (
              <div key={s.name} className="nm-feature-card" style={{ ...rise(".8s", "entry 0% cover 30%"), background: "#FFFFFF", border: "1px solid #E9E9FF", borderRadius: 16, padding: "clamp(20px, 4vw, 32px)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 11, background: s.tint, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}><SuiteIcon k={s.iconKey} color={s.color} /></div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 18px)", color: "#292875", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{s.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.64, color: "#666687", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#120428", padding: "clamp(42px, 11vw, 84px) clamp(20px, 5vw, 32px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ ...rise(".85s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 34px)", lineHeight: 1.16, color: "#FFFFFF", margin: "0 0 26px" }}>Receive our briefings as they publish.</h2>
          <Link href="/contact" className="nm-cta-primary" style={{ ...rise(".85s", "entry 0% cover 34%"), display: "inline-block", padding: "15px 30px", background: "var(--grad-cta)", color: "#FFFFFF", fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "var(--shadow-blue)" }}>Subscribe to the briefing</Link>
        </div>
      </section>
    </div>
  );
}
