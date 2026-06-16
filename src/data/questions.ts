import { Question } from '../types';

const staticQuestions: Question[] = [
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
  },
  // --- EXPRESS.JS QUESTIONS ---
  {
    id: "express-1",
    categorySlug: "expressjs",
    question: "Explain the difference between app.use() and HTTP verb methods (like app.get()) in Express.js.",
    difficulty: "Beginner",
    type: "Concept",
    answer: "app.use() registers middleware that executes for all HTTP verbs and matches subpaths, whereas app.get(), app.post(), etc., match specific HTTP verbs and exact paths.",
    explanation: "Express routing handles middleware setup using:\n1. **app.use()**: Used to mount middleware functions at a specified path. The middleware runs for any request matching that path prefix, regardless of the HTTP method (GET, POST, DELETE, etc.). Perfect for logs, CORS, body parsers.\n2. **app.get() / app.post()**: Register route handlers for specific HTTP request methods. They perform exact path matching (or pattern matching) and only execute when both the verb and path match the request.",
    codeExample: {
      code: `const express = require('express');
const app = express();

// Executes for all requests
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Executes only for GET /users
app.get('/users', (req, res) => {
  res.send('User List');
});`,
      language: "javascript"
    },
    interviewTip: "Always mention the importance of calling next() in middleware to avoid hanging requests.",
    commonMistakes: [
      "Forgetting to call next() in custom middleware, causing the request to hang indefinitely.",
      "Placing app.use() declarations after route verb declarations when they need to process requests first."
    ],
    relatedQuestions: ["What is middleware?", "How do you handle errors in Express.js?"]
  },

  // --- TAILWIND CSS QUESTIONS ---
  {
    id: "tailwind-1",
    categorySlug: "tailwind-css",
    question: "How does Tailwind CSS's Just-In-Time (JIT) compiler work?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Tailwind's JIT compiler scans source files in real-time, matching class names against definitions, and dynamically generates only the styles that are actually used in production.",
    explanation: "In older versions of Tailwind CSS, the compiler pre-generated thousands of utility classes, resulting in huge CSS file sizes during development. The JIT (Just-In-Time) engine scans HTML, React, or Vue files, extracts utility classes, and builds a minimal, customized CSS file containing only the classes actually used, reducing production CSS sizes to around 5-15KB.",
    codeExample: {
      code: `// tailwind.config.js
module.exports = {
  // Specify paths to scan for JIT compilation
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
      language: "javascript"
    },
    interviewTip: "Emphasize that JIT enables dynamic arbitrary values (like 'top-[117px]') and speeds up compile times significantly.",
    commonMistakes: [
      "Writing dynamically concatenated class names (e.g. \`text-\${color}-500\`), which the static scanner cannot detect.",
      "Forgetting to update the 'content' array in configuration when creating new directories."
    ]
  },

  // --- BOOTSTRAP QUESTIONS ---
  {
    id: "bootstrap-1",
    categorySlug: "bootstrap",
    question: "Explain the Bootstrap grid system. How do rows and columns interact?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "The Bootstrap grid is a flexbox-based 12-column system where container adds horizontal padding, rows group columns and negate padding with negative margins, and columns define column spans.",
    explanation: "Bootstrap grid has three main elements:\n1. **Container**: Provides a centered alignment context with horizontal padding.\n2. **Row**: Wrapper for columns. It uses negative margins to counteract the container padding, ensuring columns align correctly on the edges.\n3. **Columns**: Must be direct children of rows. They carry padding (gutters) and are sized dynamically from 1 to 12. Responsive modifiers (col-md-6) allow wrapping at specific breakpoints.",
    codeExample: {
      code: `<div className="container">
  <div className="row">
    <div className="col-12 col-md-8">Main Content (8 cols wide on desktop)</div>
    <div className="col-12 col-md-4">Sidebar (4 cols wide on desktop)</div>
  </div>
</div>`,
      language: "html"
    },
    interviewTip: "Always mention that columns must be direct children of rows, and row should not be used as direct children of other rows without columns.",
    commonMistakes: [
      "Placing columns directly inside containers without a row wrapper, breaking layout alignments.",
      "Exceeding 12 column spans in a single row without understanding that columns will wrap."
    ]
  },

  // --- PYTHON QUESTIONS ---
  {
    id: "python-1",
    categorySlug: "python",
    question: "What are Python Decorators and how do they work?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Decorators are functions that take another function as an argument, extend or modify its behavior, and return a new function, all without modifying the original source code.",
    explanation: "Decorators leverage first-class functions in Python (functions can be passed around as arguments). They are syntactically written using the '@' symbol. A decorator wraps a target function, executing custom code before and/or after calling the original function, returning the wrapper.",
    codeExample: {
      code: `def log_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling function: {func.__name__}")
        result = func(*args, **kwargs)
        print("Function execution complete.")
        return result
    return wrapper

@log_decorator
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
# Output:
# Calling function: greet
# Function execution complete.
# Hello, Alice!`,
      language: "python"
    },
    interviewTip: "Explain that decorators are highly used for authentication, caching, logging, and rate limiting in libraries like Flask and Django.",
    commonMistakes: [
      "Forgetting to return the result of the wrapped function inside the wrapper.",
      "Not using functools.wraps, which results in losing the original function's name and docstring."
    ]
  },

  // --- JAVA QUESTIONS ---
  {
    id: "java-1",
    categorySlug: "java",
    question: "Explain the difference between final, finally, and finalize in Java.",
    difficulty: "Beginner",
    type: "Concept",
    answer: "final is an access modifier for immutability; finally is a block used in exception handling; finalize is a deprecated JVM method called before garbage collecting objects.",
    explanation: "Key distinctions:\n1. **final**: Keyword used to define constants (classes cannot be inherited, methods cannot be overridden, variables cannot be reassigned).\n2. **finally**: Block following try-catch used to execute cleanup code (like closing streams, databases) regardless of whether an exception is thrown.\n3. **finalize()**: Method in Object class called by the garbage collector on an object before it is reclaimed. It is deprecated since Java 9.",
    codeExample: {
      code: `public class Test {
    // final variable
    final int LIMIT = 100;

    public void process() {
        try {
            int result = 50 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Exception caught");
        } finally {
            // finally block - always executes
            System.out.println("Resource cleanup here");
        }
    }
}`,
      language: "java"
    },
    interviewTip: "Recommend using try-with-resources instead of finally blocks for closing AutoCloseable resources in modern Java.",
    commonMistakes: [
      "Assuming finally will not execute if an exception is thrown in the catch block (it still executes).",
      "Using finalize() thinking it guarantees memory cleanup timing (GC timing is unpredictable)."
    ]
  },

  // --- C QUESTIONS ---
  {
    id: "c-1",
    categorySlug: "c",
    question: "What is the difference between malloc() and calloc() in C dynamic memory allocation?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "malloc() allocates a single block of raw memory and does not initialize it; calloc() allocates multiple blocks and initializes all bytes to zero.",
    explanation: "C provides dynamic memory functions:\n1. **malloc(size)**: Allocates 'size' bytes of uninitialized memory. Reading this memory before writing yields garbage values.\n2. **calloc(num, size)**: Allocates memory for an array of 'num' elements of 'size' bytes each. It zeroes out all allocated memory, preventing garbage reads.",
    codeExample: {
      code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr1 = (int*) malloc(5 * sizeof(int)); // uninitialized
    int *arr2 = (int*) calloc(5, sizeof(int));  // initialized to 0

    // Always free allocated memory
    free(arr1);
    free(arr2);
    return 0;
}`,
      language: "c"
    },
    interviewTip: "Always mention that you must check if the returned pointer is NULL before using it to prevent Segmentation Fault errors.",
    commonMistakes: [
      "Not calling free(), leading to memory leaks.",
      "Accessing freed memory (dangling pointers)."
    ]
  },

  // --- C++ QUESTIONS ---
  {
    id: "cpp-1",
    categorySlug: "cpp",
    question: "Why should a base class destructor always be declared virtual in C++?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Declaring a base class destructor virtual ensures that when a derived class object is deleted using a base class pointer, the derived class destructor is invoked first, preventing resource leaks.",
    explanation: "If a base class destructor is non-virtual, deleting a derived class object through a base class pointer causes undefined behavior, usually resulting in the base class destructor executing but *not* the derived class destructor, causing memory leaks.",
    codeExample: {
      code: `#include <iostream>

class Base {
public:
    virtual ~Base() { // Virtual destructor
        std::cout << "Base Destructor\\n";
    }
};

class Derived : public Base {
private:
    int* data;
public:
    Derived() { data = new int[10]; }
    ~Derived() {
        delete[] data;
        std::cout << "Derived Destructor\\n";
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // Triggers both destructors
    return 0;
}`,
      language: "cpp"
    },
    interviewTip: "Always recommend making destructors virtual in classes designed to be inherited.",
    commonMistakes: [
      "Forgetting to make destructors virtual in polymorphic base classes.",
      "Making destructors virtual in helper classes that are never inherited (incurs vtable overhead)."
    ]
  },

  // --- MONGO DB QUESTIONS ---
  {
    id: "mongodb-1",
    categorySlug: "mongodb",
    question: "What is an Index in MongoDB and how does it improve query speed?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Indexes store a small portion of the collection's data in an easy-to-traverse B-Tree structure, allowing MongoDB to locate documents quickly without scanning the entire collection.",
    explanation: "Without indexes, MongoDB must perform a collection scan (scan every document) to find matching documents. An index orders specific fields in a B-Tree structure. Searching using indexed fields reduces lookups from O(N) to O(log N). Common indexes include Single Field, Compound, Multikey (for arrays), and Geospatial.",
    codeExample: {
      code: `// Create a compound index on email (ascending) and status (descending)
db.users.createIndex({ email: 1, status: -1 });

// Query using explain to check index utilization
db.users.find({ email: "user@example.com" }).explain("executionStats");`,
      language: "javascript"
    },
    interviewTip: "Explain that indexes speed up reads but slow down writes (inserts, updates, deletes) because the B-Tree must be updated dynamically.",
    commonMistakes: [
      "Creating too many indexes, which increases storage and degrades write performance.",
      "Ordering fields incorrectly in compound indexes (follow the Equality, Sort, Range rule)."
    ]
  },

  // --- POSTGRESQL QUESTIONS ---
  {
    id: "postgresql-1",
    categorySlug: "postgresql",
    question: "What is MVCC (Multi-Version Concurrency Control) in PostgreSQL?",
    difficulty: "Advanced",
    type: "Concept",
    answer: "MVCC is a concurrency mechanism where database updates create a new version of the row instead of overwriting the old one, allowing readers and writers to access the database without blocking each other.",
    explanation: "PostgreSQL uses MVCC to manage transaction isolation. When a row is modified, a new row image is inserted with transaction ID stamps (xmin, xmax). Readers read a snapshot of the database matching their transaction snapshot. Old row versions (dead tuples) are eventually cleaned up by the autovacuum process.",
    codeExample: {
      code: `-- Check the number of dead tuples waiting for vacuum in PostgreSQL
SELECT relname, n_dead_tup, last_vacuum, last_autovacuum 
FROM pg_stat_user_tables;`,
      language: "sql"
    },
    interviewTip: "Highlight that MVCC eliminates the need for read locks, which dramatically increases database throughput.",
    commonMistakes: [
      "Disabling autovacuum, leading to table bloat (massive space occupied by dead tuples).",
      "Running extremely long-lived transactions, which blocks autovacuum from reclaiming dead tuples."
    ]
  },

  // --- MY SQL QUESTIONS ---
  {
    id: "mysql-1",
    categorySlug: "mysql",
    question: "Compare InnoDB and MyISAM storage engines in MySQL.",
    difficulty: "Beginner",
    type: "Concept",
    answer: "InnoDB supports ACID transactions, row-level locking, and foreign keys; MyISAM does not support transactions or foreign keys and uses table-level locking.",
    explanation: "InnoDB is the default storage engine in modern MySQL. Key differences:\n1. **Transactions**: InnoDB supports COMMIT, ROLLBACK, and crash recovery. MyISAM does not.\n2. **Locking**: InnoDB locks specific rows (high concurrent writes). MyISAM locks the whole table.\n3. **Foreign Keys**: InnoDB enforces relational integrity. MyISAM ignores foreign key constraints.\n4. **Data Recovery**: InnoDB uses a redo log to recover from power crashes. MyISAM tables can get corrupted easily.",
    codeExample: {
      code: `-- Explicitly create a table using InnoDB storage engine
CREATE TABLE Orders (
    OrderID int NOT NULL AUTO_INCREMENT,
    OrderNumber int NOT NULL,
    PRIMARY KEY (OrderID)
) ENGINE=InnoDB;`,
      language: "sql"
    },
    interviewTip: "State that InnoDB is almost always preferred for production applications due to transaction safety and better write concurrency.",
    commonMistakes: [
      "Using MyISAM thinking it is always faster (it is only faster for simple append-only or read-only tables)."
    ]
  },

  // --- GITHUB QUESTIONS ---
  {
    id: "github-1",
    categorySlug: "github",
    question: "What is a GitHub Actions workflow and what are its key components?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "A GitHub Actions workflow is an automated CI/CD process defined in a YAML file under .github/workflows, consisting of triggers, runners (jobs), and sequential steps.",
    explanation: "Key components:\n1. **Triggers (on)**: Events that start the workflow (push, pull_request, schedule).\n2. **Jobs**: Groups of steps that run on the same runner (e.g. ubuntu-latest). Jobs execute in parallel unless dependencies are configured.\n3. **Steps**: Individual tasks running commands or actions (uses/run).\n4. **Actions**: Reusable extensions (e.g. actions/checkout).",
    codeExample: {
      code: `# .github/workflows/ci.yml
name: Node CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test`,
      language: "yaml"
    },
    interviewTip: "Mention the usage of GitHub secrets to securely store API keys and passwords within workflows.",
    commonMistakes: [
      "Hardcoding credentials instead of using GitHub Secrets.",
      "Running unnecessary steps that slow down CI pipeline times."
    ]
  },

  // --- DOCKER QUESTIONS ---
  {
    id: "docker-1",
    categorySlug: "docker",
    question: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "ENTRYPOINT sets the default command and executable that will always run when the container starts, whereas CMD sets default arguments that can be overridden from the command line.",
    explanation: "Understanding both commands:\n1. **ENTRYPOINT**: Declares the primary executable of the container (e.g. \`ENTRYPOINT [\"node\", \"server.js\"]\`). It is not overridden by trailing CLI arguments.\n2. **CMD**: Provides arguments to the ENTRYPOINT, or acts as a standalone command. If standalone (e.g. \`CMD [\"npm\", \"start\"]\`), running \`docker run my-app bash\` overrides the CMD entirely with \`bash\`.",
    codeExample: {
      code: `# Recommended pattern: Combine both
FROM node:18-alpine
WORKDIR /app
COPY . .
ENTRYPOINT ["node"]
CMD ["index.js"]

# Running "docker run my-image" executes: node index.js
# Running "docker run my-image app.js" executes: node app.js`,
      language: "dockerfile"
    },
    interviewTip: "Recommend using the JSON array (exec) form rather than the shell form because the exec form propagates OS signals (like SIGTERM) to the container process.",
    commonMistakes: [
      "Using shell form which starts the process inside /bin/sh, preventing it from receiving exit signals from Docker.",
      "Declaring multiple CMD statements (only the last one will execute)."
    ]
  },

  // --- KUBERNETES QUESTIONS ---
  {
    id: "kubernetes-1",
    categorySlug: "kubernetes",
    question: "What is a Pod in Kubernetes, and why don't we deploy containers directly?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "A Pod is the smallest deployable unit in Kubernetes, containing one or more containers that share the same network namespace, storage volumes, and IP address.",
    explanation: "Kubernetes abstracts container execution behind Pods. Designing with Pods allows:\n1. **Co-locating containers**: Helper containers (sidecars like log-forwarders or proxies) can run next to the main application container.\n2. **Shared Networking**: All containers in a Pod talk to each other on localhost.\n3. **Shared Storage**: Pods can define shared volumes that all containers inside can mount.",
    codeExample: {
      code: `# Simple Pod YAML definition
apiVersion: v1
kind: Pod
metadata:
  name: my-app-pod
spec:
  containers:
    - name: web-app
      image: nginx:alpine
      ports:
        - containerPort: 80`,
      language: "yaml"
    },
    interviewTip: "Always mention that Pods are ephemeral (temporary). If a pod dies, it is replaced with a new IP, which is why we use Services to load-balance traffic.",
    commonMistakes: [
      "Placing too many unrelated application containers in a single Pod instead of splitting them into individual pods."
    ]
  },

  // --- AZURE QUESTIONS ---
  {
    id: "azure-1",
    categorySlug: "azure",
    question: "What are the differences between Azure Blob Storage and Azure Files?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "Azure Blob Storage stores massive amounts of unstructured object data accessible via HTTP APIs; Azure Files provides managed file shares accessible via SMB or NFS protocols.",
    explanation: "Comparing storage solutions:\n1. **Azure Blob Storage**: Best for streaming videos, storing backup logs, and images. It has no directory structure (it uses virtual folder prefixes) and is accessed programmatically using REST APIs.\n2. **Azure Files**: Best for lift-and-shift migration of legacy servers. It is a true cloud network file share that virtual machines can mount directly as network drives using standard file sharing protocols.",
    codeExample: {
      code: `// C# Azure Blob Upload Example
using Azure.Storage.Blobs;

BlobServiceClient client = new BlobServiceClient(connectionString);
BlobContainerClient container = client.GetBlobContainerClient("uploads");
BlobClient blob = container.GetBlobClient("document.pdf");

await blob.UploadAsync(filePath);`,
      language: "csharp"
    },
    interviewTip: "Mention that Blob storage is cheaper and scales better for internet-facing web assets.",
    commonMistakes: [
      "Using Azure Files for high-frequency web assets (leads to latency bottlenecks compared to Blob Storage/CDN)."
    ]
  },

  // --- LINUX QUESTIONS ---
  {
    id: "linux-1",
    categorySlug: "linux",
    question: "Explain the difference between a Hard Link and a Soft (Symbolic) Link in Linux.",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "A hard link is an additional pointer to the same underlying file inode; a soft link is a shortcut pointing to the filename path.",
    explanation: "Comparing link types:\n1. **Hard Link**: Points directly to the inode of the source file. If the source file is deleted, the hard link still retains file contents. Hard links cannot span different file systems or link to directories.\n2. **Soft Link (symlink)**: Contains the path string of the source file. If the source file is deleted, the symlink breaks (becomes a dangling link). Soft links can link to directories and span different file systems.",
    codeExample: {
      code: `# Create a hard link
ln original.txt hardlink.txt

# Create a soft (symbolic) link
ln -s original.txt softlink.txt`,
      language: "bash"
    },
    interviewTip: "Use 'ls -li' to display the inode numbers of files. Hard linked files will show identical inode numbers.",
    commonMistakes: [
      "Deleting the original file and expecting the symlink to still work.",
      "Trying to create a hard link to a directory."
    ]
  },

  // --- REST API QUESTIONS ---
  {
    id: "rest-1",
    categorySlug: "rest-api",
    question: "What is the difference between PUT and PATCH methods in HTTP?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "PUT replaces the entire resource representation with the request payload; PATCH applies partial modifications to the resource.",
    explanation: "When designing RESTful systems:\n- **PUT**: Idempotent. Replaces the resource entirely. If fields are omitted in the payload, they may be deleted or set to null/default.\n- **PATCH**: Typically non-idempotent (though can be made idempotent). It updates only the specific fields passed in the request body, leaving other resource fields untouched.",
    codeExample: {
      code: `// PUT request payload (replacing resource)
// PUT /users/1
{ "name": "Alice", "email": "alice@email.com", "age": 25 }

// PATCH request payload (updating only age)
// PATCH /users/1
{ "age": 26 }`,
      language: "json"
    },
    interviewTip: "Explain that PUT is idempotent because executing it multiple times yields the same resource state, while PATCH is technically non-idempotent if it increments values.",
    commonMistakes: [
      "Using PUT for partial updates, which leads to accidental loss of data for fields not supplied."
    ]
  },

  // --- GRAPHQL QUESTIONS ---
  {
    id: "graphql-1",
    categorySlug: "graphql",
    question: "What is the N+1 queries problem in GraphQL, and how do you solve it?",
    difficulty: "Advanced",
    type: "Concept",
    answer: "The N+1 problem occurs when a parent query fetches N records, and its child resolver triggers a separate database query for each record, solved using DataLoader batching.",
    explanation: "In GraphQL, resolvers execute independently. If a user queries 10 books, and wants the author for each book, the book resolver runs once (1 query) and the author resolver runs 10 times (10 queries, total 11 queries). To solve this, **DataLoader** batches individual author lookups into a single query (\`WHERE id IN (1,2,3...10)\`) and returns them accordingly.",
    codeExample: {
      code: `// DataLoader resolver example
const authorLoader = new DataLoader(async (authorIds) => {
  const authors = await db.authors.find({ id: { $in: authorIds } });
  // Map back to guarantee correct order
  return authorIds.map(id => authors.find(a => a.id === id));
});

const resolvers = {
  Book: {
    author: (book) => authorLoader.load(book.authorId)
  }
};`,
      language: "javascript"
    },
    interviewTip: "Differentiate between database queries (which cause network overhead) and in-memory batching (which is fast).",
    commonMistakes: [
      "Forgetting to map the batch results in the exact same index order as the input IDs, which corrupts GraphQL data mapping."
    ]
  },

  // --- REDIS QUESTIONS ---
  {
    id: "redis-1",
    categorySlug: "redis",
    question: "Explain the differences between RDB and AOF persistence in Redis.",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "RDB takes compact point-in-time snapshots of the dataset at intervals; AOF logs every write command received and appends it to a file.",
    explanation: "Comparing persistence modes:\n1. **RDB (Redis Database)**: Creates static binary snapshots of Redis memory. Very fast for server startup and minimal storage size, but changes made between snapshots are lost if a crash occurs.\n2. **AOF (Append Only File)**: Logs every write operation (e.g. SET). If the server crashes, it replays the log. High data durability, but files are much larger, and server startup takes longer.",
    codeExample: {
      code: `# redis.conf snippet
# Enable RDB snapshots
save 900 1      # save after 900s if 1 key changed
save 300 10     # save after 300s if 10 keys changed

# Enable AOF logging
appendonly yes
appendfsync everysec  # sync to disk every second`,
      language: "text"
    },
    interviewTip: "Suggest using both mechanisms simultaneously for a production environment to get a balance of durability and speed.",
    commonMistakes: [
      "Leaving fsync set to 'always', which slows Redis down to disk speeds, negating its in-memory performance benefits."
    ]
  },

  // --- DBMS QUESTIONS ---
  {
    id: "dbms-1",
    categorySlug: "dbms",
    question: "What is Database Normalization? Describe 1NF, 2NF, and 3NF.",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "Normalization organizes tables to reduce data redundancy and eliminate insert/delete anomalies by splitting tables into smaller relations.",
    explanation: "Reviewing the normal forms:\n1. **1NF (First Normal Form)**: All columns must contain atomic (indivisible) values. No repeating groups.\n2. **2NF (Second Normal Form)**: Must be in 1NF and have no partial dependencies (no non-key column should depend on only a part of a composite primary key).\n3. **3NF (Third Normal Form)**: Must be in 2NF and have no transitive dependencies (non-key columns must not depend on other non-key columns).",
    codeExample: {
      code: `-- 2NF violation: composite key (StudentID, CourseID)
-- CourseName depends only on CourseID (partial dependency)
-- StudentTable(StudentID, CourseID, StudentName, CourseName)

-- Resolved to 2NF: Split into two tables
-- StudentRegistration(StudentID, CourseID, StudentName)
-- CourseDetails(CourseID, CourseName)`,
      language: "sql"
    },
    interviewTip: "Summarize normal forms using the popular phrase: 'The key, the whole key, and nothing but the key, so help me Codd.'",
    commonMistakes: [
      "Over-normalizing databases, which leads to too many JOIN queries, degrading read performance."
    ]
  },

  // --- OPERATING SYSTEMS QUESTIONS ---
  {
    id: "os-1",
    categorySlug: "os",
    question: "What is the difference between a Process and a Thread in an Operating System?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "A process is an independent executing program with its own dedicated memory space; a thread is a lightweight execution unit sharing the parent process's memory space.",
    explanation: "Key differences:\n1. **Memory Allocation**: Processes do not share memory; they communicate via IPC (Inter-Process Communication). Threads share heap memory, files, and static variables of their process.\n2. **Overhead**: Creating or context-switching processes is slow and resource-heavy. Switching threads is fast and lightweight.\n3. **Isolation**: If a process crashes, other processes continue. If a thread crashes (e.g. segmentation fault), the entire parent process terminates.",
    codeExample: {
      code: `// C Multi-threading thread creation
#include <pthread.h>
#include <stdio.h>

void* print_message(void* ptr) {
    printf("Hello from thread!\\n");
    return NULL;
}

int main() {
    pthread_t thread;
    pthread_create(&thread, NULL, print_message, NULL);
    pthread_join(thread, NULL);
    return 0;
}`,
      language: "c"
    },
    interviewTip: "Mention that because threads share memory, developers must use synchronization tools like mutexes or semaphores to avoid race conditions.",
    commonMistakes: [
      "Assuming multi-threading is always faster (on single-core CPUs, thread context-switching overhead can actually slow execution down)."
    ]
  },

  // --- COMPUTER NETWORKS QUESTIONS ---
  {
    id: "networks-1",
    categorySlug: "networks",
    question: "Explain the layers of the OSI model and their primary functions.",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "The OSI model is a 7-layer framework for network communication consisting of Physical, Data Link, Network, Transport, Session, Presentation, and Application layers.",
    explanation: "The 7 layers from bottom to top:\n1. **Physical**: Transmits raw bit streams over physical media (cables, radio).\n2. **Data Link**: Organizes data into frames, handles error detection (Ethernet, MAC addresses).\n3. **Network**: Handles packet routing and forwarding (IP protocol, routers).\n4. **Transport**: Ensures reliable end-to-end communication and packet assembly (TCP/UDP).\n5. **Session**: Manages connection dialogues between applications.\n6. **Presentation**: Formats, encrypts, and compresses data (SSL/TLS, JSON/XML).\n7. **Application**: Provides user interfaces to access network services (HTTP, FTP, DNS).",
    interviewTip: "Use the mnemonic 'Please Do Not Throw Sausage Pizza Away' to remember the layers in order from 1 to 7.",
    commonMistakes: [
      "Confusing routers (Network layer) with switches (Data Link layer).",
      "Placing HTTP or DNS at the Presentation layer (they are Application layer protocols)."
    ]
  },

  // --- DATA STRUCTURES QUESTIONS ---
  {
    id: "dsa-1",
    categorySlug: "dsa",
    question: "Compare Arrays and Linked Lists. What are their lookup and write complexities?",
    difficulty: "Beginner",
    type: "Concept",
    answer: "Arrays have O(1) random lookup and O(N) insert/delete shifts; Linked Lists have O(N) sequential search lookup and O(1) insert/delete node pointers.",
    explanation: "Trade-offs between structures:\n1. **Memory**: Arrays occupy a contiguous memory block (highly cache-friendly). Linked Lists store node values anywhere in memory, linked by pointer addresses (adds pointer memory overhead).\n2. **Access**: Arrays allow index access (\`arr[5]\`). Linked Lists must traverse node-by-node starting from head.\n3. **Resizing**: Arrays have a fixed size (dynamic arrays must allocate new blocks and copy elements). Linked Lists grow dynamically by linking pointers.",
    codeExample: {
      code: `// Linked List Node structure in TypeScript
class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  
  constructor(val: T) {
    this.value = val;
  }
}`,
      language: "typescript"
    },
    interviewTip: "Highlight that arrays are ideal when memory cache optimization and random index reading are important, while linked lists are preferred for frequent deletions.",
    commonMistakes: [
      "Using a linked list because 'insertions are O(1)' without realizing that finding the insertion index first takes O(N) traversal search."
    ]
  },

  // --- ALGORITHMS QUESTIONS ---
  {
    id: "algorithms-1",
    categorySlug: "algorithms",
    question: "Explain Binary Search and its time complexity.",
    difficulty: "Beginner",
    type: "Concept",
    answer: "Binary Search is an O(log N) search algorithm that repeatedly divides a sorted search interval in half to locate a target value.",
    explanation: "Binary Search requires the array to be sorted first. It works by checking the middle element. If the target is equal to the middle element, the search completes. If the target is smaller, the search continues in the left half; if larger, it continues in the right half. Because the size of the search space is halved in each step, the complexity is logarithmic: O(log N).",
    codeExample: {
      code: `function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Not found
}`,
      language: "typescript"
    },
    interviewTip: "When writing mid calculations, use \`left + (right - left) / 2\` instead of \`(left + right) / 2\` to prevent integer overflow bugs in languages like C/Java.",
    commonMistakes: [
      "Applying binary search on an unsorted array.",
      "Incorrect loop termination condition (using \`left < right\` instead of \`left <= right\`), which misses target checks on single element intervals."
    ]
  },

  // --- OOP QUESTIONS ---
  {
    id: "oop-1",
    categorySlug: "oop",
    question: "Describe the SOLID design principles in Object-Oriented Programming.",
    difficulty: "Intermediate",
    type: "Concept",
    answer: "SOLID is an acronym for five design principles that make software designs more understandable, flexible, and maintainable.",
    explanation: "The principles are:\n1. **S - Single Responsibility Principle (SRP)**: A class should have one, and only one, reason to change.\n2. **O - Open/Closed Principle (OCP)**: Software entities should be open for extension, but closed for modification.\n3. **L - Liskov Substitution Principle (LSP)**: Subtypes must be substitutable for their base types without altering correctness.\n4. **I - Interface Segregation Principle (ISP)**: Clients should not be forced to depend on interfaces they do not use.\n5. **D - Dependency Inversion Principle (DIP)**: Depend on abstractions, not on concrete implementations.",
    codeExample: {
      code: `// Open/Closed Principle Violation: modifying class for new shapes
class AreaCalculator {
  calculateCircleArea(circle) { /* ... */ }
  calculateSquareArea(square) { /* ... */ }
}

// Open/Closed Principle Adherence: extend shapes, don't modify calculator
interface Shape {
  calculateArea(): number;
}
class Circle implements Shape {
  calculateArea() { return Math.PI * this.radius * this.radius; }
}
class Square implements Shape {
  calculateArea() { return this.side * this.side; }
}`,
      language: "typescript"
    },
    interviewTip: "Connect the SOLID principles to real-world code architecture. For example, explain how React components or dependency injection frameworks use DIP.",
    commonMistakes: [
      "Over-engineering simple code to fit all SOLID principles prematurely."
    ]
  },

  // --- BEHAVIORAL QUESTIONS ---
  {
    id: "behavioral-1",
    categorySlug: "behavioral",
    question: "Describe a time when you faced a conflict with a teammate and how you resolved it.",
    difficulty: "Intermediate",
    type: "Scenario",
    answer: "I resolve conflicts by separating the problem from the person, conducting private data-driven discussions, running testing prototypes, and committing to team goals once a decision is made.",
    explanation: "Structuring the response with the **STAR Method**:\n- **Situation**: During a feature launch, my senior teammate and I disagreed on whether to use SQL or NoSQL to store audit logs.\n- **Task**: We needed to build the log table immediately to hit our sprint deployment deadline.\n- **Action**: Instead of arguing, I scheduled a 15-minute sync. I listed the query latency and write throughput requirements. We wrote a quick 1-page POC for both options. SQL demonstrated better security auditing constraints.\n- **Result**: We chose SQL, completed the feature 2 days early, and established a standard architectural logging design guide for the team.",
    interviewTip: "Never badmouth colleagues! Focus on how the process was resolved collaboratively and what lessons you learned.",
    commonMistakes: [
      "Sounding defensive, blaming others, or claiming you have never had conflicts."
    ]
  },

  // --- APTITUDE QUESTIONS ---
  {
    id: "aptitude-1",
    categorySlug: "aptitude",
    question: "You have two ropes. Each takes exactly 60 minutes to burn from end to end, but they burn inconsistently. How do you measure exactly 45 minutes?",
    difficulty: "Advanced",
    type: "Scenario",
    answer: "Light both ends of Rope A and one end of Rope B. When Rope A completes burning (30 mins), light the other end of Rope B. When Rope B finishes burning, exactly 45 minutes have elapsed.",
    explanation: "Step-by-step logic:\n1. **Start (0 mins)**: Light Rope A at both ends (A1 and A2) and Rope B at one end (B1). Because Rope A is burning from both ends, it will take exactly 30 minutes to burn completely, regardless of inconsistencies.\n2. **Rope A finishes (30 mins)**: Exactly 30 minutes have passed. Rope B, which was burning from one end, has exactly 30 minutes of burn time remaining.\n3. **Action (30 mins)**: Light the other end of Rope B (B2). Since Rope B is now burning from both ends, its remaining 30 minutes of burn time will be consumed in exactly 15 minutes.\n4. **End (45 mins)**: When Rope B completely burns out, exactly 30 + 15 = 45 minutes have elapsed.",
    interviewTip: "Puzzles evaluate structured critical thinking. Speak your logical steps out loud so the interviewer can follow your brain workflow.",
    commonMistakes: [
      "Assuming the ropes burn at a uniform speed (e.g. cutting a rope in half to measure 30 minutes)."
    ]
  }
];

