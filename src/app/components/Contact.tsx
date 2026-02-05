'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      icon: '📧',
      command: 'echo',
      color: 'text-blue-400'
    },
    {
      label: 'GitHub',
      value: 'github.com/yourusername',
      href: 'https://github.com/yourusername',
      icon: '🐙',
      command: 'git clone',
      color: 'text-purple-400'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
      command: 'curl',
      color: 'text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-terminal-bg/20 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent">&gt;</span> Get in Touch
          </h2>
          <p className="text-gray-300 font-mono text-sm font-medium">
            {"// Let's connect and collaborate"}
          </p>
        </motion.div>

        {/* Terminal-style contact box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-terminal-bg/60 border border-terminal-accent/30 rounded-lg overflow-hidden backdrop-blur-sm"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-6 py-4 bg-terminal-bg/40 border-b border-terminal-accent/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-terminal-accent/60" />
            </div>
            <span className="text-gray-500 font-mono text-sm ml-4">contact.sh</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 font-mono text-sm space-y-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                {/* Command prompt */}
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-gray-600">$</span>
                  <span className="text-terminal-accent">{contact.command}</span>
                  <span className="text-gray-500">{contact.label.toLowerCase()}</span>
                  <span className="text-2xl ml-2">{contact.icon}</span>
                </div>

                {/* Contact link */}
                <motion.a
                  href={contact.href}
                  target={contact.label !== 'Email' ? '_blank' : undefined}
                  rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`block pl-4 py-3 border-l-2 border-terminal-accent/30 ${contact.color} hover:border-terminal-accent hover:text-terminal-accent transition-all group-hover:pl-6`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="break-all">{contact.value}</span>
                    <motion.span
                      className="text-terminal-accent ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.a>
              </motion.div>
            ))}

            {/* Output message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-terminal-accent/20"
            >
              <p className="text-gray-500 text-xs">
                <span className="text-terminal-accent">{'// '}</span>
                Always open to discussing security, technology, or interesting projects.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                <span className="text-terminal-accent">{'// '}</span>
                Feel free to reach out—I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Typing indicator animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 pt-4"
            >
              <span className="text-gray-600">$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-terminal-accent"
              >
                _
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-gray-600 font-mono text-xs">
            <span className="text-terminal-accent">PGP Key Available</span> · Secure Communication Preferred
          </p>
          <p className="text-gray-700 font-mono text-xs">
            © 2026 Your Name · Built with ❤️ and ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}
