interface SectionHeaderProps {
  title: string;
  eyebrow: string;
  description: string;
}

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: SectionHeaderProps) => {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-3xl tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-balance text-sm text-[var(--text-muted)] md:text-base">
        {description}
      </p>
    </div>
  );
};
