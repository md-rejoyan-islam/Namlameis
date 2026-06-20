import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Platform",
  description:
    "One system, from signal to narrative — automated discovery, risk calculation, real-time detection, automated response, and threat narratives a human can act on.",
};

const layers = [
  {
    name: "Automated discovery",
    body: "Continuous attack-surface mapping so nothing material goes unseen.",
  },
  {
    name: "Risk calculation",
    body: "Every finding scored for real impact, in your context.",
  },
  {
    name: "Real-time detection",
    body: "Recognizing the shape of an attack, not just its signature.",
  },
  {
    name: "Automated response",
    body: "Containment at machine speed, with a human in command.",
  },
  {
    name: "Threat narratives",
    body: "Raw telemetry transformed into a clear account of what matters and why.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The Platform"
        title="One system. From signal to narrative."
        intro="A multi-layered approach across all of your networks in real time — automating discovery, calculating risk, detecting threats, and planning response, then transforming overwhelming data into a clear, contextual threat narrative a human can act on."
      />

      <Section tone="paper">
        <Container>
          <Reveal>
            <Eyebrow className="mb-8">The layers</Eyebrow>
          </Reveal>
          <ol className="relative space-y-px overflow-hidden rounded-2xl border border-line bg-line">
            {layers.map((l, i) => (
              <Reveal key={l.name} delay={i * 60} as="li">
                <div className="group flex items-start gap-6 bg-paper p-7 transition-colors hover:bg-mist sm:items-center sm:p-8">
                  <span className="font-mono text-sm tabular-nums text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:flex sm:flex-1 sm:items-baseline sm:gap-8">
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink sm:w-72 sm:shrink-0">
                      {l.name}
                    </h3>
                    <p className="mt-2 text-[1.02rem] leading-relaxed text-muted sm:mt-0">
                      {l.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-2xl">
              The platform finds the known so our researchers can spend their
              attention where it uniquely counts:{" "}
              <span className="text-amber">on the unknown.</span>
            </p>
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
