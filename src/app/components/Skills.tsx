'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming & Development',
      skills: [
        { name: 'Python', status: 'Daily Use' },
        { name: 'JavaScript/TypeScript', status: 'Daily Use' },
        { name: 'React/Next.js', status: 'Practicing' },
        { name: 'Node.js', status: 'Practicing' },
        { name: 'Git & GitHub', status: 'Daily Use' },
        { name: 'Linux/Bash', status: 'Daily Use' }
      ]
    },
    {
      category: 'Security & Networking',
      skills: [
        { name: 'Network Protocols (TCP/IP)', status: 'Learning' },
        { name: 'Penetration Testing', status: 'Learning' },
        { name: 'Cryptography Basics', status: 'Learning' },
        { name: 'Wireshark', status: 'Practicing' },
        { name: 'Nmap & Scanning Tools', status: 'Practicing' },
        { name: 'OWASP Top 10', status: 'Learning' }
      ]
    },
    {
      category: 'Concepts & Fundamentals',
      skills: [
        { name: 'Secure Coding Practices', status: 'Learning' },
        { name: 'Web Security (XSS, CSRF, SQL Injection)', status: 'Learning' },
        { name: 'Authentication & Authorization', status: 'Learning' },
        { name: 'Ethical Hacking', status: 'Learning' },
        { name: 'Threat Modeling', status: 'Learning' },
        { name: 'Security Research', status: 'Learning' }
      ]
    }
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

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-terminal-text-primary mb-6 font-mono flex items-center">
                <span className="text-terminal-accent mr-2">[</span>
                {category.category}
                <span className="text-terminal-accent ml-2">]</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.03
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
