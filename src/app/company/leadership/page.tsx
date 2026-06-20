import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "A message from the leadership of Namlameis — in their own words.",
};

const messages = [
  {
    initials: "MM",
    name: "Malik Myasar A.",
    role: "Founder & Chief Executive Officer",
    heading: "A message from the Founder & CEO",
    quote:
      "I founded Namlameis because the institutions worth defending deserve more than noise. They deserve a small firm of patient people who do the work, find what is genuinely there, and report it without theatre. I am not in a hurry to be the loudest voice in our field. I intend, instead, to be the most useful one — the team you call when the threat is the one no one else thought to look for. That is the promise behind everything we build.",
  },
  {
    initials: "HR",
    name: "MD Hasanur Rahman",
    role: "Chief Operating Officer & Chief Technology Officer",
    heading: "A message from the COO & CTO",
    quote:
      "Security is not a product you purchase once; it is a discipline you practice every day. My responsibility is to make certain that the standard we promise is the standard we deliver — in every test we run, every system we defend, and every finding we hand to a client. We measure ourselves by what we discover before an adversary does. That is the craft, and it is the whole of the company.",
  },
];

function Monogram({ initials }: { initials: string }) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-azure font-display text-xl font-semibold text-paper shadow-[var(--shadow-card)]">
      {initials}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero eyebrow="Leadership" title="In their own words." />

      <Section tone="paper">
        <Container size="narrow">
          <div className="space-y-10">
            {messages.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <figure className="rounded-xl border border-line bg-mist p-8 shadow-[var(--shadow-card)] sm:p-10">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">
                    {m.heading}
                  </p>
                  <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed tracking-tight text-ink sm:text-[1.55rem]">
                    “{m.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4 border-t border-line pt-6">
                    <Monogram initials={m.initials} />
                    <div>
                      <div className="font-display text-lg font-medium text-ink">
                        {m.name}
                      </div>
                      <div className="text-sm text-muted">{m.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "About Namlameis", href: "/company/about" }}
      />
    </>
  );
}
