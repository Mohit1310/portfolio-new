import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface CalloutProps extends PropsWithChildren {
  type?: 'info' | 'warning' | 'success';
}

const colorByType = {
  info: 'border-[color:var(--accent-cyan)]/45 bg-[color:var(--accent-cyan)]/10 text-cyan-100',
  warning:
    'border-[color:var(--accent-orange)]/50 bg-[color:var(--accent-orange)]/10 text-orange-100',
  success: 'border-emerald-300/45 bg-emerald-300/10 text-emerald-100',
};

export const Callout = ({ children, type = 'info' }: CalloutProps) => {
  return (
    <div
      className={twMerge(
        'my-6 rounded-2xl border px-4 py-3 text-sm leading-relaxed md:text-base',
        colorByType[type]
      )}
    >
      {children}
    </div>
  );
};
