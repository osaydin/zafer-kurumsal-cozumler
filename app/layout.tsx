import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "Zafer Ticaret A.Ş. | Arçelik Kurumsal Çözümler",
    template: "%s | Zafer Ticaret A.Ş.",
  },
  description:
    "Zafer Ticaret A.Ş.; Ankara merkezli ankastre, iklimlendirme, enerji, ekran ve görüntüleme, su arıtma ve elektrikli araç şarj çözümleri sunar.",
  keywords: [
    "Zafer Ticaret",
    "Arçelik Kurumsal Çözümler",
    "Ankara kurumsal çözümler",
    "ankastre çözümleri",
    "iklimlendirme çözümleri",
    "enerji çözümleri",
    "elektrikli araç şarj çözümleri",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    title: "Zafer Ticaret A.Ş. | Arçelik Kurumsal Çözümler",
    description:
      "Ankara merkezli kurumsal projeler için ürün, tedarik ve çözüm desteği.",
    url: "https://zafer-kurumsal-cozumler.vercel.app",
    siteName: "Zafer Ticaret A.Ş.",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: company.logo,
        width: 512,
        height: 512,
        alt: "Zafer Ticaret A.Ş. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zafer Ticaret A.Ş. | Arçelik Kurumsal Çözümler",
    description:
      "Ankara merkezli kurumsal projeler için ürün, tedarik ve çözüm desteği.",
    images: [company.logo],
  },
  icons: {
    icon: company.logo,
    shortcut: company.logo,
    apple: company.logo,
  },
  metadataBase: new URL("https://zafer-kurumsal-cozumler.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}