export type IconName =
  | "arrowRight"
  | "building"
  | "checkCircle"
  | "chevronDown"
  | "droplets"
  | "fan"
  | "home"
  | "mail"
  | "mapPin"
  | "menu"
  | "monitor"
  | "phone"
  | "plugZap"
  | "search"
  | "shield"
  | "sun"
  | "x"
  | "zap";

export type NavItem = {
  label: string;
  href: string;
};

export type Solution = {
  title: string;
  slug: string;
  href: string;
  icon: IconName;
  text: string;
};

export const company = {
  name: "Zafer Ticaret A.Ş.",
  region: "Türkiye / Ankara",
  email: "firat.gor@zaferticaretas.com",
  phone: "0 531 972 46 62",
  phoneLink: "+905319724662",
  address: "Ostim OSB, 100. Yıl Blv No:118, 06374 Yenimahalle/Ankara",
  logo: "/logo.png",
} as const;

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Kurumsal Çözümler", href: "/kurumsal-cozumler" },
  { label: "Sektörler", href: "/sektorler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Kataloglar", href: "/kataloglar" },
  { label: "İletişim", href: "/iletisim" }
];

export const solutions: Solution[] = [
  {
    title: "Ankastre Çözümleri",
    slug: "ankastre-cozumleri",
    href: "/kurumsal-cozumler/ankastre-cozumleri",
    icon: "home",
    text: "Konut, rezidans, otel ve kurumsal projeler için ankastre ürün çözümleri."
  },
  {
    title: "İklimlendirme Çözümleri",
    slug: "iklimlendirme-cozumleri",
    href: "/kurumsal-cozumler/iklimlendirme-cozumleri",
    icon: "fan",
    text: "İşletmeler, ofisler ve yaşam alanları için verimli iklimlendirme sistemleri."
  },
  {
    title: "Enerji Çözümleri",
    slug: "enerji-cozumleri",
    href: "/kurumsal-cozumler/enerji-cozumleri",
    icon: "zap",
    text: "Kurumsal projelerde enerji verimliliği ve sürdürülebilirlik odaklı çözümler."
  },
  {
    title: "Ekran ve Görüntüleme Çözümleri",
    slug: "ekran-goruntuleme-cozumleri",
    href: "/kurumsal-cozumler/ekran-goruntuleme-cozumleri",
    icon: "monitor",
    text: "Toplantı odaları, eğitim alanları, mağazalar ve ticari yapılar için görüntüleme çözümleri."
  },
  {
    title: "Su Arıtma Çözümleri",
    slug: "su-aritma-cozumleri",
    href: "/kurumsal-cozumler/su-aritma-cozumleri",
    icon: "droplets",
    text: "İşletmeler ve toplu kullanım alanları için güvenilir su arıtma sistemleri."
  },
  {
    title: "Elektrikli Araç Şarj Çözümleri",
    slug: "elektrikli-arac-sarj-cozumleri",
    href: "/kurumsal-cozumler/elektrikli-arac-sarj-cozumleri",
    icon: "plugZap",
    text: "Konut, site, iş yeri ve ticari alanlar için elektrikli araç şarj altyapı çözümleri."
  }
];

export const sectors = [
  "Konut ve Rezidans Projeleri",
  "Oteller",
  "Ofisler",
  "AVM ve Ticari Alanlar",
  "Eğitim Kurumları",
  "Sağlık Yapıları",
  "Sanayi ve Üretim Tesisleri",
  "Toplu Kullanım Alanları"
] as const;

export const projectPlaceholders = [
  "Konut Projesi",
  "Otel Projesi",
  "Ticari Alan Projesi",
  "Kurumsal Ofis Projesi"
] as const;

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
