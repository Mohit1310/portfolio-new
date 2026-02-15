import { SectionHeader } from '@/components/SectionHeader';
import { portfolioProjects } from '@/utils/constants';
import { ArrowUpRight, CheckCircleIcon } from 'lucide-react';

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
              className="grid-shell group relative overflow-hidden p-5 md:p-7"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-linear-to-r from-(--accent-cyan) via-(--accent-lime) to-transparent opacity-70" />
              <p className="text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                Case Study {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight text-white md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-sm uppercase tracking-[0.16em] text-(--text-muted)">Highlights</p>
              <ul className="mt-5 space-y-3">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex items-start gap-2 text-sm leading-relaxed text-(--text-muted) md:text-base"
                  >
                    <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-(--accent-lime)" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <p className="text-xs uppercase tracking-[0.16em] text-(--text-muted)">
                  Live preview available
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-(--accent-cyan) px-5 text-sm font-semibold text-(--accent-cyan) transition hover:bg-(--accent-cyan) hover:text-black"
                >
                  View Live
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
