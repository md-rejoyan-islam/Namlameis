import { cn } from "@/lib/cn";

/*
  Hero illustration — the whole Namlameis thesis in one picture:
  "Machines find the known. We find the unknown."

  • The ant mark (left) is the colony — us — scanning your environment.
  • Teal-checked nodes are the KNOWN: assets automation already cleared as safe.
  • Thin grey trails are the many paths the colony explores.
  • One bright trail is the route that found what others missed — it reaches the
    pulsing amber node in the UNKNOWN, where the real threat was hiding.
  • Ants crawl that trail; a slow sweep implies continuous, real-time hunting.
*/
export function SignalMap({ className }: { className?: string }) {
  const origin = { x: 64, y: 150 };

  // KNOWN, cleared assets (get a teal check + a label)
  const cleared = [
    { x: 150, y: 72, label: "Cloud", lx: 150, ly: 56, anchor: "middle" as const },
    { x: 138, y: 222, label: "Endpoints", lx: 138, ly: 242, anchor: "middle" as const },
    { x: 250, y: 248, label: "Database", lx: 250, ly: 268, anchor: "middle" as const },
    { x: 330, y: 198, label: "APIs", lx: 344, ly: 201, anchor: "start" as const },
  ];

  // Waypoints on the discovered path
  const waypoints = [
    { x: 232, y: 132 },
    { x: 300, y: 96 },
  ];

  // Explored-but-clear trails (dead ends)
  const explored = [
    "M64 150 L150 72",
    "M64 150 L138 222",
    "M150 72 L232 132",
    "M138 222 L250 248",
    "M232 132 L250 248",
    "M232 132 L330 198",
    "M250 248 L330 198",
  ];

  const trail = "M64 150 L232 132 L300 96 L372 104";
  const threat = { x: 372, y: 104 };

  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Machines find the known; the Namlameis colony traces the path that finds the unknown threat"
    >
      <defs>
        <radialGradient id="sm-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0712C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F0712C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sm-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3D7DD8" />
          <stop offset="55%" stopColor="#1FA98F" />
          <stop offset="100%" stopColor="#F0712C" />
        </linearGradient>
        <linearGradient id="sm-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3D7DD8" stopOpacity="0" />
          <stop offset="50%" stopColor="#3D7DD8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#3D7DD8" stopOpacity="0" />
        </linearGradient>
        <clipPath id="sm-clip">
          <rect x="0" y="0" width="420" height="300" rx="12" />
        </clipPath>
      </defs>

      <g clipPath="url(#sm-clip)">
        {/* slow scanning sweep — continuous, real-time hunting */}
        <rect x="-60" y="0" width="60" height="300" fill="url(#sm-sweep)">
          <animate attributeName="x" from="-60" to="420" dur="6s" repeatCount="indefinite" />
        </rect>

        {/* region labels — the thesis */}
        <text
          x="150"
          y="285"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="2"
          fill="#1FA98F"
          fillOpacity="0.7"
        >
          KNOWN
        </text>
        <text
          x="340"
          y="40"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="8"
          letterSpacing="2"
          fill="#F0712C"
          fillOpacity="0.85"
        >
          UNKNOWN
        </text>
        <line x1="276" y1="20" x2="276" y2="280" stroke="#3D7DD8" strokeOpacity="0.12" strokeDasharray="3 5" />

        {/* explored, clear trails */}
        <g stroke="#3D7DD8" strokeOpacity="0.18" strokeWidth="1">
          {explored.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* the discovered path */}
        <path
          d={trail}
          stroke="url(#sm-trail)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="5 6"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="132"
            to="0"
            dur="3.5s"
            repeatCount="indefinite"
          />
        </path>

        {/* ants crawling toward the threat */}
        {[0, 0.5].map((begin, i) => (
          <circle key={i} r="2.4" fill="#F0712C">
            <animateMotion
              path={trail}
              dur="3.5s"
              begin={`${begin}s`}
              repeatCount="indefinite"
              rotate="auto"
            />
          </circle>
        ))}

        {/* KNOWN nodes — cleared, with a teal check + label */}
        {cleared.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="6.5" fill="#0B1A2E" stroke="#1FA98F" strokeOpacity="0.6" strokeWidth="1.2" />
            <path
              d={`M${n.x - 3} ${n.y} L${n.x - 0.8} ${n.y + 2.4} L${n.x + 3.2} ${n.y - 2.6}`}
              stroke="#1FA98F"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x={n.lx}
              y={n.ly}
              textAnchor={n.anchor}
              fontFamily="ui-sans-serif, sans-serif"
              fontSize="8"
              fill="#9fb0c7"
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* path waypoints */}
        {waypoints.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r="3.4" fill="#0B1A2E" stroke="#3D7DD8" strokeOpacity="0.7" strokeWidth="1" />
        ))}

        {/* origin — the colony (ant mark) with scanning ring */}
        <circle cx={origin.x} cy={origin.y} r="16" stroke="#3D7DD8" strokeOpacity="0.25" strokeWidth="1">
          <animate attributeName="r" values="16;27;16" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={origin.x} cy={origin.y} r="13" fill="#0B1A2E" stroke="#3D7DD8" strokeOpacity="0.5" />
        <g transform={`translate(${origin.x - 8}, ${origin.y - 8}) scale(0.5)`} fill="#E9F0FB">
          <path
            d="M14.5 5.5C13 3.5 12 2.5 10.5 1.5M17.5 5.5c1.5-2 2.5-3 4-4"
            stroke="#E9F0FB"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="16" cy="7.5" r="3" />
          <ellipse cx="16" cy="15" rx="2.6" ry="3.5" />
          <ellipse cx="16" cy="23.5" rx="4.5" ry="5.5" />
        </g>
        <text
          x={origin.x}
          y={origin.y + 30}
          textAnchor="middle"
          fontFamily="ui-sans-serif, sans-serif"
          fontSize="8.5"
          fontWeight="600"
          fill="#cdd9ea"
        >
          Namlameis
        </text>

        {/* the threat — found in the unknown */}
        <circle cx={threat.x} cy={threat.y} r="28" fill="url(#sm-glow)" />
        <circle cx={threat.x} cy={threat.y} r="11" stroke="#F0712C" strokeWidth="1.2" strokeOpacity="0.6">
          <animate attributeName="r" values="11;21;11" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={threat.x} cy={threat.y} r="6.5" fill="#F0712C">
          <animate attributeName="r" values="6.5;7.6;6.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
        {/* alert glyph inside the threat */}
        <text
          x={threat.x}
          y={threat.y + 3}
          textAnchor="middle"
          fontFamily="ui-sans-serif, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill="#0B1A2E"
        >
          !
        </text>
        <text
          x={threat.x}
          y={threat.y + 30}
          textAnchor="middle"
          fontFamily="ui-sans-serif, sans-serif"
          fontSize="8.5"
          fontWeight="600"
          fill="#F0712C"
        >
          Hidden threat
        </text>
      </g>
    </svg>
  );
}
