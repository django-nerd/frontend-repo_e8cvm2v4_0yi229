import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
        >
          Bollaram <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Samridh</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
        >
          Creative Developer building interactive, playful and modern web experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center rounded-full px-6 py-3 bg-white text-black font-semibold hover:bg-cyan-400 hover:text-black transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-6 py-3 border border-white/20 text-white hover:border-white/50 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
