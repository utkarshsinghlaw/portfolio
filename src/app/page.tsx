import Link from "next/link";
import { bioContent } from "@/data/content";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  BarChart3, 
  BrainCircuit, 
  PenTool, 
  Code2,
  Mail
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const pillars = [
  {
    title: "BI Case Studies",
    description: "The UK Drinkable Water Dashboard & Legal Tech ROI analysis showcasing macro-ops thinking.",
    header: <div className="w-full h-32 shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500" />,
    icon: <BarChart3 className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    className: "",
  },
  {
    title: "AI Engineering & Automation",
    description: "Architecting custom AI agents (data-scout, stats-validator) and the ai-agent-toolkit.",
    header: <div className="w-full h-32 shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500" />,
    icon: <BrainCircuit className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    className: "",
  },
  {
    title: "Thought Leadership",
    description: "Translating statistical risk and AI implementation strategies for non-technical stakeholders.",
    header: <div className="w-full h-32 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500" />,
    icon: <PenTool className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    className: "",
  },
  {
    title: "Personal Software",
    description: "Context Forge: A local knowledge management OS with secure RAG architecture for professionals.",
    header: <div className="w-full h-32 shrink-0 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500" />,
    icon: <Code2 className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    className: "",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-[#051c2c] dark:text-slate-200 font-sans transition-colors duration-300 selection:bg-indigo-500/30">
      <main className="flex flex-col items-center p-8 md:p-16">
        <div className="max-w-5xl space-y-16 w-full">
          
          {/* Hero Banner Section */}
          <header id="about" className="relative overflow-hidden rounded-3xl bg-blue-50 dark:bg-[#051c2c] border border-blue-100 dark:border-blue-900 p-8 md:p-16 shadow-sm">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-700/20 dark:to-indigo-700/20 blur-3xl opacity-50 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#051c2c] dark:text-white tracking-tight">
                Utkarsh Singh
              </h1>
              <h2 className="text-xl md:text-3xl text-indigo-700 dark:text-indigo-400 font-medium max-w-2xl">
                {bioContent.headline}
              </h2>
              
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://linkedin.com/in/utkarsh-singh-630a88311" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#0a2940] text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/utkarshsinghlaw" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white dark:bg-[#0a2940] text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="mailto:utkarshsinghlaw@gmail.com" className="p-2 rounded-full bg-white dark:bg-[#0a2940] text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </div>
          </header>

          <section className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 max-w-3xl px-4 md:px-0">
            {bioContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section id="pillars" className="pt-16 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-3xl font-semibold text-[#051c2c] dark:text-white mb-10 px-4 md:px-0">The Four Pillars</h3>
            <BentoGrid className="max-w-5xl">
              {pillars.map((item, i) => (
                <Link href={`/portfolio/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={i} className="block hover:-translate-y-1 transition-transform duration-200">
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={item.className + " h-full bg-slate-50 border-slate-200 text-[#051c2c] dark:bg-slate-900 dark:border-slate-800 dark:text-white cursor-pointer"}
                  />
                </Link>
              ))}
            </BentoGrid>
          </section>

          <section id="contact" className="pt-16 pb-16 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h3 className="text-3xl font-semibold text-[#051c2c] dark:text-white">Get in Touch</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Whether you're looking to discuss product management, legal operations, or AI engineering, I'm always open to a conversation.
              </p>
              <form className="flex flex-col space-y-4 text-left">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-[#051c2c] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  required
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-[#051c2c] dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-[#051c2c] dark:bg-white text-white dark:text-[#051c2c] font-semibold hover:bg-indigo-700 dark:hover:bg-slate-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
