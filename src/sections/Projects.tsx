import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import Image from 'next/image';
import { SectionHeader } from '@/components/SectionHeader';
import { portfolioProjects } from '@/utils/constants';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that ship with intent"
          description="Each build balances visual identity, technical rigor, and measurable user outcomes."
        />

        <div className="space-y-8">
          {portfolioProjects.map((project, index) => (
            <article
              key={project.title}
              className="grid-shell group grid gap-6 p-5 md:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
            >
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {project.company} / {project.year} / {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight text-white md:text-4xl">
                  {project.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {project.results.map((result) => (
                    <li
                      key={result.title}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[var(--text-muted)] md:text-base"
                    >
                      <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[color:var(--accent-lime)]" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--accent-cyan)] px-5 text-sm font-semibold text-[color:var(--accent-cyan)] transition hover:bg-[color:var(--accent-cyan)] hover:text-black"
                >
                  View Live
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="order-1 overflow-hidden rounded-2xl border border-white/10 bg-black/30 lg:order-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
