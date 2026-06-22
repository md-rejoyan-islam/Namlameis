const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://namlameis.vercel.app")
).replace(/\/$/, "");

export const site = {
  name: "Namlameis",
  tagline: "Cyber · AI · Defense",
  domain: "namlameis.com",
  url: siteUrl,
  founded: 2024,
  location: "Salzburg, Austria",
  title:
    "Namlameis — Defense-grade cybersecurity, AI & vulnerability discovery",
  description:
    "Namlameis unites AI-powered cybersecurity, human-led vulnerability discovery, threat detection and response, and reputation defense. We find what others miss — before it finds you.",
  footerLine:
    "Defense-grade cybersecurity, AI, and complex vulnerability discovery. We find what others miss — before it finds you.",
  email: {
    general: "hello@namlameis.com",
    secure: "secure@namlameis.com",
    disclosure: "disclose@namlameis.com",
  },
  linkedin: "https://linkedin.com/company/namlameis",
} as const;

export type NavLink = { label: string; href: string; blurb?: string };
export type NavGroup = { label: string; href: string; children?: NavLink[] };

export const solutionsNav: NavLink[] = [
  {
    label: "AI-Powered Cybersecurity",
    href: "/solutions/ai-powered-cybersecurity",
    blurb:
      "Intelligence that learns your environment and defends it in real time.",
  },
  {
    label: "Vulnerability Discovery & Offensive Security",
    href: "/solutions/vulnerability-discovery",
    blurb:
      "Human-led research that finds what scanners and checklists never will.",
  },
  {
    label: "Threat Detection & Response",
    href: "/solutions/threat-detection-response",
    blurb: "See the attack as it forms; answer it before it lands.",
  },
  {
    label: "Reputation & Narrative Defense",
    href: "/solutions/reputation-narrative-defense",
    blurb: "A reputation is a perimeter. We monitor, defend, and restore it.",
  },
  {
    label: "Data Security",
    href: "/solutions/data-security",
    blurb:
      "Protection that travels with the data — at rest, in motion, and in use.",
  },
];

export const industriesNav: NavLink[] = [
  {
    label: "Financial Services & FinTech",
    href: "/industries/fintech",
    blurb: "Before the regulator — or the adversary — finds the gap.",
  },
  {
    label: "Government & Defense",
    href: "/industries/government-defense",
    blurb: "Discretion, dual-use rigor, and depth for the mission.",
  },
  {
    label: "Critical Infrastructure",
    href: "/industries/critical-infrastructure",
    blurb: "When a breach becomes a public-safety event.",
  },
];

export const mainNav: NavGroup[] = [
  { label: "Solutions", href: "/solutions", children: solutionsNav },
  { label: "Industries", href: "/industries", children: industriesNav },
  { label: "Platform", href: "/platform" },
  {
    label: "Company",
    href: "/company/about",
    children: [
      {
        label: "About",
        href: "/company/about",
        blurb: "Founded 2024 to find what others miss.",
      },
      {
        label: "Leadership",
        href: "/company/leadership",
        blurb: "A message from our leadership.",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];
