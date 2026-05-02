import Image from "next/image";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { references } from "@/data/site";

export const metadata = {
  title: "Referanslar | Zafer Ticaret A.Ş.",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function ReferencesPage() {
  return (
    <PageShell
      eyebrow="Referanslar"
      title="Güven duyulan iş ortaklıkları"
      text="Bugüne kadar farklı sektörlerden birçok kurum ve kuruluşun ihtiyaçlarına yönelik ürün ve çözüm süreçlerinde yer aldık."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {references.map((reference) => (
          <div
            key={reference.name}
            className="group rounded-[1.5rem] border border-neutral-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10"
          >
            <div className="mx-auto flex h-24 w-full max-w-[180px] items-center justify-center rounded-3xl bg-neutral-50 p-5 ring-1 ring-neutral-100 transition group-hover:ring-red-100">
              {reference.logo ? (
                <Image
                  src={reference.logo}
                  alt={`${reference.name} logo`}
                  width={180}
                  height={96}
                  className="max-h-16 w-auto object-contain"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-950 text-lg font-black text-white transition group-hover:bg-red-700">
                  {getInitials(reference.name)}
                </div>
              )}
            </div>

            <h3 className="mt-5 text-lg font-bold text-neutral-950">
              {reference.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Referans kurum
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-[2rem] bg-red-50 p-8 ring-1 ring-red-100">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
              Güven ve deneyim
            </p>
            <h2 className="mt-3 text-2xl font-bold text-neutral-950">
              300.000’i aşkın referansımıza teşekkür ederiz.
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-neutral-600">
              Zafer Ticaret A.Ş. olarak, farklı ölçeklerdeki projelerde doğru
              ürün, güvenilir tedarik ve satış sonrası destek anlayışıyla hizmet
              sunuyoruz.
            </p>
          </div>

          <Icon name="shield" className="h-12 w-12 text-red-700" />
        </div>
      </div>
    </PageShell>
  );
}