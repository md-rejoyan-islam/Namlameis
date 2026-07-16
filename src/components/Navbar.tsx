"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./BrandMark";
import { cn } from "@/lib/cn";

type Item = { name: string; desc?: string; href: string };

const solutions: Item[] = [
  { name: "AI-Powered Cybersecurity", desc: "Defense at machine speed, governed by human judgment.", href: "/solutions/ai-powered-cybersecurity" },
  { name: "Vulnerability Discovery", desc: "Find the flaw automation was never built to see.", href: "/solutions/vulnerability-discovery" },
  { name: "Threat Detection & Response", desc: "See the attack as it forms; answer before it lands.", href: "/solutions/threat-detection-response" },
  { name: "Reputation & Narrative Defense", desc: "A reputation is a perimeter. We defend it.", href: "/solutions/reputation-narrative-defense" },
  { name: "Data Security", desc: "Protection that travels with the data itself.", href: "/solutions/data-security" },
];

const products: Item[] = [
  { name: "Client Portal", desc: "Engagement & findings, one secure place.", href: "/products/client-portal" },
  { name: "Request Intake & Triage", desc: "Captured and routed in seconds.", href: "/products/request-intake" },
  { name: "Findings Dashboard", desc: "Signal, turned into a narrative.", href: "/products/findings-dashboard" },
  { name: "Trust Center", desc: "We practise what we sell.", href: "/products/trust-center" },
  { name: "Threat-Briefing Hub", desc: "The credibility engine, published.", href: "/products/briefing-hub" },
  { name: "Secure Data Vault", desc: "Where sensitive client data lives.", href: "/products/data-vault" },
];

const services: Item[] = [
  { name: "Data Discovery & Classification", href: "/services/data-discovery" },
  { name: "Data Access Review", href: "/services/access-review" },
  { name: "Shadow-AI & AI Data-Exposure", href: "/services/shadow-ai" },
  { name: "DLP Strategy & Tuning", href: "/services/dlp-tuning" },
  { name: "Managed Data-Risk Monitoring", href: "/services/managed-monitoring" },
];

const industries: Item[] = [
  { name: "Financial Services", href: "/industries/fintech" },
  { name: "Government & Defense", href: "/industries/government-defense" },
  { name: "Critical Infrastructure", href: "/industries/critical-infrastructure" },
  { name: "All industries", href: "/industries" },
];

const company: Item[] = [
  { name: "About Namlameis", desc: "Founded 2024 to find what others miss.", href: "/company/about" },
  { name: "Vision & Goals", desc: "The next decade, fought in code and trust.", href: "/company/vision" },
  { name: "Leadership", desc: "In their own words.", href: "/company/leadership" },
  { name: "Research", desc: "Credibility, published.", href: "/company/research" },
];

/**
 * One glyph per menu item, keyed by href — the mega-menu's right rail shows the
 * hovered item's icon. Lucide paths (ISC, free commercial, no attribution),
 * drawn on Lucide's 24 grid. Rendered at 40px, so the stroke is scaled down
 * from Lucide's default 2 to keep the drawn weight near 1.7px at that size
 * (2 x 24/40 = 1.2); anything heavier reads as a blob at this size.
 */
