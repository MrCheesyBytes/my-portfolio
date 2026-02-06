'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isMounted, setIsMounted] = useState(false); // Track mounting
  const fullText = 'cybersecurity enthusiast';
  const containerRef = useRef(null);

  // --- APPLE-STYLE SCROLL LOGIC ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const yContent = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [0, 8]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 45]);

  useEffect(() => {
    setIsMounted(true); // Signal that we are now on the client
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
    <section 
      ref={containerRef} 
      className="relative min-h-[120vh] flex flex-col items-center justify-start px-6 overflow-visible"
    >
      {/* --- VISUAL DIVIDER: CYBER GRID FLOOR --- */}
      <div className="absolute inset-0 perspective-[1000px] pointer-events-none overflow-hidden">
        <motion.div 
          style={{ rotateX, opacity }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[50vh] origin-bottom"
        >
          <div className="w-full h-full bg-[linear-gradient(to_right,#00ff4112_1px,transparent_1px),linear-gradient(to_bottom,#00ff4112_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)]" />
        </motion.div>
      </div>

      {/* Floating particles - Only render if isMounted is true */}
      <div className="absolute inset-0 pointer-events-none">
        {isMounted && [...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-accent/40 rounded-full"
            animate={{
              y: [0, -400],
              x: [0, (i % 2 === 0 ? 50 : -50)],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '10%'
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <motion.div 
        style={{ 
          opacity, 
          scale, 
          y: yContent,
          filter: `blur(${blur}px)` 
        }}
        className="sticky top-0 z-10 max-w-4xl mx-auto text-center pt-[20vh] pb-10"
      >
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

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold mb-6 font-mono text-terminal-text-primary tracking-tighter"
        >
          <span className="text-terminal-text-primary">Danindu</span>
          <span className="text-terminal-accent"> Bataduwage</span>
        </motion.h1>

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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-terminal-text-secondary font-mono text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {'// Student. Learner. Builder. Exploring the intersection of code and security.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-terminal-accent/10 border border-terminal-accent text-terminal-accent rounded font-mono hover:bg-terminal-accent/20 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:mr-2 transition-all">View Projects</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">&gt;</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 border border-terminal-accent/30 text-terminal-text-secondary rounded font-mono hover:border-terminal-accent/60 hover:text-terminal-accent transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-terminal-accent/50 font-mono text-xs uppercase tracking-[0.3em]"
          >
            Scroll to Decrypt
            <div className="w-[1px] h-16 bg-terminal-accent mx-auto mt-4 shadow-[0_0_8px_#00ff41]" />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}