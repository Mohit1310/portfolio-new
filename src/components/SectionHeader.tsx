import { Reveal } from './Reveal';

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
    <Reveal>
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase text-xs md:text-sm font-semibold tracking-[0.26em] label-gradient">
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.04] mt-5 text-[var(--ink)]">
          {title}
        </h2>
        <p className="text-[var(--text-muted)] mt-4 md:text-lg">{description}</p>
      </div>
    </Reveal>
  );
};
