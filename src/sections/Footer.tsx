import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { footerLinks } from '@/utils/constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
<<<<<<< Updated upstream
    <footer className="relative overflow-x-clip">
      <div className="absolute -z-10 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            &copy; {year} All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 z-10">
=======
    <footer className="pb-5">
      <div className="container">
        <div className="border-t border-[var(--line-soft)] pt-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-5">
          <div className="text-[var(--text-muted)] uppercase tracking-[0.08em]">
            &copy; {year} Mohit Dayma. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-5">
>>>>>>> Stashed changes
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
<<<<<<< Updated upstream
                className="inline-flex items-center gap-1.5"
=======
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 uppercase text-xs tracking-[0.14em] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
>>>>>>> Stashed changes
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
