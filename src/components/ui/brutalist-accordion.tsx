"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  category: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ title, category, children, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className="border-b-[1.5px] border-black">
      <button
        onClick={onClick}
        className="w-full flex items-baseline justify-between py-6 text-left group hover:bg-black/5 transition-colors px-4 -mx-4"
      >
        <span className="text-3xl md:text-5xl font-bold tracking-tighter text-[#111] group-hover:pl-2 transition-all duration-300">
          {title}
        </span>
        <span className="text-sm font-mono text-[#111] uppercase tracking-widest hidden md:block">
          {category}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-12 pt-4 px-0 max-w-4xl">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const BrutalistAccordion = ({
  items,
}: {
  items: { id: string; title: string; category: string; content: React.ReactNode }[];
}) => {
  // Array of open IDs to support multiple open simultaneously
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full border-t-[1.5px] border-black">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          category={item.category}
          isOpen={openItems.includes(item.id)}
          onClick={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};
