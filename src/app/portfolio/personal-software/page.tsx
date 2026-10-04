"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const personas = [
  {
    id: "mba",
    name: "THE MBA / CONSULTANT",
    ascii: `
+---------------------------------------------------+
| MODULE   : STRATEGY_SYNTHESIS                     |
| TARGET   : HBS_CASE_STUDY_500P.PDF                |
+---------------------------------------------------+
| [#########...................] 34%                |
| > EXTRACTING COMMERCIAL LEVERS                    |
| > IDENTIFYING EBITDA BOTTLENECKS                  |
+---------------------------------------------------+
    `
  },
  {
    id: "lawyer",
    name: "THE LEGAL ANALYST",
    ascii: `
+---------------------------------------------------+
| MODULE   : CONTRACT_REVIEW_AIRGAPPED              |
| TARGET   : CONFIDENTIAL_MSA_V4.PDF                |
+---------------------------------------------------+
| [####################........] 72%                |
| > SCANNING NON-SOLICITATION CLAUSES               |
| > WARNING: CLAUSE 4.2 CONSTITUTES MATERIAL BREACH |
+---------------------------------------------------+
    `
  },
  {
    id: "designer",
    name: "THE ARCHITECT",
    ascii: `
+---------------------------------------------------+
| MODULE   : SPATIAL_MEMORY                         |
| TARGET   : MOODBOARD_V2.FIG & FLOORPLAN.DXF       |
+---------------------------------------------------+
| [#############################.] 95%              |
| > INDEXING VECTOR EMBEDDINGS                      |
| > MAPPING MATERIALS TO LIGHTING DATA              |
+---------------------------------------------------+
    `
  },
  {
    id: "dev",
    name: "THE INDEPENDENT DEVELOPER",
    ascii: `
+---------------------------------------------------+
| MODULE   : LOCAL_RAG_OS                           |
| TARGET   : ./FORGE --INIT LOCAL                   |
+---------------------------------------------------+
| [##############################] 100%             |
| > CONNECTING TO VECTOR DATABASE...                |
| > SYSTEM: ARCHITECTURE MAP GENERATED.             |
+---------------------------------------------------+
    `
  }
];

export default function PersonalSoftware() {
  const [activePersona, setActivePersona] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition < windowHeight * 0.4) setActivePersona(0);
      else if (scrollPosition >= windowHeight * 0.4 && scrollPosition < windowHeight * 0.8) setActivePersona(1);
      else if (scrollPosition >= windowHeight * 0.8 && scrollPosition < windowHeight * 1.2) setActivePersona(2);
      else setActivePersona(3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-mono selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Scrollable track */}
      <div className="h-[200vh] w-full">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-6 md:p-12">
          
          <div className="w-full max-w-4xl border-[1.5px] border-black dark:border-white p-1">
            
            {/* Header */}
            <div className="border-b-[1.5px] border-black dark:border-white pb-4 mb-4 flex justify-between items-end px-4 pt-4">
              <div>
                <Link href="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest hover:underline mb-8">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return
                </Link>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
                  Context Forge
                </h1>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-xs uppercase tracking-widest block">Version</span>
                <span className="text-xl font-bold">v1.0.4-LOCAL</span>
              </div>
            </div>

            {/* Description */}
            <div className="px-4 pb-8 max-w-2xl text-sm md:text-base leading-relaxed uppercase">
              A local knowledge management OS with secure RAG architecture. Scroll to observe the system adapt its operational constraints across multiple distinct professional modalities.
            </div>

            {/* ASCII Output Window */}
            <div className="border-t-[1.5px] border-black dark:border-white bg-black dark:bg-white text-white dark:text-black p-4 md:p-8 min-h-[300px] flex flex-col justify-center overflow-x-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-pre font-mono text-xs md:text-sm leading-tight"
                >
                  {personas[activePersona].ascii}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Persona Index */}
            <div className="flex border-t-[1.5px] border-black dark:border-white text-xs md:text-sm font-bold uppercase divide-x-[1.5px] divide-black dark:divide-white">
              {personas.map((p, idx) => (
                <div 
                  key={p.id} 
                  className={`flex-1 py-3 text-center transition-colors duration-200 ${
                    activePersona === idx 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  0{idx + 1}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
