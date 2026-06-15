import { Category } from '../types';

export const categories: Category[] = [
  {
    title: "React Interview Questions",
    slug: "react",
    description: "Prepare for your React developer interview with 100+ questions covering hooks, context, state management, and React 19 features.",
    keywords: ["React Interview Questions", "ReactJS Questions", "React 19 Interview", "React Hooks Questions", "React Virtual DOM"],
    updatedAt: "2026-06-15",
    readingTime: "15 min read",
    icon: "Atom",
    relatedSlugs: ["javascript", "nextjs", "typescript", "html", "css"],
    introduction: "React is the world's most popular library for building modern user interfaces. Since its release by Meta, React has evolved from simple component rendering to a full-featured UI runtime with hooks, server components, and concurrent capabilities. Preparing for a React interview requires understanding both foundational concepts and modern architectural patterns like Server Actions and Suspense.",
    whyAsk: "Companies ask React questions to evaluate your understanding of component lifecycle, efficient state management, performance rendering (such as avoiding unnecessary re-renders), and your familiarity with the React ecosystem.",
    whoLearn: "Frontend Developers, Full Stack Engineers, UI/UX Engineers, and Web Architects should master React to build high-performance user interfaces.",
    roadmap: [
      "Master core Javascript (ES6+, Scoping, Closures, Promises)",
      "Understand React basics (JSX, Props, State, Component Lifecycle)",
      "Learn and apply React Hooks (useState, useEffect, useMemo, useCallback, useRef)",
      "Implement State Management (Context API, Redux Toolkit, Zustand)",
      "Explore NextJS and Server Components for production-grade React",
      "Adopt React 19 features (useActionState, useFormStatus, Server Actions)"
    ],
    faq: [
      {
        question: "What are the most common React interview topics?",
        answer: "The most common topics include React hooks (useState, useEffect, useMemo), state management, the Virtual DOM vs Real DOM, component composition, prop drilling solutions, and React 19 new features."
      },
      {
        question: "Is React 19 covered in these interview questions?",
        answer: "Yes, we cover major React 19 additions such as Server Actions, the new 'use' hook for promises and context, asset loading, and form-related hooks like useActionState."
      }
    ]
  },
  {
    title: "JavaScript Interview Questions",
    slug: "javascript",
    description: "Crack frontend interviews with detailed JS questions on closures, event loops, promises, prototypes, and ES6+ features.",
    keywords: ["JavaScript Interview Questions", "JS Interview Prep", "JS Closures", "Event Loop Questions", "ES6 Features"],
    updatedAt: "2026-06-15",
    readingTime: "18 min read",
    icon: "FileCode",
    relatedSlugs: ["react", "typescript", "nodejs", "html", "css"],
    introduction: "JavaScript is the programming language of the web. Understanding JavaScript at a deep level is critical for any web developer. Interviews typically test core language mechanics, execution context, asynchronous behavior, and design patterns.",
    whyAsk: "Interviewers ask JavaScript questions to check if you understand the language's runtime behavior, scoping rules, memory management, and asynchronous event-driven nature.",
    whoLearn: "All Web Developers, Frontend Engineers, Node.js Developers, and Full Stack Engineers must have a solid grasp of JavaScript.",
    roadmap: [
      "Learn syntax, variables, data types, and operations",
      "Master scoping, closures, lexical environment, and hoisting",
      "Understand prototypical inheritance and ES6+ classes",
      "Deep dive into asynchronous JavaScript (Callbacks, Promises, Async/Await, Event Loop)",
      "Explore DOM manipulation and browser execution mechanics"
    ],
    faq: [
      {
        question: "What is a closure in JavaScript?",
        answer: "A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). It allows an inner function to access the scope of an outer function even after the outer function has returned."
      },
      {
        question: "How does the JavaScript event loop work?",
        answer: "The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. It works by monitoring the Call Stack and the Callback/Microtask Queue, pushing tasks from the queue to the stack when the stack is empty."
      }
    ]
  },
  {
    title: "TypeScript Interview Questions",
    slug: "typescript",
    description: "Learn advanced TypeScript questions including utility types, generics, narrowings, and interface vs type aliases.",
    keywords: ["TypeScript Interview Questions", "TypeScript Generics", "TypeScript vs JavaScript", "Advanced TS Types"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "ShieldAlert",
    relatedSlugs: ["javascript", "react", "nextjs", "nodejs"],
    introduction: "TypeScript builds on top of JavaScript by adding static type definitions. It helps catch errors early, auto-documents code, and improves development velocity in large teams. TypeScript interviews focus on static analysis concepts, compiler options, type safety techniques, and advanced type transformations.",
    whyAsk: "Employers check TypeScript skills to verify if you can design scalable, type-safe APIs, handle complex data transformations, and write code that minimizes runtime crashes.",
    whoLearn: "Frontend and Backend Developers who build large-scale applications with JavaScript frameworks like React, Next.js, and Node.js.",
    roadmap: [
      "Understand type annotations, primitives, and configurations",
      "Learn interfaces, type aliases, unions, and intersections",
      "Master generics, constraints, and utility types (Partial, Omit, Record)",
      "Explore advanced types like template literal types, conditional types, and mapped types",
      "Integrate TypeScript with build tools and bundlers"
    ],
    faq: [
      {
        question: "What is the difference between an interface and a type alias?",
        answer: "Interfaces are extendable via declaration merging and are primarily used to define object shapes. Type aliases can represent primitives, unions, and tuples, but cannot be merged once declared."
      },
      {
        question: "What are generics in TypeScript?",
        answer: "Generics allow developers to create reusable code components that work with a variety of types rather than a single type. They act as type parameters, allowing you to pass types like arguments."
      }
    ]
  },
  {
    title: "Next.js Interview Questions",
    slug: "nextjs",
    description: "Master Next.js App Router, SSR, SSG, ISR, Server Components, and routing systems for your next interview.",
    keywords: ["Next.js Interview Questions", "Next.js 15 App Router", "Server Components Questions", "Next.js SSR vs SSG"],
    updatedAt: "2026-06-15",
    readingTime: "14 min read",
    icon: "Layers",
    relatedSlugs: ["react", "typescript", "javascript", "nodejs"],
    introduction: "Next.js is the leading React framework for production applications. It provides optimizations like static generation, server rendering, routing, code splitting, and server components. Next.js interviews assess your ability to build production-grade web applications with great performance and SEO.",
    whyAsk: "Next.js is the default stack for many modern frontends. Interviewers want to know if you can leverage React Server Components, construct optimized API routes, handle caching strategies, and implement SEO guidelines.",
    whoLearn: "React Developers and Full Stack Engineers aiming to build fast, SEO-friendly websites.",
    roadmap: [
      "Master React and TypeScript basics",
      "Understand Next.js Routing (App Router, dynamic segments, layouts)",
      "Learn rendering strategies (SSR, SSG, ISR, Dynamic/Static Rendering)",
      "Master Server Components vs Client Components and Server Actions",
      "Leverage caching, optimization APIs (Image, Link, Font), and Middleware"
    ],
    faq: [
      {
        question: "What is the difference between Server and Client Components in Next.js?",
        answer: "Server Components render on the server, resulting in zero client-side JavaScript, better performance, and direct database access. Client Components are hydrated on the client to allow interactivity (e.g., using useState or useEffect)."
      },
      {
        question: "How does Incremental Static Regeneration (ISR) work in Next.js?",
        answer: "ISR allows you to update static pages after you've built your site. Next.js can generate pages statically in the background when a request comes in, caching them and serving updated data without needing a full rebuild."
      }
    ]
  },
  {
    title: "Node.js Interview Questions",
    slug: "nodejs",
    description: "Detailed Node.js interview questions covering event loop, streams, clusters, event emitters, and package management.",
    keywords: ["Node.js Interview Questions", "NodeJS Streams", "Event Emitter Questions", "NodeJS Performance"],
    updatedAt: "2026-06-15",
    readingTime: "16 min read",
    icon: "Server",
    relatedSlugs: ["javascript", "expressjs", "rest-api", "mongodb", "postgresql"],
    introduction: "Node.js is an open-source, cross-platform JavaScript runtime built on Chrome's V8 engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js interviews cover asynchronous runtime logic, clustering, core modules, streams, and security practices.",
    whyAsk: "Employers look for backend engineers who can handle high-throughput network applications, understand worker threads and concurrency, write secure API endpoints, and structure modular backend code.",
    whoLearn: "Backend Engineers, Full Stack Developers, and DevOps practitioners using JavaScript for server-side engineering.",
    roadmap: [
      "Learn Javascript core and asynchronous flow control",
      "Understand Node.js architecture (V8, Libuv, Single-thread event loop)",
      "Master Core Modules (FS, Path, HTTP, Events, Stream)",
      "Learn Express.js or Koa for REST API development",
      "Master database integration (SQL, NoSQL, ORMs)",
      "Explore scaling Node.js applications (Clustering, Worker Threads, PM2)"
    ],
    faq: [
      {
        question: "What is the role of Libuv in Node.js?",
        answer: "Libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops. It manages the thread pool, file system events, DNS queries, and network sockets, enabling Node's non-blocking runtime."
      },
      {
        question: "What is the difference between setImmediate() and setTimeout()?",
        answer: "setImmediate() is designed to execute a script once the current poll phase of the event loop completes. setTimeout() schedules a script to run after a minimum threshold in milliseconds has elapsed."
      }
    ]
  },
  {
    title: "SQL Interview Questions",
    slug: "sql",
    description: "Database queries, joins, indexes, subqueries, normalization, and ACID properties for database and backend interviews.",
    keywords: ["SQL Interview Questions", "Database Joins Questions", "ACID Properties SQL", "SQL Query Optimization"],
    updatedAt: "2026-06-15",
    readingTime: "20 min read",
    icon: "Database",
    relatedSlugs: ["postgresql", "mysql", "mongodb", "nodejs", "system-design"],
    introduction: "Structured Query Language (SQL) is the standard language for managing and querying relational databases. From simple SELECT queries to complex analytical window functions and database administration, SQL is an essential skill for software engineering, data analysis, and product management.",
    whyAsk: "SQL questions test your database knowledge, data modeling capabilities, ability to optimize query performance, and capacity to extract meaningful insights from relational tables.",
    whoLearn: "Backend Developers, Data Analysts, Data Engineers, Full Stack Developers, and Database Administrators.",
    roadmap: [
      "Learn SQL basics (SELECT, WHERE, ORDER BY, GROUP BY)",
      "Master SQL Joins (INNER, LEFT, RIGHT, FULL OUTER) and Set operations",
      "Understand subqueries, Common Table Expressions (CTEs), and Window Functions",
      "Learn database design, Normalization (1NF, 2NF, 3NF), and ACID transactions",
      "Master performance tuning (Indexing, Execution Plans, Query Optimization)"
    ],
    faq: [
      {
        question: "What is the difference between WHERE and HAVING in SQL?",
        answer: "WHERE is used to filter records before any groupings are applied. HAVING is used to filter groups created by the GROUP BY clause, typically involving aggregate functions."
      },
      {
        question: "What are ACID properties in a database?",
        answer: "ACID stands for Atomicity (all or nothing), Consistency (valid state transitions), Isolation (independent transactions), and Durability (permanent storage), ensuring reliable database transactions."
      }
    ]
  },
  {
    title: "HTML Interview Questions",
    slug: "html",
    description: "Essential HTML5 interview questions on semantic elements, accessibility, forms, and web standards.",
    keywords: ["HTML Interview Questions", "HTML5 Semantic Elements", "Web Accessibility HTML", "HTML SEO Best Practices"],
    updatedAt: "2026-06-15",
    readingTime: "8 min read",
    icon: "Code2",
    relatedSlugs: ["css", "javascript", "react", "tailwind-css"],
    introduction: "HyperText Markup Language (HTML) is the backbone of the web. It defines the structure and layout of web documents. Modern web development demands semantic, accessible, and SEO-friendly HTML5 markup.",
    whyAsk: "HTML questions ensure you understand semantic tags, correct document structure, web accessibility standards (ARIA), and proper layout configuration that improves SEO ranking and screen reader compatibility.",
    whoLearn: "Frontend Web Developers, UI Designers, and Web Content Developers.",
    roadmap: [
      "Learn HTML document structure, tags, and attributes",
      "Adopt HTML5 semantic elements (<header>, <article>, <section>, <footer>)",
      "Master HTML Forms, validation, and inputs",
      "Apply accessibility best practices (ARIA roles, alt tags, keyboard navigation)",
      "Understand SEO metadata tags and structured microdata"
    ],
    faq: [
      {
        question: "Why should we use semantic HTML5 elements?",
        answer: "Semantic elements make web pages more readable for both developers and machine engines (like search engine web-crawlers and screen-readers), improving both SEO rankings and accessibility."
      },
      {
        question: "What is the difference between inline and block-level elements?",
        answer: "Block-level elements (e.g., <div>, <p>) start on a new line and take up the full width available. Inline elements (e.g., <span>, <a>) do not start on a new line and only take up as much width as necessary."
      }
    ]
  },
  {
    title: "CSS Interview Questions",
    slug: "css",
    description: "Common CSS questions on flexbox, grid, box-model, specificity, preprocessors, and responsive design.",
    keywords: ["CSS Interview Questions", "CSS Flexbox Grid", "CSS Specificity Rules", "Responsive Design CSS"],
    updatedAt: "2026-06-15",
    readingTime: "10 min read",
    icon: "Palette",
    relatedSlugs: ["html", "tailwind-css", "bootstrap", "javascript"],
    introduction: "Cascading Style Sheets (CSS) describe how HTML elements are to be displayed on screen. Modern CSS incorporates layout engines like Flexbox and Grid, animations, variables, and responsive design techniques that create stunning user interfaces.",
    whyAsk: "CSS questions evaluate your visual layouts implementation skills, knowledge of specificity rules, responsiveness design principles, styling optimization techniques, and responsive debugging abilities.",
    whoLearn: "Frontend Web Developers, UI/UX Engineers, and Web Designers.",
    roadmap: [
      "Understand the CSS Box Model (Margin, Border, Padding, Content)",
      "Master CSS selectors, cascades, inheritance, and specificity calculation",
      "Learn layout systems: Flexbox and CSS Grid",
      "Master Responsive Design (Media queries, container queries, viewport units)",
      "Explore CSS preprocessors (SASS/SCSS), CSS Modules, CSS-in-JS, and Animations"
    ],
    faq: [
      {
        question: "How is CSS Specificity calculated?",
        answer: "Specificity is a weight applied to a CSS rule based on selector types: inline styles (1000), IDs (100), classes/attributes/pseudo-classes (10), and elements/pseudo-elements (1)."
      },
      {
        question: "What is the difference between Flexbox and CSS Grid?",
        answer: "Flexbox is designed for one-dimensional layouts (either a row OR a column). CSS Grid is designed for two-dimensional layouts (rows AND columns simultaneously)."
      }
    ]
  },
  {
    title: "Git Interview Questions",
    slug: "git",
    description: "Version control questions including branching strategies, merge vs rebase, cherry-pick, conflict resolution, and git internals.",
    keywords: ["Git Interview Questions", "Git Merge vs Rebase", "Git Cherry Pick", "Git Version Control"],
    updatedAt: "2026-06-15",
    readingTime: "11 min read",
    icon: "GitBranch",
    relatedSlugs: ["github", "docker", "linux", "devops"],
    introduction: "Git is the distributed version control system used by over 90% of developers worldwide. Mastery of Git commands, branch operations, remote workflows, and history rewriting is vital for efficient team collaboration and smooth release management.",
    whyAsk: "Employers check Git knowledge to see if you can collaborate effectively in a codebase, resolve merge conflicts cleanly, manage branching releases, and maintain a clean commit history.",
    whoLearn: "Every Software Engineer, DevOps Engineer, QA Engineer, and Tech Lead.",
    roadmap: [
      "Learn Git basics (init, add, commit, push, pull, status)",
      "Master branching, merging, and merge conflict resolution",
      "Understand the difference between Git Merge and Git Rebase",
      "Learn history manipulation (cherry-pick, revert, reset, interactive rebase)",
      "Adopt Git collaboration workflows (Git Flow, GitHub Flow, trunk-based development)"
    ],
    faq: [
      {
        question: "What is the difference between 'git merge' and 'git rebase'?",
        answer: "Merge combines branches by creating a new commit representing the merge merge point, preserving commit history logs. Rebase moves the entire branch's commits to the tip of another branch, rewriting history to create a linear timeline."
      },
      {
        question: "What does 'git stash' do?",
        answer: "git stash takes your modified tracked files (your uncommitted changes) and saves them on a stack of unfinished changes, letting you revert to a clean directory to work on something else."
      }
    ]
  },
  {
    title: "AWS Interview Questions",
    slug: "aws",
    description: "Prepare for AWS Cloud Practitioner, Solutions Architect, or Developer interviews with questions on EC2, S3, Lambda, IAM, and VPC.",
    keywords: ["AWS Interview Questions", "Amazon Web Services Prep", "AWS Lambda S3", "AWS IAM VPC Security"],
    updatedAt: "2026-06-15",
    readingTime: "17 min read",
    icon: "Cloud",
    relatedSlugs: ["docker", "kubernetes", "linux", "sysdesign"],
    introduction: "Amazon Web Services (AWS) is the world's most widely adopted cloud platform, offering over 200 fully featured services from data centers globally. AWS interviews test cloud architecture design, serverless solutions, networking infrastructure, identity management, and cost optimization.",
    whyAsk: "Cloud computing skills are highly valued. Companies ask AWS questions to see if you can build secure, scalable, fault-tolerant, and cost-effective cloud architectures.",
    whoLearn: "Cloud Solutions Architects, DevOps Engineers, Backend Developers, and System Administrators.",
    roadmap: [
      "Understand cloud computing fundamentals and AWS global infrastructure",
      "Master core AWS Services (EC2, S3, RDS, DynamoDB)",
      "Learn IAM security, policies, roles, and Multi-factor authentication",
      "Understand AWS Networking (VPC, Subnets, Route 53, CloudFront)",
      "Explore Serverless AWS (Lambda, API Gateway, DynamoDB, EventBridge)",
      "Learn Infrastructure as Code (CloudFormation, Terraform) and CloudWatch monitoring"
    ],
    faq: [
      {
        question: "What is the difference between a Security Group and a Network ACL (NACL)?",
        answer: "Security Groups act as a firewall for instance-level traffic and are stateful (inbound rules automatically allow outbound traffic). NACLs act as a firewall for subnet-level traffic and are stateless (rules must be explicitly defined for both directions)."
      },
      {
        question: "What is AWS Lambda?",
        answer: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers."
      }
    ]
  },
  {
    title: "System Design Interview Questions",
    slug: "sysdesign",
    description: "Master system design interview concepts: load balancers, caching, sharding, message queues, rate limiters, and microservices.",
    keywords: ["System Design Questions", "System Design Interview", "Microservices Design", "Database Sharding Scaling"],
    updatedAt: "2026-06-15",
    readingTime: "22 min read",
    icon: "GitCommit",
    relatedSlugs: ["sql", "mongodb", "aws", "kubernetes", "nodejs"],
    introduction: "System Design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. System design interviews are common for mid-level and senior software engineering roles to assess technical breadth and scalable design patterns.",
    whyAsk: "Employers use system design interviews to gauge your ability to analyze complex requirements, design scalable architectures, balance trade-offs, and handle server failure and data consistency.",
    whoLearn: "Mid-level and Senior Developers, Software Architects, and Engineering Managers.",
    roadmap: [
      "Learn scalability concepts (Vertical vs Horizontal scaling, Load Balancers)",
      "Master caching strategies, CDNs, and Database Scaling (Replication, Sharding)",
      "Understand communication protocols (HTTP, WebSockets, gRPC, Message Queues)",
      "Learn microservices design patterns, API Gateways, and Service Discovery",
      "Understand distributed consensus, CAP theorem, and data consistency models"
    ],
    faq: [
      {
        question: "What is the CAP Theorem?",
        answer: "The CAP Theorem states that a distributed data store can simultaneously provide at most two of three guarantees: Consistency (every read receives the most recent write), Availability (every request receives a non-error response), and Partition Tolerance (the system continues to operate despite network partition errors)."
      },
      {
        question: "How does Database Sharding work?",
        answer: "Sharding is a database partitioning technique that splits a large database into smaller, faster, and more manageable parts called shards. Each shard is an independent database that contains a subset of the overall data, partitioned based on a shard key."
      }
    ]
  },
  {
    title: "HR Interview Questions",
    slug: "hr",
    description: "Prepare for HR and behavioral interviews with structured answers to classic questions like 'Tell me about yourself', strength/weakness, and situational scenarios.",
    keywords: ["HR Interview Questions", "Behavioral Interview prep", "STAR Method Behavioral", "HR Common Questions"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Users",
    relatedSlugs: ["behavioral", "aptitude"],
    introduction: "HR interviews evaluate your communication skills, cultural fit, work ethic, problem-solving approach, and career goals. While technical skills get you the interview, behavioral and HR alignment gets you the job offer.",
    whyAsk: "HR managers ask behavioral questions to predict your future performance based on past behavior, evaluate your emotional intelligence, assess conflict resolution, and verify cultural alignment.",
    whoLearn: "All job seekers preparing for interviews in any professional industry.",
    roadmap: [
      "Prepare your professional elevator pitch ('Tell me about yourself')",
      "Identify your key strengths, weaknesses, and concrete work examples",
      "Formulate stories using the STAR Method (Situation, Task, Action, Result)",
      "Research company core values, mission, and current projects",
      "Prepare thoughtful questions to ask the interviewer at the end of the session"
    ],
    faq: [
      {
        question: "How do I answer the question 'Tell me about yourself'?",
        answer: "Use the Present-Past-Future formula: Start with your current role and major achievements, explain how you got there (past key roles/skills), and explain why you are excited about this specific opportunity (future)."
      },
      {
        question: "What is the STAR Method for answering behavioral questions?",
        answer: "STAR stands for Situation (set the scene), Task (describe the challenge/responsibility), Action (explain what you did to solve it), and Result (share the positive outcome and quantifiable metrics)."
      }
    ]
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
