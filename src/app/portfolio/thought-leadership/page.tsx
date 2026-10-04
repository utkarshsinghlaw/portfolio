"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrutalistAccordion } from "@/components/ui/brutalist-accordion";
import { FloatingDock } from "@/components/ui/floating-dock";
import BlurFade from "@/components/ui/blur-fade";

const essays = [
  {
    id: "item-1",
    title: "The Agentic Shift in Power BI",
    category: "Data Architecture",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-[#333] leading-relaxed font-serif">
        <p>
          The traditional drag-and-drop dashboard is dead. We are entering an era of <strong>Agentic Business Intelligence</strong>, where LLMs no longer just generate DAX formulas for humans to paste, but actively manipulate the underlying <code className="bg-[#EAEAEA] px-1 font-mono text-sm border border-black/10">.pbip</code> semantic models directly.
        </p>
        <p>
          This paradigm requires a complete structural change in how organizations deploy BI. Instead of deploying `.pbix` binaries, developers must save reports in the Power BI Project (PBIP) format, breaking a dashboard down into pure text (TMDL). This allows a dual-agent system—a Builder to write the logic, and an Auditor to verify layout visually—to construct enterprise-grade analytics autonomously.
        </p>
        <div className="p-6 border-2 border-black bg-white my-8 font-sans shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h4 className="font-bold text-black mb-2 uppercase tracking-wide text-sm">Key Takeaway</h4>
          <p className="text-base text-black/80">
            Agents cannot cross the finish line without perfect documentation. Organizations must supply explicit <strong>Ontologies</strong> and <strong>Scoping Rules</strong> to prevent catastrophic AI hallucination in financial reporting.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "item-2",
    title: "Zero-Budget Organic Acquisition",
    category: "Product Strategy",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-[#333] leading-relaxed font-serif">
        <p>
          In a high-interest rate environment, the venture-subsidized customer acquisition model (CAC &gt; LTV) has collapsed. SaaS companies must return to fundamental, zero-budget organic growth.
        </p>
        <p>
          The most effective vector for this is <em>Engineering-as-Marketing</em>. Building free, high-utility micro-tools that solve a single, painful problem for a niche audience naturally attracts high-intent traffic. These tools act as programmatic lead magnets, compounding in SEO value while traditional paid channels decay.
        </p>
      </div>
    ),
  },
  {
    id: "item-3",
    title: "Automating Cross-Jurisdictional Audits",
    category: "Legal Tech",
    content: (
      <div className="space-y-6 text-lg md:text-xl text-[#333] leading-relaxed font-serif">
        <p>
          Global e-commerce requires navigating an increasingly fragmented regulatory landscape. Manual compliance audits are no longer scalable when launching products across the UK, EU, and US simultaneously.
        </p>
        <p>
          By deploying autonomous LLM agents equipped with Retrieval-Augmented Generation (RAG) over specific legal corpora (e.g., ASA/CAP codes or GDPR directives), we can perform first-pass risk assessments in seconds. The agent highlights potential liabilities in marketing copy or data practices, allowing human attorneys to focus purely on high-stakes strategic risk rather than mechanical review.
        </p>
      </div>
    ),
  }
];

const dockItems = [
  { title: "Home", icon: "H", href: "/" },
  { title: "Agentic BI", icon: "I", href: "#item-1" },
  { title: "Organic Growth", icon: "II", href: "#item-2" },
  { title: "Legal Tech", icon: "III", href: "#item-3" },
];

export default function ThoughtLeadership() {
  return (
    // Note: Forcefully applying Light Mode & Brutalist styling here to override the global shell
    <div className="min-h-screen font-sans selection:bg-black selection:text-white pb-32">
      <FloatingDock items={dockItems} />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-24 md:pl-32">
        
        <BlurFade delay={0.1}>
          <Link href="/" className="inline-flex items-center text-sm font-bold text-[#111] hover:underline uppercase tracking-widest mb-16">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return
          </Link>
        </BlurFade>

        <header className="mb-24">
          <BlurFade delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
              Essays & <br /> Observations.
            </h1>
          </BlurFade>
          <BlurFade delay={0.3}>
            <p className="text-xl md:text-2xl text-[#555] max-w-2xl font-serif">
              A collection of thoughts on AI engineering, product-led growth, and the intersection of legal operations and automation.
            </p>
          </BlurFade>
        </header>

        <BlurFade delay={0.4}>
          <BrutalistAccordion items={essays} />
        </BlurFade>

      </main>
    </div>
  );
}
