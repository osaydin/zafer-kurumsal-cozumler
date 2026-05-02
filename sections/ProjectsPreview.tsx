import { SectionHeader } from "@/components/SectionHeader";
import { projectPlaceholders } from "@/data/site";

export function ProjectsPreview() {
  return (
    <section className="bg-neutral-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projeler"
          title="Referans projeler için şablon alan"
          text="Referans projeleriniz ve tamamlanan çalışmalarınız hazır olduğunda bu alanda yayınlanabilir."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projectPlaceholders.map((project) => (
            <div key={project} className="rounded-[1.75rem] border border-dashed border-neutral-300 bg-white p-6">
              <div className="mb-6 h-36 rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">Yakında</p>
              <h3 className="mt-3 text-xl font-bold text-neutral-950">{project}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-600">Lokasyon, sektör ve kullanılan çözüm grubu bilgileri eklenecek.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
