import { Container } from "./ui/Container";
import { Eyebrow } from "./ui/Section";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

// Inner-page hero on a deep navy field with a subtle signal grid.
export function PageHero({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy text-paper",
        className,
      )}
    >
      <div className="signal-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-azure/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-teal/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={60}>
            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
