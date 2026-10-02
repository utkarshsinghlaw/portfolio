import Link from "next/link";
import { ArrowLeft, Terminal, Shield, Cpu, Github, ExternalLink } from "lucide-react";

export default function ContextForgeProject() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300 font-sans selection:bg-teal-500/30">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0B1120]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/#pillars" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="flex space-x-4">
            <a href="https://github.com/utkarshsinghlaw/context-forge-68" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Sticky Meta Data */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 lg:h-fit">
            <div>
              <p className="text-teal-400 font-mono text-sm mb-3">01. Production Application</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Context Forge</h1>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                The operating system for knowledge work. Context before AI — grounded, cited answers scoped to your own workspaces.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">The Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["TanStack Start", "React Router v7", "Supabase (pgvector)", "OpenAI API", "Deepgram", "Tailwind CSS"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs font-mono rounded-full border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="hidden lg:block pt-8">
              <ul className="space-y-3 text-sm font-medium text-slate-500">
                <li><a href="#overview" className="hover:text-white transition-colors">01. Overview</a></li>
                <li><a href="#memory" className="hover:text-white transition-colors">02. 3-Tier Memory Architecture</a></li>
                <li><a href="#transcription" className="hover:text-white transition-colors">03. Real-Time Processing</a></li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Deep Content */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Terminal className="mr-3 text-teal-400 w-6 h-6" />
                Context Before AI
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  Context Forge is a full-stack, AI-native knowledge management application built to help users organize, search, and extract insights from their documents, notes, and meeting transcripts.
                </p>
                <p>
                  Built on <strong>TanStack Start</strong> and powered by a <strong>Supabase</strong> backend utilizing <strong>pgvector</strong>, the application implements a Retrieval-Augmented Generation (RAG) architecture. This ensures the AI only answers questions using the secure, grounded context provided by your own isolated workspaces.
                </p>
              </div>
            </section>

            {/* 3-Tier Memory */}
            <section id="memory" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="mr-3 text-indigo-400 w-6 h-6" />
                Three-Tier Memory Architecture
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  To solve the problem of AI losing context across sessions, Context Forge implements a sophisticated memory system so the AI fundamentally understands your data:
                </p>
                <ul>
                  <li><strong>Working Memory:</strong> Session-scoped and auto-expiring, keeping track of active interactions and immediate queries without polluting long-term storage.</li>
                  <li><strong>Workspace Memory:</strong> Persistent memory tied to an isolated workspace, forming an evolving Knowledge Graph from your uploaded documents, notes, and transcripts via RAG.</li>
                  <li><strong>Knowledge Vault:</strong> Permanent, globally shared memory that persists across every workspace and conversation.</li>
                </ul>
                <p>
                  The AI gateway is model-agnostic. While it natively utilizes OpenAI's `/v1/chat/completions` and `/v1/embeddings` schemas, it can seamlessly proxy to Anthropic, Gemini, or open-source local models.
                </p>
              </div>
            </section>

            {/* Transcription */}
            <section id="transcription" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="mr-3 text-red-400 w-6 h-6" />
                Real-Time Speech Vectorization
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  Built-in live session capabilities utilize the <strong>Deepgram SDK v5</strong>. Users can record meetings, thoughts, or brainstorming sessions directly in the browser. 
                </p>
                <p>
                  The audio is transcribed in real-time, instantly chunked, and vectorized directly into the RAG Knowledge Graph. Zero-configuration auto-indexing ensures that every spoken word or saved note is instantly queryable by the AI across the workspace.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
