import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={twMerge(
<<<<<<< Updated upstream
        "bg-gray-800 rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
=======
        "luxury-frame rounded-[1.5rem] overflow-hidden relative z-0 micro-lift",
>>>>>>> Stashed changes
        className
      )}
      {...other}
    >
      <div
<<<<<<< Updated upstream
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
=======
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{ backgroundImage: `url(${grainImage.src})` }}
>>>>>>> Stashed changes
      ></div>
      {children}
    </div>
  );
};
