import type { Metadata } from "next";
import Link from "next/link";
import { DarkHero, rise, mono, serif, sans } from "@/components/inner";
import { SuiteIcon } from "@/components/icons";
import { serviceCatalogue } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five data-security services, each the human-led counterpart to a capability the platform leaders automate — delivered as expert engagements and retainers.",
};

export default function ServicesPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <DarkHero
        title={{ before: "The leader sells a platform. We sell", italic: "judgment", after: "." }}
        subtitle="Inspired by the catalogue of the market’s leading data-security platform, delivered as expert human engagements — for the organisations that need the answer done rigorously, once, rather than a perpetual subscription."
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "Get a demo", href: "/contact" }}
      />

      {/* THE HONEST DISTINCTION */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: 56 }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%") }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 16 }}>THE HONEST DISTINCTION</div>
              <div style={{ fontFamily: serif, fontSize: "clamp(20px, 3.4vw, 28px)", lineHeight: 1.2, color: "#292875", letterSpacing: "-0.01em" }}>Five services, each the human-led counterpart to a capability the platform leaders automate.</div>
            </div>
            <div>
              <p style={{ ...rise(".8s", "entry 0% cover 28%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: "0 0 22px" }}>The most valuable platforms in data security automate discovery and control at vast scale. That is a genuine achievement — and a genuinely different thing from what a small expert firm offers. Where they sell a system a customer runs forever, we sell the judgment of people, delivered as engagements and retainers.</p>
              <p style={{ ...rise(".8s", "entry 0% cover 32%"), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#666687", margin: 0 }}>We do not reproduce the leader’s autonomous engine — we neither can nor should. We reproduce the structure and the language this market understands, and deliver the substance through human expertise. <strong style={{ color: "#292875", fontWeight: 600 }}>For many organisations, that is not a lesser offering. It is the right one.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* THE SERVICE CATALOGUE */}
      <section style={{ background: "#FFFFFF", padding: "clamp(24px, 13vw, 40px) clamp(20px, 5vw, 32px) clamp(55px, 10vw, 100px)", borderTop: "1px solid #E9E9FF" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, margin: "56px 0 44px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 16 }}>THE SERVICE CATALOGUE</div>
            <h2 style={{ ...rise(".8s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 36px)", lineHeight: 1.16, color: "#292875", margin: 0 }}>Platform-grade, human-delivered.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {serviceCatalogue.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="nm-feature-card" style={{ ...rise(".8s", "entry 0% cover 30%"), textDecoration: "none", display: "flex", alignItems: "center", gap: 22, background: "#FFFFFF", border: "1px solid #E9E9FF", borderRadius: 16, padding: "clamp(17px, 4vw, 26px) clamp(18px, 4vw, 28px)" }}>
                <span style={{ width: 52, height: 52, borderRadius: 13, background: "rgba(140,65,204,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}><SuiteIcon k={s.iconKey} /></span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontFamily: mono, fontSize: 11, color: "#6E6E8C" }}>{s.no}</span>
                    <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 18px)", color: "#292875", margin: 0, letterSpacing: "-0.01em" }}>{s.name}</h3>
                    <span style={{ fontFamily: mono, fontSize: 9.5, letterSpacing: "0.12em", color: "#8C41CC", border: "1px solid rgba(73,69,255,0.3)", borderRadius: 5, padding: "2px 7px" }}>{s.mirrors}</span>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#666687", margin: 0 }}>{s.desc}</p>
                </div>
                <span style={{ fontFamily: mono, fontSize: 16, color: "#8C41CC", flex: "none" }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section style={{ background: "linear-gradient(165deg,#0B0420,#120428)", padding: "clamp(50px, 11vw, 100px) clamp(20px, 5vw, 32px)", borderTop: "1px solid rgba(200,200,220,0.08)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <p style={{ ...rise(".85s", "entry 0% cover 30%"), fontFamily: serif, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(26px, 5vw, 34px)", lineHeight: 1.32, color: "#FFFFFF", margin: "0 0 36px" }}>Some need the answer once, established rigorously. Others need a standing alliance. We offer both — delivered by people.</p>
          <div style={{ ...rise(".85s", "entry 0% cover 34%"), display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="nm-cta-primary" style={{ padding: "16px 30px", background: "var(--grad-cta)", color: "#FFFFFF", fontFamily: sans, fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "var(--shadow-blue)" }}>Request a briefing</Link>
            <Link href="/contact" className="nm-ghost-dark" style={{ padding: "16px 30px", background: "transparent", border: "1px solid rgba(200,200,220,0.22)", color: "#FFFFFF", fontFamily: sans, fontSize: 15, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>Submit a request</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
