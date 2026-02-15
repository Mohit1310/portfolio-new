'use client';

import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { portfolioProjects } from '@/utils/constants';
<<<<<<< Updated upstream
import { useState } from 'react';
=======
import { motion } from 'motion/react';
>>>>>>> Stashed changes

export const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
<<<<<<< Updated upstream
    <section className="pb-16 lg:py-24 relative" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
=======
    <section className="pb-16 lg:pb-24" id="projects">
      <div className="container">
        <div className="section-divider pt-14 lg:pt-18">
          <SectionHeader
            eyebrow="Selected Work"
            title="Built to perform, designed to be remembered"
            description="A curated portfolio of products where interface clarity and technical quality drive measurable outcomes."
          />

          <div className="mt-10 md:mt-14 space-y-8">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="p-5 md:p-8 rounded-[2rem]">
                  <div className="grid lg:grid-cols-[1fr_390px] gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">
                        <span>{project.company}</span>
                        <span className="text-[var(--accent)]">/</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] mt-3 text-[var(--ink)]">
                        {project.title}
                      </h3>
                      <ul className="space-y-2 mt-5">
                        {project.results.map((result) => (
                          <li
                            key={result.title}
                            className="flex items-start gap-2.5 text-[var(--text-muted)]"
                          >
                            <CheckCircleIcon className="size-5 mt-0.5 text-[var(--accent)]" />
                            <span>{result.title}</span>
                          </li>
                        ))}
                      </ul>

                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="mt-7 h-11 px-5 rounded-full border border-[var(--line)] inline-flex items-center gap-2 uppercase tracking-[0.12em] text-xs hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                        >
                          <span>Visit Live Site</span>
                          <ArrowUpRight className="size-4" />
                        </motion.button>
                      </a>
                    </div>

                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="rounded-[1.5rem] border border-[var(--line)] overflow-hidden"
                    >
                      <Image src={project.image} alt={project.title} className="w-full h-auto" />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </section>
  );
};
