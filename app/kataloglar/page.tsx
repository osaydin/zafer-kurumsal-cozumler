import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { solutions } from "@/data/site";

export const metadata = {
  title: "Kataloglar | Zafer Ticaret A.Ş."
};

export default function CatalogsPage() {
  return (
    <PageShell
      eyebrow="Kataloglar"
      title="Ürün ve çözüm katalogları"
      text="Kurumsal çözüm ve ürün gruplarına ait kataloglar hazır olduğunda bu alanda PDF olarak yayınlanabilir."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <div key={solution.slug} className="rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm">
            <Icon name={solution.icon} className="h-9 w-9 text-red-700" />
            <h3 className="mt-6 text-xl font-bold text-neutral-950">{solution.title} Kataloğu</h3>
            <p className="mt-3 leading-7 text-neutral-600">PDF katalog dosyası yakında eklenecek.</p>
            <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-bold text-neutral-500" disabled>
              Yakında
            </button>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
