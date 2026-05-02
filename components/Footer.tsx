import Image from "next/image";
import Link from "next/link";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Image src={company.logo} alt="Zafer Ticaret A.Ş. Logo" width={220} height={64} className="h-10 w-auto" />
          <p className="mt-5 max-w-md leading-7 text-neutral-600">
            Kurumsal projeler için ankastre, iklimlendirme, enerji, görüntüleme, su arıtma ve elektrikli araç şarj çözümleri.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-neutral-950">Menü</h4>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-neutral-600 hover:text-red-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-neutral-950">İletişim</h4>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-neutral-600">
            <p>{company.address}</p>
            <a href={`tel:${company.phoneLink}`} className="font-semibold text-neutral-950 hover:text-red-700">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="font-semibold text-neutral-950 hover:text-red-700">
              {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        © {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
