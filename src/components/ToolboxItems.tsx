import React, { Fragment } from 'react';
import { TechIcon } from './TechIcon';
import { twMerge } from 'tailwind-merge';

interface ToolBoxItemsProps {
  items: Array<{
    title: string;
    iconType: React.ElementType;
  }>;
  className?: string;
  itemsWrapperClassName?: string;
}

export const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolBoxItemsProps) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-5 pr-5',
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-3 py-2 px-3 border border-[#13204329] bg-[#fdf9f0] rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold text-[var(--ink)]">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
