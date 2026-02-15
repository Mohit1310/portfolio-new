export const Header = () => {
  return (
<<<<<<< Updated upstream
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="/resume/Mohit_Dayma_Resume.pdf"
          className="nav-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
=======
    <header className="fixed top-4 left-0 right-0 z-30 px-4">
      <div className="container">
        <div className="luxury-frame rounded-full h-14 px-3 md:px-5 flex items-center justify-between bg-[#fcfaf6e6] backdrop-blur">
          <a
            href="#home"
            className="font-serif text-sm md:text-base tracking-[0.18em] uppercase text-[var(--ink)]"
          >
            Mohit Dayma
          </a>
          <nav className="flex items-center gap-0.5 md:gap-1">
            <a href="#home" className="nav-item">
              Home
            </a>
            <a href="#projects" className="nav-item">
              Projects
            </a>
            <a href="#about" className="nav-item">
              About
            </a>
            <a
              href="/resume/Mohit_Dayma_Resume.pdf"
              className="nav-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="ml-1 h-9 px-4 rounded-full border border-[var(--line)] text-xs uppercase tracking-[0.16em] inline-flex items-center text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
>>>>>>> Stashed changes
  );
};
