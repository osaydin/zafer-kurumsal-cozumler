import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { company, getSolutionBySlug, solutions } from "@/data/site";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) {
    return {
      title: "Çözüm Bulunamadı | Zafer Ticaret A.Ş.",
    };
  }

  return {
    title: `${solution.title} | Zafer Ticaret A.Ş.`,
    description: solution.text,
  };
}

export default function SolutionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = getSolutionBySlug(params.slug);

  if (!solution) notFound();

  return (
    <PageShell eyebrow="Çözüm Detayı" title={solution.title} text={solution.text}>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
          <div className="relative h-[280px] w-full bg-neutral-100 sm:h-[360px]">
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
          </div>

          <div className="p-8">
            <div className="inline-flex rounded-2xl bg-red-50 p-4 text-red-700">
              <Icon name={solution.icon} className="h-8 w-8" />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-neutral-950">
              Projenize özel değerlendirme
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Bu çözüm grubu için ürün seçimi, kullanım senaryosu, adet,
              teslimat ve tekliflendirme süreçleri proje bazlı olarak
              değerlendirilir. İhtiyacınıza uygun seçeneklerin belirlenmesi için
              bizimle iletişime geçebilirsiniz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "İhtiyaç analizi",
                "Ürün yönlendirme",
                "Tekliflendirme",
                "Kurumsal süreç desteği",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4"
                >
                  <Icon name="checkCircle" className="h-5 w-5 text-red-700" />
                  <span className="font-semibold text-neutral-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-red-50 p-8 ring-1 ring-red-100">
          <h3 className="text-2xl font-bold text-neutral-950">
            Teklif almak ister misiniz?
          </h3>

          <p className="mt-4 leading-8 text-neutral-600">
            {solution.title} için proje detaylarınızı iletin, sizinle iletişime
            geçelim.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href="/iletisim">Teklif Formuna Git</ButtonLink>
            <ButtonLink variant="ghost" href={`tel:${company.phoneLink}`}>
              Telefonla Ara
            </ButtonLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}