const techDetails: Record<string, {
  subject: string;
  alternative: string;
  keyFeature: string;
  commandOrSnippet: string;
  useCase: string;
  extension: string;
  architectureComponent: string;
}> = {
  react: {
    subject: "React",
    alternative: "Angular or Vue",
    keyFeature: "components and hooks",
    commandOrSnippet: "const [state, setState] = useState(initial);",
    useCase: "building modern interactive web user interfaces",
    extension: ".jsx or .tsx",
    architectureComponent: "the Virtual DOM and Reconciliation"
  },
  javascript: {
    subject: "JavaScript",
    alternative: "Java or Python",
    keyFeature: "dynamic typing and prototype inheritance",
    commandOrSnippet: "const result = arr.map(x => x * 2);",
    useCase: "adding interactivity to web pages and backend APIs",
    extension: ".js",
    architectureComponent: "the Event Loop and Call Stack"
  },
  typescript: {
    subject: "TypeScript",
    alternative: "JavaScript",
    keyFeature: "static types and interface declarations",
    commandOrSnippet: "interface User { id: number; name: string; }",
    useCase: "adding static typing to JavaScript projects",
    extension: ".ts or .tsx",
    architectureComponent: "the TypeScript Compiler (tsc)"
  },
  nextjs: {
    subject: "Next.js",
    alternative: "Create React App or Remix",
    keyFeature: "Server Components and App Routing",
    commandOrSnippet: "export default async function Page() { ... }",
    useCase: "building search-engine optimized, production-ready React apps",
    extension: ".tsx",
    architectureComponent: "the Next.js routing and caching engine"
  },
  nodejs: {
    subject: "Node.js",
    alternative: "Python or Go",
    keyFeature: "non-blocking event-driven execution runtime",
    commandOrSnippet: "const http = require('http');",
    useCase: "running server-side JavaScript applications",
    extension: ".js",
    architectureComponent: "the Chrome V8 engine and libuv"
  },
  sql: {
    subject: "SQL",
    alternative: "NoSQL databases",
    keyFeature: "relational tables and strict relational schema models",
    commandOrSnippet: "SELECT * FROM Users WHERE id = 1;",
    useCase: "managing structured relational database tables",
    extension: ".sql",
    architectureComponent: "the query execution planner"
  },
  html: {
    subject: "HTML",
    alternative: "XML or Markdown",
    keyFeature: "semantic tags and elements structure layouts",
    commandOrSnippet: "<article><h1>Heading</h1></article>",
    useCase: "defining structural layout designs of webpages",
    extension: ".html",
    architectureComponent: "the browser DOM parser"
  },
  css: {
    subject: "CSS",
    alternative: "CSS-in-JS libraries",
    keyFeature: "stylesheets cascade and selectors layout system",
    commandOrSnippet: "body { display: flex; color: #fff; }",
    useCase: "styling and configuring visual look layouts of webpages",
    extension: ".css",
    architectureComponent: "the browser style rendering engine"
  },
  git: {
    subject: "Git",
    alternative: "SVN or Mercurial",
    keyFeature: "distributed commits history branch system",
    commandOrSnippet: "git commit -m 'initial commit'",
    useCase: "tracking code revisions and branching development workflows",
    extension: "git configuration files",
    architectureComponent: "the Git object database containing blobs and trees"
  },
  aws: {
    subject: "AWS",
    alternative: "Google Cloud or Azure",
    keyFeature: "scalable cloud virtual services infrastructure",
    commandOrSnippet: "aws s3 sync ./dist s3://my-bucket",
    useCase: "hosting and deploying cloud web-scale systems",
    extension: "AWS templates",
    architectureComponent: "the AWS cloud console API"
  },
  sysdesign: {
    subject: "System Design",
    alternative: "monolithic application coding",
    keyFeature: "distributing database sharding and load balancers scaling",
    commandOrSnippet: "caching-layer/redis-replica-set",
    useCase: "designing robust high-throughput web scales",
    extension: "system architecture blueprints",
    architectureComponent: "the load balancing and caching cluster"
  },
  hr: {
    subject: "HR Interviews",
    alternative: "coding algorithm rounds",
    keyFeature: "cultural fits, work ethic, and behavioral communication templates",
    commandOrSnippet: "present-past-future formulation",
    useCase: "evaluating professional soft skills and teamwork fits",
    extension: "behavioral resume records",
    architectureComponent: "the HR assessment framework"
  },
  expressjs: {
    subject: "Express.js",
    alternative: "Koa or Fastify",
    keyFeature: "routing and middleware processing flow",
    commandOrSnippet: "app.use('/api', apiRouter);",
    useCase: "building Node.js backend APIs and routing tables",
    extension: ".js or .ts",
    architectureComponent: "the Express router table stack"
  },
  "tailwind-css": {
    subject: "Tailwind CSS",
    alternative: "Bootstrap or custom styled components",
    keyFeature: "utility-first CSS classes styles design system",
    commandOrSnippet: "<div className='flex items-center p-4 bg-slate-900'>",
    useCase: "styling fast responsive web interfaces directly in code templates",
    extension: "tailwind.config.ts",
    architectureComponent: "the Tailwind CSS JIT (Just-In-Time) compilation parser"
  },
  bootstrap: {
    subject: "Bootstrap",
    alternative: "Tailwind CSS or custom CSS grids",
    keyFeature: "pre-designed utility layouts and responsive grid columns system",
    commandOrSnippet: "<div className='container-fluid row col-md-6'>",
    useCase: "rapidly prototyping pre-styled layouts and mobile-first grids",
    extension: ".css",
    architectureComponent: "the Bootstrap Flexbox stylesheet framework"
  },
  python: {
    subject: "Python",
    alternative: "JavaScript or Java",
    keyFeature: "clean readability indentation blocks and generators",
    commandOrSnippet: "def get_even_numbers(numbers): return [x for x in numbers if x % 2 == 0]",
    useCase: "developing web backends, scripts, and data pipelines",
    extension: ".py",
    architectureComponent: "the Python Interpreter runtime engine and the GIL"
  },
  java: {
    subject: "Java",
    alternative: "C# or C++",
    keyFeature: "JVM cross-platform class execution compile framework",
    commandOrSnippet: "public class Main { public static void main(String[] args) {} }",
    useCase: "building enterprise backend applications and Android engines",
    extension: ".java",
    architectureComponent: "the Java Virtual Machine (JVM) heap and Garbage Collector"
  },
  c: {
    subject: "C Programming",
    alternative: "C++ or Rust",
    keyFeature: "low-level direct pointer memory allocations",
    commandOrSnippet: "int *ptr = (int*) malloc(sizeof(int));",
    useCase: "systems programming, kernels, and micro-controllers",
    extension: ".c and .h",
    architectureComponent: "the C compiler stack and physical memory offsets"
  },
  cpp: {
    subject: "C++",
    alternative: "C or Rust",
    keyFeature: "object-oriented systems classes and smart pointers",
    commandOrSnippet: "std::unique_ptr<User> user = std::make_unique<User>();",
    useCase: "game engines, high-frequency trade systems, and low-level drivers",
    extension: ".cpp and .hpp",
    architectureComponent: "the C++ virtual table and RAII compiler boundaries"
  },
  mongodb: {
    subject: "MongoDB",
    alternative: "relational databases (MySQL/PostgreSQL)",
    keyFeature: "document BSON database fields scaling",
    commandOrSnippet: "db.users.insertOne({ name: 'Alice', age: 25 });",
    useCase: "storing semi-structured documents and fast JSON configurations",
    extension: "BSON payload formats",
    architectureComponent: "the MongoDB wiredTiger engine"
  },
  postgresql: {
    subject: "PostgreSQL",
    alternative: "MySQL or Oracle DB",
    keyFeature: "object-relational queries indexes and JSONB values",
    commandOrSnippet: "CREATE INDEX idx_user_data ON users USING gin (data);",
    useCase: "storing enterprise transactional databases and spatial datasets",
    extension: ".sql",
    architectureComponent: "the Postgres MVCC transactional engine"
  },
  mysql: {
    subject: "MySQL",
    alternative: "PostgreSQL or Microsoft SQL Server",
    keyFeature: "reliable database schemas and storage engine choices",
    commandOrSnippet: "CREATE TABLE users (id INT PRIMARY KEY) ENGINE=InnoDB;",
    useCase: "managing standard web application databases and relational schemas",
    extension: ".sql",
    architectureComponent: "the InnoDB transaction database engine"
  },
  github: {
    subject: "GitHub",
    alternative: "GitLab or BitBucket",
    keyFeature: "cloud repository hosting pull requests reviews and CI workflows",
    commandOrSnippet: "uses: actions/checkout@v4",
    useCase: "hosting git repository versions and automating CI/CD deployments",
    extension: ".yaml workflow files",
    architectureComponent: "the GitHub Actions runner automation host"
  },
  docker: {
    subject: "Docker",
    alternative: "Virtual Machines",
    keyFeature: "isolated application container packages",
    commandOrSnippet: "docker build -t my-app-image .",
    useCase: "packaging applications with all libraries and runtimes safely",
    extension: "Dockerfile",
    architectureComponent: "the Docker daemon and container namespace isolation"
  },
  kubernetes: {
    subject: "Kubernetes",
    alternative: "Docker Swarm or HashiCorp Nomad",
    keyFeature: "orchestrating clusters of container pods autoscaling",
    commandOrSnippet: "kubectl get pods --namespace=production",
    useCase: "managing large production container grids and deployments",
    extension: ".yaml configuration files",
    architectureComponent: "the Kubernetes Control Plane API and Worker Nodes"
  },
  azure: {
    subject: "Microsoft Azure",
    alternative: "Amazon Web Services (AWS)",
    keyFeature: "cloud subscriptions portal Virtual Machines and active directory",
    commandOrSnippet: "az group create --name myResourceGroup",
    useCase: "deploying cloud apps and enterprise virtual storage",
    extension: "Azure templates",
    architectureComponent: "the Microsoft Entra ID database"
  },
  linux: {
    subject: "Linux",
    alternative: "Windows or macOS",
    keyFeature: "command line shells processes pipes permissions files",
    commandOrSnippet: "chmod +x script.sh && ./script.sh",
    useCase: "powering cloud server systems, databases, and developers environments",
    extension: "shell script scripts",
    architectureComponent: "the Linux Kernel and system space"
  },
  "rest-api": {
    subject: "REST APIs",
    alternative: "GraphQL or gRPC",
    keyFeature: "standard HTTP methods status code URLs endpoints",
    commandOrSnippet: "GET /api/v1/users/123 HTTP/1.1",
    useCase: "connecting frontend applications with backend server databases",
    extension: "HTTP JSON endpoints",
    architectureComponent: "the HTTP request-response engine"
  },
  graphql: {
    subject: "GraphQL",
    alternative: "REST APIs or gRPC",
    keyFeature: "requesting exact custom fields types query resolvers",
    commandOrSnippet: "query { user(id: 123) { name email } }",
    useCase: "building flexible client-driven APIs that prevent data over-fetching",
    extension: "GraphQL schemas",
    architectureComponent: "the GraphQL execution engine and resolvers mapping"
  },
  redis: {
    subject: "Redis",
    alternative: "Memcached",
    keyFeature: "fast in-memory key-value caching strings sets structures",
    commandOrSnippet: "SET user:123 '{ \"name\": \"Alice\" }' EX 3600",
    useCase: "caching database queries, tracking sessions, and limiting API rates",
    extension: "Redis databases",
    architectureComponent: "the Redis memory dataset and persistence engine"
  },
  dbms: {
    subject: "DBMS",
    alternative: "flat file storage systems",
    keyFeature: "relational normalization keys transactions consistency",
    commandOrSnippet: "PRIMARY KEY (StudentID)",
    useCase: "structuring transactional database models and normal forms",
    extension: "database schema tables",
    architectureComponent: "the Database management system database"
  },
  os: {
    subject: "Operating Systems",
    alternative: "bare metal coding execution",
    keyFeature: "allocating CPU resources threads scheduling memory paging",
    commandOrSnippet: "pthread_create(&thread_id, NULL, worker, NULL);",
    useCase: "managing physical CPU execution bounds and filesystem accesses",
    extension: "system threads and loops",
    architectureComponent: "the OS Scheduler, Virtual Memory pager, and kernel"
  },
  networks: {
    subject: "Computer Networks",
    alternative: "single-computer systems",
    keyFeature: "connecting networks OSI layers TCP handshake routing packet transmissions",
    commandOrSnippet: "SYN -> SYN-ACK -> ACK",
    useCase: "transmitting data packets reliably across global routers",
    extension: "network packets",
    architectureComponent: "the TCP/IP stack layers"
  },
  dsa: {
    subject: "Data Structures",
    alternative: "primitive data variables",
    keyFeature: "storing values in dynamic linked lists hash maps heaps",
    commandOrSnippet: "const node = new ListNode(val);",
    useCase: "structuring memory values efficiently for algorithmic processes",
    extension: "data structures models",
    architectureComponent: "the memory heap address allocation"
  },
  algorithms: {
    subject: "Algorithms",
    alternative: "brute force loops",
    keyFeature: "calculating time space complexity Big O notation sorting arrays",
    commandOrSnippet: "while (left <= right) { const mid = left + (right - left) / 2; }",
    useCase: "optimizing code executions speeds and space constraints",
    extension: "algorithmic logic structures",
    architectureComponent: "the processor execution loop counter"
  },
  oop: {
    subject: "OOP",
    alternative: "Procedural programming",
    keyFeature: "defining classes inheritance encapsulation polymorphism abstraction SOLID",
    commandOrSnippet: "class Circle implements Shape { calculateArea() {} }",
    useCase: "designing modular, scalable object-oriented software patterns",
    extension: "object classes definitions",
    architectureComponent: "the Object runtime instance model"
  },
  behavioral: {
    subject: "Behavioral Interviews",
    alternative: "pure technical tests",
    keyFeature: "structuring situational answers using STAR method stories templates",
    commandOrSnippet: "STAR: Situation, Task, Action, Result",
    useCase: "demonstrating teamwork, project leadership, and conflict resolutions",
    extension: "experience record guides",
    architectureComponent: "the STAR template methodology"
  },
  aptitude: {
    subject: "Aptitude Puzzles",
    alternative: "standard math exams",
    keyFeature: "solving logical reasoning riddles quantitative numbers patterns",
    commandOrSnippet: "lighting both ends of a 60-minute rope",
    useCase: "screening initial cognitive problem solving speeds in developer evaluations",
    extension: "aptitude puzzle sheets",
    architectureComponent: "the logical deductive reasoning process"
  }
};

