"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg text-[#051c2c] dark:text-white tracking-tight hover:opacity-80 transition-opacity">
          Utkarsh Singh
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#051c2c] dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#pillars" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#051c2c] dark:hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#051c2c] dark:hover:text-white transition-colors">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
