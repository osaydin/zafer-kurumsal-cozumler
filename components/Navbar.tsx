"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { company, navItems, solutions } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={company.logo}
            alt="Zafer Ticaret A.Ş. Logo"
            width={320}
            height={110}
            priority
            className="h-20 w-auto max-w-[290px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            if (item.href === "/kurumsal-cozumler") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold transition xl:px-4 xl:text-sm ${
                      isActive(item.href)
                        ? "bg-red-50 text-red-700"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    {item.label}
                    <Icon name="chevronDown" className="h-4 w-4" />
                  </Link>

                  {solutionsOpen && (
                    <div className="absolute left-0 top-full w-80 rounded-3xl border border-neutral-200 bg-white p-3 shadow-2xl shadow-neutral-950/10">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.slug}
                          href={solution.href}
                          className="flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-neutral-50"
                        >
                          <Icon
                            name={solution.icon}
                            className="mt-1 h-5 w-5 text-red-700"
                          />

                          <span>
                            <span className="block text-sm font-bold text-neutral-950">
                              {solution.title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-neutral-500">
                              {solution.text}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[13px] font-semibold transition xl:px-4 xl:text-sm ${
                  isActive(item.href)
                    ? "bg-red-50 text-red-700"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <ButtonLink href="/iletisim">Teklif Al</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-neutral-200 p-2 text-neutral-950 xl:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {open ? (
            <Icon name="x" className="h-6 w-6" />
          ) : (
            <Icon name="menu" className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-5 py-4 xl:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold ${
                  isActive(item.href)
                    ? "bg-red-50 text-red-700"
                    : "bg-neutral-50 text-neutral-800"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <ButtonLink href="/iletisim">Teklif Al</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}