import type { MDXComponents } from 'mdx/types';
import { Callout } from './Callout';
import {
  EventLoopComplexDemo,
  EventLoopSimpleDemo,
  EventLoopTimeoutDemo,
} from './EventLoopSimulator';

export const blogMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="pt-4 font-serif text-2xl text-white md:text-3xl" {...props} />
  ),
  h3: (props) => (
    <h3 className="pt-2 text-xl font-semibold text-white" {...props} />
  ),
  p: (props) => (
    <p className="text-base leading-relaxed text-(--text-muted) md:text-lg" {...props} />
  ),
  ul: (props) => <ul className="list-disc space-y-2 pl-6" {...props} />,
  li: (props) => <li className="text-(--text-muted)" {...props} />,
  a: (props) => (
    <a
      className="font-semibold text-(--accent-cyan) underline decoration-white/20 underline-offset-4"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-(--accent-cyan) pl-4 italic text-white/80"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm md:text-base"
      {...props}
    />
  ),
  code: ({ className, ...props }) => {
    const isBlockCode = Boolean(className?.includes('language-'));

    if (isBlockCode) {
      return <code className={className} {...props} />;
    }

    return (
      <code
        className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[0.88em] text-(--accent-cyan)"
        {...props}
      />
    );
  },
  Callout,
  EventLoopSimpleDemo,
  EventLoopComplexDemo,
  EventLoopTimeoutDemo,
};
