import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zafer Ticaret A.Ş. | Arçelik Kurumsal Çözümler",
  description:
    "Zafer Ticaret A.Ş. Ankara merkezli kurumsal çözüm desteği: ankastre, iklimlendirme, enerji, ekran, su arıtma ve elektrikli araç şarj çözümleri."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white font-sans text-neutral-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