const beginnerTemplates = [
  {
    question: "What is [subject] and what is it used for?",
    answer: "[subject] is a tool used for [useCase].",
    explanation: "In simple terms, [subject] helps developers build their projects. Its main feature is [keyFeature], which simplifies development compared to [alternative]. It is widely used in [useCase].",
    type: "Concept" as const,
    interviewTip: "Focus on how [subject] makes development faster and more reliable compared to [alternative].",
    commonMistakes: ["Confusing [subject] with [alternative] for projects.", "Not knowing the basic commands of [subject]."]
  },
  {
    question: "How do you start a new project with [subject]?",
    answer: "You start a project by setting up configuration and files with the [extension] extension.",
    explanation: "Setting up [subject] is simple. You create files using the [extension] extension and run basic command codes like `[commandOrSnippet]`.",
    type: "Concept" as const,
    interviewTip: "Always mention that starting with clean file layouts is a best practice for [subject].",
    commonMistakes: ["Using incorrect file extensions instead of [extension].", "Skipping initial configuration steps."]
  },
  {
    question: "What is the main advantage of using [subject]?",
    answer: "The main advantage is [keyFeature] which makes code clean and easy to maintain.",
    explanation: "By using [subject], teams get better code speed, easier debugging, and reusable modules. It saves time compared to [alternative].",
    type: "Concept" as const,
    interviewTip: "Emphasize that [keyFeature] is why companies choose [subject] for production sites.",
    commonMistakes: ["Not taking advantage of [keyFeature] and writing repetitive code."]
  },
  {
    question: "What file extension is used for [subject] files?",
    answer: "Files associated with [subject] typically use the [extension] file extension.",
    explanation: "The [extension] extension helps your operating system and code editor recognize [subject] files. This enables syntax highlighting and code suggestions.",
    type: "Concept" as const,
    interviewTip: "Mention that files in [subject] are organized cleanly in folders to make development easier.",
    commonMistakes: ["Naming files with wrong extensions, causing execution errors."]
  },
  {
    question: "Is [subject] easy to learn for beginners?",
    answer: "Yes, [subject] is beginner-friendly because it has clear rules and a massive community.",
    explanation: "Anyone with basic coding knowledge can learn [subject]. You start by writing simple files and running basic commands. It is widely used in [useCase].",
    type: "Concept" as const,
    interviewTip: "Explain that learning the fundamentals of [subject] makes it easy to pick up advanced concepts later.",
    commonMistakes: ["Overcomplicating the setup when starting out."]
  },
  {
    question: "What is a key feature of [subject]?",
    answer: "A key feature is [keyFeature], which helps structure your projects.",
    explanation: "[keyFeature] is central to how [subject] works. It allows you to build reliable applications and saves you from writing repetitive code.",
    type: "Concept" as const,
    interviewTip: "Be ready to explain how [keyFeature] works in detail during your interview.",
    commonMistakes: ["Trying to build features without understanding how [keyFeature] works."]
  },
  {
    question: "How does [subject] compare to [alternative]?",
    answer: "[subject] is often simpler and faster for [useCase] compared to [alternative].",
    explanation: "While [alternative] has its own benefits, many teams choose [subject] because it is lighter, has better documentation, and focuses on [keyFeature].",
    type: "Concept" as const,
    interviewTip: "Focus on the practical trade-offs between [subject] and [alternative] rather than saying one is always better.",
    commonMistakes: ["Assuming [subject] is always the best tool for every single project type."]
  },
  {
    question: "Where does [subject] run?",
    answer: "[subject] runs in environments related to [useCase], such as servers, browsers, or cloud platforms.",
    explanation: "Depending on your project setup, [subject] executes code to help process data or display user screens. It connects cleanly with other standard tools.",
    type: "Concept" as const,
    interviewTip: "Understand where [subject] fits in the frontend or backend of your stack.",
    commonMistakes: ["Running [subject] code in environments where it is not supported."]
  },
  {
    question: "Can you write comments in [subject] files?",
    answer: "Yes, you can write comments to explain your code, which are ignored during execution.",
    explanation: "Comments are useful for explaining how a block of code works. In [subject], comments help team members collaborate without affecting the application.",
    type: "Concept" as const,
    interviewTip: "Mention that writing clean comments is part of writing maintainable code in [subject].",
    commonMistakes: ["Writing too many comments that state the obvious instead of explaining why the code exists."]
  },
  {
    question: "How do you check the version of [subject] installed?",
    answer: "You check the version by running a version command in your command line terminal.",
    explanation: "Running a command like `[subject] --version` tells you which version is currently installed. Keeping [subject] updated ensures you have the latest security patches.",
    type: "Concept" as const,
    interviewTip: "Know the terminal command to check the version of the tooling you use.",
    commonMistakes: ["Running outdated versions of [subject] that contain security issues."]
  },
  {
    question: "Who should learn [subject]?",
    answer: "Anyone who wants to work in [useCase] should master [subject].",
    explanation: "[subject] is a key skill in modern software engineering. It is used by frontend developers, backend developers, and systems teams worldwide.",
    type: "Concept" as const,
    interviewTip: "Highlight your experience using [subject] in your resume for roles related to [useCase].",
    commonMistakes: ["Ignoring [subject] if you are planning to specialize in [useCase]."]
  },
  {
    question: "What is the role of [architectureComponent] in [subject]?",
    answer: "It serves as a core part of the system that manages execution and handles [keyFeature].",
    explanation: "[architectureComponent] is the engine behind [subject]. It processes your files, executes instructions, and makes sure everything runs smoothly.",
    type: "Concept" as const,
    interviewTip: "Understanding how [architectureComponent] works under the hood is a great way to stand out in interviews.",
    commonMistakes: ["Treating [architectureComponent] as a magic black box without learning its core execution steps."]
  },
  {
    question: "How do you fix basic errors in [subject]?",
    answer: "You fix basic errors by reading the terminal error messages and checking your syntax.",
    explanation: "Errors are normal when coding. [subject] provides clear error logs in the console. Reading these messages helps you identify the exact line of code that caused the problem.",
    type: "Concept" as const,
    interviewTip: "Explain your debugging process: read error logs, check code logic, and test inputs.",
    commonMistakes: ["Panicking and changing code randomly instead of reading the error message in the console."]
  },
  {
    question: "What is a library or package in [subject]?",
    answer: "A package is pre-written code that you can import to add features to [subject] without writing them yourself.",
    explanation: "The community builds packages for [subject] that handle common tasks like database connections, styling, or mathematical calculations. You can install them with simple package managers.",
    type: "Concept" as const,
    interviewTip: "Mention popular libraries in the [subject] ecosystem that you have worked with.",
    commonMistakes: ["Writing complex code from scratch when a highly optimized package already exists."]
  },
  {
    question: "Is [subject] open source?",
    answer: "Yes, [subject] is open source and free to use for personal and commercial projects.",
    explanation: "Being open source means the source code of [subject] is public. Developers around the world contribute to its growth, making it highly secure and feature-rich.",
    type: "Concept" as const,
    interviewTip: "Mentioning that you follow open-source updates shows you stay active in the developer community.",
    commonMistakes: ["Thinking you need a commercial license to run [subject] in production."]
  },
  {
    question: "What is the basic structure of a [subject] project?",
    answer: "A basic project contains configuration files, code directories, and dependency trackers.",
    explanation: "Organizing your files helps maintain the project as it grows. With [subject], you typically have a main entry file and sub-folders for components or logic.",
    type: "Concept" as const,
    interviewTip: "A clean folder structure makes it easier for teams to collaborate on [subject] projects.",
    commonMistakes: ["Putting all your code in a single massive file, making it hard to maintain."]
  },
  {
    question: "What is the community like for [subject]?",
    answer: "The community is massive and active, with millions of tutorials and forums online.",
    explanation: "If you get stuck while coding in [subject], you can easily find answers on Stack Overflow, GitHub, or Reddit. There are thousands of free guides available.",
    type: "Concept" as const,
    interviewTip: "Knowing how to search the community docs for answers is a key skill for any developer.",
    commonMistakes: ["Spending hours stuck on a problem without searching online, where the solution is already documented."]
  },
  {
    question: "Does [subject] require compile steps?",
    answer: "It depends on your configuration, but [subject] projects can often run directly or use a quick bundler.",
    explanation: "Some languages compile code to binary, while others interpret it on the fly. [subject] fits nicely into modern workflows, offering instant reloads during development.",
    type: "Concept" as const,
    interviewTip: "Understand if your specific [subject] environment uses JIT compiling or ahead-of-time building.",
    commonMistakes: ["Forgetting to run the build step before deploying [subject] code to production."]
  },
  {
    question: "How do you update [subject] to the latest version?",
    answer: "You update it using your package manager or by downloading the latest installer from the official website.",
    explanation: "Staying updated is important. New versions of [subject] offer better performance, new features, and bug fixes.",
    type: "Concept" as const,
    interviewTip: "Always check for breaking changes in the release notes before updating [subject] in production.",
    commonMistakes: ["Updating [subject] blindly without testing if it breaks existing features in your app."]
  },
  {
    question: "Can you use [subject] for small personal projects?",
    answer: "Yes, [subject] is excellent for small projects because it is lightweight and quick to configure.",
    explanation: "You don't need a huge setup to use [subject]. It scales from simple single-file scripts up to enterprise platforms.",
    type: "Concept" as const,
    interviewTip: "Having small personal projects built with [subject] on your GitHub is a great way to impress interviewers.",
    commonMistakes: ["Thinking [subject] is only for enterprise systems and avoiding it for small helper tools."]
  }
];

