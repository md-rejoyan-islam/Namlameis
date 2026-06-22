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
    <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 100% at 50% 0%,#13294a 0%,#0B1A2E 52%,#081320 100%)", minHeight: "76vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(22,185,166,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(22,185,166,0.06) 1px,transparent 1px)", backgroundSize: "58px 58px", animation: "nm-drift 28s linear infinite", opacity: 0.7 }} />
      <div style={{ position: "absolute", top: -110, right: -50, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(22,185,166,0.15),transparent 62%)", animation: "nm-glow 8s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}><BrandMark size={48} /></div>
        <div style={{ fontFamily: mono, fontSize: 11.5, letterSpacing: "0.24em", color: "#16B9A6", marginBottom: 22 }}>500 · SOMETHING BROKE</div>
        <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#FFFFFF", margin: "0 0 20px" }}>
          An <span style={{ fontStyle: "italic", color: "#16B9A6" }}>unexpected</span> error occurred.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(226,232,241,0.72)", maxWidth: 520, margin: "0 auto 34px" }}>
          Something went wrong on our end. You can try again, or head back to a known route.
        </p>
        <div style={{ display: "flex", gap: 13, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => reset()} className="nm-cta-primary" style={{ ...btnBase, border: "none", background: "linear-gradient(180deg,#42E6D2,#13B19E)", color: "#04231f", boxShadow: "0 8px 28px rgba(22,185,166,0.32)" }}>Try again</button>
          <Link href="/" className="nm-ghost-dark" style={{ ...btnBase, fontWeight: 500, background: "rgba(247,249,252,0.05)", border: "1px solid rgba(226,232,241,0.2)", color: "#FFFFFF" }}>Back to home</Link>
        </div>
      </div>
    </section>
  );
}
