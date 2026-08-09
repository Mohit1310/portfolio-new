export const HeroSection = () => {
  return (
    <section id="home">
      <div className="container pb-16 pt-20 md:pb-24 md:pt-28">
        <p className="text-sm text-(--text-muted)">
          Frontend Engineer · Mohit Dayma
        </p>
        <h1 className="mt-6 max-w-4xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          I build fast, accessible interfaces people trust to use.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--text-muted)">
          I design and ship frontends with React and Next.js, pairing product
          thinking with clean, maintainable code and a sharp eye for detail.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn btn-primary">
            View selected work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="container pb-16 md:pb-20">
        <dl className="grid grid-cols-1 border-t border-(--line) sm:grid-cols-3">
          <div className="border-b border-(--line) py-6 pr-6 sm:border-b-0 sm:border-r">
            <dt className="text-sm text-(--text-muted)">Focus</dt>
            <dd className="mt-2 text-base font-medium">
              React · Next.js · TypeScript
            </dd>
          </div>
          <div className="border-b border-(--line) py-6 pr-6 sm:border-b-0 sm:border-r">
            <dt className="text-sm text-(--text-muted)">Experience</dt>
            <dd className="mt-2 text-base font-medium">
              2+ years building for the web
            </dd>
          </div>
          <div className="py-6">
            <dt className="text-sm text-(--text-muted)">Availability</dt>
            <dd className="mt-2 text-base font-medium">Open to new projects</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
