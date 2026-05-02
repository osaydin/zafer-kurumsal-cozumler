import { PageShell } from "@/components/PageShell";
import { projectPlaceholders } from "@/data/site";

export const metadata = {
  title: "Projeler | Zafer Ticaret A.Ş."
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projelerimiz"
      title="Tamamlanan ve devam eden projeler"
      text="Referans projeleriniz hazır olduğunda bu sayfada sektör, lokasyon ve kullanılan çözüm gruplarıyla birlikte listelenebilir."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projectPlaceholders.map((project) => (
          <div key={project} className="rounded-[1.75rem] border border-dashed border-neutral-300 bg-white p-6">
            <div className="mb-6 h-40 rounded-3xl bg-neutral-100" />
            <h3 className="text-xl font-bold text-neutral-950">{project}</h3>
            <dl className="mt-5 grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-500">Sektör</dt>
                <dd className="font-semibold text-neutral-800">Eklenecek</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-500">Lokasyon</dt>
                <dd className="font-semibold text-neutral-800">Eklenecek</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-neutral-500">Çözüm</dt>
                <dd className="font-semibold text-neutral-800">Eklenecek</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
