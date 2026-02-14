import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section
      className="pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-36 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-[0.03]"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[860px] hero-ring"></div>
        <div className="size-[1120px] hero-ring"></div>
        <HeroOrbit
          size={470}
          rotate={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-7 text-[var(--accent-soft)]" />
        </HeroOrbit>
        <HeroOrbit
          size={560}
          rotate={158}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-[#a8c5e2]" />
        </HeroOrbit>
        <HeroOrbit
          size={610}
          rotate={25}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-9 text-[var(--copper)]" />
        </HeroOrbit>
        <HeroOrbit size={720} rotate={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2.5 rounded-full bg-[var(--accent-soft)]" />
        </HeroOrbit>
        <HeroOrbit
          size={810}
          rotate={-68}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-16 text-[#294f7f]" />
        </HeroOrbit>
      </div>
      <div className="container relative">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-[#1320432f] bg-[linear-gradient(140deg,#fefbf4_0%,#f3ebdc_100%)] p-6 md:p-9 lg:p-12 shadow-[0_42px_65px_-55px_rgba(10,25,48,0.65)]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-4 bg-[#fdf9f0] border border-[#1320431f] px-4 py-2 rounded-full">
                <div className="bg-[#2f8a57] size-2.5 rounded-full relative">
                  <div className="absolute bg-[#2f8a57] size-2.5 rounded-full animate-ping-large"></div>
                </div>
                <div className="text-sm font-medium text-[var(--ink)]">
                  Available for new projects
                </div>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl mt-8 leading-[0.95] tracking-tight text-[var(--ink)]">
                Designing digital products with a developer&apos;s precision.
              </h1>
              <p className="mt-5 text-[var(--text-muted)] md:text-lg max-w-2xl">
                I build polished, high-performing interfaces for teams who value
                clarity, performance, and visual distinction.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-9 gap-4">
                <a href="#projects">
                  <button className="inline-flex items-center gap-2 bg-[var(--ink)] text-[#f8f4eb] px-6 h-12 rounded-xl hover:bg-[var(--accent)] transition-colors">
                    <span className="font-semibold">Explore Projects</span>
                    <ArrowDown className="size-4" />
                  </button>
                </a>
                <a href="#contact">
                  <button className="inline-flex items-center gap-2 border border-[#13204333] bg-[#fdf9f0] text-[var(--ink)] px-6 h-12 rounded-xl hover:bg-[#f2e8d7] transition-colors">
                    <span className="font-semibold">Book a Conversation</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="relative min-h-[260px] lg:min-h-[420px] flex items-end justify-center">
              <div className="absolute inset-x-6 bottom-0 h-[75%] rounded-t-[999px] bg-[linear-gradient(180deg,#dbe7f5_0%,#7caad8_100%)] opacity-80"></div>
              <Image
                src={memojiImage}
                alt="Person peeking from behind laptop"
                className="w-[220px] md:w-[280px] lg:w-[320px] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
