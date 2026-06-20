import { cn } from "@/lib/cn";

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
        : "max-w-7xl";
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8", max, className)}>
      {children}
    </div>
  );
}
