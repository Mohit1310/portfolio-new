import type { MDXComponents } from 'mdx/types';
import { Callout } from './Callout';
import { DemoCounter } from './DemoCounter';

export const blogMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="pt-4 font-serif text-2xl text-white md:text-3xl" {...props} />
  ),
  h3: (props) => (
    <h3 className="pt-2 text-xl font-semibold text-white" {...props} />
  ),
  p: (props) => (
    <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg" {...props} />
  ),
  ul: (props) => <ul className="list-disc space-y-2 pl-6" {...props} />,
  li: (props) => <li className="text-[var(--text-muted)]" {...props} />,
  a: (props) => (
    <a
      className="font-semibold text-[color:var(--accent-cyan)] underline decoration-white/20 underline-offset-4"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-[color:var(--accent-cyan)] pl-4 italic text-white/80"
      {...props}
    />
  ),
  Callout,
  DemoCounter,
};
