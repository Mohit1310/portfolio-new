import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Header } from "@/sections/header";
import { PlaneFlyover } from "@/components/plane-flyover";
import { footerLinks, portfolioProjects } from "@/utils/constants";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  ),
};

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
            I am Mohit, I started as Frontend Developer, but as worked more I
            became fascinated with software as a whole subject no matter what
            that is. No matter what that is Backend, Databases, Devops
            (didn&apos;t do this much). I have worked with various technologies
            &amp; tools.
            <br />
            <br /> Here is a list of them React, NextJS, Tailwind, React Native,
            NestJS, n8n <br />
            <br />
            Before starting programming I was learning{" "}
            <a href="https://www.blender.org/" className="link">
              Blender
            </a>
            , the aeroplane is a first thing I build watching a youtube
            tutorial.
          </p>
          <div
            className="mt-5 flex items-center gap-2"
            aria-label="Social links"
          >
            {footerLinks.map((link) => {
              const Icon = socialIcons[link.title as keyof typeof socialIcons];

              return (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                  title={link.title}
                  className="rounded-md border border-line-subtle p-2.5 text-muted transition-colors hover:border-line hover:bg-surface-hover hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
          <section id="projects" className="mt-12 scroll-mt-20">
            <h2 className="font-mono text-xs uppercase tracking-widest text-faint">
              Projects
            </h2>
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
                    <span className="font-mono text-xs text-faint">
                      {project.year}
                    </span>
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
