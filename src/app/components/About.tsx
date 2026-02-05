'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Lock, Zap, Search } from 'lucide-react';


export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Student Mindset',
      description: 'Constantly learning, experimenting, and pushing boundaries in cybersecurity and software development.'
    },
    {
      icon: Lock,
      title: 'Security First',
      description: 'Building with security considerations from the ground up. Every line of code is an opportunity to do it right.'
    },
    {
      icon: Zap,
      title: 'Ethical Builder',
      description: 'Committed to responsible disclosure, ethical practices, and using technical skills for positive impact.'
    },
    {
      icon: Search,
      title: 'Curious Mind',
      description: 'Always asking "how does this work?" and "what could go wrong?" Driven by curiosity and problem-solving.'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent">&gt;</span> About Me
          </h2>
          <p className="text-gray-300 font-mono text-sm font-medium">
            {'// Who I am and what drives me'}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-gray-300 font-mono text-sm space-y-4 leading-relaxed">
                <p>
                  <span className="text-terminal-accent">const</span> me = {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">status</span>: <span className="text-yellow-400">&quot;Cybersecurity Student&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">focus</span>: [
                  <span className="text-yellow-400">&quot;Security&quot;</span>,
                  <span className="text-yellow-400"> &quot;Code&quot;</span>,
                  <span className="text-yellow-400"> &quot;Learning&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">mission</span>: <span className="text-yellow-400">&quot;Build secure, ethical software&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">approach</span>: <span className="text-yellow-400">&quot;Learn by doing&quot;</span>
                </p>
                <p>{'};'}</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 font-mono text-sm leading-relaxed space-y-4"
            >
              <p>
                I&apos;m a cybersecurity student passionate about understanding how systems work—and how they break.
                My journey is driven by curiosity, hands-on experimentation, and a commitment to ethical practices.
              </p>
              <p>
                Every project I build is an opportunity to learn something new about security, software architecture,
                or problem-solving. I believe in continuous improvement, responsible disclosure, and the power of
                open knowledge sharing.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-5 hover:border-terminal-accent/60 transition-colors backdrop-blur-sm group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-8 h-8 flex items-center justify-center text-terminal-accent"
                  >
                    {/* Render the icon component directly */}
                    <item.icon size={32} strokeWidth={2} />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-terminal-accent mb-2 font-mono group-hover:text-terminal-text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 font-mono text-sm border-t border-terminal-accent/20 pt-6"
        >
          <span className="text-terminal-accent">$</span> echo &quot;Stay curious. Stay ethical. Keep building.&quot;
        </motion.div>
      </div>
    </section>
  );
}
