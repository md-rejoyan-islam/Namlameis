// The Namlameis ant mark. Uses currentColor so it inherits text color.
// A vertical ant: antennae + head at top, thorax, gaster, six legs.

export function AntMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Antennae */}
      <path
        d="M29 11C26 7 24 5 21 3.5M35 11c3-4 5-6 8-7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Legs — left */}
      <path
        d="M27.5 25 14 19M27 31 12.5 31M27.5 37 14.5 44"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Legs — right */}
      <path
        d="M36.5 25 50 19M37 31 51.5 31M36.5 37 49.5 44"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Head */}
      <circle cx="32" cy="15" r="6" fill="currentColor" />
      {/* Thorax */}
      <ellipse cx="32" cy="30" rx="5.2" ry="7" fill="currentColor" />
      {/* Gaster / abdomen */}
      <ellipse cx="32" cy="47" rx="9" ry="11" fill="currentColor" />
    </svg>
  );
}
