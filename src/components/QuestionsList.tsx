'use client';

import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Info, X, Filter } from 'lucide-react';
import { Question } from '../types';
import QuestionCard from './QuestionCard';

interface QuestionsListProps {
  questions: Question[];
}

type DifficultyFilter = 'All' | 'Beginner' | 'Intermediate' | 'Advanced';
type TypeFilter = 'All' | 'Concept' | 'Scenario' | 'Coding' | 'MCQ' | 'Practical';

export default function QuestionsList({ questions }: QuestionsListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('All');
  const [selectedType, setSelectedType] = useState<TypeFilter>('All');

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSelectedType('All');
  };

  // Perform search and filter operations
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      // 1. Difficulty filter
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) {
        return false;
      }

      // 2. Type filter
      if (selectedType !== 'All' && q.type !== selectedType) {
        return false;
      }

      // 3. Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuestion = q.question.toLowerCase().includes(query);
        const matchesAnswer = q.answer.toLowerCase().includes(query);
        const matchesExplanation = q.explanation.toLowerCase().includes(query);
        const matchesTip = q.interviewTip.toLowerCase().includes(query);
        const matchesMistakes = q.commonMistakes.some((m) => m.toLowerCase().includes(query));

        return matchesQuestion || matchesAnswer || matchesExplanation || matchesTip || matchesMistakes;
      }

      return true;
    });
  }, [questions, searchQuery, selectedDifficulty, selectedType]);

  // Group filtered questions by level to keep anchors intact
  const beginnerQs = useMemo(() => filteredQuestions.filter(q => q.difficulty === 'Beginner'), [filteredQuestions]);
  const intermediateQs = useMemo(() => filteredQuestions.filter(q => q.difficulty === 'Intermediate'), [filteredQuestions]);
  const advancedQs = useMemo(() => filteredQuestions.filter(q => q.difficulty === 'Advanced'), [filteredQuestions]);

  const hasActiveFilters = searchQuery !== '' || selectedDifficulty !== 'All' || selectedType !== 'All';

  // Difficulties configuration
  const difficulties: DifficultyFilter[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const difficultyColors = {
    All: 'hover:bg-slate-800 hover:text-slate-200 border-slate-800 text-slate-400',
    Beginner: 'hover:bg-emerald-500/10 hover:text-emerald-400 border-slate-800 text-slate-400',
    Intermediate: 'hover:bg-amber-500/10 hover:text-amber-400 border-slate-800 text-slate-400',
    Advanced: 'hover:bg-rose-500/10 hover:text-rose-400 border-slate-800 text-slate-400',
  };

  const difficultyActiveColors = {
    All: 'bg-blue-500/10 text-blue-400 border-blue-500/30 shadow-sm shadow-blue-500/5',
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/5',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-sm shadow-amber-500/5',
    Advanced: 'bg-rose-500/10 text-rose-400 border-rose-500/30 shadow-sm shadow-rose-500/5',
  };

  // Types configuration
  const questionTypes: TypeFilter[] = ['All', 'Concept', 'Scenario', 'Coding', 'MCQ', 'Practical'];

  return (
    <div className="space-y-8">
      {/* Search and Filter Panel */}
      <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Local Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions on this page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 bg-slate-900/60 rounded-lg border border-slate-800 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Clear Search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Question Type Filter Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 whitespace-nowrap">
              <Filter className="w-3.5 h-3.5" />
              Type:
            </span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as TypeFilter)}
              className="px-3 py-2 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all cursor-pointer"
            >
              {questionTypes.map((t) => (
                <option key={t} value={t} className="bg-slate-950">
                  {t === 'All' ? 'All Types' : `${t}s`}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Difficulty Selector Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-900/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Level:</span>
            {difficulties.map((diff) => {
              const isActive = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 ${
                    isActive ? difficultyActiveColors[diff] : difficultyColors[diff]
                  }`}
                >
                  {diff === 'All' ? 'All Levels' : diff}
                </button>
              );
            })}
          </div>

          {/* Active Filter Indicator & Reset */}
          {hasActiveFilters && (
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <span className="text-xs text-slate-500">
                Found {filteredQuestions.length} of {questions.length} questions
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-1"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Render Questions List grouped by level */}
      <div className="space-y-12">
        {/* Beginner */}
        {beginnerQs.length > 0 && (selectedDifficulty === 'All' || selectedDifficulty === 'Beginner') && (
          <div id="beginner" className="space-y-4 scroll-mt-24">
            <h2 className="text-lg sm:text-xl font-bold text-slate-200 border-b border-slate-900 pb-2 flex items-center justify-between">
              <span>Beginner Level Questions</span>
              <span className="text-xs font-normal text-slate-500">
                {beginnerQs.length} questions
              </span>
            </h2>
            <div className="space-y-4">
              {beginnerQs.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </div>
        )}

        {/* Intermediate */}
        {intermediateQs.length > 0 && (selectedDifficulty === 'All' || selectedDifficulty === 'Intermediate') && (
          <div id="intermediate" className="space-y-4 scroll-mt-24">
            <h2 className="text-lg sm:text-xl font-bold text-slate-200 border-b border-slate-900 pb-2 flex items-center justify-between">
              <span>Intermediate Level Questions</span>
              <span className="text-xs font-normal text-slate-500">
                {intermediateQs.length} questions
              </span>
            </h2>
            <div className="space-y-4">
              {intermediateQs.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </div>
        )}

        {/* Advanced */}
        {advancedQs.length > 0 && (selectedDifficulty === 'All' || selectedDifficulty === 'Advanced') && (
          <div id="advanced" className="space-y-4 scroll-mt-24">
            <h2 className="text-lg sm:text-xl font-bold text-slate-200 border-b border-slate-900 pb-2 flex items-center justify-between">
              <span>Advanced Level Questions</span>
              <span className="text-xs font-normal text-slate-500">
                {advancedQs.length} questions
              </span>
            </h2>
            <div className="space-y-4">
              {advancedQs.map((q) => (
                <QuestionCard key={q.id} question={q} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-800 p-10 text-center space-y-3 bg-slate-900/10">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-slate-500 flex items-center justify-center mx-auto border border-slate-800">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-300">No matching questions</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                We couldn't find any questions matching your current filters. Try changing your search query or resetting the filter options.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-4 py-1.5 text-xs font-semibold text-slate-950 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-lg transition-colors inline-block"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
