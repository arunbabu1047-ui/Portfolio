const Header = ({ name }) => (
  <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 sm:px-10">
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        Portfolio
      </p>
      <p className="text-lg font-semibold text-white">{name}</p>
    </div>
    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
      <a href="#about" className="transition hover:text-white">
        About
      </a>
      <a href="#skills" className="transition hover:text-white">
        Skills
      </a>
      <a href="#experience" className="transition hover:text-white">
        Experience
      </a>
      <a href="#projects" className="transition hover:text-white">
        Projects
      </a>
      <a href="#education" className="transition hover:text-white">
        Education
      </a>
      <a href="#tools" className="transition hover:text-white">
        Tools
      </a>
      {/* <a href="#tech-stack" className="transition hover:text-white">
        Tech Stack
      </a> */}
      {/* <a href="#certifications" className="transition hover:text-white">
        Certifications
      </a> */}
      <a href="#languages" className="transition hover:text-white">
        Languages
      </a>
      <a href="#contact" className="transition hover:text-white">
        Contact
      </a>
    </nav>
    <a
      href="#contact"
      className="shine rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white shadow-glow transition hover:border-white/40 hover:bg-white/20"
    >
      Let&apos;s Talk
    </a>
  </header>
);

export default Header;
