import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { industries, getIndustry } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.heroHeadline,
    openGraph: {
      title: `${industry.name} · Namlameis`,
      description: industry.heroHeadline,
    },
  };
}

function CheckMark() {
  return (
    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <path
          d="M3.5 8.5 6.5 11.5 12.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const others = industries.filter((i) => i.slug !== industry.slug);

  return (
    <>
      <PageHero eyebrow="Industries" title={industry.heroHeadline} />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Eyebrow className="mb-5">The challenge</Eyebrow>
              <p className="text-lg leading-relaxed text-muted">
                {industry.challenge}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow className="mb-5">How we help</Eyebrow>
              <ul className="space-y-5">
                {industry.help.map((h) => (
                  <li key={h} className="flex gap-3.5">
                    <CheckMark />
                    <span className="text-[1.02rem] leading-relaxed text-ink/90">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* OTHER INDUSTRIES */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <Eyebrow className="mb-6">Other industries</Eyebrow>
          </Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 50}>
                <Link
                  href={`/industries/${o.slug}`}
                  className="group flex h-full items-center justify-between gap-4 border-b border-r border-line bg-paper p-6 transition-colors hover:bg-mist"
                >
                  <span className="font-display text-lg font-medium tracking-tight text-ink">
                    {o.name}
                  </span>
                  <ArrowRight className="shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
