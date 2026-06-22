import type { DetailData } from "@/components/inner";

export type ServiceCard = {
  no: string;
  name: string;
  desc: string;
  slug: string;
  mirrors: string;
  iconKey: string;
};

export const serviceCatalogue: ServiceCard[] = [
  { no: "01", name: "Data Discovery & Classification", desc: "Locate and classify sensitive data across cloud, SaaS, and on-prem — the rigorous, expert counterpart to an automated scan.", slug: "data-discovery", mirrors: "MIRRORS THE LEADER’S DSPM", iconKey: "scan" },
  { no: "02", name: "Data Access Review", desc: "Map every identity — human, service, and AI agent — that can reach each class of sensitive data, and the standing excess to remove.", slug: "access-review", mirrors: "MIRRORS THE LEADER’S ACCESS DETECTIVE", iconKey: "access" },
  { no: "03", name: "Shadow-AI & AI Data-Exposure", desc: "Discover the AI tools in use — sanctioned and not — and assess what sensitive data is quietly flowing into them.", slug: "shadow-ai", mirrors: "MIRRORS THE LEADER’S AI-SPM · HIGHEST DIFFERENTIATION", iconKey: "ai" },
  { no: "04", name: "DLP Strategy & Tuning", desc: "Review and tune the data-loss-prevention tooling you already own — cutting false-positive noise until the real signal is clear.", slug: "dlp-tuning", mirrors: "MIRRORS THE LEADER’S CONSOLIDATED DLP", iconKey: "dlp" },
  { no: "05", name: "Managed Data-Risk Monitoring", desc: "An expert-led retainer: periodic re-assessment, risk-reduction guidance, and breach-response support — a standing alliance.", slug: "managed-monitoring", mirrors: "MIRRORS THE LEADER’S MANAGED SERVICE", iconKey: "monitor" },
];

const heroSecondary = { label: "Request a briefing", href: "/contact" };
const reqPrimary = { label: "Request this service", href: "/contact" };

