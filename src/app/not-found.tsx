import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <p className="font-mono text-sm text-(--text-muted)">404</p>
      <h1 className="mt-4 text-center text-3xl font-medium tracking-tight md:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-sm text-center text-(--text-muted)">
        The page may have moved, or the link is broken.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to portfolio
      </Link>
    </main>
  );
}
