export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-4 w-full z-20 px-4">
      <nav className="flex gap-1.5 p-1.5 rounded-full border border-[#13204330] bg-[#fdf9f0dd] backdrop-blur-md shadow-[0_10px_40px_-22px_rgba(10,25,48,0.45)]">
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
          className="px-4 py-2 rounded-full text-sm font-semibold bg-[var(--ink)] text-[#f8f4eb] hover:bg-[var(--accent)] transition duration-300"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
