'use client';

import { motion } from 'framer-motion';

export default function Hosting() {
  const stackInfo = [
    {
      label: 'Hosting Platform',
      value: 'Cloudflare Pages',
      icon: '☁️',
      description: 'Global CDN with edge computing'
    },
    {
      label: 'Deployment Source',
      value: 'GitHub',
      icon: '🔗',
      description: 'Automated CI/CD pipeline'
    },
    {
      label: 'Security',
      value: 'Cloudflare CDN & HTTPS',
      icon: '🔒',
      description: 'DDoS protection & SSL/TLS encryption'
    },
    {
      label: 'Framework',
      value: 'Next.js (Static Export)',
      icon: '⚡',
      description: 'React-based SSG for performance'
    }
  ];

  return (
    <section id="hosting" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent">&gt;</span> Hosting & Stack
          </h2>
          <p className="text-gray-300 font-mono text-sm font-medium">
            {'// Powered by modern infrastructure'}
          </p>
        </motion.div>

        {/* Terminal-style output */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-terminal-bg/60 border border-terminal-accent/30 rounded-lg p-6 md:p-8 font-mono text-sm backdrop-blur-sm mb-8"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-terminal-accent/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-terminal-accent/60" />
            </div>
            <span className="text-gray-500 ml-4">system-info.sh</span>
          </div>

          {/* Terminal content */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-gray-600">$</span>{' '}
              <span className="text-terminal-accent">cat</span>{' '}
              <span className="text-gray-400">deployment.info</span>
            </motion.div>

            <div className="pl-4 space-y-2 text-gray-300 border-l-2 border-terminal-accent/30 ml-2">
              {stackInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="py-2"
                >
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-blue-400">{item.label}:</span>
                    <span className="text-terminal-accent font-bold">{item.value}</span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1 pl-4">
                    # {item.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <span className="text-gray-600">$</span>{' '}
              <span className="text-terminal-accent">echo</span>{' '}
              <span className="text-yellow-400">&quot;Deployment successful ✓&quot;</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-6 hover:border-terminal-accent/60 transition-colors backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-terminal-accent mb-2 font-mono">
              Global CDN
            </h3>
            <p className="text-gray-400 font-mono text-xs leading-relaxed">
              Delivered from 300+ edge locations worldwide for minimal latency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-6 hover:border-terminal-accent/60 transition-colors backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-terminal-accent mb-2 font-mono">
              Instant Deploys
            </h3>
            <p className="text-gray-400 font-mono text-xs leading-relaxed">
              Automatic deployments on every push to main branch via GitHub integration
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-6 hover:border-terminal-accent/60 transition-colors backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold text-terminal-accent mb-2 font-mono">
              Enterprise Security
            </h3>
            <p className="text-gray-400 font-mono text-xs leading-relaxed">
              DDoS mitigation, WAF, and automatic HTTPS with TLS 1.3
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 font-mono text-xs">
            <span className="text-terminal-accent">$</span> Proudly hosted on{' '}
            <span className="text-terminal-accent font-bold">Cloudflare Pages</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
