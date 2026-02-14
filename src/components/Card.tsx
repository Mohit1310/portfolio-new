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
        "bg-[var(--surface)] rounded-[1.75rem] border border-[#1320432b] relative overflow-hidden z-0 shadow-[0_32px_50px_-45px_rgba(10,25,48,0.55)] after:z-10 after:content-[''] after:absolute after:inset-0 after:rounded-[1.75rem] after:pointer-events-none after:bg-[linear-gradient(120deg,transparent_0%,transparent_55%,rgba(255,255,255,0.45)_100%)]",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
