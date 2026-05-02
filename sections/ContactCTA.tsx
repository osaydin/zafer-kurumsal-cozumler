import { ButtonLink } from "@/components/ButtonLink";
import { company } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-12 text-white shadow-2xl shadow-neutral-950/15 md:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-300">Teklif ve bilgi</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Projeniz için doğru çözümü birlikte belirleyelim.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
              Ankastre, iklimlendirme, enerji ve kurumsal ürün gruplarında teklif almak için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href={`tel:${company.phoneLink}`}>Hemen Ara</ButtonLink>
            <ButtonLink variant="ghost" href={`https://wa.me/${company.phoneLink.replace("+", "")}`}>
              WhatsApp ile Yaz
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
