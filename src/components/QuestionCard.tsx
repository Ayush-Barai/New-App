'use client';

import React, { useState } from 'react';
import { Copy, Check, ChevronDown, ChevronUp, AlertCircle, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `Question: ${question.question}\n\nAnswer: ${question.answer}\n\nExplanation: ${question.explanation}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Badge styles
  const difficultyColors = {
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  const typeColors = {
    Concept: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Scenario: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Coding: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    MCQ: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    Practical: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  };

  return (
    <article 
      id={question.id} 
      className="rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/80 transition-all p-6 space-y-4"
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2 text-xs">
          <span className={`px-2 py-0.5 rounded-full border ${difficultyColors[question.difficulty]}`}>
            {question.difficulty}
          </span>
          <span className={`px-2 py-0.5 rounded-full border ${typeColors[question.type]}`}>
            {question.type}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors p-1 rounded hover:bg-slate-800"
          title="Copy Question & Answer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Question */}
      <h3 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
        {question.question}
      </h3>

      {/* Quick Answer */}
      <div className="bg-slate-950/60 rounded-lg p-4 border border-slate-900">
        <p className="text-slate-300 text-sm leading-relaxed font-medium">
          <span className="text-blue-400 font-bold block mb-1">Quick Answer:</span>
          {question.answer}
        </p>
      </div>

      {/* Expand/Collapse Button */}
      <div className="flex justify-start">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Collapse Detailed Explanation</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>View Explanation & Code Examples</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Detailed Content (Expandable) */}
      {isExpanded && (
        <div className="pt-4 border-t border-slate-800 space-y-6 animate-slide-down">
          
          {/* Detailed Explanation */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Detailed Explanation</h4>
            <div className="text-sm text-slate-400 leading-relaxed whitespace-pre-line">
              {question.explanation}
            </div>
          </div>

          {/* Multiple Choice Options */}
          {question.type === 'MCQ' && question.options && (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Options</h4>
              <div className="grid grid-cols-1 gap-2">
                {question.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border text-sm flex items-center gap-3 ${
                      idx === question.correctOption
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-medium'
                        : 'bg-slate-950/30 border-slate-800 text-slate-400'
                    }`}
                  >
                    <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${
                      idx === question.correctOption ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Example */}
          {question.codeExample && (
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Code Example</h4>
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {question.codeExample.language}
                </span>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                <pre className="p-4 text-xs sm:text-sm text-slate-300 font-mono overflow-x-auto leading-relaxed">
                  <code>{question.codeExample.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Common Mistakes */}
          {question.commonMistakes && question.commonMistakes.length > 0 && (
            <div className="space-y-2 bg-rose-500/5 rounded-lg p-4 border border-rose-500/10">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">Common Mistakes to Avoid</h4>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-sm">
                {question.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Interview Tip */}
          {question.interviewTip && (
            <div className="space-y-2 bg-blue-500/5 rounded-lg p-4 border border-blue-500/10">
              <div className="flex items-center gap-2 text-blue-400">
                <HelpCircle className="w-4 h-4 flex-shrink-0" />
                <h4 className="text-sm font-semibold uppercase tracking-wider">Pro Interview Tip</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {question.interviewTip}
              </p>
            </div>
          )}

          {/* Related Questions */}
          {question.relatedQuestions && question.relatedQuestions.length > 0 && (
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Related Questions</h4>
              <ul className="list-none flex flex-wrap gap-2">
                {question.relatedQuestions.map((req, idx) => (
                  <li key={idx} className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors px-2.5 py-1 rounded-md border border-slate-700/50">
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      )}
    </article>
  );
}
