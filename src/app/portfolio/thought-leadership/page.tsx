"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

const essays = [
  {
    id: "I",
    title: "The ROI of Legal Tech",
    subtitle: "Generative workflows in high-stakes insolvency",
    content: "When analyzing commercial risk inside law firms, the bottleneck is rarely lack of precedent; it's the sheer velocity of data ingestion. By implementing localized RAG (Retrieval-Augmented Generation) architectures directly on top of unstructured contract repositories, we shifted the paradigm from manual discovery to instant synthesis. The result wasn't just a 40% reduction in billable hours lost to research, but a fundamental derisking of the firm's operational drag. AI is not a feature—it is a margin expander.",
    bgColor: "bg-[#f8f9fa] dark:bg-[#0a0a0a]", // Almost white / almost black
    textColor: "text-slate-900 dark:text-slate-100"
  },
  {
    id: "II",
    title: "Macro-Ops in Data",
    subtitle: "Why executive dashboards fail without Gestalt",
    content: "A dashboard that requires a user manual is a failed dashboard. Most enterprise BI tools suffer from cognitive overload because they ignore the principles of Gestalt psychology. By aggressively applying the Law of Proximity and Miller's Law (keeping KPIs to a maximum of 7 elements), we rebuild trust with the C-suite. The UK Drinkable Water dashboard succeeded not because the ETL pipeline was complex, but because the final interface respected the executive's time.",
    bgColor: "bg-[#f1f5f9] dark:bg-[#111827]", // Slate 100 / Gray 900
    textColor: "text-slate-800 dark:text-slate-200"
  }
];

export default function ThoughtLeadership() {
  const [activeEssay, setActiveEssay] = useState(0);

  // Simple scroll spy using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = essays.findIndex(e => e.id === entry.target.id);
            if (index !== -1) setActiveEssay(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    essays.forEach((essay) => {
      const el = document.getElementById(essay.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen font-serif transition-colors duration-1000 ease-in-out ${essays[activeEssay].bgColor} ${essays[activeEssay].textColor}`}>
      
      {/* Sticky Roman Numeral Header */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white p-6 md:p-12 flex justify-between items-center pointer-events-none">
        <Link href="/#pillars" className="inline-flex items-center text-sm font-sans uppercase tracking-widest font-semibold hover:opacity-70 transition-opacity pointer-events-auto">
          <ArrowLeft className="mr-4 h-4 w-4" />
          Index
        </Link>
        <div className="flex space-x-12 pointer-events-auto font-sans">
          {essays.map((essay, idx) => (
            <button 
              key={essay.id}
              onClick={() => scrollTo(essay.id)}
              className={`text-lg font-bold transition-all duration-500 ${activeEssay === idx ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
            >
              {essay.id}
            </button>
          ))}
        </div>
      </nav>

      {/* Floating Contact CTA */}
      <a href="mailto:contact@example.com" className="fixed bottom-12 right-12 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-transform hover:scale-110 group">
        <Mail className="h-6 w-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-sans px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Discuss Strategy
        </span>
      </a>

      {/* Progress Anchor Line */}
      <div className="fixed left-6 md:left-12 top-0 h-full w-px bg-current opacity-10 z-40" />
      <motion.div 
        className="fixed left-6 md:left-12 top-0 w-px bg-current z-40 origin-top mix-blend-difference text-white"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: (activeEssay + 1) / essays.length }}
        transition={{ duration: 0.5 }}
      />

      {/* Essay Content Sections */}
      <main className="relative z-10 w-full">
        {essays.map((essay, idx) => (
          <section 
            key={essay.id} 
            id={essay.id}
            className="min-h-screen flex items-center justify-center p-8 md:p-24"
          >
            <div className="max-w-3xl w-full mx-auto relative">
              {/* Massive Roman Numeral Background */}
              <div className="absolute -top-32 -left-32 text-[20rem] font-bold opacity-5 pointer-events-none select-none font-sans">
                {essay.id}
              </div>
              
              <div className="relative z-10 space-y-8">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                  {essay.title}
                </motion.h1>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl font-sans uppercase tracking-widest opacity-60"
                >
                  {essay.subtitle}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-lg md:text-xl leading-relaxed opacity-80 pt-8 border-t border-current border-opacity-20"
                >
                  {essay.content}
                </motion.p>
              </div>
            </div>
          </section>
        ))}
      </main>

    </div>
  );
}
