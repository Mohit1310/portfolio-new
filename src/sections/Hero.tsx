import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <span className="section-kicker">Frontend Engineer</span>
            <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Dark.
              <br />
              Sharp.
              <br />
              Memorable.
            </h1>
            <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-(--text-muted) md:text-lg">
              I build clean, responsive interfaces with React and Next.js,
              focusing on performance, usability, and polished visual detail.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:border-(--accent-cyan) hover:text-(--accent-cyan)"
              >
                Explore Projects
                <ArrowDown className="size-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full bg-(--accent-cyan) px-6 text-sm font-semibold text-black transition hover:brightness-110"
              >
                Start a Project
              </a>
            </div>
          </div>
          <div className="grid-shell relative p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-xs uppercase tracking-[0.22em] text-(--text-muted)">
                Live Signals
              </span>
              <span className="rounded-full border border-emerald-300/35 bg-emerald-300/15 px-3 py-1 text-xs text-emerald-200">
                Available now
              </span>
            </div>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-white md:text-xl">
                  Next.js, React, TypeScript, Motion
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-2 py-4">
                  <p className="font-serif text-3xl text-(--accent-cyan)">
                    2+
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-(--text-muted)">
                    Years
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-2 py-4">
                  <p className="font-serif text-3xl text-(--accent-lime)">
                    4
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-(--text-muted)">
                    Core Tools
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-2 py-4">
                  <p className="font-serif text-3xl text-(--accent-orange)">
                    UI
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-(--text-muted)">
                    Craft Focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
