'use client';

import React, { useState } from 'react';
import { Code2, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Upper section: Grid links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & Org */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Code2 className="w-6 h-6 text-blue-500" />
              <span>PrepHub</span>
            </div>
            <p className="max-w-xs text-slate-500 leading-relaxed">
              Curating high-quality technical and behavioral interview questions to help you land your dream software engineering role.
            </p>
            
            {/* Newsletter CTA */}
            <form onSubmit={handleSubscribe} className="space-y-2 max-w-xs pt-2">
              <label htmlFor="newsletter-email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Subscribe to Interview Tips
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-md px-3 py-1.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors flex-shrink-0 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-emerald-500 text-xs mt-1">Thanks for subscribing!</p>
              )}
            </form>
          </div>

          {/* Column 2: Frontend */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li><a href="/interview/react" className="hover:text-blue-400 transition-colors">ReactJS</a></li>
              <li><a href="/interview/javascript" className="hover:text-blue-400 transition-colors">JavaScript</a></li>
              <li><a href="/interview/typescript" className="hover:text-blue-400 transition-colors">TypeScript</a></li>
              <li><a href="/interview/nextjs" className="hover:text-blue-400 transition-colors">Next.js</a></li>
              <li><a href="/interview/html" className="hover:text-blue-400 transition-colors">HTML & CSS</a></li>
            </ul>
          </div>

          {/* Column 3: Backend & Sys */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-4">Backend & Cloud</h3>
            <ul className="space-y-2">
              <li><a href="/interview/nodejs" className="hover:text-blue-400 transition-colors">Node.js</a></li>
              <li><a href="/interview/sql" className="hover:text-blue-400 transition-colors">SQL Databases</a></li>
              <li><a href="/interview/sysdesign" className="hover:text-blue-400 transition-colors">System Design</a></li>
              <li><a href="/interview/aws" className="hover:text-blue-400 transition-colors">AWS Cloud</a></li>
              <li><a href="/interview/git" className="hover:text-blue-400 transition-colors">Git VCS</a></li>
            </ul>
          </div>

          {/* Column 4: Behavioral */}
          <div>
            <h3 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              <li><a href="/interview/hr" className="hover:text-blue-400 transition-colors">HR Interview</a></li>
              <li><a href="/interview/hr#behavioral" className="hover:text-blue-400 transition-colors">Behavioral STAR</a></li>
              <li><a href="/interview/hr#tips" className="hover:text-blue-400 transition-colors">Interview Tips</a></li>
            </ul>
          </div>

        </div>

        {/* Lower section: Copyright and sitemap link */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PrepHub. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="/sitemap.xml" className="hover:underline">Sitemap</a>
            <a href="/robots.txt" className="hover:underline">Robots.txt</a>
            <a href="/feed.xml" className="hover:underline">RSS Feed</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
