"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Activity, ChevronRight, ChevronLeft, Database, Code2, LayoutTemplate } from "lucide-react";

export default function BICaseStudies() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-[#051c2c] dark:text-slate-200 font-sans selection:bg-indigo-500/30">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="max-w-5xl mx-auto space-y-24 w-full">
          
          <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          {/* ================= CASE STUDY 1 ================= */}
          <section className="space-y-12">
            <header className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 text-sm font-semibold text-indigo-800 dark:text-indigo-300">
                Data Infrastructure & Visualization
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#051c2c] dark:text-white tracking-tight leading-tight">
                UK Drinkable Water Dashboard
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                A unified Power BI architecture translating raw OFWAT compliance data into actionable executive insights on leakage and drought mitigation.
              </p>
            </header>

            {/* UX Layout: FT Visual Vocabulary Strategy */}
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-[#334155] shadow-xl">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <LayoutTemplate className="mr-3 text-indigo-500" />
                Visualization Strategy (FT Visual Vocabulary)
              </h3>
              <p className="text-slate-500 mb-8 font-medium">Executive Summary: Shifting from massive tabular data to high-contrast Spatial and Time-series visualizations to immediately highlight regional compliance risks.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-xl">FT Category</th>
                      <th className="px-6 py-4">Chart Type</th>
                      <th className="px-6 py-4">Business Purpose</th>
                      <th className="px-6 py-4 rounded-tr-xl">Pros/Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4 font-medium text-indigo-400">Spatial</td>
                      <td className="px-6 py-4">Choropleth Map</td>
                      <td className="px-6 py-4">Highlight drought severity across UK water authority regions.</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Intuitive for executives.<br/>Con: Requires precise topojson boundaries.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-indigo-400">Time</td>
                      <td className="px-6 py-4">Line Chart with Error Bands</td>
                      <td className="px-6 py-4">Track leakage reduction vs. regulatory OFWAT targets over 5 years.</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Clearly shows deviation from target.<br/>Con: Cluttered if &gt;5 regions selected.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-indigo-400">Magnitude</td>
                      <td className="px-6 py-4">Bar Chart (Horizontal)</td>
                      <td className="px-6 py-4">Rank water companies by total infrastructure investment (CAPEX).</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Best for ranking exact figures.<br/>Con: Needs dynamic sorting.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* UX Layout: Technical Implementation (Power BI) */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0f111a] rounded-3xl p-8 border border-[#334155] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Database className="w-24 h-24 text-indigo-500" />
                </div>
                <h4 className="text-indigo-400 font-mono text-sm mb-4 flex items-center">
                  <Code2 className="mr-2 w-4 h-4" />
                  DAX Measure: YoY Leakage Variance
                </h4>
                <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
                  <code>{`Leakage_YoY_Var = 
VAR CurrentYear = SUM(FactLeakage[Megalitres])
VAR PreviousYear = 
  CALCULATE(
    SUM(FactLeakage[Megalitres]), 
    SAMEPERIODLASTYEAR(DimDate[Date])
  )
RETURN
  DIVIDE(CurrentYear - PreviousYear, PreviousYear, 0)`}</code>
                </pre>
              </div>

              {/* Performative UI: Before/After Slider */}
              <div className="relative w-full rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-[#334155] overflow-hidden shadow-sm group cursor-ew-resize h-64"
                   onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                     setSliderPosition((x / rect.width) * 100);
                   }}>
                {/* Before: Raw Data State */}
                <div className="absolute inset-0 flex flex-col p-6 font-mono text-xs text-slate-500 bg-slate-50 dark:bg-slate-950">
                  <p className="text-red-500 font-bold mb-4">OFWAT_raw_extract.csv</p>
                  {Array.from({length: 6}).map((_, i) => (
                    <div key={i} className="flex justify-between opacity-50 mb-2 border-b border-slate-800 pb-1">
                      <span>{Math.random().toString(36).substring(7)}</span>
                      <span>NaN</span>
                      <span>{Math.floor(Math.random() * 1000)} ML</span>
                    </div>
                  ))}
                </div>

                {/* After: Clean BI Dashboard State */}
                <div 
                  className="absolute inset-0 bg-white dark:bg-[#1E293B] border-r-2 border-indigo-500 flex flex-col p-6 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)]"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <p className="text-indigo-400 font-sans font-bold mb-6 whitespace-nowrap">Dashboard (Magnitude UI)</p>
                  <div className="flex-1 flex items-end space-x-3">
                    {[40, 70, 45, 90, 65, 80].map((height, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="w-10 bg-indigo-500 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 w-1 bg-indigo-500 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-indigo-500 flex items-center justify-center">
                    <ChevronLeft className="w-3 h-3 text-indigo-500 -mr-1" />
                    <ChevronRight className="w-3 h-3 text-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= CASE STUDY 2 ================= */}
          <section className="space-y-12 pt-12 border-t border-slate-200 dark:border-[#334155]">
            <header className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-teal-200 dark:border-teal-900 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 text-sm font-semibold text-teal-800 dark:text-teal-300">
                Process Optimization
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#051c2c] dark:text-white tracking-tight leading-tight">
                Legal Tech ROI Analysis
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                Quantifying the commercial impact of generative workflows in high-stakes insolvency cases through robust statistical modeling.
              </p>
            </header>

            {/* UX Layout: FT Visual Vocabulary Strategy */}
            <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-[#334155] shadow-xl">
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <LayoutTemplate className="mr-3 text-teal-500" />
                Visualization Strategy (FT Visual Vocabulary)
              </h3>
              <p className="text-slate-500 mb-8 font-medium">Executive Summary: Emphasizing financial upside by visualizing process flow efficiencies and strict deviations from baseline billable expectations.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300">
                    <tr>
                      <th className="px-6 py-4 rounded-tl-xl">FT Category</th>
                      <th className="px-6 py-4">Chart Type</th>
                      <th className="px-6 py-4">Business Purpose</th>
                      <th className="px-6 py-4 rounded-tr-xl">Pros/Cons</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr>
                      <td className="px-6 py-4 font-medium text-teal-400">Deviation</td>
                      <td className="px-6 py-4">Bullet Graph</td>
                      <td className="px-6 py-4">Compare actual discovery hours vs. planned baseline budget.</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Space-efficient for target vs actual.<br/>Con: Can be complex for lay audiences.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-teal-400">Flow</td>
                      <td className="px-6 py-4">Sankey Diagram</td>
                      <td className="px-6 py-4">Map the flow of human vs. AI-assisted review phases.</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Excellent for bottleneck visibility.<br/>Con: Hard to read if categories are too granular.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-teal-400">Part-to-Whole</td>
                      <td className="px-6 py-4">Waterfall Chart</td>
                      <td className="px-6 py-4">Step-by-step breakdown of cumulative margin expansion.</td>
                      <td className="px-6 py-4 text-slate-500">Pro: Shows cumulative financial impact clearly.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  Law firms face immense pressure to optimize billable hours without sacrificing the meticulous accuracy required in insolvency law. The intervention was not just introducing an AI tool, but engineering a statistical model to track its ROI.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Target className="w-6 h-6 text-teal-500 mr-4 mt-1 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Identified a <strong>40% reduction</strong> in manual discovery hours via the baseline deviation model.</span>
                  </li>
                  <li className="flex items-start">
                    <Activity className="w-6 h-6 text-teal-500 mr-4 mt-1 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">Modeled the financial upside, translating saved hours into expanded margin capacity for partners.</span>
                  </li>
                </ul>
              </div>

              {/* Performative UI: Line Chart Drawing itself */}
              <div className="bg-[#0B1120] rounded-3xl p-8 border border-[#334155] shadow-xl flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-slate-400 mb-6 uppercase tracking-widest">Cumulative Margin Expansion</h4>
                <div className="relative h-48 w-full">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="currentColor" strokeOpacity="0.1" strokeWidth="0.5" />
                    
                    {/* Animated Trend Line */}
                    <motion.path
                      d="M0,90 Q20,85 40,60 T70,30 T100,10"
                      fill="none"
                      stroke="url(#tealGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#14B8A6" />
                        <stop offset="100%" stopColor="#3B82F6" />
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
