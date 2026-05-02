import Link from "next/link";
import { Icon } from "@/components/Icon";
import { SectionHeader } from "@/components/SectionHeader";
import { solutions } from "@/data/site";

export function SolutionsGrid() {
  return (
    <section className="bg-neutral-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Çözüm Grupları"
          title="Projeleriniz için ihtiyaç duyduğunuz ürün grupları"
          text="Kurumsal yapılarda doğru ürün seçimi, sürdürülebilir performans ve güvenilir tedarik süreçleri için çözüm odaklı ilerliyoruz."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={solution.href}
              className="group rounded-[1.75rem] border border-neutral-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-red-50 p-4 text-red-700 transition group-hover:bg-red-700 group-hover:text-white">
                <Icon name={solution.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">{solution.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-neutral-600">{solution.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-700">
                Detayları Gör <Icon name="arrowRight" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
