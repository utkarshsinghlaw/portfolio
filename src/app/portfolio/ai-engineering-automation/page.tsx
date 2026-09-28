"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Cpu, ShieldCheck, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "data-scout",
    description: "An autonomous agent skill built for the open agent standard (agentskills.io). It sources real-world data and public APIs to support MBA deliverables and strategy consulting reports without hallucinations.",
    tags: ["Python", "MCP", "WebFetch", "LLM Routing"],
    snippet: `// System Prompt Excerpt
export function validateSource(url: string) {
  if (!isPublicAPI(url)) throw new Error("Source must be verifiable.");
  return routeToScout(url);
}`,
    color: "from-blue-500 to-cyan-500",
    link: "https://github.com/Utkarsh/data-scout" // Placeholder
  },
  {
    title: "stats-validator",
    description: "A statistical rigor evaluator designed specifically for validating business cases and operational models in consulting workflows. It catches p-hacking, ensures sample sizes are sufficient, and verifies methodology.",
    tags: ["TypeScript", "Stat-Models", "Agentic QA"],
    snippet: `// Statistical Verification Gate
if (p_value > 0.05 && claimed_significance === true) {
  triggerAudit({
    reason: "Claimed significance fails standard threshold.",
    severity: "HIGH"
  });
}`,
    color: "from-emerald-500 to-teal-500",
    link: "https://github.com/Utkarsh/stats-validator" // Placeholder
  }
];

export default function AIEngineering() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-sans selection:bg-cyan-500/30">
      <main className="flex flex-col items-center p-8 md:p-16">
        <div className="max-w-5xl space-y-16 w-full">
          
          <Link href="/#pillars" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>

          <header className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center rounded-full border border-cyan-900 bg-cyan-900/30 px-3 py-1 text-sm font-mono text-cyan-300"
            >
              $ ./deploy --agents
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              AI Engineering & Automation
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
              Architecting secure, verifiable agentic workflows and custom automation toolkits.
            </p>
          </header>

          <div className="space-y-24 pt-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Left: Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <p className="text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
                    <FaGithub className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>

                {/* Right: Code Block (Performative UI) */}
                <div className={`rounded-xl p-[1px] bg-gradient-to-br ${project.color}`}>
                  <div className="bg-[#0f111a] rounded-xl overflow-hidden h-full">
                    <div className="flex items-center px-4 py-3 bg-[#1a1d27] border-b border-white/5 space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-4 text-xs font-mono text-slate-500">{project.title}.ts</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                      <pre className="font-mono text-sm leading-loose">
                        {/* Simulate token reveal with Framer Motion text staggering */}
                        <motion.code
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            visible: { transition: { staggerChildren: 0.02 } },
                            hidden: {}
                          }}
                        >
                          {project.snippet.split('').map((char, index) => (
                            <motion.span
                              key={index}
                              variants={{
                                visible: { opacity: 1 },
                                hidden: { opacity: 0 }
                              }}
                              className={
                                char === '/' ? 'text-slate-500' :
                                char === '{' || char === '}' ? 'text-cyan-400' :
                                'text-slate-300'
                              }
                            >
                              {char}
                            </motion.span>
                          ))}
                        </motion.code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
