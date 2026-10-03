"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
  src,
  showGradient,
  children,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  children?: React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 1.5]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translateZ = useTransform(scrollYProgress, [0, 0.3], [1, 2]);
  const translateZMobile = useTransform(scrollYProgress, [0, 0.3], [1, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3], [25, 0]);

  return (
    <div
      ref={ref}
      className="min-h-[150vh] flex flex-col items-center py-0 md:py-40 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.6] sm:scale-50"
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          scaleX,
          scaleY,
          translateZ: isMobile ? translateZMobile : translateZ,
        }}
        className="relative mt-24 md:mt-0"
      >
        <MacbookLid src={src} children={children} />
        <MacbookBase badge={badge} />
      </motion.div>
    </div>
  );
};

const MacbookLid = ({
  src,
  children,
}: {
  src?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative w-[32rem] md:w-[40rem] h-[20rem] md:h-[26rem] bg-slate-900 rounded-t-3xl border-4 border-slate-700 overflow-hidden mx-auto">
      {/* Screen Gloss */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-50" />
      {/* Camera */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black/50 border border-slate-800 z-50 flex items-center justify-center">
        <div className="w-1 h-1 rounded-full bg-blue-500/50" />
      </div>
      {/* Dynamic Screen Content */}
      <div className="w-full h-full relative z-10 bg-black">
        {src ? (
          <img
            src={src}
            alt="Screen content"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

const MacbookBase = ({ badge }: { badge?: React.ReactNode }) => {
  return (
    <div className="relative w-[34rem] md:w-[44rem] h-[16rem] md:h-[20rem] bg-slate-200 dark:bg-[#111111] rounded-b-3xl -mx-4 md:-mx-8 border border-slate-300 dark:border-slate-800 flex flex-col items-center pt-2 shadow-2xl">
      <div className="w-[80%] h-[70%] bg-slate-300 dark:bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-slate-400 dark:border-slate-800 p-2">
        <div className="w-full h-full grid grid-cols-12 grid-rows-6 gap-1 opacity-50">
          {/* Simple Mock Keyboard Grid */}
          {Array.from({ length: 72 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "bg-slate-400 dark:bg-black rounded-sm border border-slate-500 dark:border-slate-800",
                i === 70 ? "col-span-5" : ""
              )}
            />
          ))}
        </div>
      </div>
      <div className="w-[30%] h-[20%] mt-2 bg-slate-300 dark:bg-[#1a1a1a] rounded-md border border-slate-400 dark:border-slate-800" />
      {badge && (
        <div className="absolute bottom-4 right-4 text-xs text-slate-500">
          {badge}
        </div>
      )}
    </div>
  );
};
