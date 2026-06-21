import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { solutions, getSolution } from "@/lib/content";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.cardTitle,
    description: solution.heroSub,
    openGraph: {
      title: `${solution.cardTitle} · Namlameis`,
      description: solution.heroSub,
      images: ["/opengraph-image"],
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const others = solutions.filter((s) => s.slug !== solution.slug);

  return (
    <>
      <PageHero
        eyebrow={`Solutions · ${solution.number}`}
        title={solution.heroHeadline}
        intro={solution.heroSub}
      />

      {/* OVERVIEW */}
      <Section tone="paper">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow className="mb-5">Overview</Eyebrow>
            <div className="space-y-5">
              {solution.overview.map((p, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-muted [&>strong]:text-ink"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* CAPABILITIES */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <Eyebrow className="mb-5">Capabilities</Eyebrow>
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              What this practice covers.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {solution.capabilities.map((c, i) => (
              <Reveal key={c.name} delay={i * 50}>
                <div className="h-full rounded-xl border border-line bg-paper p-7 shadow-(--shadow-card)">
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* METHOD (optional) */}
      {solution.method && (
        <Section tone="paper">
          <Container>
            <Reveal className="max-w-3xl">
              <Eyebrow className="mb-5">Method</Eyebrow>
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
                {solution.method.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted">
                {solution.method.body}
              </p>
            </Reveal>
          </Container>
        </Section>
      )}

      {/* WHAT YOU RECEIVE */}
      <Section tone={solution.method ? "mist" : "paper"}>
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-navy p-10 text-paper sm:p-14">
              <div
                className="signal-grid absolute inset-0 opacity-40"
                aria-hidden="true"
              />
              <div className="relative max-w-3xl">
                <Eyebrow className="mb-5">What you receive</Eyebrow>
                <p className="font-display text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                  {solution.whatYouReceive}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* OTHER SOLUTIONS */}
      <Section tone="paper" className="border-t border-line">
        <Container>
          <Reveal>
            <Eyebrow className="mb-6">More solutions</Eyebrow>
          </Reveal>
          <Reveal>
            <div className="grid overflow-hidden rounded-2xl border border-line sm:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/solutions/${o.slug}`}
                  className="group flex h-full items-center justify-between gap-4 border-b border-r border-line bg-paper p-6 transition-colors hover:bg-mist"
                >
                  <span>
                    <span className="font-mono text-xs tracking-[0.18em] text-amber">
                      {o.number}
                    </span>
                    <span className="mt-1 block font-display text-lg font-medium tracking-tight text-ink">
                      {o.cardTitle}
                    </span>
                  </span>
                  <ArrowRight className="shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber" />
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