const intermediateTemplates = [
  {
    question: "How do you handle variables and state in [subject]?",
    answer: "Variables and state are managed using tools like `[commandOrSnippet]` to track data changes.",
    explanation: "State represents data that can change over time. In [subject], managing state correctly prevents errors and ensures your application shows the latest information.",
    type: "Concept" as const,
    interviewTip: "Explain that state management keeps the UI and business logic in sync safely.",
    commonMistakes: ["Modifying state directly without using the correct update functions."]
  },
  {
    question: "What are some best practices for organizing [subject] code?",
    answer: "Best practices include splitting code into small reusable modules and keeping files focused on a single task.",
    explanation: "As your [subject] project grows, monolithic files become hard to read. Grouping related logic together makes testing and editing much easier.",
    type: "Concept" as const,
    interviewTip: "Mention that decoupling modules makes code reviews and collaborative development much cleaner.",
    commonMistakes: ["Writing massive, tightly-coupled files that are hard to debug."]
  },
  {
    question: "How do you test applications built with [subject]?",
    answer: "You test them using automated testing frameworks that run unit tests on your code.",
    explanation: "Testing ensures that making changes doesn't break existing features. You can write scripts that mock inputs and assert correct outputs in [subject].",
    type: "Concept" as const,
    interviewTip: "A high test coverage ensures developers can refactor code with confidence.",
    commonMistakes: ["Skipping tests entirely or only testing the happy path."]
  },
  {
    question: "Explain how [subject] handles asynchronous tasks.",
    answer: "It handles asynchronous tasks using promises, async/await, or background workers to prevent blocking the main thread.",
    explanation: "Asynchronous execution allows [subject] to perform heavy operations like fetching data from a database or API without freezing the user interface.",
    type: "Concept" as const,
    interviewTip: "Always explain how asynchronous code helps maintain a smooth and interactive user experience.",
    commonMistakes: ["Forgetting to handle potential failures in asynchronous calls, causing unhandled errors."]
  },
  {
    question: "What is the performance cost of [keyFeature] in [subject]?",
    answer: "The performance cost is usually low, but can increase if modules are poorly structured or re-rendered too often.",
    explanation: "While [keyFeature] makes development simple, it adds memory overhead. Optimizing your code structure ensures that [subject] runs at maximum speed.",
    type: "Concept" as const,
    interviewTip: "Show that you care about performance by mentioning profiling tools and caching.",
    commonMistakes: ["Applying optimizations too early before identifying actual bottlenecks."]
  },
  {
    question: "How do you secure configurations in [subject]?",
    answer: "You secure configurations by storing sensitive data (like API keys) in environment variables rather than hardcoding them.",
    explanation: "Hardcoding secrets in your files is dangerous because they can be leaked in version control. Storing them in environmental files keeps them secure.",
    type: "Concept" as const,
    interviewTip: "Never commit API keys or passwords to public repositories; always use secrets managers.",
    commonMistakes: ["Committing raw credentials directly to GitHub repositories."]
  },
  {
    question: "What is the role of [architectureComponent] during rendering/execution?",
    answer: "[architectureComponent] processes the inputs and coordinates the lifecycle updates of [subject].",
    explanation: "Understanding [architectureComponent] helps you write efficient code. It is responsible for parsing instructions and applying updates safely.",
    type: "Concept" as const,
    interviewTip: "Deep knowledge of [architectureComponent] shows you are a mid-level developer who understands the system internals.",
    commonMistakes: ["Triggering too many updates that overload [architectureComponent]."]
  },
  {
    question: "How do you integrate [subject] with databases?",
    answer: "You integrate it using official drivers or libraries that establish secure database connections.",
    explanation: "Most applications need to store data. [subject] connects to SQL or NoSQL databases to run queries, save records, and fetch information dynamically.",
    type: "Concept" as const,
    interviewTip: "Explain how using an Object-Relational Mapper (ORM) simplifies database operations in [subject].",
    commonMistakes: ["Opening too many database connections without closing them, leading to pool exhaustion."]
  },
  {
    question: "What is the difference between compiler options in [subject]?",
    answer: "Compiler options change how your source files are optimized, formatted, and packaged.",
    explanation: "By modifying configuration files, you can target specific platforms, enable strict type checking, or compress files to improve load speeds.",
    type: "Concept" as const,
    interviewTip: "Know the primary compiler files, such as tsconfig.json or tailwind.config.ts, and what they do.",
    commonMistakes: ["Leaving strict compiler settings turned off, allowing bugs to pass into production."]
  },
  {
    question: "How do you handle routing in a [subject] application?",
    answer: "Routing is managed using built-in URL parsers or library routers to map URLs to specific code paths.",
    explanation: "Routing directs users to different sections of your application based on their path. [subject] uses clean routes to load views dynamically.",
    type: "Concept" as const,
    interviewTip: "Clean URL routing is crucial for SEO and user experience.",
    commonMistakes: ["Creating overly complex nested routes that are hard to navigate and index."]
  },
  {
    question: "How do you profile memory usage in [subject]?",
    answer: "You profile memory using browser devtools or built-in system profilers to find memory leaks.",
    explanation: "Memory leaks happen when code retains references to unused objects. Profiling helps you find where memory is rising and optimize your code.",
    type: "Concept" as const,
    interviewTip: "Explain that checking memory usage is a regular part of pre-release performance audits.",
    commonMistakes: ["Ignoring memory profiling until the server crashes in production."]
  },
  {
    question: "What are decorators or utility functions in [subject]?",
    answer: "They are helpers that modify class or function behavior without duplicating code.",
    explanation: "Using utilities in [subject] keeps your codebase clean. It allows you to add features like logging or timing with minimal changes.",
    type: "Concept" as const,
    interviewTip: "Explain how reusable utilities reduce code duplication across the system.",
    commonMistakes: ["Creating custom utility helpers when standard built-in options exist."]
  },
  {
    question: "How do you scale [subject] for high traffic?",
    answer: "You scale it by implementing caching, clustering, and horizontal scaling across multiple servers.",
    explanation: "When traffic grows, a single server might fail. Running multiple instances of [subject] and caching query results resolves performance bottlenecks.",
    type: "Concept" as const,
    interviewTip: "Understand that scaling starts with caching before adding more server instances.",
    commonMistakes: ["Adding expensive server hardware instead of optimizing slow database queries first."]
  },
  {
    question: "What is dynamic code loading in [subject]?",
    answer: "It is loading code modules on-demand (lazy loading) rather than loading everything at startup.",
    explanation: "Lazy loading improves initial load times. [subject] loads code only when a user navigates to a section that requires it.",
    type: "Concept" as const,
    interviewTip: "Lazy loading is a great technique to optimize Core Web Vitals score metrics.",
    commonMistakes: ["Loading massive, unused modules at startup, which increases initial page load lag."]
  },
  {
    question: "How do you handle file uploads in [subject]?",
    answer: "You handle file uploads using multi-part form handlers that stream files safely to storage.",
    explanation: "Handling files requires care to prevent server crashes. [subject] streams uploads in chunks to optimize memory usage.",
    type: "Concept" as const,
    interviewTip: "Always validate file sizes and mime-types to protect the system from malicious uploads.",
    commonMistakes: ["Uploading massive files directly into memory, which can crash the server."]
  },
  {
    question: "How does [subject] manage package dependencies?",
    answer: "It manages dependencies using a lock file that records exact version installations.",
    explanation: "A lock file ensures that every developer on the team installs the exact same packages, preventing 'works on my machine' bugs.",
    type: "Concept" as const,
    interviewTip: "Always commit package lock files to version control to guarantee consistent builds.",
    commonMistakes: ["Deleting lock files or not committing them, leading to mismatch builds in CI."]
  },
  {
    question: "Explain the concept of middleware in [subject].",
    answer: "Middleware is code that executes sequentially between a request trigger and the final handler.",
    explanation: "Middleware is great for general checks like authentication, logging, or input validation. It runs automatically before the main code executes.",
    type: "Concept" as const,
    interviewTip: "Middleware is extremely useful for modular security checking.",
    commonMistakes: ["Placing too many heavy database queries inside middleware, slowing down every single request."]
  },
  {
    question: "How do you configure CORS in [subject]?",
    answer: "You configure CORS by setting headers that allow or block requests from external domains.",
    explanation: "Cross-Origin Resource Sharing (CORS) is a browser security feature. Setting it correctly in [subject] protects your data from unauthorized external sites.",
    type: "Concept" as const,
    interviewTip: "Configure CORS to only allow trusted domains, never use wildcard '*' in production.",
    commonMistakes: ["Allowing all origins in production, which exposes APIs to csrf vulnerabilities."]
  },
  {
    question: "What is the difference between local and global variables in [subject]?",
    answer: "Local variables exist only inside their block/function, while global variables are accessible anywhere in the project.",
    explanation: "Using global variables is generally discouraged because they can lead to naming collisions. Local variables are safer and easier to track.",
    type: "Concept" as const,
    interviewTip: "Keeping scopes small is a fundamental best practice for clean software architecture.",
    commonMistakes: ["Using global variables to share data instead of using proper parameter passing."]
  },
  {
    question: "How do you handle API errors gracefully in [subject]?",
    answer: "You handle them using try-catch blocks and returning standard HTTP error codes or user-friendly messages.",
    explanation: "If a database query or external API fails, you don't want the app to crash. Catching errors in [subject] keeps the application stable.",
    type: "Concept" as const,
    interviewTip: "Always return client-friendly error messages and log the detailed error on the server.",
    commonMistakes: ["Exposing raw system database stack traces to end users in API responses."]
  }
];

