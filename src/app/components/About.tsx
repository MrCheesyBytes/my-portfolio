'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, Lock, Zap, Search, Terminal, Cpu } from 'lucide-react';

const BinaryStream = () => {
  const [mounted, setMounted] = useState(false);
  const [binaryStrings, setBinaryStrings] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
    const strings = [...Array(10)].map(() => 
      Array(50).fill(0).map(() => Math.round(Math.random())).join('')
    );
    setBinaryStrings(strings);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] font-mono text-[10px] leading-none select-none"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
      }}
    >
      {binaryStrings.map((content, i) => (
        <motion.div
          key={i}
          initial={{ y: -100 }}
          animate={{ y: ['0%', '100%'] }}
          transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 text-terminal-accent"
          style={{ left: `${i * 10}%`, writingMode: 'vertical-rl' }}
        >
          {content}
        </motion.div>
      ))}
    </div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // "start end" means the animation starts when the top of About hits the bottom of the screen
    offset: ["start end", "start center"] 
  });

  // --- RESTORED ANIMATION VALUES ---
  // This makes the section fade in and slide up from y: 100 as you scroll
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [100, 0]);

  // Line drawing animation
  const lineDraw = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  const highlights = [
    { icon: GraduationCap, title: 'Student Mindset', description: 'Constantly learning, experimenting, and pushing boundaries.' },
    { icon: Lock, title: 'Security First', description: 'Building with security considerations from the ground up.' },
    { icon: Zap, title: 'Ethical Builder', description: 'Committed to responsible disclosure and ethical practices.' },
    { icon: Search, title: 'Curious Mind', description: 'Always asking "how does this work?" and "what could go wrong?"' }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative min-h-screen pt-20 pb-32 px-6 overflow-visible scroll-mt-20"
    >
      {/* Connector Line between Hero and About */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ height: lineDraw }}
          className="w-full bg-gradient-to-b from-transparent via-terminal-accent to-terminal-accent shadow-[0_0_10px_#00ff41]" 
        />
      </div>

      <BinaryStream />

      <motion.div 
        style={{ opacity, scale, y }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="mb-16">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-2"
          >
             <Terminal className="text-terminal-accent" size={20} />
             <span className="text-terminal-accent font-mono text-sm tracking-[0.3em] uppercase">01. Profile</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold font-mono text-white tracking-tighter">
            <span className="text-terminal-accent/50">&gt;</span> About<span className="text-terminal-accent">_</span>Me
          </h2>
          <div className="flex items-center gap-2 mt-4 text-gray-500 font-mono text-xs">
            <Cpu size={14} className="animate-spin-slow text-terminal-accent/40" />
            <span>DECODING IDENTITY_MODULE... 100% SUCCESS</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-8 relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-terminal-accent/5 rounded-lg blur-xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#0a0a0a]/80 border border-white/10 rounded-lg overflow-hidden backdrop-blur-xl">
                <div className="bg-white/[0.03] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-terminal-accent/20 border border-terminal-accent/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">identity.json</span>
                </div>
                
                <div className="p-8 font-mono text-sm md:text-base leading-relaxed">
                  <div className="space-y-1 mb-8">
                    <p className="text-terminal-accent">const <span className="text-blue-400">me</span> = {'{'}</p>
                    <p className="pl-4"><span className="text-blue-400">status</span>: <span className="text-yellow-400">&quot;Cybersecurity Student&quot;</span>,</p>
                    <p className="pl-4"><span className="text-blue-400">focus</span>: [<span className="text-yellow-400">&quot;Security&quot;</span>, <span className="text-yellow-400">&quot;Code&quot;</span>],</p>
                    <p className="pl-4"><span className="text-blue-400">mission</span>: <span className="text-yellow-400">&quot;Build secure software&quot;</span></p>
                    <p className="">{'};'}</p>
                  </div>

                  <div className="space-y-4 text-gray-400 border-t border-white/5 pt-6">
                    <p>
                      I&apos;m a cybersecurity student passionate about understanding how systems work—and how they break. 
                    </p>
                    <p>
                      Every project I build is an opportunity to learn something new about security and architecture.
                    </p>
                  </div>
                </div>

                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[1px] bg-terminal-accent/30 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,255,65,0.5)]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, index) => (
              <div key={item.title} className="group relative">
                <div className="bg-white/[0.02] border border-white/5 p-5 rounded-lg transition-all duration-500 group-hover:border-terminal-accent/30 group-hover:bg-terminal-accent/[0.02] backdrop-blur-sm">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-md bg-white/[0.03] text-terminal-accent group-hover:bg-terminal-accent group-hover:text-black transition-all duration-300">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-white font-mono font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 font-mono text-[11px] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4 text-gray-600 font-mono text-xs border-t border-white/5 pt-8">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-terminal-accent animate-ping" />
            <div className="w-1 h-1 bg-terminal-accent" />
          </div>
          <span className="text-terminal-accent/70">system@danindu:~$</span>
          <span>echo &quot;Stay curious. Stay ethical.&quot;</span>
        </div>
      </motion.div>
    </section>
  );
}