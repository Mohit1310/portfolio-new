import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeroOrbitProps {
  children: React.ReactNode;
  size: number;
  rotate: number;
  shouldOrbit?: boolean;
  orbitDuration?: string;
  shouldSpin?: boolean;
  spinDuration?: string;
}

export const HeroOrbit = ({
  children,
  size,
  rotate,
  shouldOrbit = false,
  orbitDuration,
  shouldSpin = false,
  spinDuration,
}: PropsWithChildren<HeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit === true && 'animate-spin')}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: `rotate(${rotate}deg)`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && 'animate-spin')}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotate * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
