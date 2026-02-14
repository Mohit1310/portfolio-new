import StarIcon from '@/assets/icons/star.svg';
import { words } from '@/utils/constants';
import { Fragment } from 'react';

export const TapeSection = () => {
  return (
    <div className="py-14 lg:py-20 overflow-x-clip">
      <div className="bg-[var(--ink)] rotate-[-2deg] -mx-1 border-y border-[#f8f4eb2b]">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3.5 -translate-x-1/2 animate-move-left [animation-duration:34s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-[#f8f4eb] uppercase font-bold tracking-[0.14em] text-xs md:text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-5 text-[var(--copper)] -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
