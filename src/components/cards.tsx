import Link from "next/link";
import { ArrowRight } from "./ui/Button";
import type { Solution, Industry } from "@/lib/content";
import { cn } from "@/lib/cn";

export function SolutionCard({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className={cn(
        "group relative flex flex-col rounded-xl border border-line bg-paper p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <span className="font-mono text-xs tracking-[0.18em] text-amber">
        {solution.number}
      </span>
      <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight text-ink">
        {solution.cardTitle}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {solution.cardBlurb}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-amber">
        Explore
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}

export function IndustryCard({
  industry,
  className,
}: {
  industry: Industry;
  className?: string;
}) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
    >
      <h3 className="font-display text-xl font-medium leading-snug tracking-tight text-ink">
        {industry.name}
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
        {industry.cardBlurb}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-amber">
        View industry
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
