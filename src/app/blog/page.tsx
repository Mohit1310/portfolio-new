import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/sections/header';
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
    timeZone: 'UTC',
  }).format(new Date(date));

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            Notes on frontend craft
          </h1>
          <p className="mt-4 text-(--text-muted)">
            Practical notes from shipping performant interfaces, refining UX,
            and maintaining quality at scale.
          </p>
        </div>

        <div className="mt-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-(--line)">
              <Link href={`/blog/${post.slug}`} className="block py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="text-xl font-medium tracking-tight md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="font-mono text-sm text-(--text-muted)">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-(--text-muted)">
                  {post.excerpt}
                </p>
                <p className="mt-4 font-mono text-xs text-(--text-muted)">
                  {post.readTime}
                  {post.tags.length > 0 && <> · {post.tags.join(' · ')}</>}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
