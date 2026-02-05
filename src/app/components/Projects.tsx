'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Network Security Scanner',
    tagline: 'Automated vulnerability detection tool',
    description: 'A Python-based network scanner that identifies open ports, detects services, and flags potential security vulnerabilities. Built as a learning project to understand network protocols and security fundamentals.',
    learned: [
      'TCP/IP protocol fundamentals',
      'Socket programming in Python',
      'CVE database integration',
      'Ethical scanning practices'
    ],
    tools: ['Python', 'Scapy', 'Nmap', 'SQLite'],
    security: [
      'Implements rate limiting to avoid network flooding',
      'Requires explicit authorization before scanning',
      'Logs all scanning activity for audit trails',
      'Sanitizes output to prevent command injection'
    ],
    images: ['/projects/project1.png']
  },
  {
    id: 'project-2',
    title: 'Encrypted Chat Application',
    tagline: 'End-to-end encrypted messaging',
    description: 'A peer-to-peer chat application implementing end-to-end encryption using modern cryptographic standards. Focuses on privacy-first design and secure key exchange.',
    learned: [
      'Public-key cryptography (RSA, ECDH)',
      'Symmetric encryption (AES-256)',
      'WebSocket real-time communication',
      'Secure key management'
    ],
    tools: ['TypeScript', 'Node.js', 'WebCrypto API', 'WebSocket'],
    security: [
      'Zero-knowledge architecture - server never sees plaintext',
      'Forward secrecy with ephemeral keys',
      'Secure random number generation',
      'Protection against timing attacks'
    ],
    images: ['/projects/project2.png']
  }
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
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
            <span className="text-terminal-accent">&gt;</span> Projects
          </h2>
          <p className="text-gray-300 font-mono text-sm font-medium">
            {'// Click any project to expand details'}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Project Card */}
              <motion.button
                onClick={() => toggleProject(project.id)}
                className="w-full text-left bg-terminal-bg/40 border border-terminal-accent/30 rounded-lg p-6 hover:border-terminal-accent/60 transition-colors cursor-pointer group backdrop-blur-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-terminal-accent mb-2 font-mono group-hover:text-terminal-text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm mb-4">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2 py-1 bg-terminal-accent/10 text-terminal-accent rounded border border-terminal-accent/30 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="text-xs px-2 py-1 text-gray-500 font-mono">
                          +{project.tools.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <motion.div
                    animate={{ rotate: expandedId === project.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-terminal-accent text-2xl font-mono"
                  >
                    &gt;
                  </motion.div>
                </div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="h-full w-full overflow-hidden rounded-lg">
                    <motion.div
                      className="h-px w-full bg-gradient-to-r from-transparent via-terminal-accent/50 to-transparent"
                      animate={{ y: [0, 100] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.button>

              {/* Expandable Project Details */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <ProjectDetails project={project} />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Terminal Prompt Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-gray-600 font-mono text-sm"
        >
          <span className="text-terminal-accent">$</span> More projects coming soon...
        </motion.div>
      </div>
    </section>
  );
}
