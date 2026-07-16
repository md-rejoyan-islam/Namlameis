import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { AntMark } from "@/components/AntMark";

export const metadata: Metadata = {
  title: "About",
  description:
    "Namlameis was founded in 2024 to find what others miss — a small, patient, deeply skilled practice operating from a branch in Salzburg, Austria.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Founded in 2024 to find what others miss."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
            <Reveal className="space-y-6">
              <Eyebrow className="mb-1">Our story</Eyebrow>
              <p className="text-lg leading-relaxed text-muted">
                Namlameis was founded in 2024 on a single conviction: that the
                threats which truly endanger an institution are precisely the ones
                automation was never built to find. While much of the security
                industry grew louder and more automated, we chose the opposite
                path — a small, patient, deeply skilled practice that does the
                work, finds what is actually there, and reports it with precision.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Our name and our emblem are the same idea. An ant colony is not
                formidable because any single ant is strong; it is formidable
                because of the structure, patience, and relentless search of the
                colony as a whole. It explores every path until the surest route
                to the goal emerges. That is how we work — distributed,
                methodical, signal-driven, and quietly unstoppable.
              </p>
              <p className="text-lg leading-relaxed text-muted">
                Today Namlameis unites four disciplines that the rest of the
                industry treats as separate — AI-powered cybersecurity, human-led
                vulnerability discovery, threat detection and response, and
                reputation defense — in one coherent practice, because modern
                adversaries do not respect the boundaries between them. We exist to
                find the unknown, to signal it before it becomes a crisis, and to
                do the work that does not announce itself, for the institutions
                that cannot afford the alternative.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="sticky top-28 space-y-6">
                <div className="relative overflow-hidden rounded-xl bg-navy p-10 text-paper">
                  <div
                    className="signal-grid absolute inset-0 opacity-40"
                    aria-hidden="true"
                  />
                  <AntMark className="relative h-16 w-16 text-paper/90" />
                  <p className="relative mt-6 font-display text-lg leading-relaxed tracking-tight">
                    The colony explores every path until the surest route emerges.
                  </p>
                </div>
                <dl className="rounded-xl border border-line bg-mist p-8">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                      Founded
                    </dt>
                    <dd className="mt-1 font-display text-2xl font-medium text-heading">
                      2024
                    </dd>
                  </div>
                  <div className="mt-6">
                    <dt className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                      Where we are
                    </dt>
                    <dd className="mt-1 text-[1.02rem] leading-relaxed text-heading">
                      A branch in Salzburg, Austria — working with clients
                      internationally.
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection
        title="The team you call for the threat no one else thought to look for."
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "From our leadership", href: "/company/leadership" }}
      />
    </>
  );
}
