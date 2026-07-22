import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { IndustryCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "We work where a missed flaw is never merely an inconvenience: financial services and FinTech, government and defense, and critical infrastructure.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Where the stakes are highest."
        intro="We work where a missed flaw is never merely an inconvenience — where it is regulatory, strategic, or a matter of public safety."
      />
      <Section tone="mist">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 70}>
                <IndustryCard industry={ind} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
