'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Skills() {
  const containerRef = useRef(null);

  const skills = [
    { name: 'Python', status: 'Daily Use', category: 'Dev' },
    { name: 'Git & GitHub', status: 'Daily Use', category: 'Dev' },
    { name: 'Linux/Bash', status: 'Daily Use', category: 'Dev' },
    { name: 'Network Protocols (TCP/IP)', status: 'Learning', category: 'Sec' },
    { name: 'Penetration Testing', status: 'Learning', category: 'Sec' },
    { name: 'Cryptography Basics', status: 'Learning', category: 'Sec' },
    { name: 'Wireshark', status: 'Practicing', category: 'Tools' },
    { name: 'Nmap & Scanning Tools', status: 'Practicing', category: 'Tools' },
    { name: 'OWASP Top 10', status: 'Learning', category: 'Sec' },
    { name: 'Secure Coding Practices', status: 'Learning', category: 'Concept' },
    { name: 'Web Security (XSS, CSRF, SQLi)', status: 'Learning', category: 'Sec' },
    { name: 'Authentication & Authz', status: 'Learning', category: 'Concept' },
    { name: 'Ethical Hacking', status: 'Learning', category: 'Sec' },
    { name: 'Threat Modeling', status: 'Learning', category: 'Concept' },
    { name: 'Security Research', status: 'Learning', category: 'Concept' }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.95, 1, 1, 0.95]);
  const blurValue = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], ["8px", "0px", "0px", "8px"]);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="min-h-screen py-32 px-6 relative bg-black overflow-hidden"
    >
      {/* --- ANIMATED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Roaming "Energy" Glow Ball */}
        <motion.div
          animate={{
            x: ['-30%', '30%', '-30%'],
            y: ['-25%', '25%', '-25%'],
          }}
          transition={{
            duration: 15, // Slightly faster for more visible movement
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.12)_0%,transparent_60%)] blur-[140px]"
        />
      </div>

      <motion.div 
        style={{ opacity, scale, filter: `blur(${blurValue})` }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-mono tracking-tighter text-white"
          >
            <span className="text-terminal-accent">&gt;</span> Skills
          </motion.h2>
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-terminal-accent/50" />
            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
              Technologies & System Fundamentals
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group relative bg-[#080808]/60 backdrop-blur-md border border-white/5 rounded-sm p-5 overflow-hidden"
            >
              {/* Internal Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-terminal-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col">
                  <span className="text-white font-mono text-sm mb-1 group-hover:text-terminal-accent transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-1.5 h-1.5 rounded-full bg-terminal-accent shadow-[0_0_5px_#00ff41]" 
                    />
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-terminal-accent font-mono text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                    [{skill.status}]
                  </span>
                </div>
              </div>

              {/* Bottom "Scan" Line Decoration */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-terminal-accent/30"
                initial={{ width: "10%" }}
                whileHover={{ width: "100%", backgroundColor: "#00ff41" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Diagnostic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 border-t border-white/5 pt-8 flex flex-wrap gap-8 items-center justify-between"
        >
          <div className="font-mono text-[10px] text-gray-600">
            <span className="text-terminal-accent mr-2">SYS_CHECK:</span> 
            ALL_MODULES_STABLE // 100% UPTIME
          </div>
          <div className="flex gap-4 items-center">
            <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                animate={{ x: [-48, 48] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="h-full w-1/2 bg-terminal-accent shadow-[0_0_8px_#00ff41]"
              />
            </div>
            <span className="font-mono text-[10px] text-gray-600">ENCRYPTION: AES-256</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}