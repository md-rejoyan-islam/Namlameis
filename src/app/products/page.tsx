import type { Metadata } from "next";
import Link from "next/link";
import { DarkHero, CtaBand, rise, mono, serif, sans } from "@/components/inner";
import { SuiteIcon } from "@/components/icons";
import { productSuite } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Six secure products, built and maintained in-house, that turn a service relationship into a living platform experience.",
};

const archLayers = [
  { title: "CLIENT (React / Next.js)", sub: "Portal · Intake · Dashboard · Trust · Hub", accent: "#8C41CC" },
  { title: "API LAYER (Node / Go · REST)", sub: "Auth · validation · rate-limit · webhooks", accent: "#7C35B8" },
  { title: "DATA (Encrypted store)", sub: "Postgres / Mongo · audit log · secrets vault", accent: "#8C41CC" },
];

export default function ProductsPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <DarkHero
        title={{ before: "The expertise is human. The platform makes it", italic: "scale", after: "." }}
        subtitle="The most accomplished firms in this field do not deliver a report and depart. They give the client a living platform to work inside. We do the same — six secure products, built and maintained in-house, that turn a service relationship into an experience."
        primary={{ label: "Get a demo", href: "/contact" }}
        secondary={{ label: "Request a briefing", href: "/contact" }}
      />

      {/* THE SUITE */}
      <section style={{ background: "#FFFFFF", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 620, margin: "0 0 48px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 16 }}>THE PRODUCT SUITE</div>
            <h2 style={{ ...rise(".8s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 36px)", lineHeight: 1.16, color: "#0b0420", margin: 0 }}>A platform around the service.</h2>
          </div>
          <div className="nm-suite-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {productSuite.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="nm-suite-card" style={{ ...rise(".8s", "entry 0% cover 30%"), textDecoration: "none", background: "#FFFFFF", border: "1px solid #E9E9FF", borderTop: `3px solid ${p.accent}`, borderRadius: 16, padding: "clamp(20px, 4vw, 30px) clamp(18px, 4vw, 28px)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 12, background: p.tint, display: "flex", alignItems: "center", justifyContent: "center" }}><SuiteIcon k={p.iconKey} color={p.accent} /></span>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "#6E6E8C" }}>{p.no}</span>
                </div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 19px)", color: "#292875", margin: "0 0 9px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#666687", margin: "0 0 20px", flex: 1 }}>{p.desc}</p>
                <span style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.04em", color: p.accent, display: "inline-flex", alignItems: "center", gap: 7 }}>Explore the product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section style={{ background: "#FFFFFF", padding: "clamp(50px, 11vw, 100px) clamp(20px, 5vw, 32px)", borderTop: "1px solid #E9E9FF" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, margin: "0 0 44px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#4945FF", marginBottom: 16 }}>PLATFORM ARCHITECTURE</div>
            <h2 style={{ ...rise(".8s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 34px)", lineHeight: 1.16, color: "#0b0420", margin: 0 }}>How the products fit together.</h2>
          </div>
          <figure style={{ ...rise("1s", "entry 0% cover 30%"), margin: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
              {archLayers.map((l, i) => (
                <div key={l.title}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E9E9FF", borderLeft: `5px solid ${l.accent}`, borderRadius: 12, padding: "clamp(14px, 4vw, 22px) clamp(17px, 4vw, 26px)" }}>
                    <div style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 17px)", color: "#292875", marginBottom: 4 }}>{l.title}</div>
                    <div style={{ fontSize: 14, color: "#666687" }}>{l.sub}</div>
                  </div>
                  {i < archLayers.length - 1 && <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}><span style={{ color: "#6E6E8C", fontSize: 18 }}>↓</span></div>}
                </div>
              ))}
              <div style={{ background: "#0B0420", borderRadius: 12, padding: "clamp(14px, 4vw, 22px) clamp(17px, 4vw, 26px)", marginTop: 6 }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", color: "#A5A2FF", marginBottom: 8 }}>SECURITY BY DESIGN</div>
                <div style={{ fontSize: 14, color: "rgba(200,200,220,0.7)" }}>least privilege · input validation · audit logging · independent review before launch</div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* HONEST FRAMING */}
      <section style={{ background: "#120428", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...rise(".8s", "entry 0% cover 26%"), fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "#A5A2FF", marginBottom: 24 }}>A CANDID DISTINCTION</div>
          <p style={{ ...rise(".8s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 300, fontSize: "clamp(20px, 3.4vw, 30px)", lineHeight: 1.4, color: "#FFFFFF", letterSpacing: "-0.005em", margin: "0 0 18px" }}>We do not clone an autonomous discovery engine. We adopt the clarity of a great platform’s structure — and build the secure web layer that surrounds and delivers our human expertise.</p>
          <p style={{ ...rise(".8s", "entry 0% cover 34%"), fontSize: 16, lineHeight: 1.7, color: "rgba(200,200,220,0.6)", margin: 0 }}>We borrow the architecture of the idea, not the engine.</p>
        </div>
      </section>

      <CtaBand
        heading="See the whole suite in one walkthrough."
        primary={{ label: "Get a demo", href: "/contact" }}
        secondary={{ label: "Explore our services →", href: "/services" }}
      />
    </div>
  );
}
