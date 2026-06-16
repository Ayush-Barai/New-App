'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import FuzzySearch from './FuzzySearch';

export default function HomeHeroSearch() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="max-w-xl mx-auto pt-4">
        <button
          onClick={() => setSearchOpen(true)}
          className="flex w-full items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 px-4 py-3.5 text-slate-400 transition-all text-sm sm:text-base shadow-xl cursor-pointer"
        >
          <Search className="w-5 h-5 text-slate-500" />
          <span className="flex-grow text-left">Search by technology, question, or keyword...</span>
          <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-2 font-mono text-xs text-slate-400">
            Ctrl K
          </kbd>
        </button>
      </div>

      <FuzzySearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
