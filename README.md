# Zafer Ticaret A.Ş. Kurumsal Çözümler

Next.js App Router + Tailwind CSS ile hazırlanmış çok sayfalı kurumsal web arayüzü.

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda aç:

```bash
http://localhost:3000
```

## Test

```bash
npm run test
```

## Build

```bash
npm run build
```

## Dosya Yapısı

```text
app/
  page.tsx
  kurumsal/page.tsx
  kurumsal-cozumler/page.tsx
  kurumsal-cozumler/[slug]/page.tsx
  sektorler/page.tsx
  projeler/page.tsx
  kataloglar/page.tsx
  iletisim/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  ButtonLink.tsx
  Icon.tsx
  Input.tsx
  PageShell.tsx
  SectionHeader.tsx
sections/
  Hero.tsx
  SolutionsGrid.tsx
  WhyUs.tsx
  ProjectsPreview.tsx
  ContactCTA.tsx
data/
  site.ts
tests/
  site-data.test.ts
```

## Notlar

- Harici ikon paketi kullanılmadı; ikonlar `components/Icon.tsx` içinde yerel SVG olarak tanımlandı.
- İletişim formu ilk sürümde `mailto:` ile çalışır. Profesyonel kullanımda API route, Resend, Formspree veya benzeri servis bağlanabilir.
- Logo `next/image` ile mevcut URL üzerinden kullanılır ve `next.config.mjs` içinde izinli domain olarak tanımlıdır. Yayında daha kontrollü kullanım için `public/` klasörüne alınabilir.
