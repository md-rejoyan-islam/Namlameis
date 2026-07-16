import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "light" | "dark";
type Size = "md" | "lg";

// Cyera's button spec, measured from the live site: 12px radius (a "squircle",
// not a pill), 16px/600, ~50px tall. globals.css already claimed this shape —
// "Buttons are 12px squircles, not full pills" — while shipping rounded-full.
const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-[-0.01em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-[50px] px-6 text-base",
};

const variants: Record<Variant, string> = {
  // Blue is the action colour. Both gradient stops clear white text:
  // #4945FF = 4.88, #3C38E5 = 7.66.
  primary:
    "bg-[image:var(--grad-cta)] text-white shadow-blue hover:bg-[image:var(--grad-cta-hover)] hover:-translate-y-0.5",
  secondary: "border border-line-strong text-heading hover:border-ink hover:bg-linen",
  ghost: "text-heading hover:text-blue-text",
  // On ink surfaces the light blue is the accent that clears 4.5:1 (9.86).
  light:
    "border border-white/25 text-paper hover:bg-white/10 hover:border-blue-on-dark/60",
  dark: "bg-ink text-paper hover:bg-[#1d0940] hover:-translate-y-0.5",
};

function classesFor(variant: Variant, size: Size, className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link href={href} className={classesFor(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={classesFor(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
