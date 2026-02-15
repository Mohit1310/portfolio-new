'use client';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { motion } from 'motion/react';
import { Reveal } from '@/components/Reveal';

export const ContactSection = () => {
  return (
<<<<<<< Updated upstream
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-8 px-10 text-gray-900 text-center md:text-left relative z-0">
          <div
            className="absolute inset-0 overflow-hidden -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how can I help you acheive your goals.
              </p>
            </div>
            <div>
              <a href="mailto:mohitdayma.dev@gmail.com" target="_blank">
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
=======
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
>>>>>>> Stashed changes
                  <ArrowUpRightIcon className="size-4" />
                </motion.button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
