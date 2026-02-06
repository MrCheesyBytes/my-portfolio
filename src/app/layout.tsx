'use client';

import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body 
        className="antialiased bg-[#050505] text-terminal-text-primary min-h-screen relative"
        suppressHydrationWarning
      >
        {/* PERSISTENT BACKGROUND LAYER (The "Canvas") */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* 1. The Moving Grid (Unified Theme) */}
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: 'linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} 
          />

          {/* 2. Apple-style Center Glow (Makes sections feel deep) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.08),transparent_70%)]" />

          {/* 3. Global Scanline (Slow & subtle) */}
          <motion.div
            className="absolute inset-0 w-full h-[2px] bg-terminal-accent/10 opacity-20"
            animate={{ y: ['-10%', '110%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* INTERACTIVE UI LAYER */}
        <CustomCursor />

        {/* MAIN CONTENT (The "Pages") */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Global Grain/Noise Overlay for high-end texture */}
        <div className="fixed inset-0 pointer-events-none z-[99] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}