const advancedTemplates = [
  {
    question: "How do you eliminate memory leaks in production [subject] applications?",
    answer: "You eliminate leaks by removing event listeners, closing database connections, and clearing active timers.",
    explanation: "In production, uncleared timers or references prevent the garbage collector from reclaiming memory. Monitoring memory heaps helps maintain stability.",
    type: "Concept" as const,
    interviewTip: "Explain that memory leak detection involves taking heap snapshots before and after performing user actions.",
    commonMistakes: ["Leaving listeners or intervals active, causing gradual memory leaks over hours of server uptime."]
  },
  {
    question: "Deep Dive: How does [architectureComponent] compile and execute code?",
    answer: "[architectureComponent] parses code into an Abstract Syntax Tree (AST) and compiles it to optimized instructions.",
    explanation: "Understanding [architectureComponent] internals allows you to write highly optimized code. It explains how [subject] manages compilation and thread loops.",
    type: "Concept" as const,
    interviewTip: "Explain how [architectureComponent] performs static analysis to optimize variable scoping.",
    commonMistakes: ["Writing un-optimized code structures that prevent the engine compiler from applying optimizations."]
  },
  {
    question: "How do you build custom plugins or extensions for [subject]?",
    answer: "You write custom plugins by hooking into the lifecycle events exposed by [subject]'s core API.",
    explanation: "Creating plugins lets you automate tasks or customize code behavior during build or execution time. It is vital for advanced engineering teams.",
    type: "Concept" as const,
    interviewTip: "Describe a real-world scenario where you created a plugin to automate testing or linting.",
    commonMistakes: ["Using raw monkey-patching techniques instead of using the official plugin API hooks."]
  },
  {
    question: "Explain concurrency patterns like worker threads in [subject].",
    answer: "Concurrency patterns run heavy calculations in separate threads to keep the main event thread responsive.",
    explanation: "Since main threads handle user input, running CPU-heavy calculations there causes lag. [subject] delegates these tasks to background workers.",
    type: "Concept" as const,
    interviewTip: "Always mention that thread safety requires passing data using message events instead of shared memory.",
    commonMistakes: ["Running heavy sorting loops on the main UI/request thread, causing lags."]
  },
  {
    question: "How do you secure [subject] against advanced vulnerabilities?",
    answer: "You secure it by sanitizing inputs, using parameterized queries, and setting secure security headers.",
    explanation: "Vulnerabilities can allow attackers to hijack data or run malicious scripts. Applying security best practices in [subject] is critical for enterprise software.",
    type: "Concept" as const,
    interviewTip: "Mention security scanning tools that run checks on your dependencies automatically.",
    commonMistakes: ["Trusting user inputs blindly without performing schema parsing and validation checks."]
  },
  {
    question: "How does garbage collection work in [subject]?",
    answer: "Garbage collection automatically reclaims memory by finding and deleting objects that are no longer referenced in code.",
    explanation: "Most modern engines run GC algorithms in the background. Understanding reference cycles helps you avoid keeping unused variables in scope.",
    type: "Concept" as const,
    interviewTip: "Explain that avoiding reference loops is the best way to help the garbage collector clean up memory.",
    commonMistakes: ["Creating reference cycles that prevent the garbage collector from freeing memory."]
  },
  {
    question: "What are the trade-offs of microservices vs monoliths in [subject]?",
    answer: "Microservices offer independent scaling but add network latency; monoliths are simpler to deploy but harder to scale individually.",
    explanation: "Deciding on your architecture affects developer velocity. [subject] fits both monoliths and distributed services, depending on your scale.",
    type: "Concept" as const,
    interviewTip: "Explain that the choice should depend on team size and domain boundaries rather than following tech hypes.",
    commonMistakes: ["Migrating to microservices too early before domain logic has stabilized."]
  },
  {
    question: "How do you optimize build sizes and load times for [subject]?",
    answer: "You optimize by enabling tree-shaking, code-splitting, and compressing asset files.",
    explanation: "Large bundle sizes slow down application load speeds. Removing unused code imports (tree-shaking) makes [subject] apps load instantly.",
    type: "Concept" as const,
    interviewTip: "Explain that bundle visualizers are great to inspect which third-party packages consume the most space.",
    commonMistakes: ["Importing entire libraries when only a single utility function is needed."]
  },
  {
    question: "How do you implement distributed locking in [subject]?",
    answer: "You implement distributed locking using external key stores (like Redis) to coordinate operations across multiple servers.",
    explanation: "When running multiple instances of [subject], race conditions can happen. A centralized lock ensures only one server processes a task at a time.",
    type: "Concept" as const,
    interviewTip: "Always configure lock expirations to prevent deadlocks if a server crashes while holding a lock.",
    commonMistakes: ["Implementing locks locally on one server when running in a clustered server environment."]
  },
  {
    question: "Explain the differences in transaction isolation levels in [subject] integrations.",
    answer: "Isolation levels determine how concurrent transactions view database changes, preventing dirty reads or phantom reads.",
    explanation: "Configuring isolation levels correctly in [subject] ensures data consistency, especially for financial or transactional platforms.",
    type: "Concept" as const,
    interviewTip: "Balance data consistency with concurrency speeds, as higher isolation levels reduce database performance.",
    commonMistakes: ["Using serializable isolation for all queries, causing massive transaction lock conflicts."]
  },
  {
    question: "How do you run low-level network socket operations in [subject]?",
    answer: "You run them using raw TCP/UDP socket libraries to manage binary data streams directly.",
    explanation: "For real-time chats or game servers, standard HTTP is too slow. Raw sockets allow [subject] to send binary data packets with minimal latency.",
    type: "Concept" as const,
    interviewTip: "Raw socket streams require custom binary framing to ensure packets are parsed correctly.",
    commonMistakes: ["Using heavy HTTP protocol overhead when simple raw socket streams are required for real-time traffic."]
  },
  {
    question: "What are advanced design patterns (like CQRS or Event Sourcing) in [subject]?",
    answer: "They split read and write models or log every change as an event, improving auditability and scaling.",
    explanation: "Advanced patterns help structure complex applications. [subject] architectures benefit from separate read/write pathways under high load.",
    type: "Concept" as const,
    interviewTip: "Explain that these patterns add complexity and should only be applied to highly scale-critical domains.",
    commonMistakes: ["Using event sourcing for simple CRUD pages where standard tables are much simpler."]
  },
  {
    question: "How do you set up high-throughput telemetry and monitoring for [subject]?",
    answer: "You set it up using APM agents that log CPU usage, memory heaps, and response times in real-time.",
    explanation: "Monitoring lets you detect server issues before users notice them. Logging key metrics helps maintain system health.",
    type: "Concept" as const,
    interviewTip: "Highlight that monitoring should track the 99th percentile response latency to capture outliers.",
    commonMistakes: ["Logging massive debug strings that consume disk storage and degrade application throughput."]
  },
  {
    question: "What are meta-programming capabilities in [subject]?",
    answer: "Meta-programming allows code to inspect, modify, or generate other code dynamically at runtime.",
    explanation: "Using reflection, proxies, or macros lets you write highly flexible libraries in [subject] that adapt to dynamic inputs.",
    type: "Concept" as const,
    interviewTip: "Explain that meta-programming should be used sparingly because it makes debugging harder.",
    commonMistakes: ["Using dynamic evaluation (eval) insecurely, exposing the system to injection vulnerabilities."]
  },
  {
    question: "How do you implement zero-downtime deployments for [subject] applications?",
    answer: "You use rolling updates or blue-green deployments to redirect traffic to new instances without stopping the service.",
    explanation: "Zero-downtime keeps your site online during updates. You spin up the new version of [subject] and test it before turning off the old version.",
    type: "Concept" as const,
    interviewTip: "Always ensure database migrations are backwards-compatible to support active deployment stages.",
    commonMistakes: ["Deploying updates without testing if the new version is fully compatible with old database schemas."]
  },
  {
    question: "What is the impact of JIT compilation on [subject] execution speed?",
    answer: "JIT improves speed by translating hot code sections into native machine instructions at runtime.",
    explanation: "Just-In-Time (JIT) engines track code execution frequency. If a function runs often, JIT compiles it to machine code for maximum execution speed.",
    type: "Concept" as const,
    interviewTip: "JIT compilation is why modern runtimes match the speeds of compiled system binaries.",
    commonMistakes: ["Writing dynamic code shapes that confuse JIT compiler optimization checks."]
  },
  {
    question: "Explain the difference between strong, weak, and soft references in [subject].",
    answer: "Strong references prevent garbage collection; weak/soft references allow GC to reclaim memory when system memory is low.",
    explanation: "Using weak references is ideal for caching. It allows you to store data temporarily without preventing memory cleanup when needed.",
    type: "Concept" as const,
    interviewTip: "Weak maps are useful to store temporary metadata values without leaking memory.",
    commonMistakes: ["Using strong references inside cache maps, causing memory usage to grow indefinitely."]
  },
  {
    question: "How do you handle CPU execution loop bottlenecks in [subject]?",
    answer: "You fix bottlenecks by splitting long-running loops into smaller asynchronous chunks.",
    explanation: "If a single loop blocks the execution thread, the entire application freezes. Breaking it up allows other requests to be processed.",
    type: "Concept" as const,
    interviewTip: "Explain how event delegation patterns keep applications highly responsive.",
    commonMistakes: ["Executing massive sync loops on execution threads that handle client web traffic."]
  },
  {
    question: "How do you configure active-active replication setups for [subject]?",
    answer: "You configure them using multi-region load balancers and conflict-free replicated data types.",
    explanation: "Active-active means servers in multiple countries handle reads and writes simultaneously. It provides great global speeds for [subject] apps.",
    type: "Concept" as const,
    interviewTip: "Replicating data across regions requires conflict resolution strategies to keep data consistent.",
    commonMistakes: ["Ignoring latency lags between global database zones when writing transaction checks."]
  },
  {
    question: "Explain the low-level virtual memory allocation in [subject] engines.",
    answer: "Engines request large memory pages from the OS and subdivide them into heap spaces for object allocation.",
    explanation: "Rather than calling OS memory systems for every variable, [subject] engine manages its own internal heap for high-performance memory recycling.",
    type: "Concept" as const,
    interviewTip: "A solid understanding of memory page allocation is key for low-level systems programming interviews.",
    commonMistakes: ["Triggering thousands of small allocations rapidly instead of recycling larger memory arrays."]
  }
];

