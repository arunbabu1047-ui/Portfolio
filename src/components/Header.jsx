import { useState } from 'react';

const Header = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
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
        <a href="#languages" className="transition hover:text-white">
          Languages
        </a>
        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="shine rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white shadow-glow transition hover:border-white/40 hover:bg-white/20 sm:px-5"
        >
          Let&apos;s Talk
        </a>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-xl leading-none">×</span>
          ) : (
            <span className="text-lg leading-none">≡</span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-6 right-6 top-[88px] rounded-2xl border border-white/10 bg-slate-900/95 p-5 text-sm text-slate-200 shadow-2xl backdrop-blur md:hidden">
          <div className="grid gap-3">
            <a href="#about" onClick={handleClose} className="hover:text-white">
              About
            </a>
            <a href="#skills" onClick={handleClose} className="hover:text-white">
              Skills
            </a>
            <a
              href="#experience"
              onClick={handleClose}
              className="hover:text-white"
            >
              Experience
            </a>
            <a href="#projects" onClick={handleClose} className="hover:text-white">
              Projects
            </a>
            <a
              href="#education"
              onClick={handleClose}
              className="hover:text-white"
            >
              Education
            </a>
            <a href="#tools" onClick={handleClose} className="hover:text-white">
              Tools
            </a>
            <a
              href="#languages"
              onClick={handleClose}
              className="hover:text-white"
            >
              Languages
            </a>
            <a href="#contact" onClick={handleClose} className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
