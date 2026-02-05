'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: 'Python', status: 'Daily Use' },
    { name: 'Git & GitHub', status: 'Daily Use' },
    { name: 'Linux/Bash', status: 'Daily Use' }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-terminal-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 font-mono text-terminal-text-primary">
            <span className="text-terminal-accent">&gt;</span> Skills & Tools
          </h2>
          <p className="text-terminal-text-secondary text-base leading-relaxed">
            Technologies and concepts I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1
              }}
              className="bg-terminal-bg border border-terminal-border rounded px-4 py-3 hover:border-terminal-accent transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-terminal-text-primary text-sm leading-relaxed">
                  {skill.name}
                </span>
                <span className="text-terminal-text-secondary text-xs whitespace-nowrap font-mono">
                  {skill.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
