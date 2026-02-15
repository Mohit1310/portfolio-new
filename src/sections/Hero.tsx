'use client';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Reveal } from '@/components/Reveal';

export const HeroSection = () => {
  return (
<<<<<<< Updated upstream
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[600px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotate={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotate={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotate={178}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotate={-41} shouldOrbit orbitDuration="36s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotate={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotate={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotate={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotate={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotate={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute bg-green-500 size-2.5 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Avaliable for new projects
=======
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
>>>>>>> Stashed changes
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
    </div>
  );
};
