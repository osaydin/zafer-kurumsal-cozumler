import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Hakkımızda | Zafer Ticaret A.Ş.",
};

export default function CorporatePage() {
  return (
    <PageShell
      eyebrow="Hakkımızda"
      title="1989’dan bugüne, Ankara’dan tüm Türkiye’ye güven taşıyoruz!"
      text="Arçelik’in teknolojik gücünü ve yenilikçi vizyonunu; Ostim, Batıkent ve Çakırlar’daki modern konsept mağazalarımızla sizlerle buluşturuyoruz."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-950">
            Sizin için ne yapıyoruz?
          </h3>

          <p className="mt-5 leading-8 text-neutral-600">
            1989’dan bugüne, Ankara’dan tüm Türkiye’ye güven taşıyoruz!
            Arçelik’in teknolojik gücünü ve yenilikçi vizyonunu; Ostim,
            Batıkent ve Çakırlar’daki modern konsept mağazalarımızla sizlerle
            buluşturuyoruz.
          </p>

          <p className="mt-4 leading-8 text-neutral-600">
            Doğru Arçelik ürününe ulaşmanız için teknik detaylardan en iyi fiyat
            avantajlarına kadar her adımda yanınızdayız. Esnek ödeme
            seçeneklerimizin yanı sıra, Türkiye’nin en yaygın ve en donanımlı
            hizmet ağı olan Arçelik Yetkili Servis gücünü arkanıza alarak,
            satın alma deneyiminizi kurulumdan kullanıma kadar hızlı ve
            sorunsuz hale getiriyoruz.
          </p>

          <p className="mt-4 leading-8 text-neutral-600">
            Bugüne kadar bize güvenen 300.000’i aşkın referansımıza teşekkür
            borçluyuz. Bu heyecanı birlikte paylaşmak için sizi de Arçelik
            dünyasıyla buluşmaya, mağazalarımıza bekliyoruz!
          </p>
        </div>

        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Güven veren hizmet anlayışı</h3>

          <div className="mt-6 grid gap-4">
            {[
              "1989’dan bugüne deneyim",
              "Ankara merkezli güçlü mağaza ağı",
              "Arçelik Yetkili Servis gücü",
              "300.000’i aşkın referans",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4"
              >
                <Icon name="checkCircle" className="h-5 w-5 text-red-300" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}