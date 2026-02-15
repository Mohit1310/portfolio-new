'use client';

import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { portfolioProjects } from '@/utils/constants';
import { motion } from 'motion/react';

export const ProjectsSection = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};