export const serviceDetails: Record<string, DetailData> = {
  "data-discovery": {
    eyebrow: "SERVICE 01 · DISCOVERY & CLASSIFICATION",
    title: { before: "Find it. Then", italic: "understand", after: " it." },
    subtitle:
      "A human-led engagement that locates and classifies sensitive data across your cloud, SaaS, and on-premise estate — the rigorous, expert counterpart to an automated scan.",
    heroPrimary: reqPrimary,
    heroSecondary,
    overview: {
      heading: "Most organisations cannot answer the simplest question about their own information: where is it, and which of it matters?",
      paras: [
        "Sensitive data sprawls into forgotten stores, shadow copies, and systems nobody remembers commissioning. You cannot protect what you cannot see — and so the work begins not with defence but with discovery.",
        "This engagement locates sensitive information across the whole estate, including the places no inventory remembers, and classifies it by genuine business and regulatory sensitivity rather than by a crude, uniform rule. Where the platforms run this continuously, we run it rigorously and once — the right choice for an organisation that needs the answer established, not subscribed to.",
      ],
      pullquote: "You cannot protect what you cannot see. So we begin by seeing.",
    },
    sectionLabel: "WHAT IT INCLUDES",
    sectionSubLabel: "INSPIRED BY: THE LEADER’S DSPM, AS A SCOPED ENGAGEMENT",
    features: [
      { name: "Discovery across the estate", desc: "Cloud, SaaS, on-premise, and the shadow stores no inventory remembers." },
      { name: "Classification by true sensitivity", desc: "Protection made proportionate to consequence, not uniform and therefore ineffective." },
      { name: "Regulatory mapping", desc: "Sensitive data tied to the obligations that govern it — GDPR, and sector rules." },
      { name: "A living map", desc: "A clear, prioritised picture of what you hold and where your real exposure lies." },
    ],
    cta: { heading: "See your true data map.", subtext: "Begin with a confidential scoping call — establish where your sensitive data lives, once and rigorously.", nextLabel: "Next: Access Review →", nextHref: "/services/access-review" },
  },
  "access-review": {
    eyebrow: "SERVICE 02 · DATA ACCESS REVIEW",
    title: { before: "Who — and what", italic: "AI", after: " — can reach your data." },
    subtitle:
      "An investigation of every identity, human and machine, that can reach each class of sensitive data — and the standing excess an adversary inherits the moment one account falls.",
    heroPrimary: reqPrimary,
    heroSecondary,
    overview: {
      heading: "Access is the quiet vulnerability.",
      paras: [
        "Permissions accrete over years — granted for a project long finished, inherited from a role long changed, extended for a convenience long forgotten — until the map of who can reach what bears no resemblance to who should. And every standing permission is an inheritance waiting for an adversary, who needs to compromise only a single over-privileged account to acquire all that it can touch.",
        "This review reconstructs the true access map — every human identity, every service account, and, increasingly, every AI agent — and surfaces the excess that least privilege would remove. In the age of autonomous agents, this last category is the most urgent and the least examined: an AI granted broad access for convenience is a blast radius nobody measured.",
      ],
      pullquote: "An adversary needs only one over-privileged account. We find it before they do.",
    },
    sectionLabel: "WHAT IT INCLUDES",
    sectionSubLabel: "INSPIRED BY: THE LEADER’S ACCESS DETECTIVE",
    features: [
      { name: "The true access map", desc: "Every identity — human, service, and AI — that can reach each class of data." },
      { name: "Standing-excess exposed", desc: "The accreted permissions that least privilege would, and should, remove." },
      { name: "Agent access, examined", desc: "The new and urgent question of what your AI agents can reach." },
      { name: "A remediation path", desc: "A prioritised plan to close the excess without breaking what works." },
    ],
    cta: { heading: "Map your real access — before someone else does.", subtext: "Including the AI agents nobody has examined yet.", nextLabel: "Next: Shadow-AI →", nextHref: "/services/shadow-ai" },
  },
  "shadow-ai": {
    eyebrow: "SERVICE 03 · SHADOW-AI & AI DATA-EXPOSURE",
    badge: "HIGHEST-DIFFERENTIATION SERVICE",
    title: { before: "The fastest-growing exposure path in the enterprise." },
    subtitle:
      "A discovery of the AI tools in use across your organisation — sanctioned and not — and an assessment of what sensitive data is quietly flowing into them.",
    heroPrimary: reqPrimary,
    heroSecondary,
    overview: {
      heading: "In two years, AI became the enterprise’s newest and least-governed exfiltration path.",
      paras: [
        "Employees, acting in good faith and seeking only to work faster, paste sensitive material into public AI tools that retain, learn from, and may one day expose it. Whole categories of AI — sanctioned, embedded, and entirely unsanctioned — now touch corporate data with almost no oversight. This is the frontier, and it is wide open.",
        "This assessment discovers the AI tools genuinely in use, distinguishes the sanctioned from the shadow, and traces what sensitive data is flowing into each. It is the one service where demand is outrunning supply most sharply — and the one where a forward-looking firm can demonstrate that it understands where the risk is going, not merely where it has been.",
      ],
      pullquote: "AI is the enterprise’s newest exfiltration path. Most have not yet looked.",
    },
    sectionLabel: "WHAT IT INCLUDES",
    sectionSubLabel: "INSPIRED BY: THE LEADER’S AI-SPM",
    features: [
      { name: "Shadow-AI discovery", desc: "The sanctioned, embedded, and unsanctioned AI tools genuinely in use." },
      { name: "Exposure tracing", desc: "What sensitive data is flowing into each — and where it could surface." },
      { name: "Guardrail guidance", desc: "Practical controls to put in place before AI becomes the newest breach path." },
      { name: "Forward-looking posture", desc: "A clear view of risk where it is going, not only where it has been." },
    ],
    cta: { heading: "Find out where your data is already going.", subtext: "Before AI becomes the breach you have to explain.", nextLabel: "Next: DLP Tuning →", nextHref: "/services/dlp-tuning" },
  },
  "dlp-tuning": {
    eyebrow: "SERVICE 04 · DLP STRATEGY & TUNING",
    title: { before: "From a fog of alerts to a", italic: "few", after: " that matter." },
    subtitle:
      "Expert review and tuning of your existing data-loss-prevention tooling — cutting the false-positive noise that exhausts a team until the real signal is the one they miss.",
    heroPrimary: reqPrimary,
    heroSecondary,
    overview: {
      heading: "Most DLP tooling fails not by missing threats but by drowning them.",
      paras: [
        "An untuned system generates such a volume of false positives that the team responsible learns, out of sheer exhaustion, to ignore it — and the one genuine alert, when it comes, arrives in a fog of noise and is missed. The tool is working; the defence is not. The problem is not capability but calibration.",
        "This advisory engagement reviews and tunes the tooling a client already owns, cutting the false-positive noise and focusing alerts on what genuinely matters. We do not sell a replacement product — we make the investment already made finally work. It is among the highest-return engagements available, because it converts an ignored system into a trusted one.",
      ],
      pullquote: "A tool that cries wolf is worse than none. We teach it to stay silent until it matters.",
    },
    sectionLabel: "WHAT IT INCLUDES",
    sectionSubLabel: "INSPIRED BY: THE LEADER’S CONSOLIDATED DLP, AS ADVISORY",
    features: [
      { name: "Noise reduction", desc: "Cutting the false positives that train a team to ignore their own tools." },
      { name: "Focused alerting", desc: "Tuning toward real exfiltration, genuine violations, and anomalous access." },
      { name: "Policy refinement", desc: "Rules that reflect how the organisation actually works, not a generic template." },
      { name: "Investment, rescued", desc: "Making the tooling already owned finally deliver what it promised." },
    ],
    cta: { heading: "Make the tooling you already own finally work.", subtext: "One of the highest-return engagements we offer.", nextLabel: "Next: Managed Monitoring →", nextHref: "/services/managed-monitoring" },
  },
  "managed-monitoring": {
    eyebrow: "SERVICE 05 · MANAGED DATA-RISK MONITORING",
    title: { before: "Continuity, run by", italic: "people", after: "." },
    subtitle:
      "For clients who want an ongoing partner rather than a one-time answer, an expert-led retainer: periodic re-assessment, risk-reduction guidance, and breach-response support.",
    heroPrimary: { label: "Start a retainer", href: "/contact" },
    heroSecondary,
    overview: {
      heading: "Some organisations need the answer once. Others need a partner.",
      paras: [
        "A continuous, expert relationship that watches as the estate evolves, the regulations shift, and new data and new AI quietly expand the surface to be defended. For them, this retainer offers what an automated platform cannot: judgment that persists, applied by people who come to know the organisation deeply over time.",
        "The engagement runs as a deliberate, repeating loop — assess the current risk, guide its reduction, monitor for change, and report with clarity — and stands ready, when an incident comes, with expert-led breach-response support.",
      ],
      pullquote: "Not a subscription to a system. A standing alliance with a team.",
    },
    sectionLabel: "WHAT IT INCLUDES",
    sectionSubLabel: "INSPIRED BY: THE LEADER’S MANAGED SERVICE, AS A HUMAN RETAINER",
    features: [
      { name: "A continuous loop", desc: "Assess, reduce, monitor, report — a deliberate, repeating discipline." },
      { name: "Judgment that persists", desc: "Experts who come to know your organisation deeply over time." },
      { name: "Change, watched", desc: "Vigilance as the estate, the regulations, and the AI landscape evolve." },
      { name: "Breach-response, ready", desc: "Expert-led support standing by for the incident, before it arrives." },
    ],
    cta: { heading: "Make us your standing alliance.", subtext: "Judgment that persists — and breach-response support, ready before the incident arrives.", nextLabel: "← All services", nextHref: "/services" },
  },
};

export const serviceSlugs = Object.keys(serviceDetails);
