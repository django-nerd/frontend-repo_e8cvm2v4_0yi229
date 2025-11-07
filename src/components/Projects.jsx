import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Portfolio',
    description: 'A playful 3D portfolio experience powered by Spline and React.',
    link: 'https://github.com/Abhiz2411/3D-interactive-portfolio'
  },
  {
    title: 'Creative Playground',
    description: 'Micro-interactions and motion experiments with Framer Motion.',
    link: '#'
  },
  {
    title: 'UI Component Pack',
    description: 'Reusable components styled with Tailwind and shadcn patterns.',
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition">→</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
