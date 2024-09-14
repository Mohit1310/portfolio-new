import { PropsWithChildren } from 'react';

export const HeroOrbit = ({
  children,
  size,
  rotate,
}: PropsWithChildren<{ size: number; rotate: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex items-start justify-start"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotate}deg)`,
        }}
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
  );
};
