import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About
        </motion.h2>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-white/80 leading-relaxed"
          >
            I'm Bollaram Samridh, a creative developer focused on building immersive web apps that blend 3D, motion and thoughtful UI. I enjoy working across the stack with a deep love for clean design and smooth interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {['React', 'Three/Spline', 'TypeScript', 'Node.js', 'Python', 'Framer Motion'].map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
