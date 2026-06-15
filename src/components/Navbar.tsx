'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Code2, BookOpen } from 'lucide-react';
import FuzzySearch from './FuzzySearch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2 text-white font-bold text-lg tracking-tight hover:opacity-95 transition-opacity">
                <Code2 className="w-6 h-6 text-blue-500" />
                <span>Prep<span className="text-blue-500">Hub</span></span>
              </a>
            </div>

            {/* Navigation links - Desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="/interview" className="hover:text-blue-400 transition-colors">All Topics</a>
              <a href="/interview/react" className="hover:text-blue-400 transition-colors">React</a>
              <a href="/interview/javascript" className="hover:text-blue-400 transition-colors">JavaScript</a>
              <a href="/interview/sysdesign" className="hover:text-blue-400 transition-colors">System Design</a>
              <a href="/interview/hr" className="hover:text-blue-400 transition-colors">HR & Behavioral</a>
            </nav>

            {/* Search Bar & Mobile Nav */}
            <div className="flex items-center gap-3 flex-1 justify-end max-w-md md:flex-initial">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex w-full items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-400 hover:text-slate-300 hover:border-slate-700 transition-all text-sm max-w-[220px]"
              >
                <Search className="w-4 h-4" />
                <span className="flex-grow text-left">Search...</span>
                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-1.5 font-mono text-[10px] font-medium text-slate-400">
                  <span>Ctrl</span>K
                </kbd>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-slate-200 md:hidden transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 animate-fade-in">
            <div className="space-y-1 px-4 py-3 text-sm font-medium">
              <a
                href="/interview"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                All Interview Topics
              </a>
              <a
                href="/interview/react"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                React Questions
              </a>
              <a
                href="/interview/javascript"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                JavaScript Questions
              </a>
              <a
                href="/interview/sysdesign"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                System Design Questions
              </a>
              <a
                href="/interview/hr"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-white"
              >
                HR & Behavioral Questions
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <FuzzySearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
