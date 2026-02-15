import StartIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export const CardHeader = ({
  title,
  description,
  className,
}: CardHeaderProps) => {
  return (
<<<<<<< Updated upstream
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
      <div className="inline-flex items-center gap-2">
        <StartIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">
=======
    <div className={twMerge('p-6 md:px-8 md:py-7', className)}>
      <div className="inline-flex items-center gap-2">
        <StartIcon className="size-4 text-[var(--accent)]" />
        <h3 className="font-serif text-3xl text-[var(--ink)]">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-md text-[var(--text-muted)] mt-2.5">
>>>>>>> Stashed changes
        {description}
      </p>
    </div>
  );
};
