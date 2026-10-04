import Link from "next/link";
import { bioContent } from "@/data/content";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import RetroGrid from "@/components/ui/retro-grid";
import { ShimmerButton } from "@/components/ui/shimmer-button";
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
    title: "AI Engineering Automation",
    description: "Multi-agent RAG pipelines and autonomous legal research tools.",
    header: <AIEngineeringPreview />,
    icon: <BrainCircuit className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    href: "/portfolio/ai-engineering-automation"
  },
  {
    title: "Thought Leadership",
    description: "Deep-dives into AI product strategy, legal ops, and tech ROI.",
    header: <ThoughtLeadershipPreview />,
    icon: <PenTool className="h-4 w-4 text-[#051c2c] dark:text-neutral-500" />,
    href: "/portfolio/thought-leadership"
  }
];

export default function Home() {
  return (
    // Applying "dark" class directly to force the Premium Dark Mode shell
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] selection:bg-indigo-500/30 overflow-hidden relative z-10">
      <RetroGrid />
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Bio & Sticky CTA */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col h-full space-y-8">
            <header>
              <BlurFade delay={0.1}>
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-900/30 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
                  {bioContent.eyebrow}
                </div>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  Utkarsh Singh
                </h1>
              </BlurFade>
              <BlurFade delay={0.3}>
                <h2 className="text-lg md:text-xl text-indigo-400 font-medium leading-relaxed">
                  {bioContent.headline}
                </h2>
              </BlurFade>
            </header>

            <section className="space-y-4 text-base md:text-lg leading-relaxed text-slate-400">
              {bioContent.paragraphs.map((paragraph, index) => (
                <BlurFade delay={0.4 + index * 0.1} key={index}>
                  <p>{paragraph}</p>
                </BlurFade>
              ))}
            </section>

            <BlurFade delay={0.7} className="pt-4 mt-auto space-y-6">
              <div className="flex flex-col space-y-4">
                <a href="#contact" className="w-full sm:w-auto">
                  <ShimmerButton className="w-full text-sm font-semibold shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                      Let's Talk
                    </span>
                  </ShimmerButton>
                </a>
                <p className="text-xs text-slate-500 font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse" />
                  Managed A£XM in commercial portfolios & resolved complex regulatory disputes.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                <a href="/cv.pdf" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">Download CV</a>
                <span className="text-slate-700">|</span>
                <a href="https://linkedin.com/in/utkarsh-singh-630a88311" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1E293B] border border-[#334155] text-slate-400 hover:text-indigo-400 transition-all">
                  <FaLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://github.com/utkarshsinghlaw" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1E293B] border border-[#334155] text-slate-400 hover:text-indigo-400 transition-all">
                  <FaGithub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </BlurFade>
          </div>

          {/* RIGHT COLUMN: The Scrolling Projects */}
          <div id="pillars" className="lg:col-span-8 space-y-12">
            
            {/* Context Forge */}
            <BlurFade delay={0.3}>
              <section>
                <Link href="/portfolio/personal-software" className="block group">
                  <div className="relative overflow-hidden rounded-3xl bg-[#1E293B] border border-[#334155] shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300">
                    <ContextForgePreview />
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Code2 className="w-5 h-5 text-indigo-500" />
                          <span className="text-sm font-medium text-indigo-500 uppercase tracking-wider">Flagship Software</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Context Forge</h3>
                      <p className="text-slate-400">
                        A local knowledge management OS with secure RAG architecture built for professionals. 
                        One computer, many worlds.
                      </p>
                    </div>
                  </div>
                </Link>
              </section>
            </BlurFade>

            {/* Magic Bento Grid */}
            <BlurFade delay={0.4}>
              <section>
                <h3 className="text-xl font-semibold text-white mb-6">More Work</h3>
                <BentoGrid className="max-w-none">
                  {secondaryPillars.map((item, i) => (
                    <Link href={item.href} key={i} className="block hover:-translate-y-1 transition-transform duration-200">
                      <BentoGridItem
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className="h-full bg-[#1E293B] border border-[#334155] hover:border-indigo-500/50 text-white shadow-xl hover:shadow-indigo-500/20"
                      />
                    </Link>
                  ))}
                </BentoGrid>
              </section>
            </BlurFade>

            {/* Contact Card */}
            <BlurFade delay={0.5}>
              <section id="contact" className="pt-12 scroll-mt-24">
                <div className="bg-indigo-900/50 rounded-3xl p-8 md:p-12 border border-indigo-500/30 shadow-2xl relative overflow-hidden backdrop-blur-md">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  
                  <div className="relative z-10 max-w-lg">
                    <h3 className="text-3xl font-bold text-white mb-4">Let's build together.</h3>
                    <p className="text-indigo-200 mb-8">
                      Whether you need to discuss product management, legal operations, or architecting AI agents—drop me a line.
                    </p>
                    
                    <form action="https://formsubmit.co/utkarshsinghlaw@gmail.com" method="POST" className="space-y-4">
                      <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
                      <input type="hidden" name="_template" value="table" />
                      <input type="hidden" name="_captcha" value="false" />
                      
                      <input 
                        type="email" 
                        name="email"
                        placeholder="hello@company.com" 
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-400 focus:bg-black/60 transition-all backdrop-blur-sm"
                        required
                      />
                      <textarea 
                        name="message"
                        placeholder="How can I help?" 
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-indigo-300 focus:outline-none focus:border-indigo-400 focus:bg-black/60 transition-all resize-none backdrop-blur-sm"
                        required
                      />
                      <button 
                        type="submit" 
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors w-full sm:w-auto hover:scale-105"
                      >
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </BlurFade>

          </div>
        </div>
      </main>
    </div>
  );
}
