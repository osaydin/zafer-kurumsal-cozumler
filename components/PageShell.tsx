import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, text, children }: PageShellProps) {
  return (
    <main className="bg-neutral-50">
      <section className="bg-white px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-700">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{text}</p>
        </div>
      </section>
      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </main>
  );
}
