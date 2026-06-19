import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../data/categories';
import { questions } from '../../data/questions';
import { Terminal, Database, Users, ChevronRight } from 'lucide-react';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: "All Technical & Coding Interview Topics | PrepHub",
  description: "Browse our comprehensive directory of programming and technical interview questions grouped by domains: Frontend, Backend, Databases, Systems, and behavioral skills.",
  keywords: [
    "Technical Interview Questions",
    "Coding Interview Questions",
    "Programming Interview Questions",
    "Software Engineer Preparation"
  ],
  alternates: {
    canonical: "/interview",
  },
};

export default function InterviewDirectoryPage() {
  // Group categories by domain
  const domains = [
    {
      name: "Frontend Development",
      description: "Libraries, frameworks, and core browser styling technologies.",
      icon: Terminal,
      slugs: ["react", "javascript", "typescript", "nextjs", "html", "css", "tailwind-css", "bootstrap"]
    },
    {
      name: "Backend & Cloud",
      description: "Server frameworks, caching systems, cloud deployment, and system architecture.",
      icon: Database,
      slugs: ["nodejs", "expressjs", "rest-api", "graphql", "redis", "sql", "mongodb", "postgresql", "mysql", "aws", "azure", "docker", "kubernetes", "linux", "sysdesign", "dbms"]
    },
    {
      name: "Core CS & Soft Skills",
      description: "Algorithms, data structures, version control, OOP, aptitude, and behavioral alignment.",
      icon: Users,
      slugs: ["dsa", "algorithms", "oop", "os", "networks", "git", "github", "python", "java", "c", "cpp", "hr", "behavioral", "aptitude"]
    }
  ];

  // Schema data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://prephub.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Interview Directory",
        "item": "https://prephub.vercel.app/interview"
      }
    ]
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      <JsonLd schema={breadcrumbSchema} />
      
      {/* Page Header */}
      <div className="space-y-3 border-b border-slate-900 pb-8">
        <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium uppercase tracking-wider">
          <a href="/" className="hover:text-slate-300">Home</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-400">Interview Directory</span>
        </nav>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          All Interview Topics
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Select a category below to explore curated interview questions and structural answers compiled by senior engineers.
        </p>
      </div>

      {/* Domain Directories */}
      <div className="space-y-12">
        {domains.map((domain, domainIdx) => {
          const DomainIcon = domain.icon;
          const domainCategories = categories.filter(c => domain.slugs.includes(c.slug));

          return (
            <section key={domainIdx} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                  <DomainIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-200">{domain.name}</h2>
                  <p className="text-xs text-slate-500">{domain.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {domainCategories.map((cat, catIdx) => {
                  const qCount = questions.filter(q => q.categorySlug === cat.slug).length;

                  return (
                    <a
                      key={catIdx}
                      href={`/interview/${cat.slug}`}
                      className="group p-5 rounded-lg border border-slate-900 bg-slate-900/20 hover:bg-slate-900/60 hover:border-slate-800 transition-all flex items-center justify-between"
                    >
                      <div className="space-y-1.5 min-w-0 pr-4">
                        <h3 className="font-semibold text-slate-300 group-hover:text-blue-400 transition-colors truncate">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {cat.description}
                        </p>
                        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                          {qCount} Questions • {cat.readingTime}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-700 group-hover:text-slate-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

    </div>
  );
}
