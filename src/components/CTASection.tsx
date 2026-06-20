import { Container } from "./ui/Container";
import { LinkButton, ArrowRight } from "./ui/Button";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Let’s talk about what others may have missed.",
  body = "The first conversation is confidential, and it costs nothing. If you are responsible for defending something that matters, start there.",
  primary = { label: "Request a briefing", href: "/contact" },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink text-paper">
      <Container className="py-20 sm:py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-paper/70">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <LinkButton href={primary.href} size="lg" className="w-full sm:w-auto">
              {primary.label} <ArrowRight />
            </LinkButton>
            {secondary && (
              <LinkButton
                href={secondary.href}
                size="lg"
                variant="light"
                className="w-full sm:w-auto"
              >
                {secondary.label}
              </LinkButton>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
