import { SectionHeader } from '@/components/section-header';
import { toolBoxItems } from '@/utils/constants';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About"
          title="Builder mindset with product discipline"
          description="I approach frontend as a system where visual design, accessibility, and performance are all first-class requirements."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="grid-shell p-6 md:p-8">
            <h3 className="font-serif text-3xl text-white">How I work</h3>
            <p className="mt-4 text-sm leading-relaxed text-(--text-muted) md:text-base">
              I translate raw ideas into experiences people actually want to use.
              That means clean information architecture, expressive interfaces,
              and code that remains maintainable as products evolve.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-(--text-muted) md:text-base">
              My standard stack is React and Next.js with TypeScript, backed by
              pragmatic design systems and performance budgets from day one.
            </p>
          </article>

          <article className="grid-shell p-6 md:p-8">
            <h3 className="font-serif text-3xl text-white">Tooling</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {toolBoxItems.map((tool) => (
                <span
                  key={tool.title}
                  className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--text-muted)"
                >
                  {tool.title}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
