import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const common = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
} as const;

export function FilterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" {...common} {...props}>
      <path
        d="M1.6 2.6h14.8L10.6 9.7v5.2l-3.2 1.6V9.7L1.6 2.6Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LevelBarsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 17 17" {...common} {...props}>
      <rect x="1" y="11" width="3.2" height="5" rx=".5" fill="currentColor" />
      <rect
        x="6.9"
        y="6.5"
        width="3.2"
        height="9.5"
        rx=".5"
        fill="currentColor"
      />
      <rect
        x="12.8"
        y="1.5"
        width="3.2"
        height="14.5"
        rx=".5"
        fill="currentColor"
      />
    </svg>
  );
}

export function CategoryShapesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 18" {...common} {...props}>
      <path
        d="M9 1.6 12.4 7.3H5.6L9 1.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="1.6"
        y="10.2"
        width="6"
        height="6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="13"
        cy="13.2"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function SortIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 18 16" {...common} {...props}>
      <path d="M1 3h16M1 8h11M1 13h6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 8" {...common} {...props}>
      <path
        d="m1.5 1.5 4.5 4.5 4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 22" {...common} {...props}>
      <path
        d="M11.5 2 3 11l8.5 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 22" {...common} {...props}>
      <path
        d="M2.5 2 11 11l-8.5 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
