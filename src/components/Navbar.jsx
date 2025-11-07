import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          Bollaram <span className="text-cyan-400">Samridh</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-2 bg-cyan-500/90 hover:bg-cyan-400 text-black font-medium transition"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  );
}
