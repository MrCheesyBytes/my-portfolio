'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from './Projects';

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="mt-4 bg-terminal-bg/60 border border-terminal-accent/20 rounded-lg p-8 backdrop-blur-sm">
        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-video bg-terminal-bg/40 rounded border border-terminal-accent/30 overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Glitch overlay on hover */}
                  <div className="absolute inset-0 bg-terminal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h4 className="text-xl font-bold text-terminal-accent mb-3 font-mono flex items-center">
            <span className="text-terminal-accent mr-2">[</span>
            Overview
            <span className="text-terminal-accent ml-2">]</span>
          </h4>
          <p className="text-gray-300 leading-relaxed font-mono text-sm">
            {project.description}
          </p>
        </motion.div>

        {/* What I Learned Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h4 className="text-xl font-bold text-terminal-accent mb-3 font-mono flex items-center">
            <span className="text-terminal-accent mr-2">[</span>
            What I Learned
            <span className="text-terminal-accent ml-2">]</span>
          </h4>
          <ul className="space-y-2">
            {project.learned.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className="flex items-start text-gray-300 font-mono text-sm"
              >
                <span className="text-terminal-accent mr-3 mt-0.5">&gt;</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tools & Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h4 className="text-xl font-bold text-terminal-accent mb-3 font-mono flex items-center">
            <span className="text-terminal-accent mr-2">[</span>
            Tools & Technologies
            <span className="text-terminal-accent ml-2">]</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="px-3 py-1.5 bg-terminal-accent/10 text-terminal-accent rounded border border-terminal-accent/40 font-mono text-sm hover:bg-terminal-accent/20 transition-colors"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Security Considerations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-terminal-accent mb-3 font-mono flex items-center">
            <span className="text-terminal-accent mr-2">[</span>
            Security Considerations
            <span className="text-terminal-accent ml-2">]</span>
          </h4>
          <div className="bg-terminal-bg/40 border border-terminal-accent/20 rounded p-4 space-y-2">
            {project.security.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.05 }}
                className="flex items-start text-gray-300 font-mono text-xs"
              >
                <span className="text-terminal-accent mr-3 mt-0.5 w-4 h-4 inline-block">
                  <img src="/icons/icon_check.svg" alt="Check" className="w-full h-full object-contain" />
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 pt-4 border-t border-terminal-accent/20 text-gray-600 font-mono text-xs"
        >
          <span className="text-terminal-accent">$</span> Click outside to collapse
        </motion.div>
      </div>
    </motion.div>
  );
}
