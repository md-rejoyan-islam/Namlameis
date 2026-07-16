import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  tone = "paper",
  id,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "paper" | "mist" | "navy" | "ink";
  id?: string;
}) {
  const tones = {
    paper: "bg-paper text-heading",
    mist: "bg-linen text-heading",
    navy: "bg-navy text-taupe",
    ink: "bg-ink text-taupe",
  };
  return (
    <section
      id={id}
      className={cn("py-20 sm:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}

/**
 * `light` means "this eyebrow sits on a dark surface".
 * It used to apply `text-amber`, which resolves to the same #8C41CC the
 * .eyebrow class already sets — a no-op, and the escape hatch for the 2.94:1
 * failure on dark heroes was therefore never wired up. It now flips the accent
 * to the light violet.
 */
export function Eyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p className={cn("eyebrow", light && "eyebrow-on-dark", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow light={light} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "font-display text-xl font-medium leading-[1.12] tracking-tight sm:text-2xl",
          light ? "text-paper" : "text-heading",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-taupe" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
