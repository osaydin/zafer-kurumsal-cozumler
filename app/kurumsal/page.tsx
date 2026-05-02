import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Kurumsal | Zafer Ticaret A.Ş."
};

export default function CorporatePage() {
  return (
    <PageShell
      eyebrow="Kurumsal"
      title="Zafer Ticaret A.Ş."
      text="Ankara merkezli hizmet anlayışıyla kurumsal projelere yönelik ürün ve çözüm desteği sunuyoruz."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-950">Hakkımızda</h3>
          <p className="mt-5 leading-8 text-neutral-600">
            Zafer Ticaret A.Ş., konut projeleri, ticari alanlar, ofisler, oteller ve toplu kullanım alanları için ihtiyaçlara uygun ürün gruplarında profesyonel destek sağlar.
          </p>
          <p className="mt-4 leading-8 text-neutral-600">
            Müşteri ihtiyaçlarını doğru analiz ederek proje bazlı tekliflendirme, ürün yönlendirme ve çözüm geliştirme süreçlerinde güvenilir bir iş ortağı olmayı hedefler.
          </p>
        </div>
        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white">
          <h3 className="text-2xl font-bold">Kurumsal yaklaşımımız</h3>
          <div className="mt-6 grid gap-4">
            {["Doğru ürün seçimi", "Proje bazlı tekliflendirme", "Kurumsal iletişim", "Satış sonrası süreç desteği"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.08] p-4">
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
