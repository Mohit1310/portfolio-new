import StarIcon from '@/assets/icons/star.svg';
import { words } from '@/utils/constants';
import { Fragment } from 'react';

export const TapeSection = () => {
  return (
    <section className="overflow-hidden py-6 md:py-10">
      <div className="border-y border-white/10 bg-(--bg-elevated)">
        <div className="flex mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex flex-none animate-move-left gap-5 py-4 pr-5 [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-(--text-muted)">
                      {word}
                    </span>
                    <StarIcon className="size-4 text-(--accent-cyan)" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
