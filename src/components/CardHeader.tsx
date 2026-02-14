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
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
      <div className="inline-flex items-center gap-3">
        <StartIcon className="size-7 text-[var(--copper)]" />
        <h3 className="font-serif text-3xl text-[var(--ink)]">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-md text-[var(--text-muted)] mt-2">
        {description}
      </p>
    </div>
  );
};
