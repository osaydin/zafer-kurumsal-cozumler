import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { company, solutions } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.12),transparent_35%),linear-gradient(to_bottom,#ffffff,#fafafa)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="animate-fadeInUp">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
            <Icon name="shield" className="h-5 w-5" /> Ankara merkezli kurumsal çözüm ortağınız
          </div>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-neutral-950 md:text-6xl lg:text-7xl">
            Kurumsal projelerinize güvenilir ürün ve çözüm desteği
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Ankastre, iklimlendirme, enerji, görüntüleme, su arıtma ve elektrikli araç şarj çözümlerinde; konut, ticari alan ve kurumsal projeler için uçtan uca destek sunuyoruz.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/iletisim">
              Teklif Al <Icon name="arrowRight" className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="/kurumsal-cozumler" variant="ghost">
              Çözümleri İncele
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {["Proje odaklı yaklaşım", "Geniş ürün grubu", "Ankara merkezli hizmet"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
                <Icon name="checkCircle" className="h-5 w-5 text-red-700" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fadeIn">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-2xl shadow-neutral-950/10">
            <div className="rounded-[1.5rem] bg-neutral-950 p-6 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-white/60">Zafer Ticaret A.Ş.</p>
                  <h3 className="mt-1 text-2xl font-bold">Kurumsal Çözümler</h3>
                </div>
                <Icon name="sun" className="h-10 w-10 text-red-400" />
              </div>
              <div className="mt-6 grid gap-3">
                {solutions.slice(0, 4).map((solution) => (
                  <div key={solution.title} className="flex items-center gap-4 rounded-2xl bg-white/[0.08] p-4 ring-1 ring-white/10">
                    <div className="rounded-2xl bg-red-600 p-3">
                      <Icon name={solution.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">{solution.title}</p>
                      <p className="mt-1 text-sm text-white/[0.55]">Proje bazlı değerlendirme ve tekliflendirme</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-950/10">
            <p className="text-sm font-bold text-neutral-950">İletişim</p>
            <p className="mt-1 text-sm text-neutral-500">{company.phone}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
