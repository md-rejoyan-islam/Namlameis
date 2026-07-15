import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const mono = "var(--font-mono)";
const serif = "var(--font-display)";
const sans = "var(--font-sans)";

export default function NotFound() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#1A0840 0%,#120428 52%,#080214 100%)", minHeight: "76vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(138,57,192,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(138,57,192,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: -110, right: -50, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(138,57,192,0.15),transparent 62%)", animation: "nm-glow 8s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><BrandMark size={48} /></div>
        <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#8A39C0", marginBottom: 22 }}>404 · TRAIL LOST</div>
        <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 6.4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 20px" }}>
          This path led <span style={{ fontStyle: "italic", color: "#8A39C0" }}>nowhere</span>.
        </h1>
        <p style={{ fontSize: "clamp(15.5px, 2.4vw, 18px)", lineHeight: 1.7, color: "rgba(226,232,241,0.72)", maxWidth: 520, margin: "0 auto 34px" }}>
          The page you were looking for isn&apos;t here. Let us get you back to a known route.
        </p>
        <div style={{ display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="nm-cta-primary" style={{ padding: "15px 28px", background: "linear-gradient(180deg,#9B5DE5,#7C3AED)", color: "#FFFFFF", fontFamily: sans, fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, boxShadow: "0 8px 28px rgba(138,57,192,0.32)" }}>Back to home</Link>
          <Link href="/solutions" className="nm-ghost-dark" style={{ padding: "14px 26px", background: "rgba(247,249,252,0.05)", border: "1px solid rgba(226,232,241,0.2)", color: "#FFFFFF", fontFamily: sans, fontSize: 14.5, fontWeight: 500, textDecoration: "none", borderRadius: 9 }}>Explore solutions</Link>
        </div>
      </div>
    </section>
  );
}
