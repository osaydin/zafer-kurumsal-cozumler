"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { references } from "@/data/site";

function chunkArray<T>(items: T[], size: number) {
  const chunks: T[][] = [];

  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }

  return chunks;
}

export function ProjectsPreview() {
  const referenceItems = references.filter((item) => item.logo);
  const pages = useMemo(() => chunkArray(referenceItems, 4), [referenceItems]);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    if (pages.length <= 1) return;

    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % pages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pages.length]);

  const visibleItems = pages[activePage] ?? [];

  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Referans Projeler"
          title="Güven duyulan kurumsal iş ortaklıkları"
          text="Farklı sektörlerdeki kurum ve kuruluşlarla yürüttüğümüz çözüm süreçlerinden bazı referanslarımız."
        />

        <div className="mt-8 rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleItems.map((reference) => (
              <div
                key={reference.name}
                className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-24 w-full max-w-[180px] items-center justify-center rounded-3xl bg-white p-5 ring-1 ring-neutral-100">
                  {reference.logo ? (
                    <Image
                      src={reference.logo}
                      alt={`${reference.name} logo`}
                      width={180}
                      height={96}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold text-neutral-500">
                      {reference.name}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-base font-bold text-neutral-950">
                  {reference.name}
                </h3>
              </div>
            ))}
          </div>

          {pages.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActivePage(index)}
                  aria-label={`Sayfa ${index + 1}`}
                  className={`h-2.5 rounded-full transition ${
                    activePage === index
                      ? "w-8 bg-red-700"
                      : "w-2.5 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/referanslar">Tüm Referansları Gör</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}