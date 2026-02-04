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
      text: "The best way to show that a stick is crooked is not to argue about it or to spend time denouncing it, but to lay a straight stick alongside it.",
      author: "D.L. Moody",
      role: "Applied to Security Research"
    },
    {
      text: "I think malicious code is a very interesting subject, and I think that the majority of malicious code authors are highly skilled individuals who are often doing it for the intellectual challenge.",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 8000); // Change quote every 8 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="quotes" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            <span className="text-terminal-accent">&gt;</span> Words of Wisdom
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            {'// Insights from the security community'}
          </p>
        </motion.div>

        {/* Quote Display */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="bg-terminal-bg/60 border border-terminal-accent/30 rounded-lg p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
                {/* Quote decoration */}
                <motion.div
                  className="absolute top-4 left-4 text-6xl text-terminal-accent/20 font-mono"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {"\""}
                </motion.div>

                {/* Quote text */}
                <motion.blockquote
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed mb-6 relative z-10 italic"
                >
                  {quotes[currentIndex].text}
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-end"
                >
                  <p className="text-terminal-accent font-mono font-bold text-sm md:text-base">
                    — {quotes[currentIndex].author}
                  </p>
                  <p className="text-gray-500 font-mono text-xs md:text-sm">
                    {quotes[currentIndex].role}
                  </p>
                </motion.div>

                {/* Glitch effect overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.05, 0] }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="w-full h-full bg-terminal-accent/10" />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-2 mt-8"
        >
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                ? 'bg-terminal-accent w-8'
                : 'bg-terminal-accent/30 hover:bg-terminal-accent/60'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-gray-600 font-mono text-sm text-center"
        >
          <span className="text-terminal-accent">$</span> fortune | cowsay
        </motion.div>
      </div>
    </section>
  );
}
