import { AnimatePresence, motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

interface QueueCardProps {
  title: string;
  items: string[];
  emptyLabel: string;
}

export const QueueCard = ({ title, items, emptyLabel }: QueueCardProps) => {
  return (
    <div className="rounded-md border border-(--line) bg-(--surface) p-3">
      <p className="text-[11px] font-semibold text-(--text-muted)">{title}</p>

      <div className="mt-2 space-y-2">
        <AnimatePresence initial={false} mode="popLayout">
          {items.length ? (
            items.map((item, index) => (
              <motion.div
                layout
                key={`${title}-${item}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className={twMerge(
                  'rounded-md border px-2 py-1 text-xs font-medium md:text-sm',
                  index === 0
                    ? 'border-(--text-primary) bg-(--surface)'
                    : 'border-(--line) bg-(--bg)'
                )}
              >
                {item}
              </motion.div>
            ))
          ) : (
            <motion.p
              layout
              key={`${title}-empty`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="rounded-md border border-dashed border-(--line-strong) px-2 py-1 text-xs text-(--text-muted)"
            >
              {emptyLabel}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
