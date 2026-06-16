import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories } from '../../../data/categories';
import { questions } from '../../../data/questions';
import QuestionsList from '../../../components/QuestionsList';
import JsonLd from '../../../components/JsonLd';
import { ChevronRight, Calendar, BookOpen, Layers, Terminal, AlertCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.title} - PrepHub`,
    description: category.description,
    alternates: {
      canonical: `/interview/${slug}`,
    },
    openGraph: {
      title: `${category.title} - PrepHub`,
      description: category.description,
      url: `https://prephub.vercel.app/interview/${slug}`,
      type: 'article',
      modifiedTime: category.updatedAt,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const catQuestions = questions.filter((q) => q.categorySlug === slug);

  // Split questions by difficulty
  const beginnerQs = catQuestions.filter((q) => q.difficulty === 'Beginner');
  const intermediateQs = catQuestions.filter((q) => q.difficulty === 'Intermediate');
  const advancedQs = catQuestions.filter((q) => q.difficulty === 'Advanced');

  // Related categories
  const relatedCats = categories.filter((c) => category.relatedSlugs.includes(c.slug));

  // --- JSON-LD SCHEMAS ---
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category.title,
        "item": `https://prephub.vercel.app/interview/${slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://prephub.vercel.app/interview/${slug}/#article`,
    "isPartOf": {
      "@id": `https://prephub.vercel.app/interview/${slug}/#webpage`
    },
    "headline": category.title,
    "description": category.description,
    "inLanguage": "en-US",
    "dateModified": category.updatedAt,
    "author": {
      "@type": "Organization",
      "name": "PrepHub"
    },
    "publisher": {
      "@id": "https://prephub.vercel.app/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": category.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd schema={[breadcrumbSchema, articleSchema, faqSchema]} />

      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 flex items-center gap-1.5 font-medium uppercase tracking-wider mb-6">
        <a href="/" className="hover:text-slate-300">Home</a>
        <ChevronRight className="w-3 h-3" />
        <a href="/interview" className="hover:text-slate-300">Interview Directory</a>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-400">{category.title}</span>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-slate-900 pb-10 mb-10 space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {category.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>Updated {category.updatedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>{category.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers className="w-4 h-4" />
            <span>{catQuestions.length} Practice Questions</span>
          </div>
        </div>

        <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          {category.description}
        </p>
      </header>

      {/* Main Grid: Content and Sticky TOC Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
        
        {/* Table of Contents (Desktop Sidebar Left) */}
        <aside className="hidden lg:block lg:col-span-1 sticky top-24 space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-4 space-y-4">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              On This Page
            </h2>
            <nav className="space-y-2 text-xs font-medium text-slate-400">
              <a href="#intro" className="block hover:text-blue-400 transition-colors">Introduction</a>
              <a href="#why-ask" className="block hover:text-blue-400 transition-colors">Why Companies Ask</a>
              <a href="#who-learn" className="block hover:text-blue-400 transition-colors">Who Should Learn</a>
              <a href="#roadmap" className="block hover:text-blue-400 transition-colors">Learning Roadmap</a>
              
              {beginnerQs.length > 0 && (
                <a href="#beginner" className="block hover:text-blue-400 transition-colors pl-2 border-l border-slate-800">Beginner Qs</a>
              )}
              {intermediateQs.length > 0 && (
                <a href="#intermediate" className="block hover:text-blue-400 transition-colors pl-2 border-l border-slate-800">Intermediate Qs</a>
              )}
              {advancedQs.length > 0 && (
                <a href="#advanced" className="block hover:text-blue-400 transition-colors pl-2 border-l border-slate-800">Advanced Qs</a>
              )}
              
              <a href="#faq" className="block hover:text-blue-400 transition-colors">FAQs</a>
              <a href="#related" className="block hover:text-blue-400 transition-colors">Related Topics</a>
            </nav>
          </div>

          {/* Related Technologies Card */}
          {relatedCats.length > 0 && (
            <div className="rounded-xl border border-slate-800 bg-slate-900/20 p-4 space-y-3">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                People Also Study
              </h2>
              <div className="space-y-2">
                {relatedCats.map((rel, idx) => (
                  <a
                    key={idx}
                    href={`/interview/${rel.slug}`}
                    className="flex items-center justify-between text-xs text-slate-400 hover:text-blue-400 transition-colors py-1 group"
                  >
                    <span>{rel.title.replace(" Interview Questions", "")}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Content Body */}
        <section className="lg:col-span-3 space-y-12">
          
          {/* Mobile Quick Navigation (visible only on mobile/tablet) */}
          <div className="lg:hidden rounded-xl border border-slate-900 bg-slate-900/10 p-3.5 flex flex-wrap gap-2 text-xs font-semibold text-slate-400">
            <span className="text-slate-500 py-1">Jump to:</span>
            <a href="#intro" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">Introduction</a>
            <a href="#roadmap" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">Roadmap</a>
            {beginnerQs.length > 0 && (
              <a href="#beginner" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">Beginner</a>
            )}
            {intermediateQs.length > 0 && (
              <a href="#intermediate" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">Intermediate</a>
            )}
            {advancedQs.length > 0 && (
              <a href="#advanced" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">Advanced</a>
            )}
            <a href="#faq" className="hover:text-blue-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 transition-colors">FAQs</a>
          </div>
          
          {/* Introduction */}
          <div id="intro" className="space-y-3 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-200">Introduction</h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {category.introduction}
            </p>
          </div>

          {/* Why Ask & Who Learn Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="why-ask" className="bg-slate-900/30 p-5 rounded-lg border border-slate-900 space-y-2 scroll-mt-24">
              <h3 className="font-semibold text-slate-300 flex items-center gap-2 text-sm sm:text-base">
                <Terminal className="w-4 h-4 text-blue-500" />
                Why Interviewers Ask This
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {category.whyAsk}
              </p>
            </div>

            <div id="who-learn" className="bg-slate-900/30 p-5 rounded-lg border border-slate-900 space-y-2 scroll-mt-24">
              <h3 className="font-semibold text-slate-300 flex items-center gap-2 text-sm sm:text-base">
                <BookOpen className="w-4 h-4 text-purple-500" />
                Who Should Master This
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {category.whoLearn}
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div id="roadmap" className="space-y-4 bg-slate-900/20 p-6 rounded-xl border border-slate-800 scroll-mt-24">
            <h2 className="text-lg sm:text-xl font-bold text-slate-200">Recommended Learning Roadmap</h2>
            <ol className="space-y-3">
              {category.roadmap.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-400">
                  <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-blue-500/20">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Questions Sections */}
          <div className="space-y-8">
            <QuestionsList questions={catQuestions} />
          </div>

          {/* FAQs Accordion */}
          <div id="faq" className="space-y-4 scroll-mt-24">
            <h2 className="text-lg sm:text-xl font-bold text-slate-200">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {category.faq.map((item, idx) => (
                <details 
                  key={idx} 
                  className="group rounded-lg border border-slate-800 bg-slate-900/30 p-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                      {item.question}
                    </span>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed border-t border-slate-800/50 pt-3">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Mobile Related Categories (visible only on mobile) */}
          {relatedCats.length > 0 && (
            <div id="related" className="lg:hidden rounded-xl border border-slate-800 bg-slate-900/20 p-4 space-y-3 scroll-mt-24">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                People Also Study
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {relatedCats.map((rel, idx) => (
                  <a
                    key={idx}
                    href={`/interview/${rel.slug}`}
                    className="flex items-center justify-between text-xs text-slate-400 hover:text-blue-400 transition-colors py-1 group border border-slate-800 p-2 rounded"
                  >
                    <span>{rel.title.replace(" Interview Questions", "")}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-blue-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}
