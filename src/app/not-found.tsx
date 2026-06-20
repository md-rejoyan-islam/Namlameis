import { Container } from "@/components/ui/Container";
import { LinkButton, ArrowRight } from "@/components/ui/Button";
import { AntMark } from "@/components/AntMark";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy text-paper">
      <div className="signal-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <Container className="relative text-center">
        <AntMark className="mx-auto h-12 w-12 text-paper/80" />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-amber">
          404 · Trail lost
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
          This path led nowhere.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-paper/70">
          The page you were looking for isn’t here. Let’s get you back to a known
          route.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/" size="lg">
            Back to home <ArrowRight />
          </LinkButton>
          <LinkButton href="/solutions" size="lg" variant="light">
            Explore solutions
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
