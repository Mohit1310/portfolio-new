import { SectionHeader } from '@/components/section-header';
import { portfolioProjects } from '@/utils/constants';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="border-t border-(--line)">
      <div className="container py-16 md:py-24">
        <SectionHeader
          title="Selected work"
          description="Three shipped interfaces, each balancing visual identity with technical rigor."
        />

        <table className="mt-12 w-full">
          <caption className="sr-only">
            Selected projects with stack, year, and live preview links.
          </caption>
          <thead>
            <tr className="border-b border-(--line-strong)">
              <th
                scope="col"
                className="pb-4 pr-6 text-left text-sm font-medium text-(--text-muted)"
              >
                Project
              </th>
              <th
                scope="col"
                className="hidden pb-4 pr-6 text-left text-sm font-medium text-(--text-muted) md:table-cell"
              >
                Stack
              </th>
              <th
                scope="col"
                className="pb-4 pl-6 text-right text-sm font-medium text-(--text-muted)"
              >
                Year
              </th>
              <th
                scope="col"
                className="pb-4 pl-6 text-right text-sm font-medium text-(--text-muted)"
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {portfolioProjects.map((project) => (
              <tr key={project.title} className="border-b border-(--line)">
                <th scope="row" className="py-6 pr-6 text-left align-top">
                  <span className="text-lg font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="mt-1 block max-w-md text-sm leading-relaxed text-(--text-muted)">
                    {project.tagline}
                  </span>
                </th>
                <td className="hidden py-6 pr-6 align-top md:table-cell">
                  <span className="font-mono text-sm text-(--text-muted)">
                    {project.stack}
                  </span>
                </td>
                <td className="py-6 pl-6 text-right align-top font-mono text-sm tabular-nums text-(--text-muted)">
                  {project.year}
                </td>
                <td className="py-6 pl-6 text-right align-top">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
                  >
                    View
                    <ArrowUpRight
                      className="size-4"
                      aria-hidden="true"
                      focusable="false"
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
