import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "The Platform",
  description:
    "One intelligence across your entire estate — cloud, SaaS, on-prem, identities, data, and AI, seen together, understood as one, and defended in real time.",
};

const searchPoints = [
  {
    title: "Plain-language questions",
    body: "Ask the way you think — “who can reach the payments database?” — not in code.",
  },
  {
    title: "One search, whole estate",
    body: "Cloud, data, identities, and threats — searched together, in one place.",
  },
  {
    title: "Answers, not lists",
    body: "Results ranked by what matters, each with a next step — not a thousand rows to sift.",
  },
  {
    title: "From question to action",
    body: "Turn any answer straight into a task, an alert, or a fix.",
  },
];

const analyticsPoints = [
  {
    title: "A single risk score",
    body: "One honest number for where you stand today — and whether it's moving the right way.",
  },
  {
    title: "Trends that mean something",
    body: "Not activity for its own sake — risk reduced, over time, in plain view.",
  },
  {
    title: "Built for the boardroom",
    body: "Clear enough to present upward, precise enough to act on downward.",
  },
];

const integrations = [
  {
    title: "Cloud & SaaS",
    body: "AWS, Azure, Google Cloud, Microsoft 365, and the platforms your business runs on.",
    icon: "/platform/icons/icon-pf-cloud.svg",
  },
  {
    title: "Identity providers",
    body: "Okta, Microsoft Entra ID, and the directories that hold your keys.",
    icon: null,
  },
  {
    title: "SIEM, SOAR & security tools",
    body: "Splunk, Microsoft Sentinel, and the operations stack you already trust.",
    icon: null,
  },
  {
    title: "Collaboration & automation",
    body: "Slack, Teams, webhooks, and a full API — so findings flow into how you already work.",
    icon: "/platform/icons/icon-pf-auto.svg",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        title="One intelligence across your entire estate."
        intro="Cloud, SaaS, on-prem, identities, data, and AI — seen together, understood as one, and defended in real time. Not another tool to watch. The system that watches everything else."
        video={{
          src: "/videos/platform-living-estate.mp4",
          poster: "/videos/platform-living-estate-poster.jpg",
        }}
      />

      {/* Unified estate diagram */}
      <Section tone="paper">
        <Container>
          <Reveal>
            <SectionHeading
              title="A single intelligence at the centre of your estate."
              intro="Discovering, assessing, detecting, and responding — across everything you run, seen as one."
              align="center"
            />
          </Reveal>
          <Reveal delay={80}>
            <Figure src="/platform/diagrams/plat-unified.svg" w={1000} h={405} className="mt-14" />
          </Reveal>
        </Container>
      </Section>

      {/* Approach loop */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              title="From signal to action — continuously."
              intro="Not a one-time scan that's stale by morning. A living loop that never stops running."
              align="center"
            />
          </Reveal>
          <Reveal delay={80}>
            <Figure src="/platform/diagrams/plat-approach.svg" w={1000} h={285} className="mt-14" />
          </Reveal>
        </Container>
      </Section>

      {/* Advanced Search */}
      <FeatureSection
        id="search"
        title="Ask your environment a question. Get an answer."
        intro="Not a filter. Not a query language only an engineer can write. A single search box that understands plain questions about your entire estate — and answers in seconds."
        closing="The difference between a tool and an advantage is how fast a question becomes an answer. Ours takes seconds."
        points={searchPoints}
        tone="paper"
        diagram="/platform/diagrams/plat-search.svg"
        diagramSize={{ w: 1000, h: 365 }}
      />

      {/* Analytics */}
      <FeatureSection
        id="analytics"
        title="Your whole posture, at a glance."
        intro="One screen that a board member and an engineer can both read — where you stand, what's improving, and what needs attention now."
        points={analyticsPoints}
        tone="mist"
        reverse
        diagram="/platform/diagrams/plat-analytics.svg"
        diagramSize={{ w: 1000, h: 375 }}
      />

      {/* Integrations */}
      <Section tone="paper" id="integrations">
        <Container>
          <Reveal>
            <SectionHeading
              title="Works with the tools you already run."
              intro="Across cloud, SaaS, on-prem, identity, security operations, collaboration, and automation — the platform strengthens what you have rather than asking you to replace it."
              align="center"
            />
          </Reveal>
          <Reveal delay={80}>
            <Figure src="/platform/diagrams/plat-integrations.svg" w={1000} h={365} className="mt-14" />
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {integrations.map((it) => (
                <div
                  key={it.title}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-mist p-6"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-line bg-paper text-indigo">
                    {it.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element -- next/image blocks SVG optimization by default
                      <img src={it.icon} alt="" width={28} height={28} aria-hidden="true" />
                    ) : (
                      <IconPlaceholder />
                    )}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium tracking-tight text-heading">
                      {it.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{it.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="See the platform in your environment."
        body="The first conversation is confidential, and it costs nothing. Let us show you what it surfaces."
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}

function Figure({
  src,
  w,
  h,
  className,
}: {
  src: string;
  w: number;
  h: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl overflow-hidden rounded-2xl border border-line bg-paper shadow-graph",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- next/image blocks SVG optimization by default */}
      <img src={src} alt="" width={w} height={h} className="h-auto w-full" />
    </div>
  );
}

function FeatureSection({
  id,
  title,
  intro,
  closing,
  points,
  tone,
  reverse = false,
  diagram,
  diagramSize,
}: {
  id: string;
  title: string;
  intro: string;
  closing?: string;
  points: { title: string; body: string }[];
  tone: "paper" | "mist";
  reverse?: boolean;
  diagram: string;
  diagramSize: { w: number; h: number };
}) {
  return (
    <Section tone={tone} id={id}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-14 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>*:first-child]:order-2",
          )}
        >
          <Reveal>
            <h2 className="font-display text-2xl font-normal leading-[1.12] tracking-tight text-ink-deep [&_strong]:font-bold sm:text-3xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
            <ul className="mt-8 space-y-6">
              {points.map((p) => (
                <li key={p.title}>
                  <h3 className="font-display text-base font-medium tracking-tight text-heading">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
            {closing && (
              <p className="mt-8 text-base leading-relaxed text-heading">{closing}</p>
            )}
          </Reveal>
          <Reveal delay={100}>
            <Figure src={diagram} w={diagramSize.w} h={diagramSize.h} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function IconPlaceholder() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M9 3v6M15 3v6M6.5 9h11a1 1 0 0 1 1 1v2a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 5.5 12v-2a1 1 0 0 1 1-1Z" />
      <path d="M12 18v3" />
    </svg>
  );
}