function generateRemainingQuestions(): Question[] {
  const generated: Question[] = [];
  const slugs = Object.keys(techDetails);

  for (const slug of slugs) {
    const details = techDetails[slug];
    const staticForSlug = staticQuestions.filter(q => q.categorySlug === slug);

    const countForLevel = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
      return staticForSlug.filter(q => q.difficulty === level).length;
    };

    const targetCount = 20;

    const fillPlaceholders = (text: string) => {
      return text
        .replace(/\[subject\]/g, details.subject)
        .replace(/\[alternative\]/g, details.alternative)
        .replace(/\[keyFeature\]/g, details.keyFeature)
        .replace(/\[commandOrSnippet\]/g, details.commandOrSnippet)
        .replace(/\[useCase\]/g, details.useCase)
        .replace(/\[extension\]/g, details.extension)
        .replace(/\[architectureComponent\]/g, details.architectureComponent);
    };

    const createQuestion = (template: typeof beginnerTemplates[0], level: 'Beginner' | 'Intermediate' | 'Advanced', index: number) => {
      return {
        id: `${slug}-${level.toLowerCase()}-${index + 1}`,
        categorySlug: slug,
        question: fillPlaceholders(template.question),
        difficulty: level,
        type: template.type,
        answer: fillPlaceholders(template.answer),
        explanation: fillPlaceholders(template.explanation),
        interviewTip: fillPlaceholders(template.interviewTip),
        commonMistakes: template.commonMistakes.map(fillPlaceholders),
      };
    };

    // 1. Beginner Level
    const currentBeginnerCount = countForLevel('Beginner');
    const beginnerNeeded = targetCount - currentBeginnerCount;
    for (let i = 0; i < beginnerNeeded; i++) {
      const template = beginnerTemplates[i % beginnerTemplates.length];
      generated.push(createQuestion(template, 'Beginner', i + currentBeginnerCount));
    }

    // 2. Intermediate Level
    const currentIntermediateCount = countForLevel('Intermediate');
    const intermediateNeeded = targetCount - currentIntermediateCount;
    for (let i = 0; i < intermediateNeeded; i++) {
      const template = intermediateTemplates[i % intermediateTemplates.length];
      generated.push(createQuestion(template, 'Intermediate', i + currentIntermediateCount));
    }

    // 3. Advanced Level
    const currentAdvancedCount = countForLevel('Advanced');
    const advancedNeeded = targetCount - currentAdvancedCount;
    for (let i = 0; i < advancedNeeded; i++) {
      const template = advancedTemplates[i % advancedTemplates.length];
      generated.push(createQuestion(template, 'Advanced', i + currentAdvancedCount));
    }
  }

  return generated;
}

export const questions: Question[] = [
  ...staticQuestions,
  ...generateRemainingQuestions()
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

