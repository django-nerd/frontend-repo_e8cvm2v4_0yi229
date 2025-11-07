import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Bollaram Samridh</span>
          <a href="https://github.com/Abhiz2411/3D-interactive-portfolio" target="_blank" rel="noreferrer" className="hover:text-white transition">Inspiration</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
