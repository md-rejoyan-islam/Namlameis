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
      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#13294a 0%,#0B1A2E 52%,#081320 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto", padding: "86px 32px 74px", textAlign: "center" }}>
          <div style={{ ...rise(".7s", "entry 0% cover 18%"), fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#16B9A6", marginBottom: 26 }}>VISION · 2024 →</div>
          <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 auto", maxWidth: 880 }}>
            The next decade will be fought in <span style={{ fontStyle: "italic", color: "#16B9A6" }}>code</span>, <span style={{ fontStyle: "italic", color: "#1FA98F" }}>narrative</span>, and <span style={{ fontStyle: "italic", color: "#16B9A6" }}>trust</span>.
          </h1>
        </div>
      </section>

      {/* THE VISION */}
      <section style={{ background: "#FFFFFF", padding: "100px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.52fr 0.48fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 18 }}>THE VISION</div>
              <p style={{ ...rise(".8s", "entry 0% cover 28%"), fontSize: 17, lineHeight: 1.78, color: "#475569", margin: "0 0 22px" }}>For most of human history, conflict was decided where bodies could reach. That terrain has changed twice in a single generation — first when networks became the infrastructure on which every institution silently depends, and again when artificial intelligence began to write the code, generate the imagery, and manufacture the public&apos;s very belief about what is true.</p>
              <p style={{ ...rise(".8s", "entry 0% cover 32%"), fontSize: 17, lineHeight: 1.78, color: "#475569", margin: 0 }}>We are not, and do not wish to become, another security vendor. We are a research-led firm built around one conviction: that the durable defenses of the next decade will be assembled by small, patient, deeply skilled teams working at the seam of three inseparable disciplines — because a vulnerability becomes a story within hours of its discovery, and the story decides whether the institution survives.</p>
            </div>
            <figure style={{ ...rise("1s", "entry 0% cover 30%"), margin: 0, border: "1px solid #E2E8F1", borderRadius: 18, background: "#FFFFFF", padding: 30 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.2em", color: "#94a3b8", textAlign: "center", marginBottom: 14 }}>THREE INSEPARABLE DISCIPLINES</div>
              <svg viewBox="0 0 320 290" style={{ width: "100%", display: "block" }}>
                <circle cx="160" cy="105" r="78" fill="rgba(22,185,166,0.12)" stroke="#16B9A6" strokeWidth="1.2" />
                <circle cx="118" cy="180" r="78" fill="rgba(31,169,143,0.12)" stroke="#1FA98F" strokeWidth="1.2" />
                <circle cx="202" cy="180" r="78" fill="rgba(22,185,166,0.12)" stroke="#16B9A6" strokeWidth="1.2" />
                <text x="160" y="70" textAnchor="middle" fill="#0A1424" fontFamily={mono} fontSize="10">CYBER</text>
                <text x="74" y="206" textAnchor="middle" fill="#0A1424" fontFamily={mono} fontSize="10">AI</text>
                <text x="246" y="206" textAnchor="middle" fill="#0A1424" fontFamily={mono} fontSize="10">NARRATIVE</text>
                <circle cx="160" cy="155" r="6" fill="#16B9A6" style={{ animation: "nm-pulse 2.6s ease-in-out infinite" }} />
              </svg>
            </figure>
          </div>
          <div style={{ ...rise(".8s", "entry 0% cover 34%"), borderLeft: "3px solid #16B9A6", padding: "8px 0 8px 28px", margin: "48px auto 0", maxWidth: 820 }}>
            <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 27, lineHeight: 1.32, color: "#0A1424" }}>The institutions worth defending are the ones that remember what they are for. Our task is to ensure they remain.</div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section style={{ background: "#0B1A2E", padding: "100px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 1080, margin: "0 auto" }}>
          <h2 style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", margin: "0 0 44px" }}>OUR GOALS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {goals.map((g) => (
              <div key={g.no} className="nm-goal-row" style={{ ...rise(".8s", "entry 0% cover 32%"), display: "grid", gridTemplateColumns: "64px 0.3fr 0.7fr", gap: 24, alignItems: "start", background: "rgba(247,249,252,0.03)", border: "1px solid rgba(226,232,241,0.1)", borderRadius: 15, padding: "30px 32px" }}>
                <div style={{ fontFamily: serif, fontSize: 40, color: "#16B9A6", lineHeight: 0.9 }}>{g.no}</div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 20, color: "#FFFFFF", margin: 0, lineHeight: 1.25, letterSpacing: "-0.01em" }}>{g.name}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.66, color: "rgba(226,232,241,0.66)", margin: 0 }}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
