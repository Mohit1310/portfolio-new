'use client';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Reveal } from '@/components/Reveal';

export const HeroSection = () => {
  return (
    <section id="home" className="pt-36 md:pt-40 lg:pt-44 pb-16 md:pb-20">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <Reveal>
            <div className="luxury-frame rounded-[2rem] p-7 md:p-10 h-full flex flex-col justify-between">
              <div>
                <p className="font-medium text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                  Premium Frontend Engineering
                </p>
                <h1 className="font-serif text-5xl md:text-7xl leading-[1] mt-6 text-[var(--ink)]">
                  Crafted digital experiences for ambitious products.
                </h1>
                <p className="text-[var(--text-muted)] md:text-lg mt-6 max-w-2xl">
                  I help teams ship elegant web interfaces that look premium,
                  feel effortless, and perform at production scale.
                </p>
              </div>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a href="#projects">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-12 px-6 rounded-full bg-[var(--ink)] text-[#f7f1e7] inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs border border-[var(--ink)] hover:bg-[#2f2a24] transition-colors"
                  >
                    <span>View Case Studies</span>
                    <ArrowDown className="size-4" />
                  </motion.button>
                </a>
                <a href="#contact">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-12 px-6 rounded-full border border-[var(--line)] text-[var(--ink)] inline-flex items-center gap-2 uppercase tracking-[0.14em] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                  >
                    Start a Project
                  </motion.button>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="luxury-frame rounded-[2rem] p-6 md:p-8 h-full flex flex-col">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 micro-lift">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Delivery
                  </p>
                  <p className="font-serif text-3xl mt-2">Fast</p>
                </div>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 micro-lift">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    Quality
                  </p>
                  <p className="font-serif text-3xl mt-2">Refined</p>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-6 flex-1 min-h-[260px] rounded-[1.7rem] border border-[var(--line)] bg-[linear-gradient(180deg,#f8f3ea_0%,#efe7da_100%)] flex items-end justify-center overflow-hidden"
              >
                <Image
                  src={memojiImage}
                  alt="Person peeking from behind laptop"
                  className="w-[210px] md:w-[280px]"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inilne-flex items-center gap-2 border border-white bg-white text-gray-900  px-6 h-12 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
