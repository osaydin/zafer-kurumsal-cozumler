import { Icon } from "@/components/Icon";
import type { IconName } from "@/data/site";

const items: Array<[IconName, string, string]> = [
  ["building", "Proje Odaklı Yaklaşım", "İhtiyaçları analiz ederek doğru ürün grubunu belirlemeye yardımcı oluruz."],
  ["shield", "Kurumsal Çözüm Deneyimi", "Konut, ticari alan ve kurumsal yapılarda çözüm süreçlerini destekleriz."],
  ["search", "Doğru Ürün Yönlendirme", "Proje kapsamına, bütçeye ve kullanım senaryosuna göre seçenekleri netleştiririz."],
  ["mapPin", "Ankara Merkezli Hizmet", "Ostim OSB lokasyonumuzla Ankara ve çevresine hızlı iletişim imkânı sunarız."]
];

export function WhyUs() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">Neden Zafer Ticaret?</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Kurumsal projelerde güvenilir tedarik ve çözüm yaklaşımı
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Zafer Ticaret A.Ş., Ankara merkezli yapısıyla kurumsal projelerde ihtiyaç duyulan ürün, tedarik ve çözüm süreçlerinde profesyonel destek sunar.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(([icon, title, text]) => (
            <div key={title} className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm">
              <Icon name={icon} className="h-8 w-8 text-red-700" />
              <h3 className="mt-5 text-lg font-bold text-neutral-950">{title}</h3>
              <p className="mt-3 leading-7 text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