const ITEM_ICONS: Record<string, ReactNode> = {
  // Solutions — same glyphs the homepage discipline cards use, so a solution
  // reads as the same thing in the nav and on the page.
  "/solutions/ai-powered-cybersecurity": (
    <>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M16 8V5a2 2 0 0 1 2-2" />
      <circle cx="16" cy="13" r=".5" />
      <circle cx="18" cy="3" r=".5" />
      <circle cx="20" cy="8" r=".5" />
    </>
  ),
  "/solutions/vulnerability-discovery": (
    <>
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
      <path d="m16 16-1.9-1.9" />
    </>
  ),
  "/solutions/threat-detection-response": (
    <>
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </>
  ),
  "/solutions/reputation-narrative-defense": (
    <>
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 6v8" />
    </>
  ),
  "/solutions/data-security": (
    <>
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
      <rect width="8" height="5" x="3" y="17" rx="1" />
    </>
  ),

  // Products
  "/products/client-portal": (
    <>
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </>
  ),
  "/products/request-intake": (
    <>
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </>
  ),
  "/products/findings-dashboard": (
    <>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </>
  ),
  "/products/trust-center": (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  "/products/briefing-hub": (
    <>
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
      <path d="M18 14h-8" />
      <path d="M15 18h-5" />
      <path d="M10 6h8v4h-8V6Z" />
    </>
  ),
  "/products/data-vault": (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 7v2" />
      <path d="M12 15v2" />
      <path d="M7 12h2" />
      <path d="M15 12h2" />
    </>
  ),

  // Services
  "/services/data-discovery": (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  "/services/access-review": (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  "/services/shadow-ai": (
    <>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </>
  ),
  "/services/dlp-tuning": (
    <>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </>
  ),
  "/services/managed-monitoring": (
    <>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </>
  ),

  // Industries
  "/industries/fintech": (
    <>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </>
  ),
  "/industries/government-defense": (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  "/industries/critical-infrastructure": (
    <>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </>
  ),
  "/industries": (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),

  // Company
  "/company/about": (
    <>
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </>
  ),
  "/company/vision": (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  "/company/leadership": (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  "/company/research": (
    <>
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <path d="M5.58 16.5h12.85" />
    </>
  ),
};

type Key = "solutions" | "products" | "services" | "industries" | "company";

type Menu = {
  key: Key;
  label: string;
  seg: string;
  items: Item[];
  /** Right rail, mirroring Cyera's "Resources" column: a heading plus the
   *  section overview link. Omitted where no distinct overview route exists. */
  rail?: { href: string; label: string; note: string };
};

const MENUS: Menu[] = [
  { key: "solutions", label: "Solutions", seg: "/solutions", items: solutions, rail: { href: "/solutions", label: "All solutions", note: "Five disciplines practised as one method." } },
  { key: "products", label: "Products", seg: "/products", items: products, rail: { href: "/products", label: "The product suite", note: "A platform built around the service." } },
  { key: "services", label: "Services", seg: "/services", items: services, rail: { href: "/services", label: "Data-security services", note: "Human-delivered, start to finish." } },
  { key: "industries", label: "Industries", seg: "/industries", items: industries },
  { key: "company", label: "Company", seg: "/company", items: company },
];

/**
 * The dropdown card. Cyera's geometry — white, 24px radius, 24px padding, 1px
 * tinted dividers — carrying the shared ambient card shadow so a floating panel
 * and a page card are lit the same way. On white the brand purple reads at
 * 5.61:1; it was 3.26:1 on the old ink panel.
 *
 * Left side is a single column, one line per item. The right rail tracks
 * whichever item is hovered/focused on the left, showing that item's own icon,
 * title and description — so the panel is never empty space, and every menu
 * (not just the three with a dedicated overview page) has something there.
 *
 * The card sizes to its own content (`w-max`) rather than spanning the nav:
 * the item column is as wide as its longest label needs, plus a fixed rail.
 * `whitespace-nowrap` instead of `truncate` — under `w-max` a truncating child
 * has no intrinsic width to contribute, so the column would collapse to the
 * rail and ellipsis every label.
 */
function MenuCard({ menu, onNavigate }: { menu: Menu; onNavigate: () => void }) {
  // A fresh menu should preview its own first item, not whatever was hovered
  // in the previous one. The parent remounts this component per menu (a
  // `key={menu.key}` on the call site) rather than resetting this in an
  // effect, so the initial-state read below is only ever wrong for a frame
  // React itself is already re-rendering for.
  const [active, setActive] = useState<Item>(menu.items[0]);

  return (
    // min-w so the short menus (Company is ~110px of labels) do not collapse
    // into a card narrower than its own rail; w-max still lets the long ones
    // grow past it.
    <div className="flex w-max min-w-[560px] rounded-xl border border-line bg-paper p-5 shadow-card">
      <div className="flex flex-1 flex-col content-start gap-y-1">
        {menu.items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNavigate}
            onMouseEnter={() => setActive(it)}
            onFocus={() => setActive(it)}
            className={cn(
              "nm-menu-item flex items-center gap-2.5 rounded-xs px-3 py-1.5 text-sm font-semibold whitespace-nowrap",
              active.href === it.href ? "text-blue-text" : "text-heading",
            )}
          >
            {/* The item's own glyph, matching the one the rail enlarges.
                aria-hidden: it sits on the link that already names it. */}
            <svg
              className="nm-menu-item-ico flex-none"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ITEM_ICONS[it.href]}
            </svg>
            {it.name}
          </Link>
        ))}
      </div>

      {/* Right rail — Cyera separates it with a 1px linen divider. */}
      <div className="ml-6 w-[248px] flex-none border-l border-line pl-6">
        <div className="nm-menu-preview mb-3 flex h-24 w-full items-center justify-center rounded-lg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {ITEM_ICONS[active.href]}
          </svg>
        </div>
        <h2 className="mb-2 text-base font-semibold text-heading">{active.name}</h2>
        {active.desc && (
          <p className="mb-4 text-xs leading-snug text-muted">{active.desc}</p>
        )}
        {menu.rail && (
          <Link
            href={menu.rail.href}
            onClick={onNavigate}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-text underline-offset-4 hover:underline"
          >
            {menu.rail.label}
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState<Key | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Which accordion section is expanded. One at a time: the panel is a fixed
  // pane on a phone, and letting every section stand open turns it into a
  // ~1700px scroll with the CTAs stranded at the bottom.
  const [mobileSection, setMobileSection] = useState<Key | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Partial<Record<Key, HTMLButtonElement | null>>>({});

  // Two header states, matching Cyera exactly: at the top the bar is full
  // width, square-cornered, flush to the viewport edge. Past 16px of scroll
  // it becomes an inset, rounded, floating card with a shadow — the outer
  // header padding and the nav's max-width/radius both switch together so
  // the transition reads as one bar lifting off the page, not two different
  // bars swapping.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Below the desktop breakpoint the bar is a floating card at every scroll
  // position, never flush. Tracked in JS rather than a `max-lg:` variant
  // because the card look is ~8 utilities that would each need duplicating,
  // and the mobile panel's own geometry (inset, top offset) has to agree with
  // it — one boolean keeps the two from drifting apart.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    // Both: `change` is the right event and fires once per breakpoint crossing,
    // but it is not delivered in every environment (it does not fire in the
    // preview pane, which left the bar stuck in its mobile look on a 1440px
    // viewport). `resize` is the belt to that braces — sync() only ever writes
    // the same boolean, so the extra calls cost a no-op re-render at most.
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const closeMenu = useCallback(
    (restoreFocusTo?: Key) => {
      setOpen(null);
      if (restoreFocusTo) triggerRefs.current[restoreFocusTo]?.focus();
    },
    [],
  );

  // Escape closes whichever surface is open and returns focus to its trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (open) closeMenu(open);
      else if (mobileOpen) {
        setMobileOpen(false);
        setMobileSection(null);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, mobileOpen, closeMenu]);

  // Clicking or focusing outside the header dismisses the open menu.
  useEffect(() => {
    if (!open) return;
    const onAway = (e: Event) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("pointerdown", onAway);
    document.addEventListener("focusin", onAway);
    return () => {
      document.removeEventListener("pointerdown", onAway);
      document.removeEventListener("focusin", onAway);
    };
  }, [open]);

  // Park the panel at the horizontal centre of the HEADER — the same spot for
  // every menu, so it never slides left or right as you move across the bar.
  //
  // It still lives inside the trigger's wrapper, because that wrapper is what
  // sets the panel's vertical position (button-height at the top of the page,
  // full-bar-height once scrolled). So the horizontal centring cannot be pure
  // CSS: left-1/2 there means "centre of the trigger", not "centre of the nav".
  // This measures the gap between those two centres and closes it, then clamps
  // to the viewport as a backstop.
  //
  // Writes the transform straight to the node rather than through state: it is
  // a measure-then-correct against real layout, and routing it through setState
  // would re-render the whole header for a value only this element consumes.
  useLayoutEffect(() => {
    if (!open) return;
    const panel = document.getElementById(`nav-menu-${open}`);
    const nav = navRef.current;
    if (!panel || !nav) return;

    const centreOnHeader = () => {
      panel.style.transform = "translateX(-50%)";
      const r = panel.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      let shift = (navRect.left + navRect.width / 2) - (r.left + r.width / 2);

      // Backstop: the header is always wider than the panel today, so this
      // never fires — but it keeps a long menu from being clipped if that
      // stops being true.
      const M = 12;
      if (r.left + shift < M) shift += M - (r.left + shift);
      else if (r.right + shift > window.innerWidth - M) {
        shift += window.innerWidth - M - (r.right + shift);
      }

      panel.style.transform = `translateX(calc(-50% + ${Math.round(shift)}px))`;
    };

    centreOnHeader();
    window.addEventListener("resize", centreOnHeader);
    return () => window.removeEventListener("resize", centreOnHeader);
  }, [open]);

  // Lock background scroll while the mobile panel owns the screen.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // The bar wears its floating-card look when scrolled, and unconditionally on
  // mobile. Everything that has to line up with the card's edges — the header
  // padding, the nav's own radius/border/background, and the mobile panel's
  // inset and top offset — reads this one flag.
  const floating = scrolled || isMobile;
  const lightHero = pathname === "/";
  // Keyed to `floating`, not `scrolled`: on mobile the bar is a white card even
  // at scroll 0, so on a dark-hero page the burger and wordmark would otherwise
  // still be drawn white — invisible on their own background.
  const onDark = !floating && !lightHero;

  const linkTone = (seg: string) => {
    const active = pathname.startsWith(seg);
    if (onDark) return active ? "text-white" : "text-taupe hover:text-white";
    // Base colour is the same deep #292875 heading ink as the section titles,
    // not a lighter muted grey — hover/active both move to the accent blue so
    // there is still a clear "you are here" / "you are pointing at this" cue.
    return active ? "text-blue-text" : "text-heading hover:text-blue-text";
  };

  return (
    <header
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[100] transition-[padding] duration-300",
        floating ? "px-3 pt-3" : "px-0 pt-0",
      )}
    >
      <nav
        ref={navRef}
        aria-label="Main"
        // The panel is a DOM descendant of <nav>, so moving the pointer from a
        // trigger down into it never fires this mouseleave (relatedTarget stays
        // inside). One handler here replaces per-trigger leave handlers and
        // removes the flicker when crossing the gap into the card.
        onMouseLeave={() => setOpen(null)}
        className={cn(
          "pointer-events-auto relative mx-auto flex h-[88px] w-full items-center justify-between gap-3 min-[1280px]:gap-5",
          // Gutter matches Container's px-6 sm:px-10 exactly, so the logo lands
          // on the same vertical as the h1 beneath it, in both states.
          "px-6 sm:px-10",
          "transition-[background-color,box-shadow,border-color,border-radius,max-width] duration-300",
          floating
            ? // Deliberately NOT --container-content (1200px, the page's own
              // content width): logo + six nav triggers + two CTAs need ~1270px
              // to lay out on one line without wrapping, so capping the floating
              // card to the page's content width clipped "Request a briefing"
              // past the card's right edge every time it scrolled. This cap is
              // sized to the header's own content, not the page grid.
              "max-w-[1400px] rounded-t-xl border border-line bg-paper/85 shadow-lg backdrop-blur-xl backdrop-saturate-150"
            : "max-w-none rounded-none border border-transparent bg-transparent",
          // The mobile panel butts against the header's bottom edge, so that
          // edge has to be square while it is open or the two read as separate
          // cards with a notch between them.
          floating && !mobileOpen && "rounded-b-md",
        )}
      >
        <Link
          href="/"
          className="flex flex-none items-center gap-3 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <BrandMark size={38} />
          <span
            className={cn(
              "font-brand text-lg font-extrabold tracking-[0.02em] transition-colors",
              onDark ? "text-white" : "text-heading",
            )}
          >
            NAMLAMEIS
          </span>
        </Link>

        {/* Desktop nav */}
        {/* h-full here too: the per-trigger wrappers below take their own
            h-full from THIS element, not from <nav>. Without it they resolve
            against a content-height parent and the panel opens inside the bar. */}
        <div className="nm-nav-center flex h-full items-center gap-1">
          <Link
            href="/platform"
            className={cn(
              "rounded-xs px-2.5 py-2 text-[15px] font-normal transition-colors",
              linkTone("/platform"),
            )}
          >
            Platform
          </Link>

          {MENUS.map((m) => (
            // The panel's `top-full` resolves against THIS wrapper, so its
            // height decides where the panel opens:
            //   scrolled  -> h-full: wrapper spans the 88px bar, so the panel
            //                clears the floating header card's bottom edge.
            //                Anchoring to the ~36px button instead opened the
            //                panel ~26px INSIDE that card.
            //   at top    -> auto height: the wrapper is just the button, so
            //                the panel sits right under the trigger. There is
            //                no card to clear up here (the bar is transparent),
            //                so the nav-bottom gap only read as drift.
            <div
              key={m.key}
              className={cn(
                "relative flex items-center",
                scrolled && "h-full",
              )}
              onMouseEnter={() => setOpen(m.key)}
            >
              {/*
                Was a <span cursor:default> opened only by onMouseEnter. That put
                five of six nav sections — 25 links — outside the tab order
                entirely, and made them untappable on any touch device wide
                enough to show the desktop nav (>=1024px). It is a real button
                now: focusable, clickable, announced, Escape-dismissible. Hover
                remains as an enhancement on top.
              */}
              <button
                type="button"
                ref={(el) => {
                  triggerRefs.current[m.key] = el;
                }}
                aria-haspopup="true"
                aria-expanded={open === m.key}
                aria-controls={`nav-menu-${m.key}`}
                onClick={() => setOpen(open === m.key ? null : m.key)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-1.5 rounded-xs px-2.5 py-2 text-[15px] font-normal transition-colors",
                  linkTone(m.seg),
                )}
              >
                {m.label}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={cn(
                    "opacity-75 transition-transform duration-200",
                    open === m.key && "rotate-180",
                  )}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/*
                Sized to its own content and parked at the header's horizontal
                centre by the useLayoutEffect above — the same spot for every
                menu, so it no longer jumps sideways as you move across the bar.
                The -50% here is only the pre-measurement start position.
              */}
              {open === m.key && (
                <div
                  id={`nav-menu-${m.key}`}
                  style={{ transform: "translateX(-50%)" }}
                  className={cn(
                    // pt- is the gap above the card, and it must stay padding
                    // (not margin/offset): it is inside the hover target, so
                    // the pointer can cross from trigger to card without the
                    // menu closing underneath it. Smaller at the top of the
                    // page, where the wrapper is already only button-height.
                    "absolute top-full left-1/2",
                    scrolled ? "pt-3" : "pt-2",
                  )}
                >
                  <MenuCard menu={m} onNavigate={() => setOpen(null)} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="nm-nav-cta flex flex-none items-center gap-2 min-[1280px]:gap-2.5">
          <Link
            href="/contact"
            className={cn(
              "rounded-xs border px-3.5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors",
              onDark
                ? "border-white/40 text-white hover:bg-white/10"
                : "border-line-strong text-heading hover:bg-linen",
            )}
          >
            Get a demo
          </Link>
          <Link
            href="/contact"
            className="rounded-xs bg-[image:var(--grad-cta)] px-4 py-2.5 text-sm font-semibold tracking-[-0.01em] whitespace-nowrap text-white shadow-blue transition-all hover:bg-[image:var(--grad-cta-hover)] hover:-translate-y-px"
          >
            Request a briefing
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          ref={burgerRef}
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile"
          onClick={() => {
            setMobileOpen((v) => !v);
            setMobileSection(null); // reopen collapsed, not mid-scroll
          }}
          className="nm-nav-burger h-11 w-11 cursor-pointer items-center justify-center rounded-xs"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            aria-hidden="true"
            className={onDark ? "stroke-white" : "stroke-ink"}
          >
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        // Light surface, matching the header it hangs from — it was bg-ink-deep
        // from when the header sat on dark hero art, and read as a different
        // component once the bar went white.
        //
        // Geometry tracks the header exactly so the two read as one piece:
        //   inset-x  — 12px in when the bar is a floating card, flush when not,
        //              so their side edges line up.
        //   top      — the header's own bottom edge (88, or 100 once the 12px
        //              top padding is in play), i.e. zero gap between them.
        //   rounded  — only the bottom corners; the top is butted against the
        //              header and must stay square.
        <div
          id="nav-mobile"
          className={cn(
            "pointer-events-auto fixed z-[99] overflow-y-auto border-x border-line bg-paper px-6 pb-6 pt-2",
            floating
              ? // No border-t: the header card's own bottom border already draws
                // that line, and a second one on top of it renders 2px.
                // bottom-3 matches the 12px side inset, so the panel is a card
                // floating clear of the screen edge rather than bleeding off it.
                "inset-x-3 bottom-3 top-[100px] rounded-b-md border-b shadow-lg"
              : "inset-x-0 bottom-0 top-[88px] border-t",
          )}
        >
          <Link
            href="/platform"
            onClick={() => setMobileOpen(false)}
            className="flex min-h-11 items-center border-b border-line text-base font-medium text-heading"
          >
            Platform
          </Link>

          {MENUS.map((m) => {
            const expanded = mobileSection === m.key;
            return (
              <div key={m.key} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`nav-mobile-${m.key}`}
                  onClick={() => setMobileSection(expanded ? null : m.key)}
                  className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 py-3 text-base font-medium text-heading"
                >
                  {m.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={cn(
                      "flex-none transition-transform duration-200",
                      expanded && "rotate-180",
                    )}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {expanded && (
                  <div id={`nav-mobile-${m.key}`} className="flex flex-col pb-2">
                    {m.items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex min-h-11 items-center gap-2.5 text-sm text-muted"
                      >
                        <svg
                          className="nm-menu-item-ico flex-none"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.9"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          {ITEM_ICONS[it.href]}
                        </svg>
                        {it.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="flex flex-col gap-2.5 pt-5">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center justify-center rounded-xs border border-line-strong text-sm font-medium text-heading"
            >
              Talk to us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex min-h-11 items-center justify-center rounded-xs bg-[image:var(--grad-cta)] text-sm font-semibold text-white"
            >
              Request a briefing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
