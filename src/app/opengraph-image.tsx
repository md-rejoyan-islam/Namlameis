import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Branded Open Graph card, generated at build time for every page that doesn't
// override it. 1200×630 — the standard social-share size.
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(120% 120% at 100% 0%, #14365e 0%, #0B1A2E 45%, #0A1424 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d="M29 11C26 7 24 5 21 3.5M35 11c3-4 5-6 8-7.5"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M27.5 25 14 19M27 31 12.5 31M27.5 37 14.5 44"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M36.5 25 50 19M37 31 51.5 31M36.5 37 49.5 44"
              stroke="#ffffff"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="32" cy="15" r="6" fill="#ffffff" />
            <ellipse cx="32" cy="30" rx="5.2" ry="7" fill="#ffffff" />
            <ellipse cx="32" cy="47" rx="9" ry="11" fill="#ffffff" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
            {site.name}
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            We find what others miss — before it finds you.
          </div>
          <div style={{ fontSize: 30, color: "#F0712C", fontWeight: 500 }}>
            Machines find the known. We find the unknown.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 4,
          }}
        >
          <div>CYBER · AI · DEFENSE</div>
          <div>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
