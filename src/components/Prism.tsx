// Original faceted "gem/prism" motif — gives the Cyera-esque floating-3D-object
// energy using our own violet gradient. Geometry is bespoke (do not mirror any
// third-party mark). Floats gently; holds still under prefers-reduced-motion,
// which is already clamped globally in globals.css.

export function Prism({ size = 220, className }: { size?: number; className?: string }) {
  // Outer hex (pointy top/bottom) + a center point; each facet is a triangle
  // from the center to one edge, filled with a slice of the tri-gradient.
  const outer = [
    [50, 6], [88, 28], [88, 72], [50, 114], [12, 72], [12, 28],
  ] as const;
  const cx = 50;
  const cy = 50;
  const fills = ["#9B5DE5", "#2563EB", "#8A39C0", "#6D28D9", "#7C3AED", "#DB2777"];
  const tri = (a: readonly number[], b: readonly number[]) =>
    `${a[0]},${a[1]} ${b[0]},${b[1]} ${cx},${cy}`;

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size * 1.14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          inset: "-10% 6%",
          background:
            "radial-gradient(circle at 50% 45%, rgba(138,57,192,0.45), rgba(219,39,119,0.12) 45%, transparent 70%)",
          filter: "blur(18px)",
          animation: "nm-glow 6s ease-in-out infinite",
        }}
      />
      <svg
        width={size}
        height={size * 1.14}
        viewBox="0 0 100 114"
        fill="none"
        style={{
          position: "relative",
          animation: "nm-float 7s ease-in-out infinite",
          filter: "drop-shadow(0 18px 30px rgba(11,4,32,0.35))",
        }}
      >
        {outer.map((v, i) => {
          const next = outer[(i + 1) % outer.length];
          return (
            <polygon
              key={i}
              points={tri(v, next)}
              fill={fills[i]}
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="0.7"
              strokeLinejoin="round"
            />
          );
        })}
        {/* specular "lit" facet */}
        <polygon points="50,6 12,28 50,50" fill="#FFFFFF" opacity="0.16" />
        {/* girdle line */}
        <line x1="12" y1="50" x2="88" y2="50" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
