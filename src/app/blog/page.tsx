import type { Metadata } from 'next';
import Link from 'next/link';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { getAllPosts } from '@/utils/blogs';

export const metadata: Metadata = {
  title: 'Blog | Mohit Dayma',
  description: 'Notes on frontend engineering, design systems, and product UX.',
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(date));

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pb-14 pt-28 md:pt-32">
      <div className="container">
        <div className="grid-shell mb-10 p-6 md:p-9">
          <p className="section-kicker">Blog</p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">
            Insights on frontend craft
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--text-muted)] md:text-base">
            Practical notes from shipping performant interfaces, refining UX, and
            maintaining quality at scale.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex h-10 items-center rounded-full border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-[color:var(--accent-cyan)] hover:text-[color:var(--accent-cyan)]"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          {posts.map((post) => (
            <article key={post.slug} className="grid-shell p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                <span>{formatDate(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 font-serif text-2xl text-white md:text-4xl">
                {post.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm text-[var(--text-muted)] md:text-base">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--accent-cyan)] transition hover:opacity-80"
              >
                Read article
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
