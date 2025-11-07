import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
        <p className="mt-2 text-white/70">Have a project in mind or just want to say hi? Let's chat.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <input type="text" required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" required placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea required rows="4" placeholder="Message" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center rounded-full px-6 py-3 bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold transition">Send Message</button>
            {status && <span className="text-sm text-white/70">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
