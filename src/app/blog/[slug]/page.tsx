import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import { blogMdxComponents } from '@/components/mdx/blog-mdx-components';
import { Header } from '@/sections/header';
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
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      ...(post.coverImage && {
        images: [
          {
            url: post.coverImage,
            width: 1672,
            height: 941,
            alt: post.title,
          },
        ],
      }),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const posts = getAllPosts();
  const postIndex = posts.findIndex((entry) => entry.slug === slug);
  const previousPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;
  const nextPost = postIndex > 0 ? posts[postIndex - 1] : null;

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container py-16 md:py-24">
        <article className="mx-auto max-w-3xl">
          <p className="font-mono text-sm text-(--text-muted)">
            {formatDate(post.publishedAt)} · {post.readTime}
          </p>
          <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <p className="mt-5 font-mono text-xs text-(--text-muted)">
              {post.tags.join(' · ')}
            </p>
          )}

          {post.coverImage && (
            <div className="mt-10 overflow-hidden border border-(--line)">
              <Image
                src={post.coverImage}
                alt="Abstract directed social graph with a highlighted recommendation path"
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
                priority
              />
            </div>
          )}

          <div className="mt-10">
            <MDXRemote
              source={post.content}
              components={blogMdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {(previousPost || nextPost) && (
            <nav className="mt-16 grid gap-8 border-t border-(--line) pt-8 sm:grid-cols-2">
              {previousPost ? (
                <Link href={`/blog/${previousPost.slug}`} className="group">
                  <p className="text-sm text-(--text-muted)">Previous article</p>
                  <p className="mt-2 font-medium underline-offset-4 group-hover:underline">
                    {previousPost.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group text-right"
                >
                  <p className="text-sm text-(--text-muted)">Next article</p>
                  <p className="mt-2 font-medium underline-offset-4 group-hover:underline">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </article>
      </div>
    </main>
  );
}
