import { ArrowUpRightIcon } from 'lucide-react';
import { footerLinks } from '@/utils/constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p className="text-(--text-muted)">© {year} Mohit Dayma</p>
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-(--text-muted) transition hover:text-white"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
