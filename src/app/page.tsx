import Link from "next/link";
import { bioContent } from "@/data/content";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  BarChart3, 
  BrainCircuit, 
  PenTool, 
  Code2,
  Mail,
  ArrowRight
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { 
  ContextForgePreview, 
  BICaseStudiesPreview, 
  AIEngineeringPreview, 
  ThoughtLeadershipPreview 
} from "@/components/InteractivePreviews";

const secondaryPillars = [
  {
    title: "BI Case Studies",
    description: "The UK Drinkable Water Dashboard & Legal Tech ROI analysis.",
    header: <BICaseStudiesPreview />,
    icon: <BarChart3 className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    href: "/portfolio/bi-case-studies"
  },
  {
    title: "AI Engineering & Automation",
    description: "Architecting custom AI agents and the ai-agent-toolkit.",
    header: <AIEngineeringPreview />,
    icon: <BrainCircuit className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    href: "/portfolio/ai-engineering-automation"
  },
  {
    title: "Thought Leadership",
    description: "Translating statistical risk and AI strategies for non-technical stakeholders.",
    header: <ThoughtLeadershipPreview />,
    icon: <PenTool className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    href: "/portfolio/thought-leadership"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-[#051c2c] dark:text-slate-200 font-sans selection:bg-teal-500/30">
      
      {/* Top Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="font-bold text-lg text-[#051c2c] dark:text-white tracking-tighter">Utkarsh Singh</div>
        <a href="/cv.pdf" className="px-5 py-2 text-sm font-medium border border-blue-500/30 text-blue-400 rounded-full hover:bg-blue-500/10 transition-colors">
          Download CV
        </a>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: Sticky Bio & Hero (The "3-Second" Activation) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] overflow-y-auto pb-8 flex flex-col no-scrollbar">
            <header>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-300 uppercase bg-teal-900/30 border border-teal-800/50 rounded-full">
                {bioContent.eyebrow}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#051c2c] dark:text-white tracking-tight mb-4">
                Utkarsh Singh
              </h1>
              <h2 className="text-lg md:text-xl text-blue-500 dark:text-blue-400 font-medium leading-relaxed">
                {bioContent.headline}
              </h2>
            </header>

            <section className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {bioContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>

            <div className="flex items-center space-x-4 pt-4 mt-auto">
              <a href="https://linkedin.com/in/utkarsh-singh-630a88311" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/utkarshsinghlaw" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:utkarshsinghlaw@gmail.com" className="p-2 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The Scrolling Projects (Von Restorff + Constrained Content) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* The "Hero Project" Block (Context Forge) */}
            <section>
              <Link href="/portfolio/context-forge" className="block group">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] shadow-sm hover:shadow-xl transition-all duration-300">
                  <ContextForgePreview />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Code2 className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-medium text-indigo-500 uppercase tracking-wider">Flagship Software</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#051c2c] dark:text-white mb-2">Context Forge</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      A local knowledge management OS with secure RAG architecture built for professionals. 
                      One computer, many worlds.
                    </p>
                  </div>
                </div>
              </Link>
            </section>

            {/* Secondary Supporting Grid */}
            <section>
              <h3 className="text-xl font-semibold text-[#051c2c] dark:text-white mb-6">More Work</h3>
              <BentoGrid className="max-w-none">
                {secondaryPillars.map((item, i) => (
                  <Link href={item.href} key={i} className="block hover:-translate-y-1 transition-transform duration-200">
                    <BentoGridItem
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      icon={item.icon}
                      className="h-full bg-white dark:bg-[#1E293B] border-slate-200 dark:border-[#334155] text-[#051c2c] dark:text-white shadow-sm"
                    />
                  </Link>
                ))}
              </BentoGrid>
            </section>

            {/* The "Peak-End" Contact Card */}
            <section className="pt-12">
              <div className="bg-indigo-600 dark:bg-indigo-900/50 rounded-3xl p-8 md:p-12 border border-indigo-500 dark:border-indigo-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <div className="relative z-10 max-w-lg">
                  <h3 className="text-3xl font-bold text-white mb-4">Let's build together.</h3>
                  <p className="text-indigo-100 mb-8">
                    Whether you need to discuss product management, legal operations, or architecting AI agents—drop me a line.
                  </p>
                  
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="hello@company.com" 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm"
                      required
                    />
                    <textarea 
                      placeholder="How can I help?" 
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:bg-white/20 transition-all resize-none backdrop-blur-sm"
                      required
                    />
                    <button 
                      type="submit" 
                      className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors w-full sm:w-auto"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
