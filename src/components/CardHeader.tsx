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
    <div className={twMerge('p-6 md:px-8 md:py-7', className)}>
      <div className="inline-flex items-center gap-2">
        <StartIcon className="size-4 text-[var(--accent)]" />
        <h3 className="font-serif text-3xl text-[var(--ink)]">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-md text-[var(--text-muted)] mt-2.5">
        {description}
      </p>
    </div>
  );
};
