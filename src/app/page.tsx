import { ArrowUpRight } from "lucide-react";
import { Header } from "@/sections/header";
import { PlaneFlyover } from "@/components/plane-flyover";
import { footerLinks, portfolioProjects, stack } from "@/utils/constants";

export default function Home() {
  return (
    <>
      <script type="module" src="/vendor/model-viewer.min.js" async />
      <PlaneFlyover />
      <main className="relative z-10">
      <Header />
      <div className="shell flex min-h-screen flex-col pb-10 pt-20 backdrop-blur-md">
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Mohit Dayma
        </h1>
        <p className="mt-3 leading-relaxed text-muted">
          I am Mohit, I started as Frontend Developor, but as worked more I became fascinated with software as a whole subject no matter what that is.
          No matter what that is Backend, Databases, Devops (didn't do this much). I have worked with various technologies &amp; tools.<br/><br/> Here is a list of them
          React, NextJS, Tailwind, React Native, NestJS, n8n <br/><br/>
          Before starting programming I was learning {' '}
          <a href="https://www.blender.org/" className="link">Blender</a>,
            the aeroplane is a first thing I build watching a youtube tutorial.
        </p>
        <section id="projects" className="mt-12 scroll-mt-20">
          <h2 className="font-mono text-xs uppercase tracking-widest text-faint">Projects</h2>
          <div className="mt-2 divide-y divide-line-subtle">
            {portfolioProjects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-3 flex items-center justify-between gap-4 rounded-md px-3 py-4 transition-colors hover:bg-surface-hover"
              >
                <span className="min-w-0">
                  <span className="block text-base font-medium text-foreground transition-colors group-hover:text-white md:text-lg">
                    {project.title}
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-muted">
                    {project.description}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-faint">{project.year}</span>
                  <ArrowUpRight
                    className="size-4 text-faint transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                    focusable="false"
                  />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
      </main>
    </>
  );
}
