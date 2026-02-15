export const Header = () => {
  return (
    <header className="fixed top-0 z-40 w-full px-4 pt-4 md:px-8">
      <div className="container">
        <nav className="grid-shell mx-auto flex max-w-4xl items-center justify-between px-3 py-2 md:px-4">
          <a href="#home" className="font-serif text-lg tracking-wide text-white">
            Mohit Dayma
          </a>
          <div className="flex items-center gap-1 md:gap-2">
            <a href="#projects" className="nav-item">
              Projects
            </a>
            <a href="#about" className="nav-item hidden sm:inline-flex">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[color:var(--accent-lime)] bg-[color:var(--accent-lime)] px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.03]"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
