"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, Activity, Map } from "lucide-react";
import BlurFade from "@/components/ui/blur-fade";
import { SafariMockup } from "@/components/ui/safari-mockup";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function BICaseStudies() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] font-sans selection:bg-indigo-500/30 pb-32">
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        <BlurFade delay={0.1}>
          <Link href="/" className="inline-flex items-center text-sm font-medium text-indigo-400 hover:opacity-80 transition-opacity mb-16">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </BlurFade>

        <header className="mb-24 text-center max-w-4xl mx-auto">
          <BlurFade delay={0.2}>
            <div className="inline-flex items-center rounded-full border border-indigo-900 bg-indigo-900/30 px-3 py-1 text-sm font-mono text-indigo-300 mb-6">
              Agentic Business Intelligence
            </div>
          </BlurFade>
          <BlurFade delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
              UK Water Usage <br className="hidden md:block"/> & Drought Analysis.
            </h1>
          </BlurFade>
          <BlurFade delay={0.4}>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              An interactive, performative dashboard uncovering the exact correlation between Soil Moisture Deficit and River Flow drops, built entirely via autonomous AI agents using the PBIP format.
            </p>
          </BlurFade>
        </header>

        {/* Dynamic KPI Tickers */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="p-8 rounded-3xl bg-[#111111] border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Database className="text-indigo-500 w-8 h-8" /></div>
              <h3 className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-2">Rows Processed</h3>
              <div className="text-5xl font-bold text-white">
                <NumberTicker value={245000} suffix="+" />
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-[#111111] border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Activity className="text-orange-500 w-8 h-8" /></div>
              <h3 className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-2">Max Deficit (mm)</h3>
              <div className="text-5xl font-bold text-white">
                <NumberTicker value={124} />
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#111111] border border-slate-800 text-center">
              <div className="flex justify-center mb-4"><Map className="text-teal-500 w-8 h-8" /></div>
              <h3 className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-2">Stations Mapped</h3>
              <div className="text-5xl font-bold text-white">
                <NumberTicker value={42} />
              </div>
            </div>
          </div>
        </BlurFade>

        {/* The Safari Mockup & Placeholder */}
        <BlurFade delay={0.6}>
          <SafariMockup url="app.powerbi.com/view?r=uk-water-usage-drought" className="h-[600px] md:h-[800px]">
            {/* 
              TODO: Replace this div with the actual iframe when the Power BI publish link is ready.
              Example: <iframe title="UK Drought" src="YOUR_LINK_HERE" frameBorder="0" allowFullScreen={true} className="w-full h-full" />
            */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#1A1A2E]">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <h2 className="text-2xl font-bold tracking-widest uppercase text-white">Connecting to Fabric Workspace</h2>
                <p className="text-slate-500 font-mono text-sm max-w-sm mx-auto">
                  [Waiting for semantic model to load. Replace this placeholder with the live iframe upon Power BI publication.]
                </p>
              </div>
            </div>
          </SafariMockup>
        </BlurFade>

      </main>
    </div>
  );
}
