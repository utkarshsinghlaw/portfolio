"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MockTerminalProps {
  lines: string[];
  className?: string;
}

export function MockTerminal({ lines, className }: MockTerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, [lines]);

  return (
    <div className={cn("rounded-xl overflow-hidden border border-slate-800 bg-[#0A0A0A] shadow-2xl", className)}>
      <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-[#111]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto text-xs text-slate-500 font-mono tracking-wider">agent-terminal ~ zsh</div>
      </div>
      <div className="p-4 font-mono text-sm text-green-400 space-y-2 h-[300px] overflow-y-auto">
        {displayedLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={line.startsWith(">") ? "text-slate-300" : "text-green-400"}
          >
            {line}
          </motion.div>
        ))}
        {displayedLines.length < lines.length && (
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-green-400 inline-block align-middle"
          />
        )}
      </div>
    </div>
  );
}
