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
    <>
      <div className="flex justify-center">
        <p className="uppercase text-xs md:text-sm font-semibold tracking-[0.25em] label-gradient">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-4xl text-center mt-6 md:text-6xl leading-tight text-[var(--ink)]">
        {title}
      </h2>
      <p className="text-center text-[var(--text-muted)] mt-4 md:text-lg lg:text-xl max-w-2xl mx-auto">
        {description}
      </p>
    </>
  );
};
