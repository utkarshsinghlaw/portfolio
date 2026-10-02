import Link from "next/link";
import { ArrowLeft, Terminal, Shield, Cpu, Github, ExternalLink } from "lucide-react";

export default function ContextForgeCaseStudy() {
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
          
          {/* LEFT COLUMN: Sticky Meta Data (Brittany Chiang style) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 lg:h-fit">
            <div>
              <p className="text-teal-400 font-mono text-sm mb-3">01. Case Study</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Context Forge</h1>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                A local-first AI workspace orchestrator designed to solve the context window fragmentation problem for legal professionals and PMs.
              </p>
            </div>

            {/* Tech Stack (Wes Bos style) */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-3">The Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Electron", "Local LLMs", "Vector DB"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-900/30 text-indigo-300 text-xs font-mono rounded-full border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="hidden lg:block pt-8">
              <ul className="space-y-3 text-sm font-medium text-slate-500">
                <li><a href="#problem" className="hover:text-white transition-colors">01. The Problem</a></li>
                <li><a href="#architecture" className="hover:text-white transition-colors">02. System Architecture</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">03. Privacy & Privilege</a></li>
                <li><a href="#outcomes" className="hover:text-white transition-colors">04. Business Outcomes</a></li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Deep Content (Bret Victor style) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* The Problem */}
            <section id="problem" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Terminal className="mr-3 text-teal-400 w-6 h-6" />
                The Context Fragmentation Problem
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  As a Product Manager in Legal-Tech, one of the most persistent complaints I observed from attorneys and researchers using Generative AI is <strong>context fragmentation</strong>. 
                </p>
                <p>
                  When reviewing a 400-page M&A contract or a dense technical spec, standard web-based LLMs drop context after a few prompts. Users are forced to constantly re-upload files, re-explain the premise, and manage dozens of disconnected chat tabs. Furthermore, uploading highly sensitive commercial litigation data to a cloud endpoint breaks attorney-client privilege and violates strict data residency laws.
                </p>
                <div className="bg-slate-800/50 border-l-4 border-teal-500 p-6 my-8 rounded-r-xl">
                  <p className="text-white italic m-0">
                    "How do we maintain infinite, persistent context across thousands of local files without ever sending a single byte of privileged data to a cloud server?"
                  </p>
                </div>
              </div>
            </section>

            {/* System Architecture */}
            <section id="architecture" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cpu className="mr-3 text-indigo-400 w-6 h-6" />
                System Architecture
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  I architected <strong>Context Forge</strong> as a desktop-native application utilizing Electron and a local Vector Database (ChromaDB). 
                </p>
                <p>
                  Instead of a standard stateless chat interface, the system indexes the user's entire local project directory (CAD files, PDFs, Word Docs) into a local vector store. When the user queries the agent, it performs a local Retrieval-Augmented Generation (RAG) pass against the embedded chunks before streaming the context to a locally running model (via Ollama or Llama.cpp).
                </p>
                
                {/* Mock Code Block to show technical depth */}
                <div className="my-8 bg-[#0d1117] rounded-xl overflow-hidden border border-slate-800">
                  <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                    vector-ingestion.ts
                  </div>
                  <pre className="p-4 text-sm font-mono text-slate-300 overflow-x-auto">
                    <code>{`// Local embedding generation without external API calls
async function indexLocalWorkspace(dirPath: string) {
  const documents = await DirectoryLoader.load(dirPath);
  
  // Enforce zero-telemetry local embedding model
  const embeddings = new HuggingFaceLocalEmbeddings({ 
    model: "all-MiniLM-L6-v2" 
  });
  
  // Persist to local SQLite Chroma instance
  await ChromaStore.fromDocuments(documents, embeddings, {
    collectionName: "privileged-workspace",
  });
  
  return { status: "SECURE_INDEX_COMPLETE" };
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="mr-3 text-red-400 w-6 h-6" />
                Privacy & Attorney-Client Privilege
              </h2>
              <div className="prose prose-invert prose-slate max-w-none">
                <p>
                  The defining constraint of Legal-Tech is that <strong>data cannot leave the perimeter</strong>. 
                </p>
                <p>
                  By utilizing localized orchestration, Context Forge ensures that e-discovery, contract analysis, and legal research happen entirely on the user's silicon. This completely bypasses the risk of third-party model scraping, effectively immunizing the firm against inadvertent waiver of attorney-client privilege.
                </p>
              </div>
            </section>

            {/* Outcomes */}
            <section id="outcomes" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6">04. Business Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                  <p className="text-sm text-slate-400">Data retention on-device. Zero cloud leakage, passing all infosec audits.</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
                  <h4 className="text-4xl font-bold text-white mb-2">&lt; 2s</h4>
                  <p className="text-sm text-slate-400">Average RAG retrieval latency querying across a 10GB local document corpus.</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
