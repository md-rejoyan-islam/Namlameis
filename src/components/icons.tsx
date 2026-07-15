// Inline SVG icons used by the Products & Services suite cards.
// Keyed strings keep the data files free of JSX.

export function SuiteIcon({ k, color = "#8A39C0" }: { k: string; color?: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.6 } as const;
  switch (k) {
    case "portal":
      return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /></svg>);
    case "intake":
      return (<svg {...common}><path d="M7 3h10v18l-5-3-5 3z" strokeLinejoin="round" /><path d="M10 8h4M10 12h4" /></svg>);
    case "dashboard":
      return (<svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>);
    case "shield":
      return (<svg {...common}><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" strokeLinecap="round" /></svg>);
    case "doc":
      return (<svg {...common}><path d="M5 4h11l3 3v13H5z" strokeLinejoin="round" /><path d="M9 10h7M9 14h7" /></svg>);
    case "vault":
      return (<svg {...common}><rect x="4" y="4" width="16" height="16" rx="3" /><circle cx="12" cy="12" r="3.4" /><path d="M12 15.4V18" strokeLinecap="round" /></svg>);
    case "scan":
      return (<svg {...common}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" strokeLinecap="round" /></svg>);
    case "access":
      return (<svg {...common}><circle cx="9" cy="8" r="3" /><path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" strokeLinecap="round" /><circle cx="18" cy="9" r="2.2" /></svg>);
    case "ai":
      return (<svg {...common}><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" strokeLinecap="round" /></svg>);
    case "dlp":
      return (<svg {...common}><path d="M3 12h4l2-5 4 13 2.5-8H21" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case "monitor":
      return (<svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    default:
      return (<svg {...common}><circle cx="12" cy="12" r="8" /></svg>);
  }
}
