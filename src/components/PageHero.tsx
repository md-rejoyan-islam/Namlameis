import { Container } from "./ui/Container";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/cn";

// Inner-page hero on a deep navy field with a subtle signal grid.
export function PageHero({
  title,
  intro,
  className,
  video,
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  className?: string;
  /** Looping background video (with poster fallback). Static poster only under reduced-motion. */
  video?: { src: string; poster: string };
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy text-paper",
        className,
      )}
    >
      {video ? (
        <>
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-40 motion-reduce:hidden"
            src={video.src}
            poster={video.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          {/* eslint-disable-next-line @next/next/no-img-element -- static reduced-motion fallback, no next/image processing needed */}
          <img
            src={video.poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover opacity-40 motion-reduce:block"
          />
          <div className="absolute inset-0 bg-navy/70" aria-hidden="true" />
        </>
      ) : (
        <div className="signal-grid absolute inset-0 opacity-60" aria-hidden="true" />
      )}
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
          <Reveal delay={60}>
            <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-taupe">
                {intro}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
