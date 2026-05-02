import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { solutions } from "@/data/site";

export const metadata = {
  title: "Kurumsal Çözümler | Zafer Ticaret A.Ş."
};

export default function SolutionsPage() {
  return (
    <PageShell
      eyebrow="Arçelik Kurumsal Çözümler"
      title="Geniş ürün gruplarıyla kurumsal projelere destek"
      text="Ankastre ürünlerden iklimlendirmeye, enerji çözümlerinden görüntüleme sistemlerine kadar geniş ürün yelpazesiyle projelere değer katıyoruz."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <Link
            key={solution.slug}
            href={solution.href}
            className="rounded-[1.75rem] border border-neutral-200 bg-white p-7 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Icon name={solution.icon} className="h-9 w-9 text-red-700" />
            <h3 className="mt-6 text-xl font-bold text-neutral-950">{solution.title}</h3>
            <p className="mt-3 leading-7 text-neutral-600">{solution.text}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-red-700">
              Sayfayı Aç <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
