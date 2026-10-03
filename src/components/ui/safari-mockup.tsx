import React from "react";
import { cn } from "@/lib/utils";

export const SafariMockup = ({
  children,
  url = "app.powerbi.com/view?r=...",
  className,
}: {
  children: React.ReactNode;
  url?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-700/50 bg-[#0A0A0A] shadow-2xl shadow-black",
        className
      )}
    >
      {/* Browser Bar */}
      <div className="flex items-center px-4 py-3 bg-[#1A1A1A] border-b border-slate-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex h-6 max-w-md items-center justify-center rounded-md bg-[#2A2A2A] px-4 text-[10px] text-slate-400 font-mono tracking-widest w-full">
          {url}
        </div>
        {/* Placeholder to balance the traffic lights */}
        <div className="w-12"></div>
      </div>
      
      {/* Browser Content */}
      <div className="relative w-full bg-[#111111] overflow-hidden">
        {children}
      </div>
    </div>
  );
};
