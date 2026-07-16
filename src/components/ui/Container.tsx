import { cn } from "@/lib/cn";

/**
 * The single content measure. The header uses this too — previously the nav ran
 * to max-width 1560 while content sat at 1280, so on a 1920 screen the logo
 * landed 137px left of the h1 beneath it. Gutter matches Cyera's 40px
 * padding-global at desktop.
 */
export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
        ? "max-w-[88rem]"
        : "max-w-[var(--container-content)]";
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-10", max, className)}>
      {children}
    </div>
  );
}
