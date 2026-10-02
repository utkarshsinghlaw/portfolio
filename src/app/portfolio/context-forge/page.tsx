"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, FileText, Lock, Layout, Terminal } from "lucide-react";

const personas = [
  {
    id: "mba",
    title: "The Consultant",
    bgClass: "bg-slate-50 dark:bg-slate-900",
    computerTheme: "bg-white text-[#051c2c] border-slate-200",
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    prompt: "> Parse 500-page HBS Case Study...",
    loader: "Synthesizing financial models...",
    result: "Local Brief Generated. Zero cloud upload.",
    desc: "Rapidly distilling dense case studies and financial models into actionable briefs without uploading proprietary academic data to the cloud."
  },
  {
    id: "lawyer",
    title: "The Legal Analyst",
    bgClass: "bg-zinc-100 dark:bg-zinc-950",
    computerTheme: "bg-zinc-900 text-red-400 border-red-900/50",
    icon: <Lock className="w-6 h-6 text-red-500" />,
    prompt: "> Search confidential M&A contracts...",
    loader: "Running local e-discovery...",
    result: "Privilege maintained. Zero data leakage.",
    desc: "Parsing confidential contracts and conducting rapid e-discovery entirely locally, guaranteeing strict attorney-client privilege."
  },
  {
    id: "designer",
    title: "The Architect",
    bgClass: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950",
    computerTheme: "bg-white/80 dark:bg-black/50 backdrop-blur-xl border-purple-500/30 text-purple-900 dark:text-purple-300",
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    prompt: "> Find structural dimensions for Taili Zhuang project...",
    loader: "Scanning local CAD metadata & mood boards...",
    result: "Visuals retrieved instantly.",
    desc: "Searching through local mood boards, CAD file metadata, and dense project specs using natural language."
  },
  {
    id: "dev",
    title: "The Independent Dev",
    bgClass: "bg-black",
    computerTheme: "bg-black text-green-500 border-green-500/30 font-mono",
    icon: <Terminal className="w-6 h-6 text-green-500" />,
    prompt: "$ ./context-forge query --repo=legacy-monolith",
    loader: "Generating architecture diagrams...",
    result: "[OK] Architecture mapped in 1.2s.",
    desc: "Querying local, undocumented codebases and generating architecture diagrams instantly to accelerate shipping speed."
  }
];

export default function PersonalSoftware() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // 4 personas = 0 to 0.25 (index 0), 0.25 to 0.5 (index 1), etc.
      let index = Math.floor(latest * personas.length);
      if (index >= personas.length) index = personas.length - 1;
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activePersona = personas[activeIndex];

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full font-sans transition-colors duration-700 ease-in-out">
      
      {/* Sticky Container */}
      <div className={`sticky top-0 h-screen w-full flex flex-col items-center justify-center transition-colors duration-700 ${activePersona.bgClass}`}>
        
        {/* Absolute Back Button */}
        <div className="absolute top-8 left-8 md:top-16 md:left-16 z-50">
          <Link href="/#pillars" className="inline-flex items-center text-sm font-medium text-indigo-500 hover:opacity-80 transition-opacity bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>

        <div className="w-full max-w-5xl px-8 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left Text / Narrative */}
          <div className="flex-1 space-y-6">
            <motion.div
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-2">Context Forge</h2>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white mix-blend-difference">
                {activePersona.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md">
                {activePersona.desc}
              </p>
            </motion.div>
          </div>

          {/* Right Computer UI */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              {/* Computer Frame */}
              <div className={`absolute inset-0 rounded-2xl border-2 shadow-2xl transition-all duration-700 overflow-hidden flex flex-col ${activePersona.computerTheme}`}>
                
                {/* Header Bar */}
                <div className="h-10 border-b border-inherit flex items-center px-4 space-x-2 opacity-80">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <div className="ml-4 text-xs opacity-70 font-medium tracking-wide flex-1 text-center">Local Workspace OS</div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6 flex flex-col justify-center space-y-6 relative">
                  
                  {/* Performative Aurora Background for Designer */}
                  {activeIndex === 2 && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                  )}

                  <motion.div
                    key={`prompt-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start space-x-3 relative z-10"
                  >
                    <div className="mt-1">{activePersona.icon}</div>
                    <p className="text-sm sm:text-base font-medium">{activePersona.prompt}</p>
                  </motion.div>

                  <motion.div
                    key={`loader-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 }}
                    className="p-3 rounded-lg border border-inherit bg-black/5 dark:bg-white/5 relative z-10 flex items-center space-x-3"
                  >
                    <motion.div 
                      className="w-4 h-4 rounded-full border-2 border-inherit border-t-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-sm opacity-80 animate-pulse">{activePersona.loader}</p>
                  </motion.div>

                  <motion.div
                    key={`result-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3 }}
                    className="text-sm font-semibold relative z-10"
                  >
                    {activePersona.result}
                  </motion.div>
                </div>
              </div>

              {/* Computer Stand / Base */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-300 dark:bg-slate-800 rounded-b-xl opacity-50" />
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-xs uppercase tracking-widest font-semibold mix-blend-difference text-white">Scroll</span>
          <motion.div 
            className="w-px h-12 bg-current mix-blend-difference text-white origin-top"
            animate={{ scaleY: [0, 1, 0], y: [0, 24, 48] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
