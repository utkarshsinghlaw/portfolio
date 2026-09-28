"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Database, Activity, Target, ChevronLeft, ChevronRight } from "lucide-react";

export default function BICaseStudies() {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100

  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#051c2c] dark:text-slate-200 font-sans transition-colors duration-300">
      <main className="flex flex-col items-center p-8 md:p-16">
        <div className="max-w-5xl space-y-24 w-full">
          
          <Link href="/#pillars" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* ================= CASE STUDY 1 ================= */}
          <section className="space-y-12">
            <header className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-sm font-semibold text-blue-800 dark:text-blue-300">
                Business Intelligence & Data Engineering
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#051c2c] dark:text-white tracking-tight leading-tight">
                UK Drinkable Water Dashboard
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                A macro-ops visualization tool combining Met Office, NRFA, and Ofwat data to correlate infrastructural leakage against regional drought risk.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#051c2c] dark:text-white font-semibold">
                  <Target className="h-5 w-5 text-indigo-500" />
                  <h3>The Challenge</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Assessing genuine drought risk versus infrastructural failure is complex due to highly siloed datasets spread across the Met Office, the NRFA, and disjointed corporate reporting.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#051c2c] dark:text-white font-semibold">
                  <Database className="h-5 w-5 text-blue-500" />
                  <h3>The Intervention</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Engineered a Python ETL pipeline to ingest millions of rows. Designed a Power BI dashboard adhering strictly to Gestalt principles, ensuring instant executive scanning.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#051c2c] dark:text-white font-semibold">
                  <Activity className="h-5 w-5 text-emerald-500" />
                  <h3>The Result</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Delivered a unified macro-ops dashboard that cuts through data fragmentation, bridging deep technical implementation with executive risk strategy.
                </p>
              </div>
            </div>

            {/* Performative UI: Before/After Slider */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Intervention Analysis</h3>
              <div className="relative aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm group cursor-ew-resize"
                   onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                     setSliderPosition((x / rect.width) * 100);
                   }}
                   onTouchMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
                     setSliderPosition((x / rect.width) * 100);
                   }}
              >
                {/* Before: Raw Data State */}
                <div className="absolute inset-0 flex flex-col p-8 font-mono text-xs text-slate-500 bg-slate-50 dark:bg-slate-950">
                  <p className="text-red-500 font-bold mb-4">raw_ofwat_leakage_2023.csv (FRAGMENTED)</p>
                  {Array.from({length: 10}).map((_, i) => (
                    <div key={i} className="flex space-x-4 opacity-50">
                      <span>{Math.random().toString(36).substring(7)}</span>
                      <span>NaN</span>
                      <span>{Math.floor(Math.random() * 1000)}</span>
                      <span>{Math.random() > 0.5 ? 'MISSING' : 'ERR_TIMEOUT'}</span>
                    </div>
                  ))}
                </div>

                {/* After: Clean BI Dashboard State */}
                <div 
                  className="absolute inset-0 bg-white dark:bg-slate-900 border-r-2 border-indigo-500 flex flex-col p-8 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.1)]"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <p className="text-indigo-500 font-sans font-bold mb-8 whitespace-nowrap">Power BI Visualization (UNIFIED)</p>
                  <div className="flex-1 flex items-end space-x-4">
                    {/* Animated Bar Chart */}
                    {[40, 70, 45, 90, 65, 80, 30].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="w-12 bg-indigo-500 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-indigo-500 pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-indigo-500 flex items-center justify-center">
                    <ChevronLeft className="w-3 h-3 text-indigo-500 -mr-1" />
                    <ChevronRight className="w-3 h-3 text-indigo-500" />
                  </div>
                </div>
              </div>
              <p className="text-center text-xs text-slate-400">Drag to compare raw fragmented data vs. unified dashboard</p>
            </div>
          </section>

          {/* ================= CASE STUDY 2 ================= */}
          <section className="space-y-12 pt-12 border-t border-slate-200 dark:border-slate-800">
            <header className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 text-sm font-semibold text-purple-800 dark:text-purple-300">
                Process Optimization
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#051c2c] dark:text-white tracking-tight leading-tight">
                Legal Tech ROI Analysis
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                Quantifying the commercial impact of generative workflows in high-stakes insolvency cases.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Law firms face immense pressure to optimize billable hours without sacrificing the meticulous accuracy required in insolvency law. The intervention was not just introducing an AI tool, but engineering a statistical model to track its ROI.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-purple-500 mr-3 mt-1 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Identified a 40% reduction in manual discovery hours.</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="w-5 h-5 text-purple-500 mr-3 mt-1 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Modeled the financial upside, translating saved hours into expanded margin capacity for partners.</span>
                  </li>
                </ul>
              </div>

              {/* Performative UI: Line Chart Drawing itself */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-slate-500 mb-6">Cumulative Margin Expansion (Modeled)</h4>
                <div className="relative h-48 w-full">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    
                    {/* Animated Trend Line */}
                    <motion.path
                      d="M0,90 Q20,85 40,60 T70,30 T100,10"
                      fill="none"
                      stroke="url(#purpleGradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
