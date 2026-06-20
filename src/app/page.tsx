import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { LinkButton, ArrowRight } from "@/components/ui/Button";
import { SignalMap } from "@/components/SignalMap";
import { SolutionCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { solutions } from "@/lib/content";

const method = [
  {
    step: "01",
    name: "Reconnaissance",
    body: "A long, quiet read of the system as designed and as deployed.",
  },
  {
    step: "02",
    name: "Hypothesis",
    body: "A small set of testable ideas about where weakness most likely lives.",
  },
  {
    step: "03",
    name: "Probe",
    body: "Instrumented, authorized, reversible — every action documented.",
  },
  {
    step: "04",
    name: "Signal",
    body: "Findings delivered to you first, with the precision required to act.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-paper">
        <div className="signal-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-azure/15 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-24 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div>
            <Reveal>
              <Eyebrow className="mb-6">Cyber · AI · Defense</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-display text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl md:text-[3.6rem]">
                We find what others miss — before it finds you.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
                Namlameis unites AI-powered cybersecurity, human-led vulnerability
                discovery, threat detection and response, and reputation defense in
                a single, disciplined practice. Where automation finds the known, we
                hunt the unknown.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <LinkButton href="/contact" size="lg">
                  Request a briefing <ArrowRight />
                </LinkButton>
                <LinkButton href="/platform" size="lg" variant="light">
                  Explore the platform
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={220} className="relative">
            <div className="relative mx-auto aspect-4/3 w-full max-w-lg">
              <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm" />
              <div className="absolute inset-0 p-6">
                <SignalMap />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* THE DIFFERENCE */}
      <Section tone="paper">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow className="mb-5">The difference</Eyebrow>
            <p className="font-display text-2xl font-medium leading-[1.4] tracking-tight text-ink sm:text-[1.75rem]">
              Most security companies sell you a platform. We give you what a
              platform alone cannot: a patient, expert team that hunts the threats
              automation was never built to find — and an intelligence that turns
              overwhelming signal into a clear story you can act on.
            </p>
            <p className="mt-6 text-lg font-medium text-amber">
              Machines find the known. We find the unknown.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* SOLUTIONS OVERVIEW */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Solutions"
              title="Five disciplines. One method."
              intro="Each links to its full page — coherent where the rest of the industry stays separate."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <SolutionCard solution={s} className="h-full" />
              </Reveal>
            ))}
            <Reveal delay={solutions.length * 60}>
              <LinkButton
                href="/solutions"
                variant="secondary"
                className="flex h-full min-h-40 w-full flex-col items-start justify-end gap-2 rounded-2xl px-7! py-7! text-left"
              >
                <span className="font-display text-lg font-medium">
                  All solutions
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                  See the full practice <ArrowRight />
                </span>
              </LinkButton>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* INDUSTRIES STRIP */}
      <Section tone="navy" className="relative overflow-hidden">
        <div className="signal-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow className="mb-5">Industries</Eyebrow>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-paper sm:text-4xl">
                Trusted where the stakes are highest.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/70">
                Financial services and FinTech, government and defense, and the
                critical infrastructure a nation depends on.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {[
                  { name: "Financial Services & FinTech", href: "/industries/fintech" },
                  { name: "Government & Defense", href: "/industries/government-defense" },
                  { name: "Critical Infrastructure", href: "/industries/critical-infrastructure" },
                ].map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      className="group flex items-center justify-between py-5 text-paper/90 transition-colors hover:text-paper"
                    >
                      <span className="font-display text-xl font-medium tracking-tight">
                        {i.name}
                      </span>
                      <ArrowRight className="text-amber transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* THE METHOD */}
      <Section tone="paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The method"
              title="The forager’s method."
              intro="An ant colony searches every path until the shortest route to the target emerges — patient, distributed, signal-driven. Our engagements follow the same discipline."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => (
              <Reveal key={m.step} delay={i * 70}>
                <div className="h-full bg-paper p-7">
                  <span className="font-mono text-xs tracking-[0.18em] text-amber">
                    {m.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CLOSING CTA */}
      <CTASection
        title="What others may have missed."
        body="The first conversation is confidential, and it costs nothing. If you are responsible for defending something that matters, let us talk."
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "About Namlameis", href: "/company/about" }}
      />
    </>
  );
}
