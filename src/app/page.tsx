'use client';

import React, { useState } from 'react';
import { 
  Search, Atom, FileCode, ShieldAlert, Layers, Server, 
  Database, Code2, Palette, GitBranch, Cloud, GitCommit, 
  Users, ArrowRight, BookOpen, Sparkles, TrendingUp 
} from 'lucide-react';
import { categories } from '../data/categories';
import FuzzySearch from '../components/FuzzySearch';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Map icon strings to Lucide components
  const iconMap: Record<string, React.ComponentType<any>> = {
    Atom: Atom,
    FileCode: FileCode,
    ShieldAlert: ShieldAlert,
    Layers: Layers,
    Server: Server,
    Database: Database,
    Code2: Code2,
    Palette: Palette,
    GitBranch: GitBranch,
    Cloud: Cloud,
    GitCommit: GitCommit,
    Users: Users
  };

  const trendingTopics = [
    { title: "React 19 Server Actions", url: "/interview/react#react-1" },
    { title: "JavaScript Event Loop", url: "/interview/javascript#js-2" },
    { title: "System Design Rate Limiting", url: "/interview/sysdesign#sysdesign-1" },
    { title: "Next.js SSR vs SSG vs ISR", url: "/interview/nextjs#next-1" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-900 py-24 sm:py-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
        
        {/* Colorful Glows */}
        <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-20 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Updated for React 19 & Next.js 15</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-3xl mx-auto leading-none">
            Master Technical Interviews with Curated Q&As
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed">
            High-quality questions, in-depth explanations, code snippets, and behavioral tips designed to help you land your dream tech job.
          </p>

          {/* Hero Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex w-full items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 px-4 py-3.5 text-slate-400 transition-all text-sm sm:text-base shadow-xl"
            >
              <Search className="w-5 h-5 text-slate-500" />
              <span className="flex-grow text-left">Search by technology, question, or keyword...</span>
              <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-0.5 rounded border border-slate-700 bg-slate-800 px-2 font-mono text-xs text-slate-400">
                Ctrl K
              </kbd>
            </button>
          </div>

          {/* Trending keywords */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-slate-500 pt-2">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
              Trending:
            </span>
            {trendingTopics.map((topic, idx) => (
              <a 
                key={idx} 
                href={topic.url}
                className="text-slate-400 hover:text-blue-400 hover:underline transition-colors"
              >
                {topic.title}
                {idx < trendingTopics.length - 1 && <span className="text-slate-700 ml-2">•</span>}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Categories Grid Section */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Choose Your Learning Path
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Deep dive into dedicated interview modules, each with structured difficulty questions and explanations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <a
                key={idx}
                href={`/interview/${cat.slug}`}
                className="group relative rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/90 hover:border-slate-700 transition-all p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/[0.02]"
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-blue-500/5 text-blue-400 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-slate-950 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mt-6 group-hover:text-blue-300 transition-colors">
                  <span>Start Learning</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Roadmaps section */}
      <section className="border-t border-slate-900 py-20 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Roadmap Guide</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Structured Roadmaps to Accelerate Your Preparation
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Don&apos;t just memorize answers. Learn in a logical sequence. Our modules feature step-by-step roadmaps starting from core fundamentals (ES6+ closures, HTTP protocols) up to advanced architectural patterns (caching strategies, React Concurrent Suspense, system sharding).
            </p>
            <div className="pt-2">
              <a 
                href="/interview"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 text-sm transition-colors shadow-lg shadow-blue-500/20"
              >
                <span>Browse All Roadmaps</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Graphical Mockup */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-sm font-semibold text-slate-300">Sample Learning Node: React</span>
              <span className="text-[10px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">Step 3 of 6</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Modern JS Essentials</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Closures, callbacks, scoping, execution contexts</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">React Components & State</h4>
                  <p className="text-xs text-slate-500 mt-0.5">JSX compilations, props immutability, batched state updates</p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-blue-500 pl-4 py-1">
                <div className="w-6 h-6 rounded-full bg-blue-500 text-slate-950 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-400">Mastering Hooks</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Caching with useMemo/useCallback, managing effects</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Search trigger for Cmd+K */}
      <FuzzySearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

    </div>
  );
}
