'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, MessageSquare, Terminal, ChevronRight } from 'lucide-react';
import { categories } from '../data/categories';
import { questions } from '../data/questions';
import { Question } from '../types';

interface FuzzySearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FuzzySearch({ isOpen, onClose }: FuzzySearchProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ type: 'category' | 'question'; title: string; subtitle?: string; url: string }[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Perform basic fuzzy search
  useEffect(() => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
      // Show default recommendations (popular categories)
      const defaultRecs = categories.slice(0, 5).map(c => ({
        type: 'category' as const,
        title: c.title,
        subtitle: c.description,
        url: `/interview/${c.slug}`
      }));
      setResults(defaultRecs);
      setSelectedIndex(0);
      return;
    }

    const matchedCategories = categories
      .filter(c => 
        c.title.toLowerCase().includes(cleanQuery) || 
        c.slug.toLowerCase().includes(cleanQuery) ||
        c.keywords.some(k => k.toLowerCase().includes(cleanQuery))
      )
      .map(c => ({
        type: 'category' as const,
        title: c.title,
        subtitle: `${c.readingTime} • ${c.description.substring(0, 60)}...`,
        url: `/interview/${c.slug}`
      }));

    const matchedQuestions = questions
      .filter(q => 
        q.question.toLowerCase().includes(cleanQuery) ||
        q.answer.toLowerCase().includes(cleanQuery) ||
        q.explanation.toLowerCase().includes(cleanQuery)
      )
      .map(q => {
        const cat = categories.find(c => c.slug === q.categorySlug);
        return {
          type: 'question' as const,
          title: q.question,
          subtitle: `${cat?.title || q.categorySlug} • ${q.difficulty}`,
          url: `/interview/${q.categorySlug}#${q.id}`
        };
      });

    setResults([...matchedCategories, ...matchedQuestions].slice(0, 10));
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard Navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, results.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + results.length) % Math.max(1, results.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          router.push(results[selectedIndex].url);
          onClose();
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, results, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        ref={modalRef}
        className="w-full max-w-2xl overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/50"
      >
        {/* Search Input */}
        <div className="relative flex items-center border-b border-slate-800 p-4">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base"
            placeholder="Search categories, questions, or concepts... (Arrow keys, Enter)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-1 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[350px] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {query ? 'Search Results' : 'Popular Topics'}
              </div>
              {results.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    router.push(item.url);
                    onClose();
                  }}
                  className={`flex items-start p-3 rounded-lg cursor-pointer transition-all ${
                    index === selectedIndex
                      ? 'bg-blue-600/10 border-l-4 border-blue-500 pl-2 text-white'
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  {item.type === 'category' ? (
                    <Terminal className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${index === selectedIndex ? 'text-blue-400' : 'text-slate-400'}`} />
                  ) : (
                    <MessageSquare className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${index === selectedIndex ? 'text-emerald-400' : 'text-slate-400'}`} />
                  )}
                  <div className="flex-grow min-w-0">
                    <div className="font-medium truncate text-sm sm:text-base">
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="text-xs text-slate-400 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    )}
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 self-center ml-2 ${index === selectedIndex ? 'text-slate-300' : 'text-slate-600'}`} />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-slate-500">
              <p className="text-sm">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs mt-1 text-slate-600">Try searching for keywords like &quot;React&quot;, &quot;closure&quot;, or &quot;STAR&quot;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
