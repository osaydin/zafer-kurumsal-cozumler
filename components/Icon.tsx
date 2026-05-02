import type { IconName } from "@/data/site";
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 2, ...props }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    arrowRight: <path d="M5 12h14M13 5l7 7-7 7" />,
    building: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M16 8h2a2 2 0 0 1 2 2v11" />
        <path d="M3 21h18" />
        <path d="M8 7h4M8 11h4M8 15h4" />
      </>
    ),
    checkCircle: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    droplets: (
      <>
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19C8.15 8.13 7.29 6.98 7 5.7c-.29 1.28-1.15 2.43-2.29 3.36C3.57 9.99 3 11.09 3 12.25c0 2.22 1.8 4.05 4 4.05Z" />
        <path d="M16.5 21c2.5 0 4.5-2.04 4.5-4.55 0-1.33-.63-2.54-1.89-3.58-1.26-1.04-2.22-2.32-2.61-3.87-.39 1.55-1.35 2.83-2.61 3.87C12.63 13.91 12 15.12 12 16.45c0 2.51 2 4.55 4.5 4.55Z" />
      </>
    ),
    fan: (
      <>
        <path d="M10.8 22a2 2 0 0 0 2.4 0" />
        <path d="M12 2v8" />
        <path d="M12 14v8" />
        <path d="M4.93 4.93l5.66 5.66" />
        <path d="m13.41 13.41 5.66 5.66" />
        <path d="M2 12h8" />
        <path d="M14 12h8" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
    mail: (
      <>
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
    mapPin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.7 2.78a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.11-.45c.89.35 1.82.57 2.78.7A2 2 0 0 1 22 16.92Z" />,
    plugZap: (
      <>
        <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
        <path d="M21 21h-4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </>
    ),
    x: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
    zap: <path d="M13 2 3 14h8l-1 8 11-13h-8l1-7Z" />
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
