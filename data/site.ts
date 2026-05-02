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
  image: string;
  text: string;
};

export type ReferenceItem = {
  name: string;
  logo?: string;
};

export const company = {
  name: "Zafer Ticaret A.Ş.",
  region: "Türkiye / Ankara",
  email: "firat.gor@zaferticaretas.com",
  phone: "0 531 972 46 62",
  phoneLink: "+905319724662",
  address: "Ostim OSB, 100. Yıl Blv No:118, 06374 Yenimahalle/Ankara",
  logo: "/logo.png",
  socials: {
    instagram: "https://www.instagram.com/arcelikzaferticaret/",
    linkedin: "",
  },
} as const;

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/kurumsal" },
  { label: "Kurumsal Çözümler", href: "/kurumsal-cozumler" },
  { label: "Referanslar", href: "/referanslar" },
  { label: "Kataloglar", href: "/kataloglar" },
  { label: "İletişim", href: "/iletisim" },
];

export const solutions: Solution[] = [
  {
    title: "Ankastre Çözümleri",
    slug: "ankastre-cozumleri",
    href: "/kurumsal-cozumler/ankastre-cozumleri",
    icon: "home",
    image: "/cozumler/ankastre.png",
    text: "Konut, rezidans, otel ve kurumsal projeler için ankastre ürün çözümleri.",
  },
  {
    title: "İklimlendirme Çözümleri",
    slug: "iklimlendirme-cozumleri",
    href: "/kurumsal-cozumler/iklimlendirme-cozumleri",
    icon: "fan",
    image: "/cozumler/iklimlendirme.png",
    text: "İşletmeler, ofisler ve yaşam alanları için verimli iklimlendirme sistemleri.",
  },
  {
    title: "Enerji Çözümleri",
    slug: "enerji-cozumleri",
    href: "/kurumsal-cozumler/enerji-cozumleri",
    icon: "zap",
    image: "/cozumler/enerji.jpg",
    text: "Kurumsal projelerde enerji verimliliği ve sürdürülebilirlik odaklı çözümler.",
  },
  {
    title: "Ekran ve Görüntüleme Çözümleri",
    slug: "ekran-goruntuleme-cozumleri",
    href: "/kurumsal-cozumler/ekran-goruntuleme-cozumleri",
    icon: "monitor",
    image: "/cozumler/ekran-goruntuleme.png",
    text: "Toplantı odaları, eğitim alanları, mağazalar ve ticari yapılar için görüntüleme çözümleri.",
  },
  {
    title: "Su Arıtma Çözümleri",
    slug: "su-aritma-cozumleri",
    href: "/kurumsal-cozumler/su-aritma-cozumleri",
    icon: "droplets",
    image: "/cozumler/su-aritma.png",
    text: "İşletmeler ve toplu kullanım alanları için güvenilir su arıtma sistemleri.",
  },
  {
    title: "Elektrikli Araç Şarj Çözümleri",
    slug: "elektrikli-arac-sarj-cozumleri",
    href: "/kurumsal-cozumler/elektrikli-arac-sarj-cozumleri",
    icon: "plugZap",
    image: "/cozumler/elektrikli-arac-sarj.png",
    text: "Konut, site, iş yeri ve ticari alanlar için elektrikli araç şarj altyapı çözümleri.",
  },
];

export const references: ReferenceItem[] = [
  { name: "IMC", logo: "/referanslar/imc.jpg" },
  { name: "ASELSAN", logo: "/referanslar/aselsan.png" },
  { name: "ROKETSAN", logo: "/referanslar/roketsan.png" },
  { name: "THY", logo: "/referanslar/thy.jpg" },
  { name: "Atlasjet", logo: "/referanslar/atlasjet.png" },
  { name: "Tanoto", logo: "/referanslar/tanoto.webp" },
  { name: "Çayırhan Termik EÜAŞ", logo: "/referanslar/euas.webp" },
  { name: "Türk Traktör", logo: "/referanslar/ttrak.webp" },
  { name: "TUSAŞ", logo: "/referanslar/tusas.jpg" },
  { name: "Baştaş Hazır Beton", logo: "/referanslar/bastas.png" },
  { name: "Bilkent Üniversitesi", logo: "/referanslar/bilkent.png" },
  { name: "TED Ankara Koleji", logo: "/referanslar/ted-ankara.png" },
  { name: "Özaltın İnşaat", logo: "/referanslar/ozaltin.jpg" },
  { name: "Ziraat Bankası", logo: "/referanslar/ziraat-bankasi.jpg" },
  { name: "Türk Kızılay", logo: "/referanslar/turk-kizilay.webp" },
];

export const projectPlaceholders = [
  "Konut Projesi",
  "Otel Projesi",
  "Ticari Alan Projesi",
  "Kurumsal Ofis Projesi",
] as const;

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}