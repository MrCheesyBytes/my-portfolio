'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal, ChevronRight, Copy, Check, ShieldCheck, Wifi, Link } from 'lucide-react';
import { url } from 'inspector';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contacts = [
    {
      id: 'email',
      label: 'Email',
      value: 'danindunavoda@gmail.com',
      href: 'mailto:danindunavoda@gmail.com',
      icon: Mail,
      command: 'mail -s "Connection Request"',
      color: 'text-blue-400'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/MrCheesyBytes',
      href: 'https://github.com/MrCheesyBytes',
      icon: Github,
      command: 'ssh -v git@github.com',
      color: 'text-purple-400'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/danindu-navoda',
      href: 'https://www.linkedin.com/in/danindu-navoda/',
      icon: Linkedin,
      command: 'linkedin-cli --profile danindu-navoda',
      color: 'text-cyan-400'
    },

    {
      id: 'url',
      label: 'Linktree',
      value: 'linktr.ee/danindu_B',
      href: 'https://linktr.ee/danindu_B',
      icon: Link,
      command: 'curl -s https://linktr.ee/danindu_B',
      color: 'text-green-400'      
    }
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);

  if (!mounted) return <section id="contact" className="min-h-screen bg-black" />;

  return (
    <section 
      id="contact" 
      ref={containerRef}
      // THEME UPDATE: Changed bg-[#050505] to bg-black to match Hero/About
      className="min-h-screen py-32 px-6 bg-black relative overflow-hidden flex items-center"
    >
      {/* Matrix-like Scanning Effect Overlay - Adjusted for darker theme */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(0,255,65,0.01),rgba(0,255,65,0.01),rgba(0,255,65,0.01))] z-10 bg-[length:100%_4px,3px_100%]" />
      
      {/* Background Decorative Grid - Matches Hero Grid style */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div style={{ opacity, scale }} className="max-w-4xl mx-auto w-full relative z-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terminal-accent/10 border border-terminal-accent/20 mb-6">
            <ShieldCheck size={14} className="text-terminal-accent animate-pulse" />
            <span className="text-terminal-accent font-mono text-[10px] uppercase tracking-widest">End-to-End Encrypted</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono tracking-tighter text-white">
            <span className="text-terminal-accent">/</span>Contact_Me
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
            Init: Secure Handshake Protocol
          </p>
        </motion.div>

        {/* Terminal Window */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a]/90 border border-white/10 rounded-xl overflow-hidden backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(0,255,65,0.1)]"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-5 py-4 bg-white/[0.03] border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80" />
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              <Terminal size={12} className="text-terminal-accent" />
              SESSION: 0x8F2A_SECURE_TUNNEL
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-green-500">
              <Wifi size={12} className="animate-pulse" />
              CONNECTED
            </div>
          </div>

          {/* Body */}
          <div className="p-6 md:p-12 font-mono space-y-8">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group"
              >
                <div className="mb-3 flex items-center gap-3 text-[11px]">
                  <span className="text-terminal-accent font-bold">root@danindu:~$</span>
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "auto" }}
                    className="text-white/50 overflow-hidden whitespace-nowrap"
                  >
                    {contact.command}
                  </motion.span>
                </div>

                <div className="relative flex items-center gap-3">
                  <motion.a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-lg group-hover:border-terminal-accent/30 group-hover:bg-terminal-accent/[0.02] transition-all duration-500"
                    whileHover={{ scale: 1.01, x: 10 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-2 rounded-md bg-white/[0.03] ${contact.color}`}>
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base tracking-tight font-medium">
                        {contact.value}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-terminal-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                  </motion.a>

                  <button 
                    onClick={() => copyToClipboard(contact.value, contact.id)}
                    className="p-5 bg-white/[0.02] border border-white/5 rounded-lg hover:text-terminal-accent hover:border-terminal-accent/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {copiedId === contact.id ? (
                        <motion.div
                          key="check"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                        >
                          <Check size={20} className="text-green-400" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ y: 20 }}
                          animate={{ y: 0 }}
                          exit={{ y: -20 }}
                        >
                          <Copy size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Simulated Console Output */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 border-t border-white/5 font-mono"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] text-gray-500 uppercase tracking-tighter">
                <div className="space-y-1">
                  <p className="text-gray-600">Status</p>
                  <p className="text-terminal-accent">Active_Listening</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Uptime</p>
                  <p className="text-white">99.982%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Location</p>
                  <p className="text-white">Colombo, LK</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-600">Latency</p>
                  <p className="text-green-500">14ms</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-10 p-3 bg-white/[0.02] rounded border border-white/[0.05]">
                <span className="text-terminal-accent font-bold text-xs">visitor@portfolio:~$</span>
                <span className="text-white/40 text-xs">await response_</span>
                <motion.span
                  animate={{ opacity: [1, 1, 0, 0] }}
                  transition={{ 
                      duration: 0.8, 
                      repeat: Infinity, 
                      times: [0, 0.5, 0.5, 1],
                      ease: "linear" 
                  }}
                  className="w-2 h-4 bg-terminal-accent shadow-[0_0_8px_#00ff41]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-terminal-accent/40 to-transparent" />
          <div className="text-center text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">
            © 2026 Danindu Navoda <span className="mx-2 text-terminal-accent">•</span> All Rights Reserved
          </div>
        </div>
      </motion.div>
    </section>
  );
}