import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const c = {
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
} as const;

export function ShareIcon(p: P) {
  return (
    <svg viewBox="0 0 18 18" {...c} {...p}>
      <circle
        cx="14.5"
        cy="3.5"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="3.5" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle
        cx="14.5"
        cy="14.5"
        r="2.3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m5.5 8 7-3.6M5.5 10l7 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function UsersIcon(p: P) {
  return (
    <svg viewBox="0 0 20 20" {...c} {...p}>
      <circle cx="8" cy="6" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M1.8 16.5c0-3.3 2.6-5.4 6.2-5.4s6.2 2.1 6.2 5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 3.2a3 3 0 0 1 0 5.6M15.5 11.4c1.6.6 2.7 2 2.7 4.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VideoCameraIcon(p: P) {
  return (
    <svg viewBox="0 0 28 22" {...c} {...p}>
      <rect
        x="1.8"
        y="3.3"
        width="17.4"
        height="15.4"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path
        d="M19.2 9.2 26 5.2v11.6l-6.8-4"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ResourcesIcon(p: P) {
  return (
    <svg viewBox="0 0 22 22" {...c} {...p}>
      <rect
        x="1.5"
        y="3.5"
        width="19"
        height="15"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.5 8h11M5.5 11.5h11M5.5 15h6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VideosIcon(p: P) {
  return (
    <svg viewBox="0 0 22 22" {...c} {...p}>
      <rect
        x="1.5"
        y="5"
        width="14"
        height="12"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M15.5 9.2 20.5 6.5v9l-5-2.7"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CertificateIcon(p: P) {
  return (
    <svg viewBox="0 0 22 22" {...c} {...p}>
      <rect
        x="1.5"
        y="3"
        width="19"
        height="14"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="7.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12.5 8h5M12.5 11.5h5M5 13.6c.6-1.3 1.5-1.8 2.5-1.8s1.9.5 2.5 1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 17.5v3l2-1 2 1v-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConsultationIcon(p: P) {
  return (
    <svg viewBox="0 0 22 22" {...c} {...p}>
      <path
        d="M2 4.5h7.5v5.2H6.4L4 12V9.7H2V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.5c3.7 0 6.5 2.6 6.5 5.8 0 1.5-.6 2.7-1.5 3.6v2.2l-2.3-1.4c-.9.3-1.8.4-2.7.4-3.7 0-6.5-2.6-6.5-5.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 15.2h.01M14.4 15.2h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
