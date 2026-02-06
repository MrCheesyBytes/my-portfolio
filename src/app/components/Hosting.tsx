'use client';

import { motion } from 'framer-motion';
import { Cloud, Github, Lock, Zap, Server, Shield, Globe, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hosting() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stackInfo = [
    {
      label: 'Hosting Platform',
      value: 'Cloudflare Pages',
      icon: Cloud,
      description: 'Global CDN with edge computing',
      color: 'text-orange-500'
    },
    {
      label: 'Deployment Source',
      value: 'GitHub',
      icon: Github,
      description: 'Automated CI/CD pipeline',
      color: 'text-white'
    },
    {
      label: 'Security',
      value: 'Cloudflare CDN & HTTPS',
      icon: Lock,
      description: 'DDoS protection & SSL/TLS encryption',
      color: 'text-green-400'
    },
    {
      label: 'Framework',
      value: 'Next.js (Static Export)',
      icon: Zap,
      description: 'React-based SSG for performance',
      color: 'text-blue-400'
    }
  ];

  if (!mounted) return <section id="hosting" className="py-20 bg-black min-h-screen" />;

  return (
    <section id="hosting" className="py-20 px-6 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-black/60 border border-white/10 rounded-xl p-6 md:p-8 font-mono text-sm backdrop-blur-md mb-12 shadow-2xl relative group"
        >
          {/* Decorative Terminal border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Terminal header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest">
              <Server size={12} />
              <span>Edge-Network-Status</span>
            </div>
            <span className="text-gray-500 text-[10px]">v1.0.4</span>
          </div>

          {/* Terminal content */}
          <div className="space-y-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-600 font-bold">$</span>{' '}
              <span className="text-terminal-accent">fetch</span>{' '}
              <span className="text-gray-400">deployment --verbose</span>
            </motion.div>

            <div className="pl-4 space-y-4 border-l border-white/10 ml-2">
              {stackInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group/item"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-4 h-4 ${item.color} group-hover/item:scale-125 transition-transform`} />
                    <span className="text-blue-400/80">{item.label}:</span>
                    <span className="text-white font-medium">{item.value}</span>
                  </div>
                  <div className="text-gray-500 text-xs mt-1 pl-7 italic">
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex items-center gap-2"
            >
              <span className="text-gray-600">$</span>{' '}
              <span className="text-green-400 font-bold animate-pulse">
                &quot;Deployment successful ✓&quot;
              </span>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-4 bg-terminal-accent"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Global CDN",
              desc: "Delivered from 300+ edge locations worldwide for minimal latency",
              icon: Globe,
              img: "/icons/icon_web.svg"
            },
            {
              title: "Instant Deploys",
              desc: "Automatic deployments on every push to main branch via GitHub integration",
              icon: Zap,
              img: "/icons/icon_rocket.svg"
            },
            {
              title: "Enterprise Security",
              desc: "DDoS mitigation, WAF, and automatic HTTPS with TLS 1.3",
              icon: Shield,
              img: "/icons/icon_shield.svg"
            }
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -5, borderColor: 'rgba(var(--terminal-accent-rgb), 0.5)' }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="relative w-10 h-10 mb-4">
                <img src={card.img} alt={card.title} className="w-full h-full object-contain relative z-10" />
                <div className="absolute inset-0 bg-terminal-accent/20 blur-lg rounded-full scale-0 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-mono group-hover:text-terminal-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-400 font-mono text-xs leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 font-mono text-[10px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Proudly hosted on{' '}
            <span className="text-white font-bold">Cloudflare Pages</span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}