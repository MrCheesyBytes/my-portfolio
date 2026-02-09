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
  link?: string;
}

const projects: Project[] = [
  {
    id: "pfsense-secure-network",
    title: "pfSense Secure Network Infrastructure",
    tagline: "Defense-in-depth segmented network architecture",
    link: "https://github.com/your-username/pfsense-project", 
    description:
      "Designed and implemented a segmented small business network using pfSense as the perimeter firewall and router. The infrastructure was deployed in a virtualised VMware Workstation environment and integrated Active Directory, DNS, DHCP, Splunk log monitoring, and internal application services. The project focused on defence-in-depth, secure routing between networks, and enterprise-style access control across multiple subnets.",
    learned: [
      "Configuring pfSense firewall rules for inter-LAN and routed environments",
      "Designing multi-subnet architectures with WAN, LAN, and OPT interfaces",
      "Implementing DNS and DHCP correctly for Active Directory across subnets",
      "Troubleshooting ICMP, DNS, and authentication failures caused by firewall policy",
      "Deploying Splunk on Ubuntu for centralised syslog collection and monitoring",
      "Applying defence-in-depth principles in a virtual enterprise network"
    ],
    tools: [
      "pfSense",
      "VMware Workstation",
      "Windows Server 2022",
      "Active Directory",
      "DNS / DHCP",
      "Ubuntu Server",
      "Splunk Enterprise",
      "Syslog",
      "PowerShell"
    ],
    security: [
      "Network segmentation enforced using pfSense firewall rules between LAN and OPT networks",
      "Management access to pfSense Web GUI restricted by interface and source IP",
      "Active Directory authentication centralised identity and access management",
      "DNS traffic explicitly permitted to ensure secure and reliable domain resolution",
      "Logging enabled and forwarded to Splunk for auditability and threat detection",
      "Unnecessary services and default rules removed to reduce attack surface"
    ],
    images: [
      "/projects/pfsense/img01.png"
    ]
  },
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
      className="relative min-h-screen py-32 px-6 overflow-visible bg-black"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='%2300ff41' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%2300ff41'/%3E%3C/svg%3E")`, backgroundSize: '100px 100px' }} 
      />

      <motion.div 
        style={{ opacity, scale, filter: `blur(${blur})` }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-4 font-mono tracking-tighter text-white"
          >
            <span className="text-terminal-accent drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">&gt;</span> Projects
          </motion.h2>
          <motion.p 
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-gray-500 font-mono text-sm"
          >
            {'// Click any project to expand details'}
          </motion.p>
        </div>

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
                className={`w-full text-left bg-black/60 border rounded-lg p-8 transition-all duration-500 cursor-pointer group backdrop-blur-xl relative overflow-hidden ${
                  expandedId === project.id 
                    ? 'border-terminal-accent ring-2 ring-terminal-accent/10 shadow-[0_0_30px_rgba(0,255,65,0.1)]' 
                    : 'border-terminal-border hover:border-terminal-accent/40'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(0,255,65,0.08)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 font-mono group-hover:text-terminal-accent transition-colors flex items-center gap-3">
                      {project.title}
                      {expandedId === project.id && (
                         <motion.span 
                            layoutId="active-dot" 
                            className="w-2 h-2 bg-terminal-accent rounded-full animate-pulse shadow-[0_0_8px_#00ff41]" 
                         />
                      )}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm mb-6 max-w-2xl group-hover:text-gray-300 transition-colors">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-3 py-1 bg-terminal-accent/5 text-terminal-accent/80 rounded-sm border border-terminal-accent/20 font-mono uppercase tracking-wider group-hover:border-terminal-accent/50 group-hover:bg-terminal-accent/10 transition-all"
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

                  <motion.div
                    animate={{ 
                      rotate: expandedId === project.id ? 90 : 0,
                      scale: expandedId === project.id ? 1.2 : 1,
                      color: expandedId === project.id ? '#00ff41' : '#4b5563' 
                    }}
                    className="ml-4 text-terminal-accent text-3xl font-mono opacity-50 group-hover:opacity-100 transition-all"
                  >
                    &gt;
                  </motion.div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="h-full w-full overflow-hidden">
                    <motion.div
                      className="h-[1px] w-full bg-gradient-to-r from-transparent via-terminal-accent to-transparent shadow-[0_0_15px_#00ff41]"
                      animate={{ y: [-20, 500] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    />
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden border-x border-b border-terminal-accent/20 rounded-b-lg bg-black/20"
                  >
                    {/* ENHANCED VISIBILITY LINK */}
                    {project.link && (
                      <div className="px-8 pt-8 pb-2">
                        <motion.a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 px-6 py-3 bg-terminal-accent/10 border border-terminal-accent/30 rounded-md group/link transition-all duration-300 hover:border-terminal-accent hover:bg-terminal-accent/20"
                        >
                          <span className="text-terminal-accent font-mono text-base md:text-lg font-bold tracking-widest group-hover:text-white transition-colors">
                            [ OPEN_PROJECT_SOURCE ]
                          </span>
                          <motion.span 
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-terminal-accent text-xl group-hover:text-white"
                          >
                            ↗
                          </motion.span>
                        </motion.a>
                        <p className="text-[10px] font-mono text-terminal-accent/40 mt-2 ml-1 uppercase tracking-[0.2em]">
                          External Redirect established...
                        </p>
                      </div>
                    )}
                    
                    <ProjectDetails project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-gray-600 font-mono text-xs border-t border-terminal-border/20 pt-8 flex items-center justify-between"
        >
          <div>
            <span className="text-terminal-accent animate-pulse mr-2">●</span>
            <span className="text-terminal-accent">$</span> echo &quot;More projects coming soon...&quot;
          </div>
          <div className="hidden md:block opacity-30">
            [SECURE_CONNECTION_ESTABLISHED]
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}