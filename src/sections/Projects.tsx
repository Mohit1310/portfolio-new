'use client';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/Card';
import { portfolioProjects } from '@/utils/constants';

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pb-24 relative" id="projects">
      <div className="container">
        <div className="section-divider pt-16 lg:pt-24">
          <SectionHeader
            eyebrow="Selected Work"
            title="Products built for real users"
            description="A curated set of projects where I translated product goals into fast, reliable, and conversion-focused frontend experiences."
          />
          <div className="flex flex-col mt-10 gap-12 md:mt-16">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-6 pt-8 pb-0 md:px-10 md:pt-10 lg:px-12 lg:pt-12 sticky"
                style={{
                  top: `calc(72px + ${projectIndex * 30}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                  <div className="lg:pb-10">
                    <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                      <span>{project.company}</span>
                      <span className="text-[var(--copper)]">•</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-3xl mt-3 md:text-5xl text-[var(--ink)] leading-tight">
                      {project.title}
                    </h3>
                    <hr className="border-t border-[#13204326] mt-5" />
                    <ul className="flex flex-col gap-3 mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2.5 text-sm md:text-base text-[var(--text-muted)]"
                        >
                          <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0 text-[var(--copper)]" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-[var(--ink)] text-[#f8f4eb] h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-[var(--accent)] transition-colors">
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 rounded-t-2xl border border-[#1320432b] lg:mt-0 lg:translate-y-8"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
