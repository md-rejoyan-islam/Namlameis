import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";

const PAGES = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "How Namlameis collects, uses, and protects personal data — aligned with the GDPR and the Austrian Data Protection Act.",
  },
  terms: {
    title: "Terms of Service",
    intro: "The terms that govern the use of this website and our services.",
  },
  security: {
    title: "Security",
    intro:
      "Our security posture, responsible-disclosure process, and how to reach us securely.",
  },
} as const;

type Slug = keyof typeof PAGES;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.intro, robots: { index: false } };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = PAGES[slug as Slug];
  if (!page) notFound();

  return (
    <>
      <PageHero eyebrow="Legal" title={page.title} intro={page.intro} />
      <Section tone="paper">
        <Container size="narrow">
          <div className="prose-measure space-y-5 text-muted">
            <p className="text-lg leading-relaxed">
              This document is being finalized for publication. For any question
              about how we handle your data or about disclosing a vulnerability,
              contact us at{" "}
              <a
                href="mailto:hello@namlameis.com"
                className="text-azure underline underline-offset-2"
              >
                hello@namlameis.com
              </a>
              {slug === "security" && (
                <>
                  {" "}
                  or, for disclosures,{" "}
                  <a
                    href="mailto:disclose@namlameis.com"
                    className="text-azure underline underline-offset-2"
                  >
                    disclose@namlameis.com
                  </a>
                </>
              )}
              .
            </p>
            <p className="text-sm text-subtle">
              © {2024}–2026 Namlameis · Salzburg, Austria
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
