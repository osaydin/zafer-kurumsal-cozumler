type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">{text}</p>}
    </div>
  );
}
