'use client';

import { motion } from 'motion/react';
import { PropsWithChildren } from 'react';

interface RevealProps extends PropsWithChildren {
  delay?: number;
  y?: number;
  className?: string;
}

export const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
