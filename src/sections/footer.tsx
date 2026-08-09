import { ArrowUpRightIcon } from 'lucide-react';
import { footerLinks } from '@/utils/constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--line)">
      <div className="container flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-sm text-(--text-muted)">© {year} Mohit Dayma</p>
        <nav className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-1"
            >
              {link.title}
              <ArrowUpRightIcon
                className="size-3.5"
                aria-hidden="true"
                focusable="false"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};
