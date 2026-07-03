import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

export const mono = "var(--font-mono)";
export const serif = "var(--font-display)";
export const sans = "var(--font-sans)";

export const rise = (dur: string, range: string): CSSProperties =>
  ({ animation: `nm-rise ${dur} both`, animationTimeline: "view()", animationRange: range } as CSSProperties);

type Btn = { label: string; href: string };

export function DarkHero({
  eyebrow,
  badge,
  title,
  subtitle,
  primary,
  secondary,
  split = false,
  children,
}: {
  eyebrow: string;
  badge?: string;
  title: { before: string; italic?: string; after?: string };
  subtitle: string;
  primary: Btn;
  secondary?: Btn;
  split?: boolean;
  children?: ReactNode;
}) {
  const align = split ? "left" : "center";
  const content = (
    <>
      {badge && (
        <div style={{ ...rise(".65s", "entry 0% cover 16%"), display: "inline-block", fontFamily: mono, fontSize: 10.5, letterSpacing: "0.18em", color: "#0A1424", background: "linear-gradient(180deg,#42E6D2,#13B19E)", borderRadius: 100, padding: "6px 14px", marginBottom: 18, fontWeight: 600 }}>{badge}</div>
      )}
      <div style={{ ...rise(".7s", "entry 0% cover 18%"), fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#16B9A6", marginBottom: 24 }}>{eyebrow}</div>
      <h1 style={{ ...rise(".85s", "entry 0% cover 24%"), fontFamily: serif, fontWeight: 400, fontSize: split ? "clamp(30px, 6.2vw, 46px)" : "clamp(30px, 6.4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 22px" }}>
        {title.before}
        {title.italic && <span style={{ fontStyle: "italic", color: "#16B9A6" }}>{title.before ? " " : ""}{title.italic}</span>}
        {title.after}
      </h1>
      <p style={{ ...rise(".85s", "entry 0% cover 28%"), fontSize: "clamp(15.5px, 2.4vw, 18px)", lineHeight: 1.7, color: "rgba(226,232,241,0.72)", maxWidth: 700, margin: split ? "0 0 32px" : "0 auto 32px" }}>{subtitle}</p>
      <div style={{ ...rise(".85s", "entry 0% cover 32%"), display: "flex", gap: 13, justifyContent: split ? "flex-start" : "center", flexWrap: "wrap" }}>
        <Link href={primary.href} className="nm-cta-primary" style={{ padding: "14px 26px", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", fontFamily: sans, fontSize: 14.5, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 8px 24px rgba(22,185,166,0.3)" }}>{primary.label}</Link>
        {secondary && (
          <Link href={secondary.href} className="nm-ghost-dark" style={{ padding: "14px 26px", background: "rgba(247,249,252,0.05)", border: "1px solid rgba(226,232,241,0.2)", color: "#FFFFFF", fontFamily: sans, fontSize: 14.5, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>{secondary.label}</Link>
        )}
      </div>
    </>
  );

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#13294a 0%,#0B1A2E 52%,#081320 100%)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: -110, right: -50, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(22,185,166,0.15),transparent 62%)", animation: "nm-glow 8s ease-in-out infinite", pointerEvents: "none" }} />
      {split ? (
        <div className="nm-grid-2" style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(64px, 11vw, 80px) clamp(20px, 5vw, 32px) clamp(52px, 10vw, 84px)", display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 56, alignItems: "center", textAlign: "left" }}>
          <div>{content}</div>
          <div>{children}</div>
        </div>
      ) : (
        <>
          <div style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: children ? "clamp(64px, 11vw, 84px) clamp(20px, 5vw, 32px) clamp(28px, 6vw, 36px)" : "clamp(64px, 11vw, 88px) clamp(20px, 5vw, 32px) clamp(44px, 9vw, 70px)", textAlign: align }}>{content}</div>
          {children}
        </>
      )}
    </section>
  );
}

export function CtaBand({ heading, subtext, primary, secondary }: { heading: string; subtext?: string; primary: Btn; secondary?: Btn }) {
  return (
    <section style={{ background: "linear-gradient(165deg,#0A1424,#0B1A2E)", padding: "clamp(52px, 11vw, 92px) clamp(20px, 5vw, 32px)", borderTop: "1px solid rgba(226,232,241,0.08)" }}>
      <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ ...rise(".85s", "entry 0% cover 30%"), fontFamily: serif, fontWeight: 400, fontSize: "clamp(26px, 5vw, 38px)", lineHeight: 1.12, color: "#FFFFFF", margin: subtext ? "0 0 14px" : "0 0 28px" }}>{heading}</h2>
        {subtext && <p style={{ ...rise(".85s", "entry 0% cover 33%"), fontSize: 16, lineHeight: 1.7, color: "rgba(226,232,241,0.62)", margin: "0 auto 28px", maxWidth: 560 }}>{subtext}</p>}
        <div style={{ ...rise(".85s", "entry 0% cover 34%"), display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={primary.href} className="nm-cta-primary" style={{ padding: "16px 30px", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", fontFamily: sans, fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 10px 30px rgba(22,185,166,0.3)" }}>{primary.label}</Link>
          {secondary && (
            <Link href={secondary.href} className="nm-ghost-dark" style={{ padding: "16px 30px", background: "transparent", border: "1px solid rgba(226,232,241,0.22)", color: "#FFFFFF", fontFamily: sans, fontSize: 15, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>{secondary.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}

export type DetailData = {
  eyebrow: string;
  badge?: string;
  title: { before: string; italic?: string; after?: string };
  subtitle: string;
  heroPrimary: Btn;
  heroSecondary?: Btn;
  overview: { heading: string; paras: string[]; pullquote: string };
  sectionLabel: string;
  sectionSubLabel?: string;
  features: { name: string; desc: string }[];
  stackLabel?: string;
  stack?: string[];
  cta: { heading: string; subtext?: string; nextLabel: string; nextHref: string };
};

// Shared detail-page template for products & services.
export function DetailPage({ data, diagram, heroSplit = false }: { data: DetailData; diagram?: ReactNode; heroSplit?: boolean }) {
  return (
    <div style={{ background: "#FFFFFF" }}>
      <DarkHero eyebrow={data.eyebrow} badge={data.badge} title={data.title} subtitle={data.subtitle} primary={data.heroPrimary} secondary={data.heroSecondary} split={heroSplit}>
        {diagram}
      </DarkHero>

      {/* OVERVIEW */}
      <section style={{ background: "#FFFFFF", padding: "clamp(56px, 11vw, 100px) clamp(20px, 5vw, 32px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div className="nm-overview-grid" style={{ display: "grid", gridTemplateColumns: "0.36fr 0.64fr", gap: 56 }}>
            <div style={{ ...rise(".8s", "entry 0% cover 24%") }}>
              <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", marginBottom: 16 }}>OVERVIEW</div>
              <div style={{ fontFamily: serif, fontSize: "clamp(20px, 3.4vw, 27px)", lineHeight: 1.2, color: "#0A1424", letterSpacing: "-0.01em" }}>{data.overview.heading}</div>
            </div>
            <div>
              {data.overview.paras.map((p, i) => (
                <p key={i} style={{ ...rise(".8s", `entry 0% cover ${28 + i * 4}%`), fontSize: "clamp(15.5px, 2.4vw, 17px)", lineHeight: 1.78, color: "#475569", margin: "0 0 22px" }}>{p}</p>
              ))}
              <div style={{ ...rise(".8s", "entry 0% cover 36%"), borderLeft: "3px solid #16B9A6", padding: "6px 0 6px 24px", marginTop: 6 }}>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: "clamp(20px, 3.4vw, 25px)", lineHeight: 1.32, color: "#0A1424" }}>{data.overview.pullquote}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#FFFFFF", padding: "clamp(56px, 11vw, 100px) clamp(20px, 5vw, 32px)", borderTop: "1px solid #E2E8F1" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ ...rise(".8s", "entry 0% cover 24%"), display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", margin: "0 0 44px" }}>
            <h2 style={{ fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "#16B9A6", margin: 0 }}>{data.sectionLabel}</h2>
            {data.sectionSubLabel && <span style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: "0.14em", color: "#94a3b8" }}>{data.sectionSubLabel}</span>}
          </div>
          <div className="nm-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {data.features.map((c) => (
              <div key={c.name} className="nm-feature-card" style={{ ...rise(".8s", "entry 0% cover 30%"), background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 15, padding: "clamp(20px, 4vw, 30px)" }}>
                <h3 style={{ fontFamily: sans, fontWeight: 600, fontSize: "clamp(15.5px, 2.4vw, 18px)", color: "#0A1424", margin: "0 0 10px", letterSpacing: "-0.01em" }}>{c.name}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.66, color: "#64748b", margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          {data.stack && data.stack.length > 0 && (
            <div style={{ ...rise(".8s", "entry 0% cover 38%"), marginTop: 30, background: "#FFFFFF", border: "1px solid #E2E8F1", borderRadius: 14, padding: "clamp(18px, 3.5vw, 24px) clamp(20px, 4vw, 28px)" }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.14em", color: "#94a3b8", marginBottom: 12 }}>{data.stackLabel ?? "BUILDABLE WITH"}</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {data.stack.map((t) => (
                  <span key={t} style={{ fontFamily: mono, fontSize: 11, color: "#475569", background: "#EEFBF8", borderRadius: 6, padding: "5px 11px" }}>{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand
        heading={data.cta.heading}
        subtext={data.cta.subtext}
        primary={{ label: "Get a demo", href: "/contact" }}
        secondary={{ label: data.cta.nextLabel, href: data.cta.nextHref }}
      />
    </div>
  );
}
