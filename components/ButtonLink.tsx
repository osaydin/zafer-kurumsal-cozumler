import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "soft";
  className?: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
}

export function ButtonLink({ children, href, variant = "primary", className = "" }: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-neutral-950 text-white shadow-lg shadow-neutral-950/10 hover:-translate-y-0.5 hover:bg-red-700"
      : variant === "ghost"
        ? "bg-white text-neutral-950 ring-1 ring-neutral-200 hover:-translate-y-0.5 hover:ring-red-200"
        : "bg-red-50 text-red-700 ring-1 ring-red-100 hover:bg-red-100";

  const classes = `${base} ${styles} ${className}`;

  if (isExternalHref(href)) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
