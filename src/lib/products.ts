import type { DetailData } from "@/components/inner";

export type SuiteCard = {
  no: string;
  name: string;
  desc: string;
  slug: string;
  accent: string;
  tint: string;
  iconKey: string;
};

export const productSuite: SuiteCard[] = [
  { no: "01", name: "Client Portal", desc: "A private, encrypted workspace where each client follows their engagement in real time.", slug: "client-portal", accent: "#8A39C0", tint: "rgba(138,57,192,0.12)", iconKey: "portal" },
  { no: "02", name: "Request Intake & Triage", desc: "Captures exactly what a client needs and routes it, triaged, to the right expert in seconds.", slug: "request-intake", accent: "#8A39C0", tint: "rgba(138,57,192,0.12)", iconKey: "intake" },
  { no: "03", name: "Findings Dashboard", desc: "Raw findings rendered into a clear, prioritised, human-readable story.", slug: "findings-dashboard", accent: "#6D28D9", tint: "rgba(109,40,217,0.12)", iconKey: "dashboard" },
  { no: "04", name: "Trust Center", desc: "A living, public statement of the firm’s own security and compliance posture.", slug: "trust-center", accent: "#6D28D9", tint: "rgba(109,40,217,0.12)", iconKey: "shield" },
  { no: "05", name: "Threat-Briefing Hub", desc: "The home of the firm’s research and recurring intelligence briefings.", slug: "briefing-hub", accent: "#8A39C0", tint: "rgba(138,57,192,0.12)", iconKey: "doc" },
  { no: "06", name: "Secure Data Vault", desc: "An encrypted, access-governed, fully-audited store for sensitive engagement data.", slug: "data-vault", accent: "#8A39C0", tint: "rgba(138,57,192,0.12)", iconKey: "vault" },
];

const heroPrimary = { label: "Get a demo", href: "/contact" };
const heroSecondary = { label: "Request a briefing", href: "/contact" };

