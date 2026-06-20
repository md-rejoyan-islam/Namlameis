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
    paper: "bg-paper text-ink",
    mist: "bg-mist text-ink",
    navy: "bg-navy text-paper",
    ink: "bg-ink text-paper",
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
    <p className={cn("eyebrow", light && "text-amber", className)}>{children}</p>
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
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl",
          light ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            light ? "text-paper/70" : "text-muted",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
