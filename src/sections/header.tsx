'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
  const getSectionHref = (sectionId: string) =>
    pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;

  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <div
        className={`fixed inset-0 z-10 bg-black/35 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
      <div className="container">
        <nav className="grid-shell relative z-20 mx-auto flex max-w-4xl items-center justify-between px-3 py-2 md:px-4">
          <Link href={getSectionHref('home')} className="font-serif text-lg tracking-wide text-white">
            Mohit Dayma
          </Link>
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            <Link href={getSectionHref('projects')} className="nav-item">
              Projects
            </Link>
            <Link href={getSectionHref('about')} className="nav-item">
              About
            </Link>
            <Link href="/blog" className="nav-item">
              Blog
            </Link>
            <Link
              href={getSectionHref('contact')}
              className="rounded-full border border-(--accent-lime) bg-(--accent-lime) px-4 py-2 text-sm font-semibold text-black transition"
            >
              Contact
            </Link>
          </div>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-4 text-sm font-semibold text-white transition hover:border-(--accent-cyan) hover:text-(--accent-cyan) md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
          <div
            id="mobile-menu"
            className={`absolute left-0 right-0 top-[calc(100%+0.55rem)] rounded-2xl border border-white/10 bg-[#080b15]/95 p-2 shadow-2xl backdrop-blur transition-all duration-300 ease-out md:hidden ${
              isMenuOpen
                ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
            }`}
            inert={!isMenuOpen}
          >
            <Link
              href={getSectionHref('projects')}
              className="nav-item flex w-full justify-center"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href={getSectionHref('about')}
              className="nav-item mt-1 flex w-full justify-center"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link href="/blog" className="nav-item mt-1 flex w-full justify-center" onClick={closeMenu}>
              Blog
            </Link>
            <Link
              href={getSectionHref('contact')}
              className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-full border border-(--accent-lime) bg-(--accent-lime) px-4 text-sm font-semibold text-black transition"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
