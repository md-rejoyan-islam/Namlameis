import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { SolutionCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { solutions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Five disciplines, one method: AI-powered cybersecurity, vulnerability discovery, threat detection and response, reputation defense, and data security.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Five disciplines. One method."
        intro="The rest of the industry treats these as separate. We unite them — because modern adversaries do not respect the boundaries between them."
      />
      <Section tone="mist">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <SolutionCard solution={s} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
