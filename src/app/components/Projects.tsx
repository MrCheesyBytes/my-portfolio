'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ProjectDetails from './ProjectDetails';

// Project type definition
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  learned: string[];
  tools: string[];
  security: string[];
  images: string[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Network Security Scanner',
    tagline: 'Automated vulnerability detection tool',
    description: 'A Python-based network scanner that identifies open ports, detects services, and flags potential security vulnerabilities. Built as a learning project to understand network protocols and security fundamentals.',
    learned: ['TCP/IP protocol fundamentals', 'Socket programming in Python', 'CVE database integration', 'Ethical scanning practices'],
    tools: ['Python', 'Scapy', 'Nmap', 'SQLite'],
    security: ['Implements rate limiting to avoid network flooding', 'Requires explicit authorization before scanning', 'Logs all scanning activity for audit trails', 'Sanitizes output to prevent command injection'],
    images: ['/projects/project1.png']
  },
  {
    id: 'project-2',
    title: 'Encrypted Chat Application',
    tagline: 'End-to-end encrypted messaging',
    description: 'A peer-to-peer chat application implementing end-to-end encryption using modern cryptographic standards. Focuses on privacy-first design and secure key exchange.',
    learned: ['Public-key cryptography (RSA, ECDH)', 'Symmetric encryption (AES-256)', 'WebSocket real-time communication', 'Secure key management'],
    tools: ['TypeScript', 'Node.js', 'WebCrypto API', 'WebSocket'],
    security: ['Zero-knowledge architecture - server never sees plaintext', 'Forward secrecy with ephemeral keys', 'Secure random number generation', 'Protection against timing attacks'],
    images: ['/projects/project2.png']
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef(null);

  // --- APPLE-STYLE SCROLL ANIMATION ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.95]);
  const blur = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["10px", "0px", "0px", "10px"]);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="relative min-h-screen py-32 px-6 overflow-visible"
    >
      <motion.div 
        style={{ opacity, scale, filter: `blur(${blur})` }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-mono tracking-tighter text-white"
          >
            <span className="text-terminal-accent">&gt;</span> Projects
          </motion.h2>
          <p className="text-gray-500 font-mono text-sm">
            {'// Click any project to expand details'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.button
                onClick={() => toggleProject(project.id)}
                className={`w-full text-left bg-black/40 border border-terminal-border rounded-lg p-8 transition-all duration-500 cursor-pointer group backdrop-blur-md relative overflow-hidden ${
                  expandedId === project.id ? 'border-terminal-accent/50 ring-1 ring-terminal-accent/20' : 'hover:border-terminal-accent/40'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.995 }}
              >
                {/* Glow Background Effect */}
                <div className="absolute inset-0 bg-terminal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 font-mono group-hover:text-terminal-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm mb-6 max-w-2xl">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10 font-mono uppercase tracking-wider group-hover:border-terminal-accent/30 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="text-[10px] px-2 py-1 text-gray-500 font-mono italic">
                          +{project.tools.length - 4} more_tools
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <motion.div
                    animate={{ 
                      rotate: expandedId === project.id ? 90 : 0,
                      color: expandedId === project.id ? '#YOUR_ACCENT_HEX' : '#4b5563' 
                    }}
                    className="ml-4 text-terminal-accent text-3xl font-mono opacity-50 group-hover:opacity-100 transition-opacity"
                  >
                    &gt;
                  </motion.div>
                </div>

                {/* Cyber Scanline Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="h-full w-full overflow-hidden">
                    <motion.div
                      className="h-[2px] w-full bg-gradient-to-r from-transparent via-terminal-accent/40 to-transparent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]"
                      animate={{ y: [-20, 400] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                  >
                    <ProjectDetails project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-gray-600 font-mono text-xs border-t border-terminal-border/20 pt-8"
        >
          <span className="text-terminal-accent animate-pulse mr-2">●</span>
          <span className="text-terminal-accent">$</span> echo &quot;More projects coming soon...&quot;
        </motion.div>
      </motion.div>
    </section>
  );
}