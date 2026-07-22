import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceRequestForm } from "@/components/ServiceRequestForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a confidential conversation. Tell us what you need to defend — most engagements begin with a short, confidential call.",
};

const details = [
  { label: "General enquiries", value: site.email.general, href: `mailto:${site.email.general}` },
  {
    label: "Secure / encrypted",
    value: site.email.secure,
    href: `mailto:${site.email.secure}`,
    note: "PGP fingerprint available on request",
  },
  { label: "Vulnerability disclosure", value: site.email.disclosure, href: `mailto:${site.email.disclosure}` },
  { label: "Location", value: "Branch in Salzburg, Austria" },
  { label: "LinkedIn", value: "linkedin.com/company/namlameis", href: site.linkedin },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start a confidential conversation."
        intro="Tell us what you need to defend. Most engagements begin with a short, confidential call; if we are the right firm, we follow with a clear proposal — usually within a week."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact details */}
            <Reveal>
              <dl className="space-y-6">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-[1.02rem] text-heading">
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="transition-colors hover:text-amber"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                      {d.note && (
                        <span className="mt-0.5 block text-sm text-subtle">
                          {d.note}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* Service-request form */}
            <Reveal delay={100}>
              <div className="rounded-xl border border-line bg-mist p-7 shadow-[var(--shadow-card)] sm:p-9">
                <p className="mb-7 text-sm leading-relaxed text-muted">
                  Register a request directly. The team reviews every submission
                  and responds.
                </p>
                <ServiceRequestForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
