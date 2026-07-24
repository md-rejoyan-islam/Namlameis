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

type Leader = {
  photo: string;
  name: string;
  role: string;
  heading: string;
  quote: string;
};

const leaders: Leader[] = [
  {
    photo: "/founder/malik.jpeg",
    name: "Malik Myasar A.",
    role: "Founder & Chief Executive Officer",
    heading: "A message from the Founder & CEO",
    quote:
      "I founded Namlameis because the institutions worth defending deserve more than noise. They deserve a small firm of patient people who do the work, find what is genuinely there, and report it without theatre. I am not in a hurry to be the loudest voice in our field. I intend, instead, to be the most useful one — the team you call when the threat is the one no one else thought to look for. That is the promise behind everything we build.",
  },
  {
    photo: "/founder/hasanur.jpeg",
    name: "MD Hasanur Rahman",
    role: "Chief Operating Officer & Chief Technology Officer",
    heading: "A message from the COO & CTO",
    quote:
      "Security is not a product you purchase once; it is a discipline you practice every day. My responsibility is to make certain that the standard we promise is the standard we deliver — in every test we run, every system we defend, and every finding we hand to a client. We measure ourselves by what we discover before an adversary does. That is the craft, and it is the whole of the company.",
  },
];

// Pillars drawn from the leaders' own words — a quiet statement of what the
// firm stands for, placed between the two profiles.
const pillars = [
  { k: "Patience", v: "over noise" },
  { k: "Discovery", v: "before the adversary" },
  { k: "The work", v: "without theatre" },
  { k: "Usefulness", v: "over volume" },
];

/**
 * A single leader as a formal card: portrait on the left, message on the
 * right. The card spans the wide container; the message column is internally
 * capped so the quote line-length stays readable.
 */
function LeaderProfile({ leader }: { leader: Leader }) {
  return (
    <article className="grid items-start overflow-hidden rounded-[var(--radius-2xl)] bg-mist shadow-[var(--shadow-card)] md:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]">
      {/* Portrait — capped height on md+ (shorter than the message column),
          fixed aspect on mobile. */}
      <Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={leader.photo}
          alt={`Portrait of ${leader.name}, ${leader.role}`}
          className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-[22rem] md:w-full"
          loading="lazy"
        />
      </Reveal>

      {/* Message side */}
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
        <Reveal delay={80}>
          {/* small amber rule — a formal plate marker */}
          <span className="mb-4 block h-px w-10 bg-amber/50" aria-hidden="true" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {leader.heading}
          </p>
          <blockquote className="mt-6 font-display text-base font-normal leading-[1.6] tracking-tight text-ink-deep sm:text-lg">
            <span className="text-amber/50">&ldquo;</span>
            {leader.quote}
            <span className="text-amber/50">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
            <span className="h-px w-8 flex-none bg-amber/50" aria-hidden="true" />
            <div>
              <div className="font-display text-lg font-medium text-ink-deep">
                {leader.name}
              </div>
              <div className="text-sm text-muted">{leader.role}</div>
            </div>
          </figcaption>
        </Reveal>
      </div>
    </article>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <PageHero title="In their own words." />

      <Section tone="paper">
        {/* Wide container (was "narrow") — gives the cards room to breathe
            and lets the portrait / message split read at a larger scale. */}
        <Container size="wide">
          <div className="space-y-10 sm:space-y-12">
            {leaders.map((leader) => (
              <LeaderProfile key={leader.name} leader={leader} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Values strip — a quiet statement of what the firm stands for. */}
      <Section tone="mist" className="py-16 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-muted">
              What we stand for
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {pillars.map((p) => (
                <div key={p.k} className="bg-paper px-6 py-7 text-center">
                  <div className="font-display text-lg font-medium text-ink-deep">
                    {p.k}
                  </div>
                  <div className="mt-1 text-sm text-muted">{p.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        primary={{ label: "Request a briefing", href: "/contact" }}
        secondary={{ label: "About Namlameis", href: "/company/about" }}
      />
    </>
  );
}
