import { Question } from '../types';

export const questions: Question[] = [
  // --- REACT QUESTIONS ---
  {
    id: "react-1",
    categorySlug: "react",
    question: "What are the new features introduced in React 19?",
    difficulty: "Advanced",
    type: "Concept",
    answer: "React 19 introduces Server Actions, the useActionState and useFormStatus hooks, the new use() API for resolving promises and context, asset loading, document metadata support, and automatic ref pass-through.",
    explanation: "React 19 majorly bridges the gap between client and server. Key features include:\n1. **Server Actions**: Allows client components to execute async functions directly on the server.\n2. **The `use` API**: A new API that allows reading promises and context inline (within conditionals or loops) without violating hook rules.\n3. **useActionState**: Form action state management that handles pending states, results, and error catching automatically.\n4. **useFormStatus**: Accesses form submission context (like pending state) from nested form controls without prop drilling.\n5. **Ref as a Prop**: No more forwardRef! Refs can now be passed as regular props.",
    codeExample: {
      code: `// React 19 Action State Example
import { useActionState } from 'react';

async function updateProfile(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name");
    await api.saveName(name);
    return { success: true, message: "Profile updated!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function ProfileForm() {
  const [state, formAction, isPending] = useActionState(updateProfile, null);

  return (
    <form action={formAction} className="space-y-4">
      <input name="name" type="text" className="border p-2 rounded" />
      <button type="submit" disabled={isPending} className="bg-blue-600 text-white px-4 py-2">
        {isPending ? "Saving..." : "Save Name"}
      </button>
      {state && <p>{state.message}</p>}
    </form>
  );
}`,
      language: "typescript"
    },
    interviewTip: "When asked about React 19, focus on how it streamlines data fetching and form mutations. Highlight how the removal of forwardRef simplifies typing in TypeScript.",
    commonMistakes: [
      "Confusing React Server Actions with Next.js specific server functions.",
      "Attempting to use standard hooks inside loops or conditions (only 'use' is allowed)."
    ],
    relatedQuestions: ["What are Server Components?", "Explain the difference between useEffect and useActionState."]
  },
  {
    id: "react-2",
    categorySlug: "react",
    question: "What is the difference between useMemo and useCallback?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "useMemo caches the *result* of a function calculation, while useCallback caches the *function definition itself* to prevent recreation on re-render.",
    explanation: "Both hooks are optimization tools that rely on a dependency array to recalculate their cached values. \n- **useMemo**: Use this when you have heavy CPU-intensive operations. It returns a memoized value.\n- **useCallback**: Use this when passing callbacks to memoized child components (using React.memo) to prevent child component re-renders from reference inequality.",
    codeExample: {
      code: `import { useMemo, useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  // useMemo: caches the computed value (array sum)
  const totalSum = useMemo(() => {
    return list.reduce((a, b) => a + b, 0);
  }, [list]);

  // useCallback: caches the function reference to prevent child re-render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <p>Sum: {totalSum}</p>
      <button onClick={() => setCount(count + 1)}>Increment count ({count})</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}`,
      language: "typescript"
    },
    interviewTip: "Never optimize prematurely! Mention that adding useMemo/useCallback has a memory overhead due to dependency checking, and should only be applied to heavy computations or reference-preserving actions.",
    commonMistakes: [
      "Using useCallback for simple inline event handlers that don't get passed to memoized children.",
      "Forgetting to supply the correct variables in the dependency array, leading to stale closures."
    ],
    relatedQuestions: ["How does React.memo work?", "What is the purpose of useEffect?"]
  },
  {
    id: "react-3",
    categorySlug: "react",
    question: "Which of the following is true about React state updates?",
    difficulty: "Beginner",
    type: "MCQ",
    answer: "State updates are asynchronous and batched.",
    explanation: "React batches state updates to group multiple state updates into a single re-render for better UI performance. Because state updates are scheduled asynchronously, reading state immediately after setting it will yield the old value.",
    options: [
      "State updates are synchronous and occur immediately.",
      "State updates are asynchronous and batched.",
      "State updates trigger a complete page reload.",
      "State updates cannot be used inside functional components."
    ],
    correctOption: 1,
    interviewTip: "Explain that if you need to set state based on the previous state value, you must always pass an updater function (e.g. `setCount(prev => prev + 1)`) to avoid stale state issues.",
    commonMistakes: [
      "Reading state directly after calling its setter function and expecting the new value.",
      "Failing to use functional updates when setting state based on previous state."
    ]
  },

  // --- JAVASCRIPT QUESTIONS ---
  {
    id: "js-1",
    categorySlug: "javascript",
    question: "What is a closure and how does it work in JavaScript?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "A closure is the bundle of a function and its lexical environment, allowing the function to access variables from its outer scope even after the outer function has finished executing.",
    explanation: "In JavaScript, closures are created every time a function is created, at function creation time. Lexical scoping determines variable access: nested functions have access to variables declared in their outer scope. This property persists even if the outer function returns, as long as a reference to the inner function is maintained.",
    codeExample: {
      code: `function createCounter() {
  let count = 0; // Private state variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count);       // undefined (variable is private)`,
      language: "javascript"
    },
    interviewTip: "Highlight that closures are the foundational pattern behind private variables, encapsulation, and functional currying in JavaScript.",
    commonMistakes: [
      "Creating unnecessary closures in loops, which can lead to memory leaks if not cleaned up properly.",
      "Confusing closures with object-oriented private properties."
    ]
  },
  {
    id: "js-2",
    categorySlug: "javascript",
    question: "Explain the difference between Double Equals (==) and Triple Equals (===).",
    difficulty: "Beginner",
    type: "Concept",
    answer: "Double equals (==) performs type coercion before comparison, whereas triple equals (===) compares both the value and the type strictly, returning false if types do not match.",
    explanation: "Type coercion means JavaScript attempts to convert values to a common type before comparing. For instance, `5 == '5'` returns `true` because the string `'5'` is converted to a number. However, `5 === '5'` returns `false` because their types (number vs string) are different.",
    codeExample: {
      code: `console.log(5 == '5');       // true (coercion occurs)
console.log(5 === '5');      // false (strict type check)
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false);     // true
console.log(0 === false);    // false`,
      language: "javascript"
    },
    interviewTip: "Always recommend using triple equals (===) in production code to avoid bugs stemming from implicit type conversions. Mention exceptions like checking if a variable is both null and undefined (`value == null`).",
    commonMistakes: [
      "Using double equals (==) thinking it is faster (it is actually slightly slower if coercion has to run).",
      "Not checking for falsy values correctly, leading to unexpected coercions."
    ]
  },

  // --- TYPESCRIPT QUESTIONS ---
  {
    id: "ts-1",
    categorySlug: "typescript",
    question: "What is the difference between type and interface in TypeScript?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Interfaces are extendable via declaration merging and are limited to defining object structures, while Type aliases can define primitives, unions, intersections, and tuples, but cannot be merged.",
    explanation: "Key differences:\n1. **Declaration Merging**: If you define two interfaces with the same name, they merge automatically. Doing this with types causes a compilation error.\n2. **Type Capabilities**: Types can use union operator (`type A = B | C`), intersection operator, mapping, and primitives, making them more versatile for functional types.\n3. **Extends syntax**: Interfaces extend other interfaces using the `extends` keyword. Types use intersections (`type A = B & C`) to compose shapes.",
    codeExample: {
      code: `// Interface extension
interface User {
  name: string;
}
interface User {
  age: number; // Merged with first definition
}

// Type composition
type Point = { x: number; y: number };
type 3DPoint = Point & { z: number };

// Union Type (Only possible with Type Aliases)
type Status = "Pending" | "Success" | "Failed";`,
      language: "typescript"
    },
    interviewTip: "Explain that a good rule of thumb is: use interfaces for public API endpoints or object shapes (since users might want to extend them), and use types for union layouts, state configurations, and complex generic utilities.",
    commonMistakes: [
      "Trying to merge type declarations.",
      "Using types for everything without understanding the declaration merging benefits of interfaces in libraries."
    ]
  },

  // --- NEXT.JS QUESTIONS ---
  {
    id: "next-1",
    categorySlug: "nextjs",
    question: "What is SSR, SSG, and ISR in Next.js?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "SSR (Server-Side Rendering) compiles pages on every request. SSG (Static Site Generation) builds pages statically at build-time. ISR (Incremental Static Regeneration) rebuilds static pages on-demand in the background.",
    explanation: "Next.js offers flexible page rendering strategies:\n1. **SSG (Static Site Generation)**: Pages are pre-rendered at build time. Ideal for content that doesn't change frequently (e.g. blog posts, documentation). Extremely fast and CDN cacheable.\n2. **SSR (Server-Side Rendering)**: Pages are compiled on the server for each incoming request. Best for highly dynamic user dashboards or real-time data.\n3. **ISR (Incremental Static Regeneration)**: Allows you to statically generate pages, but specify a revalidation timer. Once the timer passes, Next.js regenerates the page in the background on the next request, serving fresh content without a redeploy.",
    codeExample: {
      code: `// Next.js App Router Static/Dynamic control
// Force Static generation (SSG)
export const dynamic = 'force-static';

// Incremental Static Regeneration (ISR) - revalidate every hour
export const revalidate = 3600;

// Dynamic rendering (SSR) - force fetch on every request
export async function Page() {
  const res = await fetch('https://api.example.com/data', { cache: 'no-store' });
  const data = await res.json();
  
  return <main>{/* Render dynamic data */}</main>;
}`,
      language: "typescript"
    },
    interviewTip: "Emphasize that Next.js App Router defaults to Static Site Generation (SSG) unless dynamic functions (headers, cookies, searchParams) or non-cached fetches are used.",
    commonMistakes: [
      "Adding 'use client' thinking it makes the component a client-rendered page (it still gets pre-rendered into HTML on the server).",
      "Using non-cached fetch methods in static pages, accidentally converting them to dynamic SSR."
    ]
  },

  // --- SYSTEM DESIGN QUESTIONS ---
  {
    id: "sysdesign-1",
    categorySlug: "sysdesign",
    question: "How do you design a high-performance, rate-limiting system?",
    difficulty: "Advanced",
    type: "Scenario",
    answer: "A scalable rate-limiting system can be built using Redis as a distributed key-value store utilizing algorithms like Token Bucket, Leaking Bucket, or Sliding Window Log.",
    explanation: "When designing a rate limiter:\n1. **Storage**: Use an in-memory data store like Redis to ensure sub-millisecond lookups and atomic operations (preventing race conditions).\n2. **Algorithms**:\n   - *Token Bucket*: Simple, allows bursts of traffic. Tokens are added to a bucket at a set rate. Each request consumes a token.\n   - *Sliding Window Counter*: Tracks requests in a window and calculates limits based on boundary overlaps. High accuracy with low memory footprint.\n3. **Architecture**: Implement the rate limiter as a middleware layer at the API Gateway or reverse proxy (e.g., Nginx) to block abusive traffic before it hits the application servers.",
    codeExample: {
      code: `// Redis Lua script for Sliding Window Rate Limiter
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local now = tonumber(ARGV[3])

redis.call('zremrangebyscore', key, 0, now - window)
local reqs = redis.call('zcard', key)

if reqs < limit then
    redis.call('zadd', key, now, now)
    redis.call('expire', key, window)
    return 1 // Allowed
else
    return 0 // Blocked
end`,
      language: "lua"
    },
    interviewTip: "Discuss trade-offs: Token bucket has low memory footprint but can allow sudden bursts. Leaking bucket smooths traffic but can add latency. Mention using Redis Cluster for high availability.",
    commonMistakes: [
      "Storing rate limit counts in local application server memory (fails in clustered environments).",
      "Not handling race conditions when incrementing counters without Redis transactions or Lua scripts."
    ]
  },

  // --- HR QUESTIONS ---
  {
    id: "hr-1",
    categorySlug: "hr",
    question: "How do you handle disagreements or conflicts with team members?",
    difficulty: "Beginner",
    type: "Scenario",
    answer: "I handle disagreements by separating the problem from the person, active listening to understand their perspective, using data/metrics to guide decisions, and seeking alignment or escalating respectfully if needed.",
    explanation: "Conflict resolution is a vital soft skill. The ideal response demonstrates:\n1. **Empathy & Listening**: Listen without interrupting. Try to understand their concerns (e.g., technical implementation trade-offs, timelines).\n2. **Data-Driven**: Rely on objective data, benchmarks, or requirements rather than personal opinions.\n3. **Collaboration**: Seek a compromise or run a quick proof-of-concept (POC) to test both paths.\n4. **Commitment**: Follow the 'Disagree and Commit' principle. Once a decision is made, back it fully even if it wasn't your choice.",
    interviewTip: "Always structure behavioral questions using the STAR method: Situation, Task, Action, Result. Share a real, positive outcome.",
    commonMistakes: [
      "Stating that you've never had conflicts (unrealistic).",
      "Badmouthing previous team members or taking criticisms personally."
    ]
  }
];

export const getQuestionsByCategory = (slug: string): Question[] => {
  return questions.filter(q => q.categorySlug === slug);
};

export const searchQuestions = (query: string): Question[] => {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];
  
  return questions.filter(q => 
    q.question.toLowerCase().includes(cleanQuery) ||
    q.answer.toLowerCase().includes(cleanQuery) ||
    q.explanation.toLowerCase().includes(cleanQuery) ||
    q.categorySlug.toLowerCase().includes(cleanQuery)
  );
};
