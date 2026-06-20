"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { LinkButton, ArrowRight } from "./ui/Button";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    // Sync once on mount in case the page loads already scrolled.
     
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-6 py-3.5 sm:px-8">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink",
                  pathname.startsWith(item.href) &&
                    item.href !== "/" &&
                    "text-ink",
                )}
              >
                {item.label}
                {item.children && (
                  <svg
                    viewBox="0 0 12 12"
                    className="h-3 w-3 text-subtle transition-transform duration-200 group-hover:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-line bg-paper p-2 shadow-[var(--shadow-card-hover)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-mist"
                      >
                        <span className="block text-sm font-medium text-ink">
                          {child.label}
                        </span>
                        {child.blurb && (
                          <span className="mt-0.5 block text-[0.8rem] leading-snug text-subtle">
                            {child.blurb}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <LinkButton href="/contact" size="md">
            Request a briefing <ArrowRight />
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform duration-300",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-ink transition-transform duration-300",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-18 z-40 overflow-y-auto bg-paper lg:hidden">
          <div className="space-y-1 px-6 py-6">
            {mainNav.map((item) => (
              <div key={item.label} className="border-b border-line py-3">
                <Link
                  href={item.href}
                  className="block text-lg font-medium text-ink"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 space-y-1 pl-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <LinkButton href="/contact" size="lg" className="w-full">
                Request a briefing <ArrowRight />
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
