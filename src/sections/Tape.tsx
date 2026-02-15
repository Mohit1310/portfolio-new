import StarIcon from '@/assets/icons/star.svg';
import { words } from '@/utils/constants';
import { Fragment } from 'react';

export const TapeSection = () => {
  return (
    <div className="py-14 overflow-x-clip">
      <div className="border-y border-[var(--line)] bg-[#f4ece0]">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-5 pr-5 py-3 -translate-x-1/2 animate-move-left [animation-duration:34s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-3 items-center">
                    <span className="text-[var(--ink)] uppercase font-medium tracking-[0.16em] text-xs">
                      {word}
                    </span>
                    <StarIcon className="size-4 text-[var(--accent)]" />
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
