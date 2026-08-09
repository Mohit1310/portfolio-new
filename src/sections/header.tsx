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

  const navItems = [
    { label: 'Projects', href: getSectionHref('projects') },
    { label: 'About', href: getSectionHref('about') },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-(--line) bg-(--bg)">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-base font-medium tracking-tight"
        >
          Mohit Dayma
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
          <Link href={getSectionHref('contact')} className="btn btn-primary">
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="inline-flex h-9 items-center rounded-md border border-(--line-strong) px-3 text-sm font-medium md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`container pb-4 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        inert={!isMenuOpen}
      >
        <nav className="flex flex-col gap-1 border-t border-(--line) pt-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link rounded-md px-2 py-2"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={getSectionHref('contact')}
            className="btn btn-primary mt-2"
            onClick={closeMenu}
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
};
