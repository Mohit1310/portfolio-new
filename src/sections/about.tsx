import { SectionHeader } from '@/components/section-header';
import { toolBoxItems } from '@/utils/constants';

export const AboutSection = () => {
  return (
    <section id="about" className="border-t border-(--line)">
      <div className="container py-16 md:py-24">
        <SectionHeader
          title="A builder with product discipline"
          description="I treat frontend as a system where visual design, accessibility, and performance are first-class requirements, not afterthoughts."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h3 className="text-lg font-medium tracking-tight">How I work</h3>
            <p className="mt-4 max-w-md leading-relaxed text-(--text-muted)">
              I translate raw ideas into experiences people actually want to
              use: clean information architecture, expressive interfaces, and
              code that stays maintainable as products evolve.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-(--text-muted)">
              My standard stack is React and Next.js with TypeScript, backed by
              pragmatic design systems and performance budgets from day one.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium tracking-tight">Tooling</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6">
              {toolBoxItems.map((tool) => (
                <li
                  key={tool.title}
                  className="border-b border-(--line) py-3 font-mono text-sm"
                >
                  {tool.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
