export interface FAQItem {
  question: string;
  answer: string;
}

export interface Category {
  title: string;
  description: string;
  slug: string;
  keywords: string[];
  updatedAt: string;
  readingTime: string;
  faq: FAQItem[];
  introduction: string;
  whyAsk: string;
  whoLearn: string;
  roadmap: string[];
  icon: string; // lucide icon name
  relatedSlugs: string[]; // for internal linking graph
}

export interface CodeExample {
  code: string;
  language: string;
}

export interface Question {
  id: string;
  categorySlug: string;
  question: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  type: 'Concept' | 'Scenario' | 'Coding' | 'MCQ' | 'Practical';
  answer: string;
  explanation: string;
  codeExample?: CodeExample;
  interviewTip: string;
  commonMistakes: string[];
  relatedQuestions?: string[];
  options?: string[]; // for MCQs
  correctOption?: number; // for MCQs (0-indexed)
}
