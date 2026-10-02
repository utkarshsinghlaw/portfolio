"use client";
import { motion } from "framer-motion";
import { Terminal, FileText, Database, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export const ContextForgePreview = () => {
  return (
    <div className="w-full h-48 md:h-64 rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-black overflow-hidden relative border border-slate-800 flex items-center justify-center group">
      {/* Background aurora effect */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(0,0,0,0) 50%)'
        }}
      />
      
      {/* Floating UI Elements */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10 w-3/4 h-3/4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 flex flex-col shadow-2xl"
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs text-slate-400 font-mono ml-2">ContextForge OS</span>
        </div>
        <div className="flex-1 flex gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-1/3 rounded bg-white/5 flex flex-col gap-2 p-2"
          >
             <div className="w-full h-2 bg-indigo-500/50 rounded" />
             <div className="w-3/4 h-2 bg-white/20 rounded" />
             <div className="w-1/2 h-2 bg-white/20 rounded" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex-1 rounded bg-white/10 p-3 space-y-2"
          >
             <div className="w-full h-3 bg-white/20 rounded" />
             <div className="w-5/6 h-3 bg-white/20 rounded" />
             <div className="w-4/6 h-3 bg-white/20 rounded" />
             <div className="w-full h-12 bg-indigo-500/20 rounded border border-indigo-500/30 mt-4 flex items-center justify-center">
               <Database className="w-4 h-4 text-indigo-300" />
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const BICaseStudiesPreview = () => {
  return (
    <div className="w-full h-32 md:h-40 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-end justify-center space-x-2 md:space-x-4 overflow-hidden relative">
      <motion.div 
        animate={{ height: ["20%", "60%", "40%"] }} 
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="w-8 md:w-12 bg-indigo-500/80 rounded-t-md" 
      />
      <motion.div 
        animate={{ height: ["40%", "80%", "50%"] }} 
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: 0.2 }}
        className="w-8 md:w-12 bg-purple-500/80 rounded-t-md" 
      />
      <motion.div 
        animate={{ height: ["70%", "30%", "90%"] }} 
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", delay: 0.4 }}
        className="w-8 md:w-12 bg-cyan-500/80 rounded-t-md" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 dark:from-slate-900/50 to-transparent pointer-events-none" />
    </div>
  );
};

export const AIEngineeringPreview = () => {
  const [text, setText] = useState("");
  const fullText = "import { agent } from 'ai-toolkit';\n\nawait agent.run('saas-market-research');\n> Fetching data...\n> Complete.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-32 md:h-40 shrink-0 rounded-xl bg-[#0a0a0a] border border-slate-800 p-4 font-mono text-xs md:text-sm text-green-400 overflow-hidden relative flex flex-col">
      <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-slate-800">
        <Terminal className="w-3 h-3 text-slate-500" />
        <span className="text-slate-500 text-xs">terminal</span>
      </div>
      <div className="whitespace-pre-wrap">{text}<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>_</motion.span></div>
    </div>
  );
};

export const ThoughtLeadershipPreview = () => {
  return (
    <div className="w-full h-32 md:h-40 shrink-0 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 p-4 overflow-hidden relative flex justify-center items-center">
      <motion.div 
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-3/4 space-y-3"
      >
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <div className="h-2 w-16 bg-emerald-200 dark:bg-emerald-800 rounded" />
        </div>
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="w-5/6 h-3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="w-4/6 h-3 bg-slate-200 dark:bg-slate-800 rounded" />
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-50 dark:to-slate-950 pointer-events-none" />
    </div>
  );
};
