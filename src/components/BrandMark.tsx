// Ant mark on a black tile, exactly as drawn in the design comp
// (Nav.dc.html / Footer.dc.html). Reused by Navbar and Footer.

export function BrandMark({ size = 40 }: { size?: number }) {
  const radius = size <= 38 ? 10 : 11;
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: "#000000",
        border: "1px solid rgba(255,255,255,0.28)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: size >= 40 ? "0 2px 12px rgba(0,0,0,0.5)" : undefined,
        overflow: "hidden",
        flex: "none",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        style={{ display: "block" }}
        aria-hidden="true"
      >
        <g stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round">
          <path d="M18 9.5 Q14.5 5.2 12 6" />
          <path d="M22 9.5 Q25.5 5.2 28 6" />
          <path d="M17.6 17 L10.5 13.2" />
          <path d="M17.6 20 L9.4 20" />
          <path d="M17.6 23 L10.5 26.8" />
          <path d="M22.4 17 L29.5 13.2" />
          <path d="M22.4 20 L30.6 20" />
          <path d="M22.4 23 L29.5 26.8" />
        </g>
        <circle cx="12" cy="6" r="1.4" fill="#FFFFFF" />
        <circle cx="28" cy="6" r="1.4" fill="#FFFFFF" />
        <circle cx="20" cy="12" r="3.4" fill="#FFFFFF" />
        <ellipse cx="20" cy="19.5" rx="2.7" ry="3.3" fill="#FFFFFF" />
        <ellipse cx="20" cy="29" rx="4.3" ry="5.2" fill="#FFFFFF" />
      </svg>
    </span>
  );
}
