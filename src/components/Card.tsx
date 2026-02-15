import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
        "luxury-frame rounded-[1.5rem] overflow-hidden relative z-0 micro-lift",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
