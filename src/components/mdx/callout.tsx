import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface CalloutProps extends PropsWithChildren {
  type?: 'info' | 'warning' | 'success';
}

const borderByType = {
  info: 'border-l-[#3b82f6]',
  warning: 'border-l-[#d97706]',
  success: 'border-l-[#15803d]',
};

export const Callout = ({ children, type = 'info' }: CalloutProps) => {
  return (
    <div
      className={twMerge(
        'my-6 rounded-md border border-(--line) border-l-4 bg-(--surface) px-4 py-3 text-sm leading-relaxed md:text-base',
        borderByType[type]
      )}
    >
      {children}
    </div>
  );
};
