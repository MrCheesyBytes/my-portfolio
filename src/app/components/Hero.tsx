'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'cybersecurity enthusiast';

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-terminal-bg">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.1
        }} />
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-terminal-accent/50 rounded-full"
          animate={{
            y: [-20, -100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut'
          }}
          style={{
            left: `${20 + i * 15}%`,
            bottom: '10%'
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-terminal-accent font-mono text-sm mb-8 text-left inline-block"
        >
          <span className="text-terminal-text-secondary">user@portfolio</span>
          <span className="text-terminal-text-primary">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-terminal-text-primary">$ </span>
          <span className="text-terminal-accent">whoami</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-mono text-terminal-text-primary"
        >
          <span className="text-terminal-text-primary">Danindu</span>
          <span className="text-terminal-accent"> Bataduwage</span>
        </motion.h1>

        {/* Role with typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-terminal-text-secondary font-mono mb-8 h-8"
        >
          <span className="text-terminal-accent">&gt; </span>
          {text}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-terminal-accent"
          >
            _
          </motion.span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-terminal-text-secondary font-mono text-sm md:text-base mb-12 max-w-2xl mx-auto"
        >
          {'// Student. Learner. Builder. Exploring the intersection of code and security.'}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 bg-terminal-accent/10 border border-terminal-accent text-terminal-accent rounded font-mono hover:bg-terminal-accent/20 transition-colors group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:mr-2 transition-all">View Projects</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">&gt;</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 border border-terminal-accent/30 text-terminal-text-secondary rounded font-mono hover:border-terminal-accent/60 hover:text-terminal-accent transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-terminal-accent/50 font-mono text-xs"
          >
            <div className="flex flex-col items-center gap-2">
              <span>scroll</span>
              <img src="/icons/icon_arrow_down.svg" alt="Scroll Down" className="w-6 h-6" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(161, 161, 170, 0.02) 50%)',
          backgroundSize: '100% 4px'
        }}
        animate={{ y: [0, 8] }}
        transition={{ duration: 0.1, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
}
