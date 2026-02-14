import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { footerLinks } from '@/utils/constants';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-x-clip pb-4">
      <div className="container">
        <div className="border-t border-[#13204326] py-7 text-sm flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-[var(--text-muted)]">
            &copy; {year} Mohit Dayma. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-5 z-10">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
