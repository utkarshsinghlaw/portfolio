"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    // Anchored to Top-Left, brutalist style
    <div className={cn("fixed top-24 left-8 md:top-32 md:left-12 z-[60]", className)}>
      <motion.div
        className="flex flex-col items-start gap-6 bg-transparent"
      >
        {items.map((item) => (
          <IconContainer key={item.title} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

function IconContainer({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="group relative flex items-center">
      <motion.div
        whileHover={{ x: 10 }} // Slide right slightly instead of scaling up
        className="text-[#111] font-serif italic font-black text-2xl md:text-3xl transition-colors hover:text-[#555]"
      >
        {icon}
      </motion.div>
      {/* Tooltip appearing to the right */}
      <div className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#111] text-xs font-mono tracking-widest uppercase pointer-events-none whitespace-nowrap">
        {title}
      </div>
    </Link>
  );
}
