import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";

export const metadata = {
  title: "Kataloglar | Zafer Ticaret A.Ş.",
};

const catalogs = [
  {
    title: "Arçelik Kurumsal Çözümler Ürün Kataloğu",
    description:
      "Tüm çözüm gruplarını kapsayan genel ürün ve çözüm kataloğu.",
    file: "/kataloglar/tum-katalog.pdf",
    tag: "Genel Katalog",
  },
  {
    title: "Akıllı Tahta Kataloğu",
    description: "Akıllı tahta ve eğitim teknolojileri ürün grupları.",
    file: "/kataloglar/akilli-tahta-katalogu.pdf",
    tag: "Eğitim Çözümleri",
  },
  {
    title: "Görüntüleme Kataloğu",
    description:
      "Ekran ve görüntüleme sistemleri için ürün ve çözüm kataloğu.",
    file: "/kataloglar/goruntuleme-katalogu.pdf",
    tag: "Görüntüleme",
  },
  {
    title: "Leisure Kataloğu",
    description:
      "Leisure kategorisine özel ürün ve çözüm içeriklerini kapsayan katalog.",
    file: "/kataloglar/leisure-katalogu.pdf",
    tag: "Leisure",
  },
];

export default function CatalogsPage() {
  return (
    <PageShell
      eyebrow="Kataloglar"
      title="Ürün ve çözüm katalogları"
      text="Kurumsal projeleriniz için ihtiyaç duyabileceğiniz kataloglara bu sayfadan ulaşabilirsiniz."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {catalogs.map((catalog) => (
          <div
            key={catalog.file}
            className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="inline-flex rounded-2xl bg-red-50 p-4 text-red-700">
              <Icon name="search" className="h-8 w-8" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                PDF Katalog
              </span>
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700">
                {catalog.tag}
              </span>
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight text-neutral-950">
              {catalog.title}
            </h2>

            <p className="mt-4 leading-8 text-neutral-600">
              {catalog.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={catalog.file}>Kataloğu Aç</ButtonLink>

              <a
                href={catalog.file}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 ring-1 ring-neutral-200 transition-all duration-200 hover:-translate-y-0.5 hover:ring-red-200"
              >
                PDF İndir
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-200 px-6 py-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">
            Ön İzleme
          </p>
          <h2 className="mt-2 text-2xl font-bold text-neutral-950">
            Arçelik Kurumsal Çözümler Ürün Kataloğu
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Varsayılan olarak genel katalog ön izlemesi gösterilmektedir.
            Diğer katalogları yukarıdaki kartlardan açabilir veya indirebilirsiniz.
          </p>
        </div>

        <iframe
          title="Arçelik Kurumsal Çözümler Ürün Kataloğu"
          src="/kataloglar/tum-katalog.pdf"
          className="h-[720px] w-full border-0"
        />
      </div>
    </PageShell>
  );
}