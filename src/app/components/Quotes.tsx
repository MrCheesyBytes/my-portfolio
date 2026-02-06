'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Quotes() {
  const quotes = [
    {
      text: "The only truly secure system is one that is powered off, cast in a block of concrete and sealed in a lead-lined room with armed guards.",
      author: "Gene Spafford",
      role: "Computer Security Expert"
    },
    {
      text: "Security is a process, not a product.",
      author: "Bruce Schneier",
      role: "Cryptographer & Security Technologist"
    },
    {
      text: "Hacking is not a crime. It's a passion, an art form, a way of thinking.",
      author: "Anonymous",
      role: "Hacker Collective"
    },
    {
      text: "The best way to show that a stick is crooked is not to argue about it, but to lay a straight stick alongside it.",
      author: "D.L. Moody",
      role: "Applied to Security Research"
    },
    {
      text: "I think malicious code is a very interesting subject... the majority of authors are highly skilled individuals doing it for the challenge.",
      author: "Kevin Mitnick",
      role: "Security Consultant"
    },
    {
      text: "Knowledge is power, but with power comes responsibility.",
      author: "Anonymous",
      role: "Hacker Ethics"
    },
    {
      text: "The key to security is not to build a perfect system, but to build a system that can detect and respond to attacks.",
      author: "Bruce Schneier",
      role: "Security Author"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 10000); // Increased to 10s to allow time for reading & typing effect

    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (!mounted) return <section id="quotes" className="py-20 bg-black min-h-[500px]" />;

  return (
    <section id="quotes" className="py-24 px-6 relative overflow-hidden bg-black/40">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff41_1px,transparent_1px),linear-gradient(to_bottom,#00ff41_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tighter">
            <span className="text-terminal-accent">/</span>Words_of_Wisdom
          </h2>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
            {'// Critical insights from the security community'}
          </p>
        </motion.div>

        {/* Quote Display Container */}
        <div className="relative min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-14 backdrop-blur-xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                
                {/* Scanning Line Animation */}
                <motion.div 
                  className="absolute inset-0 w-full h-[2px] bg-terminal-accent/20 z-0"
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Quote decoration */}
                <div className="absolute top-6 left-8 text-7xl text-terminal-accent/10 font-serif leading-none select-none">
                  &ldquo;
                </div>

                {/* Quote text with Typewriter animation */}
                <div className="relative z-10">
                  <motion.blockquote
                    className="text-xl md:text-2xl text-gray-200 font-mono leading-relaxed mb-10 italic"
                  >
                    {quotes[currentIndex].text.split("").map((char, i) => (
                      <motion.span
                        key={`${currentIndex}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.01, delay: i * 0.02 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2 h-6 bg-terminal-accent ml-2 translate-y-1"
                    />
                  </motion.blockquote>

                  {/* Author Meta */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-end border-t border-white/5 pt-6"
                  >
                    <p className="text-terminal-accent font-mono font-bold text-base md:text-lg tracking-tight">
                      &mdash; {quotes[currentIndex].author}
                    </p>
                    <p className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest mt-1">
                      {quotes[currentIndex].role}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="relative p-2 group"
              aria-label={`Go to quote ${index + 1}`}
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${
                index === currentIndex 
                ? 'w-12 bg-terminal-accent shadow-[0_0_10px_rgba(var(--terminal-accent-rgb),0.5)]' 
                : 'w-4 bg-white/10 group-hover:bg-white/30'
              }`} />
            </button>
          ))}
        </div>

        {/* Console Action Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">
            <span className="text-terminal-accent mr-2">EXE:</span> fortune | cowsay -f tux
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}