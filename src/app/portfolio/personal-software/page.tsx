"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Meteors } from "@/components/ui/meteors";

const personas = [
  {
    id: "mba",
    name: "The MBA / Consultant",
    theme: "bg-white text-[#0A2540]", // McKinsey Oxford Blue vibe
    ui: (
      <div className="flex flex-col h-full w-full p-6">
        <div className="flex items-center space-x-3 border-b border-slate-200 pb-4">
          <div className="w-8 h-8 rounded-lg bg-[#0A2540]" />
          <span className="font-bold text-lg">Context Forge</span>
          <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-slate-400">Strategy Mode</span>
        </div>
        <div className="mt-8 flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#0A2540] border-t-transparent rounded-full animate-spin" />
          <p className="font-medium animate-pulse">Synthesizing 500-page HBS Case Study...</p>
          <div className="w-64 h-2 bg-slate-200 rounded-full overflow-hidden mt-4">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: "100%" }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="h-full bg-[#0A2540]" 
            />
          </div>
        </div>
      </div>
    )
  },
  {
    id: "lawyer",
    name: "The Legal Analyst",
    theme: "bg-[#111111] text-[#E53935]", // Deep Charcoal & Crimson
    ui: (
      <div className="flex flex-col h-full w-full p-6">
        <div className="flex items-center space-x-3 border-b border-[#333] pb-4">
          <div className="w-8 h-8 rounded-lg bg-[#E53935]" />
          <span className="font-bold text-lg text-white">Context Forge</span>
          <span className="ml-auto text-xs font-bold uppercase tracking-wider text-[#E53935] flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#E53935] mr-2 animate-pulse" />
            Air-Gapped
          </span>
        </div>
        <div className="mt-6 flex-1 text-sm font-mono leading-relaxed">
          <p className="text-slate-500 mb-2">{"> Querying confidential_contracts.pdf"}</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            "Clause 4.2 constitutes a material breach of the non-solicitation agreement under UK law."
            <span className="inline-block w-2 h-4 ml-1 bg-[#E53935] animate-pulse" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "designer",
    name: "The Architect",
    theme: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white", // Aurora
    ui: (
      <div className="flex flex-col h-full w-full p-6 backdrop-blur-xl bg-white/10">
        <div className="flex items-center space-x-3 pb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30" />
          <span className="font-semibold text-lg text-white/90 font-serif italic">Forge</span>
        </div>
        <div className="mt-4 flex-1 grid grid-cols-2 gap-4">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="rounded-2xl bg-white/20 border border-white/30 p-4 h-32 flex items-end">
            <span className="text-sm font-medium">Moodboard_V2.fig</span>
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="rounded-2xl bg-black/20 border border-white/10 p-4 h-32 flex items-end">
            <span className="text-sm font-medium">Floorplan_DXF</span>
          </motion.div>
        </div>
      </div>
    )
  },
  {
    id: "dev",
    name: "The Independent Developer",
    theme: "bg-black text-[#00FF41]", // Terminal Green
    ui: (
      <div className="flex flex-col h-full w-full p-6 font-mono text-sm">
        <p>{"> ./forge --init local"}</p>
        <p className="text-slate-500">{"> Connecting to vector database..."}</p>
        <p className="text-slate-500">{"> Indexing unstructured repos..."}</p>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1 }}
          className="mt-4"
        >
          [SYSTEM]: Architecture map generated. Found 3 microservices.
        </motion.p>
      </div>
    )
  }
];

export default function PersonalSoftware() {
  const [activePersona, setActivePersona] = useState(0);

  // Bind scrolling to persona changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // We divide the scrollable area (150vh from MacbookScroll) into 4 chunks
      if (scrollPosition < windowHeight * 0.3) setActivePersona(0);
      else if (scrollPosition >= windowHeight * 0.3 && scrollPosition < windowHeight * 0.6) setActivePersona(1);
      else if (scrollPosition >= windowHeight * 0.6 && scrollPosition < windowHeight * 0.9) setActivePersona(2);
      else setActivePersona(3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden relative">
      
      {/* Background Effects for Dev mode */}
      <AnimatePresence>
        {activePersona === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 pointer-events-none"
          >
            <Meteors number={30} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 w-full z-50 p-6 md:p-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-start justify-between">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-400 hover:opacity-80 transition-opacity pointer-events-auto bg-[#0A0A0A]/80 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          
          <div className="text-right bg-[#0A0A0A]/80 p-6 rounded-2xl backdrop-blur-md border border-white/10 pointer-events-auto max-w-sm shadow-2xl">
            <h1 className="text-3xl font-bold text-white mb-2">Context Forge</h1>
            <p className="text-slate-400 text-sm mb-6">
              A local knowledge management OS with secure RAG architecture. Scroll to explore how the UI physically shifts based on the user's operational needs.
            </p>
            <div className="space-y-2">
              {personas.map((p, idx) => (
                <div 
                  key={p.id} 
                  className={`text-sm font-medium transition-colors duration-300 ${activePersona === idx ? 'text-indigo-400' : 'text-slate-600'}`}
                >
                  {p.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="relative z-10 w-full">
        <MacbookScroll badge={
          <div className="px-3 py-1 rounded-md bg-white text-black font-bold font-mono shadow-lg">
            v1.0.4-local
          </div>
        }>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className={`w-full h-full ${personas[activePersona].theme}`}
            >
              {personas[activePersona].ui}
            </motion.div>
          </AnimatePresence>
        </MacbookScroll>
      </main>

    </div>
  );
}
