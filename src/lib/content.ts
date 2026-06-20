// Page content for Solutions and Industries — verbatim from the
// Namlameis Website Content & Build Specification (v1.0).

export type Capability = { name: string; description: string };

export type Solution = {
  slug: string;
  number: string;
  navLabel: string; // short label for cards/nav
  cardTitle: string;
  cardBlurb: string;
  heroHeadline: string;
  heroSub: string;
  overview: string[];
  capabilities: Capability[];
  method?: { heading: string; body: string };
  whatYouReceive: string;
};

export const solutions: Solution[] = [
  {
    slug: "ai-powered-cybersecurity",
    number: "01",
    navLabel: "AI-Powered Cybersecurity",
    cardTitle: "AI-Powered Cybersecurity",
    cardBlurb:
      "Intelligence that learns your environment and defends it in real time.",
    heroHeadline: "Intelligence that learns the adversary.",
    heroSub:
      "Defense at machine speed, guided by human judgment. Our AI-powered cybersecurity recognizes the shape of an attack — not merely its signature — and turns a flood of signal into a decision you can trust.",
    overview: [
      "The defender’s problem has never been too little data — it is too much. The modern adversary hides inside the flood. Namlameis builds and operates the artificial intelligence that finds them there: detection trained on your real environment, intelligence drawn from the live threat landscape, and automated response that contains a threat the instant it is recognized, while a human stays in command of every consequential decision.",
    ],
    capabilities: [
      {
        name: "AI Security",
        description:
          "We secure the artificial intelligence you depend on: the models, the data pipelines, and the agents that increasingly act on your behalf.",
      },
      {
        name: "AI Red-Teaming",
        description:
          "We attack your AI the way a determined adversary would — probing for prompt injection, data leakage, and the failure modes conventional testing cannot see.",
      },
      {
        name: "Generative-AI Threat Defense",
        description:
          "We defend against the new generation of synthetic threats: machine-generated phishing, deepfakes, and disinformation produced faster than any human team can answer alone.",
      },
      {
        name: "Real-Time Threat Intelligence",
        description:
          "A living picture of the threats that matter to you specifically, refreshed continuously and filtered of noise.",
      },
      {
        name: "Detection Engineering",
        description:
          "Detection content tuned to your environment — each rule tested, measured, and owned, never bought off a shelf and forgotten.",
      },
    ],
    whatYouReceive:
      "A detection capability deployed in your environment, an operations runbook your team can run, documentation for every model we put into production, and an evaluation suite that proves the system works against real attack patterns — not just benchmarks.",
  },
  {
    slug: "vulnerability-discovery",
    number: "02",
    navLabel: "Vulnerability Discovery & Offensive Security",
    cardTitle: "Vulnerability Discovery & Offensive Security",
    cardBlurb:
      "Human-led research that finds what scanners and checklists never will.",
    heroHeadline: "Find what others miss. Before it finds you.",
    heroSub:
      "Human-led offensive research for organizations whose attack surface matters enough to need the truth — not a familiar report from a tool that learned nothing new.",
    overview: [
      "Scanners match the patterns of attacks that have already been seen. The breach that ends an institution is almost always the one nobody had a signature for — the complex, chained, human-shaped flaw living in the seam between two systems. This is the work Namlameis was built to do: patient, expert, adversarial research that pursues the unknown vulnerability and proves it before anyone else can exploit it.",
    ],
    capabilities: [
      {
        name: "Vulnerability Discovery",
        description:
          "Deep, manual investigation across applications, APIs, mobile, cloud, and infrastructure, pursuing the flaws automation cannot reason about.",
      },
      {
        name: "Vulnerability Research",
        description:
          "Original research into the technologies you depend on, including the AI systems now woven through them.",
      },
      {
        name: "Penetration Testing & Red Teaming",
        description:
          "Authorized, instrumented, reversible attack simulation — from focused tests to full-scope adversary emulation against people, process, and technology.",
      },
      {
        name: "Attack Surface Management",
        description:
          "Continuous discovery and mapping of everything you expose to the world, including the assets you forgot you owned.",
      },
      {
        name: "Cyber Risk Assessment",
        description:
          "A clear-eyed appraisal of where you are genuinely exposed, prioritized by real business impact rather than raw severity scores.",
      },
    ],
    method: {
      heading: "Our method — the forager’s path",
      body: "Reconnaissance, a long and quiet read of the system as designed and deployed. Hypothesis, a small set of testable ideas about where weakness most likely lives. Instrumented probing, every action documented, authorized, and reversible. Validation, because we report only what we have reproduced. Responsible signal, findings delivered to you first, with the precision required to act. And a written retrospective, the institutional memory each engagement leaves behind.",
    },
    whatYouReceive:
      "A findings report with a reproduction for every issue, technical and business impact, and a clear remediation path — plus a verification re-test once you have fixed what we found, included rather than billed again.",
  },
  {
    slug: "threat-detection-response",
    number: "03",
    navLabel: "Threat Detection & Response",
    cardTitle: "Threat Detection & Response",
    cardBlurb: "See the attack as it forms; answer it before it lands.",
    heroHeadline: "See the attack as it forms. Answer before it lands.",
    heroSub:
      "Detection, response, and the operational discipline that sustains them — engineered into your defense, not bolted on after the incident.",
    overview: [
      "Speed decides the modern incident. The difference between a contained event and a catastrophe is measured in minutes — how quickly the threat is seen, understood, and answered. Namlameis builds the capability to compress that interval: detection tuned to your environment, response planned before it is needed, and the architecture and operations that hold the line under pressure.",
    ],
    capabilities: [
      {
        name: "Threat Detection & Response",
        description:
          "Continuous detection that recognizes the shape of an attack, paired with a response that contains it decisively.",
      },
      {
        name: "Automated Threat Response",
        description:
          "Planned, automated containment that acts at machine speed while keeping a human in command of consequence.",
      },
      {
        name: "Security Operations",
        description:
          "The disciplined daily rhythm of defense, designed so your team can sustain it long after we step back.",
      },
      {
        name: "Incident Response",
        description:
          "When the worst happens, a calm, practiced process: contain, investigate, recover, and learn — with chain-of-custody on every finding.",
      },
      {
        name: "Security Architecture",
        description:
          "Defense designed into the structure of your systems, so the next incident is prevented by construction, not patched after the fact.",
      },
    ],
    whatYouReceive:
      "A tuned detection library with an owner and a test for every rule, written incident playbooks exercised before they are needed, an architecture review against an explicit threat model, and an operating cadence your team can run.",
  },
  {
    slug: "reputation-narrative-defense",
    number: "04",
    navLabel: "Reputation & Narrative Defense",
    cardTitle: "Reputation & Narrative Defense",
    cardBlurb: "A reputation is a perimeter. We monitor, defend, and restore it.",
    heroHeadline: "Defend the story they will tell.",
    heroSub:
      "A reputation can be lost in a day by an adversary who never touches your network. We defend it with the same rigor we bring to your systems.",
    overview: [
      "In an age of synthetic media and coordinated influence, the narrative about an organization has itself become an attack surface. Namlameis treats it as one — mapping the threat environment, monitoring it continuously, and responding to manufactured controversy, disinformation, and impersonation with precision rather than panic. For leaders whose names are institutional assets, we extend this defense to the individual.",
    ],
    capabilities: [
      {
        name: "Reputation & Narrative Defense",
        description:
          "Continuous defense of the perimeter of meaning: the stories, claims, and signals that shape how the world sees you.",
      },
      {
        name: "OSINT",
        description:
          "Open-source intelligence that reveals what an adversary can already learn about your organization and its leadership — so you can close the gap first.",
      },
      {
        name: "Threat Narrative & Analysis",
        description:
          "We transform scattered, overwhelming signal into a clear, contextual account of what is happening, why it matters, and what to do next.",
      },
    ],
    whatYouReceive:
      "A written map of your threat environment and exposure, continuous monitoring against the threats that matter, pre-drafted response playbooks for the most likely scenarios, and — for named individuals — dedicated personal digital-threat protection.",
  },
  {
    slug: "data-security",
    number: "05",
    navLabel: "Data Security",
    cardTitle: "Data Security",
    cardBlurb:
      "Protection that travels with the data — at rest, in motion, and in use.",
    heroHeadline: "Your data outlives every perimeter you build around it.",
    heroSub:
      "Walls protect a place; data does not stay in one. We defend information itself — at rest, in motion, and in use — so that what matters remains protected wherever it travels, whoever touches it, and whatever asks for it.",
    overview: [
      "For three decades, security was conceived as a question of borders: build a strong enough wall, and what lies inside is safe. That assumption quietly expired. Data no longer lives inside a perimeter — it is copied into a colleague’s inbox, synchronized to a personal device, embedded into a vector database, and, increasingly, read and acted upon by autonomous agents that never tire and never sign a confidentiality agreement. The boundary did not move; it dissolved.",
      "Namlameis approaches data security from the only vantage point that survives this collapse: we defend the data, not merely the place it happens to rest. We begin by answering the question most organizations cannot — where does your sensitive information actually live, and who, or what, can reach it? — and we treat the answer as a living map rather than a one-time audit. From that foundation, we build protection that travels with the information itself: classification that reflects genuine business and regulatory sensitivity, controls calibrated to least privilege, and continuous observation of how data is accessed, moved, and transformed. The principle is simple to state and demanding to practice: protection must be a property of the data, not a privilege of its location.",
    ],
    capabilities: [
      {
        name: "Data Discovery & Classification",
        description:
          "We locate sensitive information across your estate — including the shadow copies and forgotten stores no inventory remembers — and classify it by true sensitivity, so that protection is proportionate to consequence rather than uniform and therefore ineffective.",
      },
      {
        name: "Access Governance & Least Privilege",
        description:
          "We map who and what can reach each class of data, and we close the quiet excess of standing permissions that adversaries inherit the moment a single account is compromised.",
      },
      {
        name: "Data-in-Use & AI-Era Exposure",
        description:
          "We address the newest and least-understood surface: the data exposed when it is used — passed into models, retrieved by agents, embedded into AI pipelines — where traditional encryption offers no protection because the system must read the data to function.",
      },
      {
        name: "Encryption & Key Discipline",
        description:
          "We ensure data is protected at rest and in motion with cryptography that is correctly implemented and, just as critically, with key management that does not silently undermine it.",
      },
      {
        name: "Continuous Monitoring & Exfiltration Defense",
        description:
          "We observe how data behaves, establishing what normal access looks like so the abnormal — the slow exfiltration, the unusual query, the agent acting beyond its mandate — becomes visible while it can still be stopped.",
      },
      {
        name: "Regulatory Alignment",
        description:
          "We align protection with the obligations that govern your data, including the GDPR and the Austrian Data Protection Act, so that compliance becomes a consequence of sound security rather than a separate burden.",
      },
    ],
    whatYouReceive:
      "A living map of where your sensitive data resides and who can reach it; a classification scheme calibrated to real sensitivity rather than guesswork; a least-privilege access model with the standing excess removed; monitoring tuned to detect abnormal data movement before it becomes loss; and a clear, prioritized remediation path — each recommendation written for the engineers who must implement it and justified for the leaders who must fund it.",
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export type Industry = {
  slug: string;
  name: string;
  cardBlurb: string;
  heroHeadline: string;
  challenge: string;
  help: string[];
  devNote?: string;
};

export const industries: Industry[] = [
  {
    slug: "fintech",
    name: "Financial Services & FinTech",
    cardBlurb: "Before the regulator — or the adversary — finds the gap.",
    heroHeadline:
      "FinTech cyber defense, before the regulator — or the adversary — finds the gap.",
    challenge:
      "Financial institutions stand at the intersection of relentless regulatory pressure, the most determined adversaries in the threat landscape, and zero tolerance for downtime. A breach is not only an operational event; it is a story that moves markets and a regulatory exposure that compounds long after the systems are restored.",
    help: [
      "Human-led vulnerability discovery across payments, trading, and core banking systems — with particular focus on the business-logic flaws that move money.",
      "AI-powered fraud and intrusion detection, tuned to your real transaction patterns.",
      "Findings mapped to your regulatory obligations, so security work and compliance reinforce one another.",
      "Reputation and narrative defense for incident scenarios, ready before they are needed.",
    ],
  },
  {
    slug: "government-defense",
    name: "Government & Defense",
    cardBlurb: "Discretion, dual-use rigor, and depth for the mission.",
    heroHeadline: "Discretion, dual-use rigor, and depth for the mission.",
    challenge:
      "Government and defense systems face the most capable adversaries that exist, operate under the strictest compliance regimes, and cannot tolerate the exposure of an ordinary commercial security relationship. The work demands not only capability, but discretion and seriousness equal to the mission.",
    help: [
      "Sovereign-grade discretion: engagements are never marketed, never referenced, never disclosed.",
      "Dual-use discipline, with full awareness of EU and Austrian export-control obligations.",
      "Vulnerability research and AI defense built for sophisticated, persistent adversaries.",
      "Defense against information operations and disinformation aimed at public institutions.",
    ],
  },
  {
    slug: "critical-infrastructure",
    name: "Critical Infrastructure",
    cardBlurb: "When a breach becomes a public-safety event.",
    heroHeadline: "When a breach becomes a public-safety event.",
    challenge:
      "Energy, utilities, transport, and the systems a society depends on often run on technology designed decades before the present threat landscape existed — long-lived, difficult to patch, and increasingly connected to networks an adversary can reach. Here, a security failure is not an IT problem. It is a threat to physical safety and continuity.",
    help: [
      "Assessment that respects operational-technology constraints, where an outage carries physical consequence.",
      "Detection engineering tuned to industrial protocols and behavior.",
      "Architecture and resilience review for continuity under attack.",
      "Incident readiness — playbooks and exercises for safety-critical scenarios.",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
