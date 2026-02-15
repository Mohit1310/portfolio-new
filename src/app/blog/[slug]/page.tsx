import type { Metadata } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { blogMdxComponents } from '@/components/mdx/BlogMdxComponents';
import { getAllPosts, getPostBySlug } from '@/utils/blogs';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Mohit Dayma',
    };
  }

  return {
    title: `${post.title} | Mohit Dayma`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-14 pt-28 md:pt-32">
      <div className="container">
        <article className="grid-shell p-6 md:p-10">
          <Link
            href="/blog"
            className="text-sm font-semibold text-(--text-muted) transition hover:text-white"
          >
            ← Back to Blog
          </Link>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-(--text-muted)">
            {formatDate(post.publishedAt)} • {post.readTime}
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl text-white md:text-6xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-(--text-muted)"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert mt-8 max-w-none space-y-5">
            <MDXRemote source={post.content} components={blogMdxComponents} />
          </div>
        </article>
      </div>
    </main>
  );
}
