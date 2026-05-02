import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { sectors } from "@/data/site";

export const metadata = {
  title: "Sektörler | Zafer Ticaret A.Ş."
};

export default function SectorsPage() {
  return (
    <PageShell
      eyebrow="Sektörler"
      title="Farklı proje tipleri için kurumsal çözümler"
      text="Konut, otel, ofis, eğitim, sağlık ve ticari alan projelerinde ihtiyaçlara uygun ürün gruplarıyla destek sunuyoruz."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {sectors.map((sector) => (
          <div key={sector} className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm">
            <Icon name="building" className="h-8 w-8 text-red-700" />
            <h3 className="mt-5 text-lg font-bold text-neutral-950">{sector}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Proje tipine göre ürün seçimi ve tekliflendirme desteği.</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
