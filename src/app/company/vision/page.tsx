import type { Metadata } from "next";
import { rise, mono, serif, sans } from "@/components/inner";

export const metadata: Metadata = {
  title: "Vision & Goals",
  description:
    "The next decade will be fought in code, narrative, and trust. A research-led firm built around one conviction.",
};

const goals = [
  { no: "1", name: "Master the unknown", desc: "To be the firm that finds the novel, chained, human-shaped vulnerability that automation and incumbents cannot — and to prove it through published research, not assertion." },
  { no: "2", name: "Lead in AI security", desc: "To build genuine depth in the security of artificial intelligence — the fastest-moving, least-defended frontier in the field — and to become a name trusted there." },
  { no: "3", name: "Earn credibility, then scale it", desc: "To grow deliberately, adding the right mind for the right problem, never headcount for its own sake, and never a promise we cannot keep." },
  { no: "4", name: "Defend what matters, quietly", desc: "To serve the institutions — in finance, in government, in critical infrastructure — for whom a missed threat is not an inconvenience but a catastrophe, and to do it without spectacle." },
];

export default function VisionPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#1E0B4E 0%,#120428 52%,#080214 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "clamp(52px, 13vw, 86px) clamp(20px, 5vw, 32px) clamp(41px, 10vw, 74px)", textAlign: "center" }}>
          <div style={{ ...rise(".7s", "entry 0% cover 18%"), fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#A5A2FF", marginBottom: 26 }}>VISION · 2024 →</div>
          <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 6.4vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 auto", maxWidth: 880 }}>
            The next decade will be fought in <span style={{ fontStyle: "italic", color: "#B77BEE" }}>code</span>, <span style={{ fontStyle: "italic", color: "#B77BEE" }}>narrative</span>, and <span style={{ fontStyle: "italic", color: "#B77BEE" }}>trust</span>.
          </h1>
        </div>
      </section>

      {/* THE VISION */}
      <section style={{ background: "#FFFFFF", padding: "clamp(50px, 11vw, 100px) clamp(20px, 5vw, 32px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.52fr 0.48fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 18 }}>THE VISION</div>
              <p style={{ ...rise(".8s", "entry 0% cover 28%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: "0 0 22px" }}>For most of human history, conflict was decided where bodies could reach. That terrain has changed twice in a single generation — first when networks became the infrastructure on which every institution silently depends, and again when artificial intelligence began to write the code, generate the imagery, and manufacture the public&apos;s very belief about what is true.</p>
              <p style={{ ...rise(".8s", "entry 0% cover 32%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: 0 }}>We are not, and do not wish to become, another security vendor. We are a research-led firm built around one conviction: that the durable defenses of the next decade will be assembled by small, patient, deeply skilled teams working at the seam of three inseparable disciplines — because a vulnerability becomes a story within hours of its discovery, and the story decides whether the institution survives.</p>
            </div>
            <figure style={{ ...rise("1s", "entry 0% cover 30%"), margin: 0, border: "1px solid #E9E9FF", borderRadius: 18, background: "#FFFFFF", padding: "clamp(20px, 4vw, 30px)" }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.2em", color: "#6E6E8C", textAlign: "center", marginBottom: 14 }}>THREE INSEPARABLE DISCIPLINES</div>
              <svg viewBox="0 0 320 290" style={{ width: "100%", display: "block" }}>
                <circle cx="160" cy="105" r="78" fill="rgba(140,65,204,0.12)" stroke="#8C41CC" strokeWidth="1.2" />
                <circle cx="118" cy="180" r="78" fill="rgba(124,53,184,0.12)" stroke="#7C35B8" strokeWidth="1.2" />
                <circle cx="202" cy="180" r="78" fill="rgba(140,65,204,0.12)" stroke="#8C41CC" strokeWidth="1.2" />
                <text x="160" y="70" textAnchor="middle" fill="#292875" fontFamily={mono} fontSize="10">CYBER</text>
                <text x="74" y="206" textAnchor="middle" fill="#292875" fontFamily={mono} fontSize="10">AI</text>
                <text x="246" y="206" textAnchor="middle" fill="#292875" fontFamily={mono} fontSize="10">NARRATIVE</text>
                <circle cx="160" cy="155" r="6" fill="none" stroke="#8C41CC" strokeWidth="1.2">
                  <animate attributeName="r" values="6;30" dur="3.4s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values="0.55;0" dur="3.4s" repeatCount="indefinite" />
                </circle>
                <circle cx="160" cy="155" r="6" fill="#8C41CC" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
              </svg>
            </figure>
          </div>
          <div style={{ ...rise(".8s", "entry 0% cover 34%"), borderLeft: "3px solid #8C41CC", padding: "8px 0 8px 28px", margin: "48px auto 0", maxWidth: 820 }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: "clamp(20px, 3.4vw, 27px)", lineHeight: 1.32, color: "#292875" }}>The institutions worth defending are the ones that remember what they are for. Our task is to ensure they remain.</div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section style={{ background: "#120428", padding: "clamp(50px, 11vw, 100px) clamp(20px, 5vw, 32px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#A5A2FF", margin: "0 0 44px" }}>OUR GOALS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {goals.map((g) => (
              <div key={g.no} className="nm-goal-row" style={{ ...rise(".8s", "entry 0% cover 32%"), display: "grid", gridTemplateColumns: "64px 0.3fr 0.7fr", gap: 24, alignItems: "start", background: "rgba(247,249,252,0.03)", border: "1px solid rgba(200,200,220,0.1)", borderRadius: 15, padding: "clamp(20px, 4vw, 30px) clamp(21px, 4vw, 32px)" }}>
                <div style={{ fontFamily: serif, fontSize: "clamp(26px, 6vw, 40px)", color: "#8C41CC", lineHeight: 0.9 }}>{g.no}</div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 20px)", color: "#FFFFFF", margin: 0, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{g.name}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.66, color: "rgba(200,200,220,0.66)", margin: 0 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
