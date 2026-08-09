import type { MDXComponents } from 'mdx/types';
import { Callout } from './callout';
import {
  EventLoopComplexDemo,
  EventLoopSimpleDemo,
  EventLoopTimeoutDemo,
} from './event-loop-simulator';

export const blogMdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 text-2xl font-medium tracking-tight first:mt-0 md:text-3xl" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-medium tracking-tight" {...props} />
  ),
  p: (props) => (
    <p className="mt-5 leading-relaxed text-(--text-muted)" {...props} />
  ),
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6" {...props} />,
  li: (props) => <li className="leading-relaxed text-(--text-muted)" {...props} />,
  a: (props) => (
    <a className="font-medium underline underline-offset-4 hover:opacity-80" {...props} />
  ),
  strong: (props) => (
    <strong className="font-medium text-(--text-primary)" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-(--line-strong) pl-5 text-(--text-muted)"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-md border border-(--line) bg-(--surface) p-4 font-mono text-sm leading-relaxed"
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
        className="rounded border border-(--line) bg-(--surface) px-1.5 py-0.5 font-mono text-[0.85em]"
        {...props}
      />
    );
  },
  Callout,
  EventLoopSimpleDemo,
  EventLoopComplexDemo,
  EventLoopTimeoutDemo,
};
