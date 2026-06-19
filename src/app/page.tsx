import React from 'react';
import type { Metadata } from 'next';
import { 
  Atom, FileCode, ShieldAlert, Layers, Server, 
  Database, Code2, Palette, GitBranch, Cloud, GitCommit, 
  Users, ArrowRight, BookOpen, Sparkles, TrendingUp,
  Coffee, Terminal, Globe, Network, Compass, Calendar
} from 'lucide-react';
import { categories } from '../data/categories';
import HomeHeroSearch from '../components/HomeHeroSearch';

export const metadata: Metadata = {
  title: "Software Engineer Interview Preparation: Coding & Technical Interview Questions | PrepHub",
  description: "Master software engineer interview preparation with our comprehensive database of technical interview questions, coding interview questions, programming questions, system design guides, and HR templates.",
  keywords: [
    "Technical Interview Questions",
    "Programming Interview Questions",
    "Software Engineer Interview Preparation",
    "Coding Interview Questions",
    "React Interview Questions",
    "Java Interview Questions",
    "Node.js Interview Questions",
    "JavaScript Interview Questions",
    "Python Interview Questions",
    "SQL Interview Questions",
    "System Design Interview Questions",
    "HR Interview Questions"
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {

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
    Users: Users,
    Coffee: Coffee,
    Terminal: Terminal,
    Globe: Globe,
    Network: Network,
    Compass: Compass,
    TrendingUp: TrendingUp
  };

  const trendingTopics = [
    { title: "React 19 Server Actions", url: "/interview/react#react-1" },
    { title: "JavaScript Event Loop", url: "/interview/javascript#js-2" },
    { title: "System Design Rate Limiting", url: "/interview/sysdesign#sysdesign-1" },
    { title: "Next.js SSR vs SSG vs ISR", url: "/interview/nextjs#next-1" },
  ];

  // Slugs for the 8 core popular categories as required by Step 5
  const popularSlugs = ["react", "java", "nodejs", "javascript", "python", "sql", "sysdesign", "hr"];
  
  // Get popular categories in the exact order requested
  const popularCategories = popularSlugs
    .map(slug => categories.find(c => c.slug === slug))
    .filter(Boolean);

  // Get recently updated categories from the rest
  const remainingCategories = categories.filter(c => !popularSlugs.includes(c.slug));
  const recentlyUpdated = remainingCategories.slice(0, 4); // Select a few other categories as recently updated

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

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
            Software Engineer Interview Preparation: Coding & Technical Interview Questions Hub
          </h1>

          <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Welcome to PrepHub, the premier resource for software engineer interview preparation. Master coding interview questions, programming interview questions, system design patterns, and behavioral templates with comprehensive, expert-authored Q&As.
          </p>

          {/* Hero Search Box */}
          <HomeHeroSearch />

          {/* Trending keywords */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-slate-500 pt-2">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
              Trending Topics:
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

      {/* Popular Interview Categories Grid Section (Step 5) */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Popular Interview Categories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Deep dive into our highly requested interview preparation guides containing structured questions, detailed answers, and code examples.
          </p>
        </div>

        {/* Grid of the 8 required popular pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCategories.map((cat, idx) => {
            if (!cat) return null;
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
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
                      {cat.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold mt-6 group-hover:text-blue-300 transition-colors">
                  <span>Explore Questions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Featured Interview Topics Section (Step 6) */}
      <section className="py-16 border-t border-slate-900 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Featured Interview Topics
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Master complex conceptual and scenario-based coding challenges frequently asked by top tech employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 space-y-4">
              <span className="text-[10px] font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">React 19 & Next.js 15</span>
              <h3 className="text-lg font-bold text-white">React 19 Server Actions & Rendering</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Understand how Server Actions bridge client interactivity with server-side executions. Learn how Next.js handles App Router dynamic segments and server components with zero client JavaScript overhead.
              </p>
              <a href="/interview/react#react-1" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                Read Q&A <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 space-y-4">
              <span className="text-[10px] font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">System Architecture</span>
              <h3 className="text-lg font-bold text-white">Distributed Systems Rate Limiting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Learn to design highly scalable, fault-tolerant rate-limiting middleware using Redis, token buckets, and sliding window logs. Discover key architectural trade-offs between accuracy and database read latencies.
              </p>
              <a href="/interview/sysdesign#sysdesign-1" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                Read Q&A <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 space-y-4">
              <span className="text-[10px] font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Core Javascript</span>
              <h3 className="text-lg font-bold text-white">Event Loop & Call Stack Execution</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Master the synchronous execution call stack, asynchronous event loop queue, microtask prioritization, and garbage collection mechanisms within the Chrome V8 browser engine runtime.
              </p>
              <a href="/interview/javascript#js-2" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                Read Q&A <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 space-y-4">
              <span className="text-[10px] font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Database Concurrency</span>
              <h3 className="text-lg font-bold text-white">SQL Joins & Indexing Query Optimization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Learn how relational database engines perform index lookups, B-Tree traversals, inner vs outer joins, and analyze execution plans using commands like `EXPLAIN ANALYZE` for backend scalability.
              </p>
              <a href="/interview/sql#sql-1" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                Read Q&A <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recently Updated Technologies Section (Step 6) */}
      <section className="py-16 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Recently Updated Modules
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                We continuously refresh our database to keep up with runtime updates, framework versions, and corporate coding guidelines.
              </p>
            </div>
            <a 
              href="/interview" 
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group whitespace-nowrap"
            >
              Browse All Topics <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentlyUpdated.map((cat, idx) => {
              if (!cat) return null;
              const IconComponent = iconMap[cat.icon] || Code2;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-slate-900 bg-slate-900/10 p-5 space-y-4 hover:border-slate-800 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-slate-900 text-blue-400 border border-slate-800">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Updated {cat.updatedAt}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200">{cat.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                  <a 
                    href={`/interview/${cat.slug}`} 
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    View Q&As <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              );
            })}
          </div>
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

      {/* Internal Links to Major Pages / Sitemap Directory Section (Step 6) */}
      <section className="py-16 border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-lg font-bold text-slate-200 uppercase tracking-wider">All Technical Interview Preparation Modules</h2>
            <p className="text-xs text-slate-500">Quick link sitemap of individual interview topics indexable by search engine web crawlers.</p>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat, idx) => (
              <a 
                key={idx}
                href={`/interview/${cat.slug}`}
                className="text-xs bg-slate-900 border border-slate-800 hover:border-blue-500/30 hover:text-blue-400 px-3.5 py-2 rounded-lg transition-all"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
