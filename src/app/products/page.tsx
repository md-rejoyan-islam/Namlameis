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
  { title: "CLIENT (React / Next.js)", sub: "Portal · Intake · Dashboard · Trust · Hub", accent: "#16B9A6" },
  { title: "API LAYER (Node / Go · REST)", sub: "Auth · validation · rate-limit · webhooks", accent: "#1FA98F" },
  { title: "DATA (Encrypted store)", sub: "Postgres / Mongo · audit log · secrets vault", accent: "#16B9A6" },
];

export default function ProductsPage() {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <DarkHero
        eyebrow="PRODUCTS"
        title={{ before: "The expertise is human. The platform makes it", italic: "scale", after: "." }}
        subtitle="The most accomplished firms in this field do not deliver a report and depart. They give the client a living platform to work inside. We do the same — six secure products, built and maintained in-house, that turn a service relationship into an experience."
        primary={{ label: "Get a demo", href: "/contact" }}
        secondary={{ label: "Request a briefing", href: "/contact" }}
      />

      {/* THE SUITE */}
      <section style={{ background: "#FFFFFF", padding: "96px 32px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ maxWidth: 620, margin: "0 0 48px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 16 }}>THE PRODUCT SUITE</div>
            <h2 style={{ ...rise(".8s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: 36, lineHeight: 1.16, color: "#0A1424", margin: 0 }}>A platform around the service.</h2>
          </div>
          <div className="nm-suite-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
            {productSuite.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="nm-suite-card" style={{ ...rise(".8s", "entry 0% cover 30%"), textDecoration: "none", background: "#FFFFFF", border: "1px solid #E2E8F1", borderTop: `3px solid ${p.accent}`, borderRadius: 16, padding: "30px 28px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{ width: 48, height: 48, borderRadius: 12, background: p.tint, display: "flex", alignItems: "center", justifyContent: "center" }}><SuiteIcon k={p.iconKey} color={p.accent} /></span>
                  <span style={{ fontFamily: mono, fontSize: 12, color: "#cbd5e1" }}>{p.no}</span>
                </div>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: 19, color: "#0A1424", margin: "0 0 9px", letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#64748b", margin: "0 0 20px", flex: 1 }}>{p.desc}</p>
                <span style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.04em", color: p.accent, display: "inline-flex", alignItems: "center", gap: 7 }}>Explore the product →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section style={{ background: "#FFFFFF", padding: "100px 32px", borderTop: "1px solid #E2E8F1" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{ maxWidth: 640, margin: "0 0 44px" }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%"), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 16 }}>PLATFORM ARCHITECTURE</div>
            <h2 style={{ ...rise(".8s", "entry 0% cover 28%"), fontFamily: serif, fontWeight: 400, fontSize: 34, lineHeight: 1.16, color: "#0A1424", margin: 0 }}>How the products fit together.</h2>
          </div>
          <figure style={{ ...rise("1s", "entry 0% cover 30%"), margin: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760 }}>
              {archLayers.map((l, i) => (
                <div key={l.title}>
                  <div style={{ background: "#FFFFFF", border: "1px solid #E2E8F1", borderLeft: `5px solid ${l.accent}`, borderRadius: 12, padding: "22px 26px" }}>
                    <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 17, color: "#0A1424", marginBottom: 4 }}>{l.title}</div>
                    <div style={{ fontSize: 14, color: "#64748b" }}>{l.sub}</div>
                  </div>
                  {i < archLayers.length - 1 && <div style={{ display: "flex", justifyContent: "center", marginTop: 14 }}><span style={{ color: "#cbd5e1", fontSize: 18 }}>↓</span></div>}
                </div>
              ))}
              <div style={{ background: "#0A1424", borderRadius: 12, padding: "22px 26px", marginTop: 6 }}>
                <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.16em", color: "#16B9A6", marginBottom: 8 }}>SECURITY BY DESIGN</div>
                <div style={{ fontSize: 14, color: "rgba(226,232,241,0.7)" }}>least privilege · input validation · audit logging · independent review before launch</div>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* HONEST FRAMING */}
      <section style={{ background: "#0B1A2E", padding: "96px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.05) 1px,transparent 1px)", backgroundSize: "54px 54px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ ...rise(".8s", "entry 0% cover 26%"), fontFamily: mono, fontSize: 11, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 24 }}>A CANDID DISTINCTION</div>
          <p style={{ ...rise(".8s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 300, fontSize: 30, lineHeight: 1.4, color: "#FFFFFF", letterSpacing: "-0.005em", margin: "0 0 18px" }}>We do not clone an autonomous discovery engine. We adopt the clarity of a great platform’s structure — and build the secure web layer that surrounds and delivers our human expertise.</p>
          <p style={{ ...rise(".8s", "entry 0% cover 34%"), fontSize: 16, lineHeight: 1.7, color: "rgba(226,232,241,0.6)", margin: 0 }}>We borrow the architecture of the idea, not the engine.</p>
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
