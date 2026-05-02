import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { company, solutions } from "@/data/site";

export const metadata = {
  title: "İletişim | Zafer Ticaret A.Ş.",
};

const mapUrl =
  "https://www.google.com/maps?q=Ostim%20OSB%2C%20100.%20Y%C4%B1l%20Blv%20No%3A118%2C%2006374%20Yenimahalle%2FAnkara&output=embed";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="İletişim"
      title="Projeniz için bizimle iletişime geçin"
      text="Teklif, ürün bilgisi veya kurumsal çözüm talebiniz için iletişim formunu doldurabilir ya da doğrudan bize ulaşabilirsiniz."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-neutral-950 p-8 text-white">
          <h3 className="text-2xl font-bold">{company.name}</h3>

          <div className="mt-8 grid gap-5">
            <a
              href={`tel:${company.phoneLink}`}
              className="flex gap-4 rounded-2xl bg-white/[0.08] p-4 transition hover:bg-white/[0.12]"
            >
              <Icon name="phone" className="h-6 w-6 text-red-300" />
              <span>
                <span className="block text-sm text-white/50">
                  Telefon / WhatsApp
                </span>
                <span className="font-bold">{company.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex gap-4 rounded-2xl bg-white/[0.08] p-4 transition hover:bg-white/[0.12]"
            >
              <Icon name="mail" className="h-6 w-6 text-red-300" />
              <span>
                <span className="block text-sm text-white/50">E-posta</span>
                <span className="font-bold">{company.email}</span>
              </span>
            </a>

            <div className="flex gap-4 rounded-2xl bg-white/[0.08] p-4">
              <Icon name="mapPin" className="h-6 w-6 text-red-300" />
              <span>
                <span className="block text-sm text-white/50">Adres</span>
                <span className="font-bold leading-7">{company.address}</span>
              </span>
            </div>
          </div>

          <div className="mt-8">
            <ButtonLink
              variant="ghost"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                company.address
              )}`}
            >
              Google Maps’te Aç
            </ButtonLink>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm"
          action="https://formspree.io/f/mlgzdzzb"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="Zafer Ticaret A.Ş. - Yeni Teklif Formu"
          />

          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                Ad Soyad
              </span>
              <input
                name="adSoyad"
                type="text"
                required
                placeholder="Adınız Soyadınız"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                Firma Adı
              </span>
              <input
                name="firmaAdi"
                type="text"
                placeholder="Firma adı"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                Telefon
              </span>
              <input
                name="telefon"
                type="tel"
                required
                placeholder="05xx xxx xx xx"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                E-posta
              </span>
              <input
                name="email"
                type="email"
                required
                placeholder="ornek@firma.com"
                className="w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              />
            </label>

            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                İlgilenilen Çözüm
              </span>
              <select
                name="cozum"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                {solutions.map((solution) => (
                  <option key={solution.slug} value={solution.title}>
                    {solution.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-neutral-800">
                Mesaj
              </span>
              <textarea
                name="mesaj"
                rows={5}
                required
                placeholder="Proje detayınızı yazın"
                className="w-full resize-none rounded-2xl border border-neutral-200 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-neutral-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700"
            >
              Formu Gönder
            </button>

            <ButtonLink variant="ghost" href={`mailto:${company.email}`}>
              E-posta Gönder
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-500">
            Formu gönderdiğinizde talebiniz doğrudan Zafer Ticaret A.Ş. iletişim
            adresine iletilir.
          </p>
        </form>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-200 px-6 py-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
            Konum
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-950">
            Zafer Ticaret A.Ş. Lokasyon
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            {company.address}
          </p>
        </div>

        <iframe
          title="Zafer Ticaret A.Ş. Google Maps Konumu"
          src={mapUrl}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </PageShell>
  );
}