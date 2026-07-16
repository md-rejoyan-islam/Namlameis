"use client";

import { useEffect } from "react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

const mono = "var(--font-mono)";
const serif = "var(--font-display)";
const sans = "var(--font-sans)";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Surface the error for diagnostics without exposing details to the user.
    console.error(error);
  }, [error]);

  const btnBase = { padding: "15px 28px", fontFamily: sans, fontSize: 15, fontWeight: 600, textDecoration: "none", borderRadius: 9, cursor: "pointer" } as const;

  return (
    <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#1E0B4E 0%,#120428 52%,#080214 100%)", minHeight: "76vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(140,65,204,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(140,65,204,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: -110, right: -50, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(140,65,204,0.15),transparent 62%)", animation: "nm-glow 8s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "clamp(48px, 11vw, 96px) clamp(20px, 5vw, 32px)", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><BrandMark size={48} /></div>
        <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#A5A2FF", marginBottom: 22 }}>500 · SOMETHING BROKE</div>
        <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 6.4vw, 52px)", lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 20px" }}>
          An <span style={{ fontStyle: "italic", color: "#B77BEE" }}>unexpected</span> error occurred.
        </h1>
        <p style={{ fontSize: "clamp(15.5px, 2.4vw, 18px)", lineHeight: 1.7, color: "rgba(200,200,220,0.72)", maxWidth: 520, margin: "0 auto 34px" }}>
          Something went wrong on our end. You can try again, or head back to a known route.
        </p>
        <div style={{ display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => reset()} className="nm-cta-primary" style={{ ...btnBase, border: "none", background: "var(--grad-cta)", color: "#FFFFFF", boxShadow: "0 8px 28px rgba(73,69,255,0.32)" }}>Try again</button>
          <Link href="/" className="nm-ghost-dark" style={{ ...btnBase, fontWeight: 500, background: "rgba(247,249,252,0.05)", border: "1px solid rgba(200,200,220,0.2)", color: "#FFFFFF" }}>Back to home</Link>
        </div>
      </div>
    </section>
  );
}
