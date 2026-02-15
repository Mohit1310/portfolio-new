'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { motion } from 'motion/react';
import { Reveal } from '@/components/Reveal';

export const ContactSection = () => {
  return (
    <section className="py-14 lg:py-20" id="contact">
      <div className="container">
        <Reveal>
          <div className="luxury-frame rounded-[2rem] p-7 md:p-10 bg-[linear-gradient(130deg,#f4ece1_0%,#e9ddcc_100%)]">
            <div className="grid md:grid-cols-[1fr_auto] gap-7 items-end">
              <div>
                <p className="uppercase text-xs tracking-[0.22em] text-[var(--accent)] font-medium">
                  Let&apos;s Collaborate
                </p>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] mt-4 text-[var(--ink)]">
                  Building your next premium digital experience.
                </h2>
                <p className="text-[var(--text-muted)] mt-4 md:text-lg max-w-2xl">
                  If your product needs frontend craft, precision, and speed, I
                  can help from concept to launch.
                </p>
              </div>
              <a
                href="mailto:mohitdayma.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 px-6 rounded-full border border-[var(--ink)] bg-[var(--ink)] text-[#f7f1e7] inline-flex items-center gap-2 uppercase tracking-[0.12em] text-xs hover:bg-[#2f2a24] transition-colors"
                >
                  <span>Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </motion.button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
