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
<<<<<<< Updated upstream
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
=======
    <Reveal>
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase text-xs md:text-sm font-semibold tracking-[0.26em] label-gradient">
>>>>>>> Stashed changes
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.04] mt-5 text-[var(--ink)]">
          {title}
        </h2>
        <p className="text-[var(--text-muted)] mt-4 md:text-lg">{description}</p>
      </div>
<<<<<<< Updated upstream
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
        {description}
      </p>
    </>
=======
    </Reveal>
>>>>>>> Stashed changes
  );
};
