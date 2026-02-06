'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from './Projects';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-4 bg-black/60 border-x border-b border-terminal-accent/20 rounded-b-lg p-8 backdrop-blur-xl shadow-2xl relative">
        {/* Decorative Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-terminal-accent/40" />
        <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-terminal-accent/40" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <motion.div variants={itemVariants} className="mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative w-full aspect-video bg-terminal-bg/40 rounded-lg border border-white/5 overflow-hidden group shadow-inner"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Scanline overlay for images */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              {/* Description Section */}
              <motion.div variants={itemVariants} className="mb-8">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-terminal-accent/70 mb-4 font-mono">
                  // 01. Overview
                </h4>
                <p className="text-gray-300 leading-relaxed font-mono text-sm border-l-2 border-terminal-accent/10 pl-4">
                  {project.description}
                </p>
              </motion.div>

              {/* What I Learned Section */}
              <motion.div variants={itemVariants} className="mb-8">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-terminal-accent/70 mb-4 font-mono">
                  // 02. Technical Growth
                </h4>
                <ul className="space-y-3">
                  {project.learned.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-400 font-mono text-xs hover:text-terminal-accent transition-colors cursor-default"
                    >
                      <span className="text-terminal-accent mr-3 opacity-50">#</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              {/* Tools & Technologies Section */}
              <motion.div variants={itemVariants} className="mb-8">
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-terminal-accent/70 mb-4 font-mono">
                  // 03. Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-white/5 text-gray-400 rounded-sm border border-white/10 font-mono text-[10px] hover:border-terminal-accent/50 hover:text-white transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Security Considerations Section */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-terminal-accent/70 mb-4 font-mono">
                  // 04. Security Audit
                </h4>
                <div className="bg-black/40 border border-white/5 rounded-sm p-5 space-y-3 shadow-inner">
                  {project.security.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start text-gray-400 font-mono text-[11px]"
                    >
                      <span className="text-terminal-accent mr-3 text-xs">✓</span>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Terminal-style footer */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-4 border-t border-white/5 text-gray-600 font-mono text-[10px] flex justify-between items-center"
          >
            <div>
              <span className="text-terminal-accent">$</span> task --status complete
            </div>
            <div className="opacity-50">
              PRJ_{project.id.toUpperCase()}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}