export const productDetails: Record<string, DetailData> = {
  "client-portal": {
    title: { before: "Engagement & findings, in one", italic: "secure", after: " place." },
    subtitle:
      "A private, encrypted workspace where each client follows their engagement in real time — scope, progress, findings, and remediation, all in one calm interface.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "The relationship between a security firm and its client is, for most firms, a black box.",
      paras: [
        "Work happens somewhere unseen; a report arrives at the end; the client is left to trust that the interval was well spent. The Client Portal abolishes that opacity. From the moment an engagement begins, the client has a private, encrypted window into it — the scope as agreed, the progress as it unfolds, each finding as it is validated, and the remediation status as it is closed.",
        "Nothing in the portal is decorative. Every element exists to answer a question a responsible client will ask: where are we, what have you found, and what must I do about it.",
      ],
      pullquote: "The opposite of a black box is a window. This is the window.",
    },
    sectionLabel: "WHAT IT DOES",
    features: [
      { name: "Live engagement view", desc: "Scope, milestones, and progress, updated as the work proceeds — never a surprise at the end." },
      { name: "Findings, as they land", desc: "Each validated finding with its severity, impact, reproduction, and remediation status." },
      { name: "Remediation tracking", desc: "A shared, living record of what has been fixed, what is pending, and what has been verified." },
      { name: "Secure document exchange", desc: "Reports and sensitive artefacts shared through time-boxed, access-governed links — never email attachments." },
    ],
    stack: ["React / Next.js", "Authenticated Node/Express or Go API", "Role-based access control", "Encrypted Postgres / MongoDB", "Full audit logging", "Time-boxed signed URLs"],
    cta: { heading: "See the portal in a live walkthrough.", nextLabel: "Next: Request Intake →", nextHref: "/products/request-intake" },
  },
  "request-intake": {
    title: { before: "Every request captured and routed in", italic: "seconds", after: "." },
    subtitle:
      "A refined request experience that captures exactly what a client needs and delivers it, triaged and tagged, to the right expert within seconds.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "A request for help is a fragile moment.",
      paras: [
        "A prospective client has decided, often after some hesitation, to reach out — and the experience of that first contact quietly tells them what working with the firm will feel like. A clumsy form, an unacknowledged submission, a slow or generic reply: each is a small betrayal of the confidence it took to ask. The Request Intake exists to honour that moment.",
        "It captures precisely what is needed, validates it, tags it by industry and service, scores it for urgency, and routes it to the right member of the team within seconds, with an immediate, human-toned acknowledgement. Behind the calm front end sits a disciplined pipeline that ensures nothing is ever lost, ignored, or left to chance.",
      ],
      pullquote: "A request for help is an act of trust. We answer it like one.",
    },
    sectionLabel: "WHAT IT DOES",
    features: [
      { name: "A request worth completing", desc: "A clean, considered form that asks only what matters and respects the client’s time." },
      { name: "Instant acknowledgement", desc: "A confidential, reassuring confirmation the moment a request is sent — never silence." },
      { name: "Automatic triage", desc: "Each request tagged by industry, service, and urgency, and routed to the right expert." },
      { name: "Nothing lost", desc: "A status pipeline and internal notifications that guarantee every request is seen and answered." },
    ],
    stack: ["Form with server-side validation", "Queue / pipeline data model", "Email / Slack notification webhooks", "Admin triage dashboard", "Rate-limiting & anti-spam"],
    cta: { heading: "Make your first contact feel like trust.", nextLabel: "Next: Findings Dashboard →", nextHref: "/products/findings-dashboard" },
  },
  "findings-dashboard": {
    title: { before: "Signal, turned into a", italic: "narrative", after: "." },
    subtitle:
      "Raw security findings rendered into a clear, prioritised, human-readable story — severity, business impact, and remediation, all legible at a glance.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "A list of findings is data. A clear account of what they mean, ranked by what they will cost you, is intelligence.",
      paras: [
        "The distance between the two is where most security reporting fails. The Findings Dashboard is the firm’s “signal to narrative” philosophy made visible: it takes the raw output of an engagement and renders it as a story a busy executive and a working engineer can each read in their own way.",
        "Severity is shown in the brand’s own language of colour. Business impact sits beside technical detail, so the “why it matters” is never separated from the “what it is.” Remediation progress is live, turning a static report into a shared, moving picture of risk being reduced.",
      ],
      pullquote: "Being handed a problem is not the same as being handed a way through it.",
    },
    sectionLabel: "WHAT IT DOES",
    features: [
      { name: "Severity at a glance", desc: "Critical, high, medium, and low, in the brand palette, instantly legible." },
      { name: "Impact beside detail", desc: "Every finding pairs its technical nature with its business consequence." },
      { name: "Live remediation", desc: "A moving picture of risk being reduced, not a static snapshot." },
      { name: "Exportable record", desc: "One click to a clean PDF for the client’s own archive and audit trail." },
    ],
    stack: ["Data-visualisation & severity heatmaps", "Filtering & sorting", "Per-client scoping", "PDF export", "Authenticated, role-based CRUD"],
    cta: { heading: "Turn your next report into a way through.", nextLabel: "Next: Trust Center →", nextHref: "/products/trust-center" },
  },
  "trust-center": {
    title: { before: "We practise what we", italic: "sell", after: "." },
    subtitle:
      "A living, public statement of the firm’s own security and compliance posture — because a firm that sells security must visibly hold itself to the standard it asks of others.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "There is a particular hypocrisy the security industry rarely confronts.",
      paras: [
        "Firms that sell vigilance while practising very little of it on themselves. The Trust Center is the firm’s refusal of that hypocrisy, made public. It states openly how Namlameis protects its own systems, the data its clients entrust to it, and the integrity of every engagement — encryption, access control, compliance posture, and a responsible-disclosure channel for anyone who finds a flaw in the firm itself.",
        "For the buyers who matter most — in finance, in government, in critical infrastructure — this page is not marketing. It is a precondition. A firm that cannot answer “how do you secure yourselves” will never pass their vendor review, and the Trust Center answers it before they have to ask.",
      ],
      pullquote: "A firm that sells security must be the first to practise it.",
    },
    sectionLabel: "WHAT IT STATES",
    features: [
      { name: "Data protection, stated", desc: "Encryption in transit and at rest, and secure-deletion practice, described plainly." },
      { name: "Access & audit", desc: "Least-privilege access and full audit logging across the firm’s own systems." },
      { name: "Compliance posture", desc: "Alignment to the GDPR and the Austrian Data Protection Act, kept current." },
      { name: "Responsible disclosure", desc: "A clear, monitored channel for anyone who finds a security issue in the firm." },
    ],
    stack: ["Mostly static or CMS-driven", "Secure vulnerability-report intake", "Live status indicators", "No sensitive data client-side"],
    cta: { heading: "Pass your vendor review before it begins.", nextLabel: "Next: Briefing Hub →", nextHref: "/products/briefing-hub" },
  },
  "briefing-hub": {
    title: { before: "The credibility engine,", italic: "published", after: "." },
    subtitle:
      "The home of the firm’s research and recurring intelligence briefings — the single most powerful instrument a young security firm has for earning trust.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "A security firm earns trust in exactly one durable way: by demonstrating capability in the open.",
      paras: [
        "The Threat-Briefing Hub is the home of that demonstration — original technical research, responsibly-disclosed findings, practical guidance on the regulations that shape the client’s world, and recurring briefings on the threats forming on the horizon. It is, quite deliberately, the most strategically important page on the entire site.",
        "Where the rest of the website asserts that the firm finds what others miss, the Briefing Hub proves it. One genuinely good piece of public research does more for a young firm’s credibility than an entire marketing site, because it replaces a claim with evidence.",
      ],
      pullquote: "The rest of the site asserts. This page proves.",
    },
    sectionLabel: "WHAT IT DOES",
    features: [
      { name: "Featured research", desc: "The firm’s strongest current work, given the prominence it deserves." },
      { name: "Tagged & searchable", desc: "Research, compliance guides, and briefings, filterable by category." },
      { name: "Subscriptions", desc: "A way for the right audience to follow the firm’s thinking over time." },
      { name: "Gated depth", desc: "Premium reports available to qualified clients, capturing genuine interest." },
    ],
    stack: ["CMS or MDX content pipeline", "Subscription capture", "Tag / category filtering", "Optional gated access"],
    cta: { heading: "Follow the thinking. Replace the claim with evidence.", nextLabel: "Next: Secure Data Vault →", nextHref: "/products/data-vault" },
  },
  "data-vault": {
    title: { before: "Where sensitive client data", italic: "lives", after: "." },
    subtitle:
      "An encrypted, access-governed, fully-audited store for the sensitive data every engagement necessarily touches — the firm’s own embodiment of its data-security philosophy.",
    heroPrimary,
    heroSecondary,
    overview: {
      heading: "A breach of the security firm itself is the one incident from which it cannot recover.",
      paras: [
        "Every security engagement necessarily touches sensitive data — the very findings, credentials, and client information that, if mishandled, would turn the firm from a defender into a liability. The Secure Data Vault is the firm’s answer to that existential risk, and the literal embodiment of the principle it sells: protect the data, not merely the place it rests.",
        "Everything within it is encrypted at rest and in transit, reachable only through least-privilege, time-boxed access, and recorded in an immutable audit trail. Sharing is done through governed, expiring links — never an attachment that escapes the boundary. It is the quietest product in the suite, and the one on which all the others depend.",
      ],
      pullquote: "A breach of the defender is the one incident from which there is no recovery.",
    },
    sectionLabel: "WHAT IT DOES",
    features: [
      { name: "Encrypted by default", desc: "At rest and in transit, with key management that does not silently undermine the cryptography." },
      { name: "Least-privilege access", desc: "Only the right people, only for as long as they need it." },
      { name: "Immutable audit", desc: "Every access to every artefact, recorded and reviewable." },
      { name: "Governed sharing", desc: "Time-boxed, access-controlled links — never an unguarded attachment." },
    ],
    stack: ["Encryption at rest & in transit", "Least-privilege access control", "Immutable audit trail", "Time-boxed signed sharing links", "Secrets in a managed vault"],
    cta: { heading: "The discipline behind every other product.", nextLabel: "← Back to the suite", nextHref: "/products" },
  },
};

export const productSlugs = Object.keys(productDetails);
