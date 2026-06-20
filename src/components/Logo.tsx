import Link from "next/link";
import { AntMark } from "./AntMark";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const wordColor = variant === "light" ? "text-paper" : "text-ink";
  const markColor = variant === "light" ? "text-paper" : "text-navy";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <AntMark
        className={`h-7 w-7 ${markColor} transition-transform duration-300 group-hover:-translate-y-0.5`}
      />
      <span
        className={`font-display text-[1.35rem] font-semibold tracking-tight ${wordColor}`}
      >
        {site.name}
      </span>
    </Link>
  );
}
