import { cn } from "@/lib/cn";

// Abstract "signal map": a field of nodes, a traced trail through them,
// and one highlighted threat node — the colony finding the shortest route.
export function SignalMap({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 70 },
    { x: 150, y: 40 },
    { x: 120, y: 150 },
    { x: 220, y: 110 },
    { x: 300, y: 60 },
    { x: 280, y: 180 },
    { x: 360, y: 130 },
    { x: 200, y: 230 },
    { x: 330, y: 250 },
    { x: 90, y: 220 },
  ];
  // Trail path (the "shortest route" emerging)
  const trail = "M60 70 L150 40 L220 110 L300 60 L360 130";
  const threat = { x: 360, y: 130 };

  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="An abstract map of signal nodes with a highlighted threat path"
    >
      <defs>
        <radialGradient id="sm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0712C" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F0712C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sm-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3D7DD8" />
          <stop offset="100%" stopColor="#1FA98F" />
        </linearGradient>
      </defs>

      {/* faint mesh between nearby nodes */}
      <g stroke="#3D7DD8" strokeOpacity="0.14" strokeWidth="1">
        <line x1="60" y1="70" x2="120" y2="150" />
        <line x1="150" y1="40" x2="120" y2="150" />
        <line x1="120" y1="150" x2="220" y2="110" />
        <line x1="220" y1="110" x2="280" y2="180" />
        <line x1="300" y1="60" x2="280" y2="180" />
        <line x1="280" y1="180" x2="330" y2="250" />
        <line x1="200" y1="230" x2="280" y2="180" />
        <line x1="90" y1="220" x2="120" y2="150" />
        <line x1="200" y1="230" x2="90" y2="220" />
        <line x1="360" y1="130" x2="280" y2="180" />
      </g>

      {/* the emerging trail */}
      <path
        d={trail}
        stroke="url(#sm-trail)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 7"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="130"
          to="0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* nodes */}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="3.4"
          fill="#0B1A2E"
          stroke="#3D7DD8"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}

      {/* highlighted threat node */}
      <circle cx={threat.x} cy={threat.y} r="26" fill="url(#sm-glow)" />
      <circle cx={threat.x} cy={threat.y} r="5.5" fill="#F0712C">
        <animate
          attributeName="r"
          values="5.5;7;5.5"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={threat.x} cy={threat.y} r="11" stroke="#F0712C" strokeWidth="1.2" strokeOpacity="0.6">
        <animate attributeName="r" values="11;20;11" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
