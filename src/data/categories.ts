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
  },
  {
    title: "Express.js Interview Questions",
    slug: "expressjs",
    description: "Master routing, middleware, error handling, security, and REST API development with Express.js.",
    keywords: ["Express.js Interview Questions", "ExpressJS Middleware", "Express Routing Questions", "ExpressJS Security"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Server",
    relatedSlugs: ["nodejs", "javascript", "rest-api", "mongodb"],
    introduction: "Express.js is the minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js, making preparing for Express.js questions vital for backend roles.",
    whyAsk: "Employers ask Express.js questions to evaluate your backend architecture skills, understanding of request-response lifecycles, implementation of custom middleware, API design, and security setups.",
    whoLearn: "Backend Engineers, Node.js Developers, and Full Stack Engineers using JavaScript/TypeScript.",
    roadmap: [
      "Understand Node.js HTTP core module",
      "Learn basic routing and HTTP request methods in Express",
      "Master Express middleware execution flow and custom handlers",
      "Implement robust error-handling middleware",
      "Integrate databases and build REST APIs",
      "Apply security best practices (Helmet, CORS, Rate limiting)"
    ],
    faq: [
      {
        question: "What is middleware in Express.js?",
        answer: "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle, typically used to run code, modify requests, or end responses."
      },
      {
        question: "How do you handle errors in Express.js?",
        answer: "Errors are handled using special error-handling middleware functions that take four arguments instead of three: (err, req, res, next). Express catches sync errors automatically, but async errors must be passed to next(err)."
      }
    ]
  },
  {
    title: "Tailwind CSS Interview Questions",
    slug: "tailwind-css",
    description: "Learn utility-first CSS concepts, custom configurations, responsive design, and performance optimizations using Tailwind.",
    keywords: ["Tailwind CSS Interview Questions", "Tailwind CSS Utility First", "Tailwind Configurations", "Tailwind Responsive Design"],
    updatedAt: "2026-06-15",
    readingTime: "10 min read",
    icon: "Palette",
    relatedSlugs: ["css", "html", "javascript", "react"],
    introduction: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. Unlike Bootstrap, it doesn't come with pre-designed components, but rather low-level utility classes that let you build completely custom designs without writing CSS.",
    whyAsk: "Tailwind CSS is highly popular in modern React/Next.js codebases. Interviewers want to check if you understand responsive breakpoint classes, JIT compiler optimizations, and theme customization.",
    whoLearn: "Frontend Developers, UI Engineers, and Full Stack Developers.",
    roadmap: [
      "Learn utility-first principles vs traditional CSS",
      "Master responsive design using Tailwind breakpoint prefixes",
      "Understand hover, focus, and other interactive state modifiers",
      "Customize themes, colors, and layout spacing in tailwind.config.ts",
      "Optimize production bundle sizes using purging/JIT compilation"
    ],
    faq: [
      {
        question: "What does utility-first mean in Tailwind?",
        answer: "Utility-first means styling elements by applying pre-defined, single-purpose class names directly in HTML (e.g., flex, pt-4, text-center) rather than writing custom CSS rules in stylesheets."
      },
      {
        question: "How does Tailwind optimize production CSS file size?",
        answer: "Tailwind scans your project files for class names, and its JIT compiler generates only the exact CSS used in your codebase, resulting in extremely small production CSS stylesheets (often less than 10KB)."
      }
    ]
  },
  {
    title: "Bootstrap Interview Questions",
    slug: "bootstrap",
    description: "Master the grid system, responsive utilities, customized themes, and built-in components of Bootstrap.",
    keywords: ["Bootstrap Interview Questions", "Bootstrap Grid System", "Bootstrap Flexbox Utilities", "Bootstrap Sass customization"],
    updatedAt: "2026-06-15",
    readingTime: "9 min read",
    icon: "Layers",
    relatedSlugs: ["css", "html", "javascript"],
    introduction: "Bootstrap is the world's most popular front-end open-source toolkit. It features Sass variables and mixins, a responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
    whyAsk: "Questions assess your proficiency in using standard responsive UI toolkits, building rapid prototypes, and customizing component overrides without breaking spacing architectures.",
    whoLearn: "Frontend Developers and UI Designers.",
    roadmap: [
      "Understand the containers, rows, and 12-column grid layout",
      "Learn responsive utility classes for spacing, display, and flexbox",
      "Explore pre-designed components like Modals, Carousels, and Navbars",
      "Customize Bootstrap theme colors and spacings using Sass variables",
      "Learn to integrate Bootstrap with modern JS frameworks"
    ],
    faq: [
      {
        question: "How does the Bootstrap 12-column grid system work?",
        answer: "It uses containers to align content, rows to group columns, and columns to span up to 12 segments across the viewport, using Flexbox layout mechanics and media query breakpoints."
      },
      {
        question: "What is the difference between .container and .container-fluid?",
        answer: ".container sets a max-width at each responsive breakpoint (centered with auto-margins), while .container-fluid provides a full-width container spanning the entire width of the viewport."
      }
    ]
  },
  {
    title: "Python Interview Questions",
    slug: "python",
    description: "Solve Python questions on list comprehensions, decorators, generators, OOP, memory management, and GIL.",
    keywords: ["Python Interview Questions", "Python Decorators", "Python Generators", "GIL Questions Python", "Python Memory Management"],
    updatedAt: "2026-06-15",
    readingTime: "14 min read",
    icon: "FileCode",
    relatedSlugs: ["javascript", "sql", "algorithms", "dsa"],
    introduction: "Python is a high-level, interpreted, general-purpose programming language known for readability and versatility. Python interviews test core mechanics like dynamic typing, list comprehensions, scoping, decorators, and concurrency limitations.",
    whyAsk: "Python is used extensively in backend development, data engineering, and automation. Companies test your familiarity with Python data structures, memory management, and GIL behavior.",
    whoLearn: "Backend Developers, Data Engineers, AI Engineers, and Automation Specialists.",
    roadmap: [
      "Master core data types (Lists, Dicts, Sets, Tuples) and operations",
      "Understand scoping (LEGB rule) and namespace lookups",
      "Learn functional programming (Decorators, Generators, Iterators)",
      "Master OOP in Python (Inheritance, MRO, Dunder methods)",
      "Understand concurrency: Threading vs Multiprocessing, and the GIL",
      "Learn Python package management and testing frameworks"
    ],
    faq: [
      {
        question: "What is a decorator in Python?",
        answer: "A decorator is a design pattern in Python that allows you to modify or extend the behavior of a function or class wrapper dynamically without changing its source code."
      },
      {
        question: "What is the Global Interpreter Lock (GIL)?",
        answer: "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. This makes CPU-bound multi-threading inefficient, requiring multiprocessing instead."
      }
    ]
  },
  {
    title: "Java Interview Questions",
    slug: "java",
    description: "Prepare for Java developer roles with OOP, JVM architecture, garbage collection, multithreading, and collections framework.",
    keywords: ["Java Interview Questions", "Java OOP concepts", "JVM architecture GC", "Java Multithreading", "Java Collections Framework"],
    updatedAt: "2026-06-15",
    readingTime: "16 min read",
    icon: "Coffee",
    relatedSlugs: ["oop", "sql", "dsa", "algorithms"],
    introduction: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible (Write Once, Run Anywhere). Java interviews cover OOP principles, memory areas, garbage collection tuning, multithreading synchronization, and the collections framework.",
    whyAsk: "Java is the backbone of enterprise applications. Employers check if you understand JVM memory structures (Stack vs Heap), Garbage Collection algorithms, thread-safe structures, and clean OOP designs.",
    whoLearn: "Enterprise Application Developers, Backend Engineers, and Android Developers.",
    roadmap: [
      "Master Java basics and core OOP concepts (Inheritance, Polymorphism)",
      "Learn exception handling, custom exceptions, and try-with-resources",
      "Master Java Collections Framework (List, Set, Map implementation details)",
      "Understand Java Multithreading and Concurrency utilities (ExecutorService, Locks)",
      "Deep dive into JVM architecture, class loaders, and Garbage Collection",
      "Learn Modern Java features (Lambda expressions, Streams API, Records)"
    ],
    faq: [
      {
        question: "What is the difference between Stack and Heap memory in Java?",
        answer: "Stack memory is used for execution thread contexts, local variables, and method calls (fast, temporary, automatically cleaned). Heap memory is used for dynamic allocation of objects, accessible globally, and managed by the Garbage Collector."
      },
      {
        question: "What is the Java Collections Framework?",
        answer: "It is a unified architecture representing and manipulating collections (lists, sets, maps, queues), providing highly optimized, reusable data structures and algorithms."
      }
    ]
  },
  {
    title: "C Programming Interview Questions",
    slug: "c",
    description: "Study C language fundamentals, pointers, memory allocation, structures, unions, and preprocessor directives.",
    keywords: ["C Programming Interview Questions", "C Pointers", "Dynamic Memory Allocation C", "C Structures and Unions"],
    updatedAt: "2026-06-15",
    readingTime: "11 min read",
    icon: "Terminal",
    relatedSlugs: ["cpp", "dsa", "algorithms", "os"],
    introduction: "C is a procedural programming language designed for system programming. It provides low-level access to memory, clean syntax, and high speed, forming the basis of operating systems and modern databases.",
    whyAsk: "C questions test your understanding of machine-level memory layout, address arithmetic, memory leaks, compilation stages, and structure alignment padding.",
    whoLearn: "Embedded Developers, Systems Engineers, Game Developers, and core library builders.",
    roadmap: [
      "Learn data types, operators, and control loops",
      "Understand pointer syntax, referencing, dereferencing, and pointer arithmetic",
      "Master dynamic memory allocation (malloc, calloc, realloc, free)",
      "Learn structures, unions, bit-fields, and memory padding",
      "Understand preprocessor directives, macros, and conditional compilation",
      "Master file handling and binary stream operations"
    ],
    faq: [
      {
        question: "What is the difference between malloc() and calloc()?",
        answer: "malloc() allocates raw uninitialized memory, leaving garbage values. calloc() allocates memory and initializes all bytes to zero, which takes slightly longer but prevents garbage reads."
      },
      {
        question: "What is a pointer in C?",
        answer: "A pointer is a variable that stores the physical memory address of another variable, allowing direct memory manipulation and pass-by-reference operations."
      }
    ]
  },
  {
    title: "C++ Interview Questions",
    slug: "cpp",
    description: "Master C++ interview questions covering OOP, pointers, references, templates, STL, memory management, and smart pointers.",
    keywords: ["C++ Interview Questions", "C++ Smart Pointers", "C++ STL Questions", "Virtual Functions C++"],
    updatedAt: "2026-06-15",
    readingTime: "13 min read",
    icon: "Code2",
    relatedSlugs: ["c", "oop", "dsa", "algorithms"],
    introduction: "C++ is a general-purpose programming language created as an extension of the C programming language, adding object-oriented features. Modern C++ focuses on resource management (RAII), templates, smart pointers, and high performance.",
    whyAsk: "C++ interviews assess your grasp of object lifecycle (constructors/destructors), memory management safety, the Standard Template Library (STL), and virtual dispatch table polymorphism.",
    whoLearn: "Systems Programmers, Game Developers, HFT Engineers, and Backend Engineers.",
    roadmap: [
      "Understand C++ enhancements over C (namespaces, references, function overloading)",
      "Master Object-Oriented C++ (classes, access modifiers, constructors, destructors)",
      "Understand Resource Acquisition Is Initialization (RAII) and Smart Pointers",
      "Master the Standard Template Library (Containers, Iterators, Algorithms)",
      "Learn C++ Templates and Generic programming",
      "Explore Modern C++ features (Move semantics, auto, lambda expressions)"
    ],
    faq: [
      {
        question: "What are smart pointers in C++?",
        answer: "Smart pointers (std::unique_ptr, std::shared_ptr, std::weak_ptr) are wrapper classes around raw pointers that automate memory deallocation (using RAII) to prevent memory leaks."
      },
      {
        question: "What is a virtual destructor in C++?",
        answer: "A virtual destructor in a base class ensures that when a derived class object is deleted via a base class pointer, the derived class's destructor is called first, preventing resource leaks."
      }
    ]
  },
  {
    title: "MongoDB Interview Questions",
    slug: "mongodb",
    description: "Solve MongoDB questions on document models, indexes, aggregation pipelines, replication, and sharding.",
    keywords: ["MongoDB Interview Questions", "NoSQL MongoDB Questions", "MongoDB Aggregation Pipeline", "MongoDB Indexing Sharding"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Database",
    relatedSlugs: ["sql", "nodejs", "expressjs", "redis"],
    introduction: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, MongoDB uses JSON-like documents with optional schemas. MongoDB interviews evaluate data modeling, aggregation frameworks, and cluster scaling.",
    whyAsk: "Companies check NoSQL capabilities to see if you can design flexible schemas, write high-performance aggregation pipelines, manage indexes, and scale storage horizontally.",
    whoLearn: "Backend Engineers, Full Stack Developers, and Database Administrators.",
    roadmap: [
      "Learn Document structure and BSON data formats",
      "Master CRUD operations and nested document querying",
      "Understand Indexing types (Single, Compound, Multikey, Text)",
      "Master the Aggregation Framework (stages, expressions, accumulators)",
      "Understand Replication (Replica Sets, failover, read/write concerns)",
      "Learn Sharding architecture and Horizontal scaling"
    ],
    faq: [
      {
        question: "How does MongoDB differ from relational databases?",
        answer: "Relational databases store data in tables with strict schemas and foreign-key relationships. MongoDB stores data in flexible BSON documents, encouraging nested structures and horizontal scale-out."
      },
      {
        question: "What is the purpose of the aggregation pipeline in MongoDB?",
        answer: "The aggregation pipeline is a framework for data aggregation modeled on the concept of data processing pipelines. Documents enter a multi-stage pipeline that transforms them into aggregated results."
      }
    ]
  },
  {
    title: "PostgreSQL Interview Questions",
    slug: "postgresql",
    description: "Master PostgreSQL topics like MVCC, indexing, foreign keys, query optimization, window functions, and JSONB.",
    keywords: ["PostgreSQL Interview Questions", "Postgres MVCC", "Postgres Index types", "Query Optimization Postgres"],
    updatedAt: "2026-06-15",
    readingTime: "14 min read",
    icon: "Database",
    relatedSlugs: ["sql", "mysql", "mongodb", "dbms"],
    introduction: "PostgreSQL is a powerful, open-source object-relational database system with over 35 years of active development. PostgreSQL interviews focus on advanced SQL queries, performance tuning, indexing types, and MVCC internals.",
    whyAsk: "PostgreSQL is highly chosen for production workloads. Employers verify if you can optimize queries, handle JSONB indexing, design schemas with appropriate constraints, and understand concurrency locks.",
    whoLearn: "Backend Developers, Database Engineers, and System Architects.",
    roadmap: [
      "Master basic SQL querying and PostgreSQL extensions",
      "Learn advanced indexing (B-Tree, GIN, GiST, Hash) and usage",
      "Understand MVCC concurrency control and autovacuum operations",
      "Master JSONB querying and indexing for semi-structured data",
      "Optimize queries using EXPLAIN ANALYZE and partition tables",
      "Configure replication, failover, and high availability systems"
    ],
    faq: [
      {
        question: "What is MVCC in PostgreSQL?",
        answer: "Multi-Version Concurrency Control (MVCC) allows readers and writers to access the database concurrently without blocking each other by maintaining multiple physical versions of rows."
      },
      {
        question: "When should you use JSONB over standard relational columns?",
        answer: "Use JSONB for semi-structured data, dynamic user attributes, or payload logs where schemas change frequently, while keeping core structured data in relational columns for constraints."
      }
    ]
  },
  {
    title: "MySQL Interview Questions",
    slug: "mysql",
    description: "Prepare for MySQL interview questions covering storage engines (InnoDB vs MyISAM), locking, indexing, and replication.",
    keywords: ["MySQL Interview Questions", "InnoDB vs MyISAM", "MySQL Indexing", "Replication in MySQL"],
    updatedAt: "2026-06-15",
    readingTime: "13 min read",
    icon: "Database",
    relatedSlugs: ["sql", "postgresql", "dbms", "nodejs"],
    introduction: "MySQL is an open-source relational database management system. It is widely used in web applications (like WordPress) and is a central component of the LAMP stack. MySQL interviews assess storage engines, replication strategies, and index optimizations.",
    whyAsk: "MySQL remains highly popular in web engineering. Interviewers test your understanding of transactional safety (ACID), storage engine trade-offs, and clustering setups.",
    whoLearn: "Web Developers, Backend Engineers, and Database Administrators.",
    roadmap: [
      "Learn relational database design and SQL grammar",
      "Understand MySQL Storage Engines (InnoDB vs MyISAM differences)",
      "Master MySQL indexing mechanics and optimization practices",
      "Understand MySQL locking levels (Row, Table, Page locks)",
      "Configure Master-Slave and Master-Master Replication setups",
      "Learn backup, recovery, and point-in-time restoration"
    ],
    faq: [
      {
        question: "What is the difference between InnoDB and MyISAM engines?",
        answer: "InnoDB supports transactions (ACID), row-level locking, and foreign keys. MyISAM is older, does not support transactions or foreign keys, uses table-level locking, but can be fast for read-only tables."
      },
      {
        question: "How do you optimize a slow query in MySQL?",
        answer: "Use the EXPLAIN statement to analyze the execution plan, verify indexes are used, eliminate full table scans, rewrite subqueries as joins, and optimize buffer pool allocations."
      }
    ]
  },
  {
    title: "GitHub Interview Questions",
    slug: "github",
    description: "Learn GitHub workflows, actions (CI/CD), pull request reviews, branch protection, and project management.",
    keywords: ["GitHub Interview Questions", "GitHub Actions CI CD", "Pull Request Workflows", "Branch Protection Rules"],
    updatedAt: "2026-06-15",
    readingTime: "10 min read",
    icon: "GitBranch",
    relatedSlugs: ["git", "docker", "devops"],
    introduction: "GitHub is a developer platform that allows developers to create, store, manage, and share their code. It adds collaboration tools, code review interfaces, security checking, and CI/CD pipelines (GitHub Actions) to Git version control.",
    whyAsk: "Employers check GitHub skills to ensure you can integrate smoothly with engineering workflows, write automated pipelines, perform reviews, and follow branch safety rules.",
    whoLearn: "Software Developers, Devops Engineers, and Team Leads.",
    roadmap: [
      "Understand GitHub collaboration (Forking, Cloning, Pull Requests)",
      "Master code review tools, reviews, changes requesting, and approvals",
      "Learn GitHub Actions syntax (Workflows, Jobs, Steps, Runners)",
      "Configure branch protection rules and status check requirements",
      "Use GitHub package registry and security scanning alerts"
    ],
    faq: [
      {
        question: "What are GitHub Actions?",
        answer: "GitHub Actions is an API that automates workflows directly in your repository. It is commonly used for CI/CD tasks like running tests, building release files, and deploying applications."
      },
      {
        question: "What is a branch protection rule?",
        answer: "It is a setting that restricts how developers can push to specific branches (like main/master), requiring pull reviews, approvals, passing tests, and administrator overrides."
      }
    ]
  },
  {
    title: "Docker Interview Questions",
    slug: "docker",
    description: "Solve Docker questions on containerization, images, Dockerfiles, volumes, networks, and compose.",
    keywords: ["Docker Interview Questions", "Docker Containerization", "Dockerfile Best Practices", "Docker Volumes Networks"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Layers",
    relatedSlugs: ["kubernetes", "aws", "git", "linux"],
    introduction: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files.",
    whyAsk: "Docker has revolutionized application deployment. Interviewers want to check if you can write efficient Dockerfiles, manage multi-container systems, and debug container network issues.",
    whoLearn: "Full Stack Developers, Backend Engineers, DevOps Engineers, and System Architects.",
    roadmap: [
      "Understand VM virtualization vs Container isolation",
      "Master Docker CLI commands (run, build, exec, ps, logs)",
      "Learn Dockerfile directives (FROM, RUN, COPY, EXPOSE, CMD/ENTRYPOINT)",
      "Master Docker Volumes for data persistence",
      "Understand Docker Networking types (Bridge, Host, Overlay)",
      "Build multi-container architectures using Docker Compose"
    ],
    faq: [
      {
        question: "What is the difference between a Docker Image and a Container?",
        answer: "A Docker Image is a read-only template containing the application code and runtime files. A Docker Container is a running instance of an image, adding a writable layer on top."
      },
      {
        question: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
        answer: "ENTRYPOINT defines the executable that runs when the container starts, while CMD defines default arguments for that executable which can be easily overridden from the command line."
      }
    ]
  },
  {
    title: "Kubernetes Interview Questions",
    slug: "kubernetes",
    description: "Master Kubernetes concepts: Pods, Services, Deployments, ReplicaSets, Ingress, ConfigMaps, and Secrets.",
    keywords: ["Kubernetes Interview Questions", "K8s Pods Services", "Kubernetes Deployments", "Kubernetes Architecture"],
    updatedAt: "2026-06-15",
    readingTime: "15 min read",
    icon: "Compass",
    relatedSlugs: ["docker", "aws", "sysdesign", "linux"],
    introduction: "Kubernetes (K8s) is an open-source container-orchestration system for automating computer application deployment, scaling, and management. Originally designed by Google, it is now maintained by the Cloud Native Computing Foundation.",
    whyAsk: "As applications grow, managing containers manually becomes impossible. Interviewers ask Kubernetes questions to check if you can design highly available container grids, manage rolling updates, and configure load balancing.",
    whoLearn: "DevOps Engineers, Cloud Architects, and Backend Systems Developers.",
    roadmap: [
      "Understand Container orchestration benefits",
      "Master Kubernetes control plane (API Server, Etcd, Scheduler) and worker nodes",
      "Understand Pod lifecycle, ReplicaSets, and Deployments",
      "Master K8s Networking (ClusterIP, NodePort, LoadBalancer, Ingress)",
      "Configure persistent storage (PV, PVC, StorageClasses)",
      "Learn config management using ConfigMaps and Secrets"
    ],
    faq: [
      {
        question: "What is a Pod in Kubernetes?",
        answer: "A Pod is the smallest execution unit in Kubernetes, representing a single instance of a running process. It can contain one or more tightly coupled containers sharing storage and network IP."
      },
      {
        question: "What does the Control Plane do in Kubernetes?",
        answer: "The Control Plane manages the Kubernetes cluster. It makes global decisions (like scheduling), detects and responds to cluster events (like spinning up new pods when replicas fail)."
      }
    ]
  },
  {
    title: "Azure Interview Questions",
    slug: "azure",
    description: "Prepare for Microsoft Azure interviews: VMs, Blob Storage, App Services, Entra ID (Azure AD), and DevOps.",
    keywords: ["Azure Interview Questions", "Microsoft Azure Prep", "Azure Blob Storage App Service", "Entra ID Active Directory"],
    updatedAt: "2026-06-15",
    readingTime: "15 min read",
    icon: "Cloud",
    relatedSlugs: ["aws", "docker", "kubernetes", "linux"],
    introduction: "Microsoft Azure is a cloud computing platform run by Microsoft. It offers access, management, and development of applications and services through globally distributed data centers. Azure skills are highly demanded in enterprise companies.",
    whyAsk: "Employers check Azure cloud skills to see if you can model subscription management, design secure active directories, configure App Services, and utilize Blob storages effectively.",
    whoLearn: "Cloud Engineers, Azure Administrators, DevOps Engineers, and Enterprise Full Stack Developers.",
    roadmap: [
      "Understand cloud service models (IaaS, PaaS, SaaS) on Azure",
      "Master Azure Compute (VMs, App Services, Azure Functions)",
      "Master Azure Storage (Blob storage, Files, Queues, Disk)",
      "Understand Azure Networking (VNet, Subnets, VPN Gateways, Traffic Manager)",
      "Learn identity management with Microsoft Entra ID (formerly Azure AD)",
      "Deploy templates using Azure Resource Manager (ARM) or Terraform"
    ],
    faq: [
      {
        question: "What is Microsoft Entra ID?",
        answer: "Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based identity and access management service that helps your employees sign in and access internal/external resources."
      },
      {
        question: "What is the difference between Azure Blob Storage and Azure File Storage?",
        answer: "Blob Storage is optimized for storing massive amounts of unstructured object data (like images, videos). File Storage provides managed file shares in the cloud accessible via SMB or NFS protocols."
      }
    ]
  },
  {
    title: "Linux Interview Questions",
    slug: "linux",
    description: "Learn Linux system administration, file systems, permissions, shell scripting, process management, and networking commands.",
    keywords: ["Linux Interview Questions", "Linux Commands Prep", "File Permissions Linux", "Linux Shell Scripting"],
    updatedAt: "2026-06-15",
    readingTime: "13 min read",
    icon: "Terminal",
    relatedSlugs: ["git", "docker", "sysdesign", "os"],
    introduction: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel. It is the operating system powering almost all web servers, cloud infrastructure, and databases.",
    whyAsk: "Backend and DevOps engineers must work in Linux environments daily. Questions test command-line proficiency, automation scripts, user permissions, and network troubleshooting.",
    whoLearn: "Backend Programmers, Systems Administrators, DevOps Engineers, and security professionals.",
    roadmap: [
      "Learn Linux file hierarchy and directory navigation",
      "Master core command line utilities (grep, awk, sed, find, tar)",
      "Understand file permissions (chmod, chown) and access control lists",
      "Master process monitoring (top, ps, kill, nohup, systemctl)",
      "Learn Shell Scripting basics (variables, loops, conditionals)",
      "Understand networking diagnostics (ping, netstat, curl, dig, netcat)"
    ],
    faq: [
      {
        question: "What is the difference between a hard link and a soft (symlink) link?",
        answer: "A hard link points to the inode of the source file, sharing content directly (cannot span file systems). A soft link points to the path of the source file, acting as a shortcut."
      },
      {
        question: "How do you change permissions of a file in Linux?",
        answer: "Use the chmod command (e.g. `chmod 755 file.sh` or `chmod +x file.sh`) which changes read (4), write (2), and execute (1) permissions for user, group, and others."
      }
    ]
  },
  {
    title: "REST API Interview Questions",
    slug: "rest-api",
    description: "Study RESTful architecture, HTTP status codes, verbs, statelessness, security, and API design.",
    keywords: ["REST API Interview Questions", "RESTful Web Services", "HTTP Status Codes API", "API Security Best Practices"],
    updatedAt: "2026-06-15",
    readingTime: "11 min read",
    icon: "Globe",
    relatedSlugs: ["graphql", "nodejs", "expressjs", "javascript"],
    introduction: "REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with one another. Designing RESTful APIs is a key backend competency.",
    whyAsk: "API design impacts frontend-backend communication. Companies test your knowledge of REST constraints, HTTP methods, correct status code usage, and API security (JWT, CORS).",
    whoLearn: "All Full Stack, Frontend, and Backend Web Engineers.",
    roadmap: [
      "Understand client-server architecture and HTTP protocol details",
      "Learn the six architectural constraints of REST",
      "Master HTTP Request Methods (GET, POST, PUT, DELETE, PATCH, OPTIONS)",
      "Learn standard HTTP response status code families (2xx, 3xx, 4xx, 5xx)",
      "Master API security (Token authentication, Rate limiting, CORS)",
      "Design clean endpoint naming structures and handle versioning"
    ],
    faq: [
      {
        question: "What are the six constraints of REST architecture?",
        answer: "They are: 1. Client-Server separation, 2. Statelessness, 3. Cacheability, 4. Uniform Interface, 5. Layered System, and 6. Code on Demand (optional)."
      },
      {
        question: "What is the difference between PUT and PATCH methods?",
        answer: "PUT replaces the entire representation of target resource with request payload. PATCH applies partial modifications to the resource, conserving bandwidth."
      }
    ]
  },
  {
    title: "GraphQL Interview Questions",
    slug: "graphql",
    description: "Learn GraphQL schemas, queries, mutations, resolvers, subscriptions, and caching strategies.",
    keywords: ["GraphQL Interview Questions", "GraphQL vs REST", "GraphQL Schema Resolvers", "N+1 Problem GraphQL"],
    updatedAt: "2026-06-15",
    readingTime: "13 min read",
    icon: "Network",
    relatedSlugs: ["rest-api", "react", "nodejs", "javascript"],
    introduction: "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a complete description of the data in your API, giving clients the power to ask for exactly what they need.",
    whyAsk: "GraphQL helps eliminate over-fetching and under-fetching. Interviewers want to know if you can write schemas, implement nested query resolvers, prevent N+1 database hits, and handle security limitations.",
    whoLearn: "Frontend Developers and Backend Engineers building consumer APIs.",
    roadmap: [
      "Understand GraphQL advantages over RESTful APIs",
      "Master Schema Definition Language (SDL) types and inputs",
      "Learn GraphQL Queries, Mutations, and Subscriptions",
      "Master resolver functions execution flow and context usage",
      "Solve the N+1 problem using DataLoader batching utilities",
      "Implement query depth limits and caching strategies"
    ],
    faq: [
      {
        question: "What are the benefits of GraphQL over REST?",
        answer: "GraphQL allows the client to request only the specific fields required (preventing over-fetching), fetches multiple nested resources in a single HTTP request, and provides a strongly-typed schema."
      },
      {
        question: "How do you solve the N+1 queries problem in GraphQL?",
        answer: "You solve it using a utility like DataLoader, which batches multiple individual key lookups into a single database query and caches results within the request scope."
      }
    ]
  },
  {
    title: "Redis Interview Questions",
    slug: "redis",
    description: "Solve Redis questions on data structures, caching strategies, persistence (RDB/AOF), pub/sub, and cluster mode.",
    keywords: ["Redis Interview Questions", "Redis Caching Strategies", "Redis Data Types", "Redis Persistence RDB AOF"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Database",
    relatedSlugs: ["nodejs", "sysdesign", "sql", "mongodb"],
    introduction: "Redis (Remote Dictionary Server) is an open-source, in-memory storage used as a distributed cache, database, and message broker. Redis supports key-value maps and advanced data types, making it critical for high-speed systems.",
    whyAsk: "Caching is essential for backend scalability. Interviewers test your knowledge of Redis data structures, cache eviction policies (LRU), write patterns, and high-availability clustered architectures.",
    whoLearn: "Backend Engineers, Systems Architects, and Infrastructure Engineers.",
    roadmap: [
      "Understand memory cache vs disk database tradeoffs",
      "Master Redis data structures (Strings, Lists, Sets, Sorted Sets, Hashes)",
      "Learn Caching Patterns (Cache-Aside, Write-Through, Write-Behind)",
      "Understand Persistence mechanisms: RDB snapshots and AOF logs",
      "Learn Redis Sentinel failovers and Redis Cluster sharding",
      "Solve cache problems: stampede, penetration, and breakdown"
    ],
    faq: [
      {
        question: "What is the difference between RDB and AOF persistence in Redis?",
        answer: "RDB (Redis Database) takes point-in-time snapshots of your dataset at specified intervals (compact and fast recovery). AOF (Append Only File) logs every write command received (very safe, but larger file size and slower startup)."
      },
      {
        question: "Explain the Cache-Aside pattern.",
        answer: "In Cache-Aside, the application queries the cache first. If a hit occurs, it returns data. If a miss occurs, it queries the database, writes the results back to the cache, and then returns the data."
      }
    ]
  },
  {
    title: "DBMS Interview Questions",
    slug: "dbms",
    description: "Master Database Management Systems theory: schemas, normalization, keys, transactions, indexing, and recovery.",
    keywords: ["DBMS Interview Questions", "Database Normalization 1NF 2NF 3NF", "DBMS Keys Keys types", "Database Transaction Logs"],
    updatedAt: "2026-06-15",
    readingTime: "14 min read",
    icon: "Database",
    relatedSlugs: ["sql", "postgresql", "mysql", "sysdesign"],
    introduction: "A Database Management System (DBMS) is software designed to store, retrieve, and manage data. Standard database theory covers normal forms, candidate/primary keys, locking schedules, and transaction log recovery.",
    whyAsk: "Database theory is foundational. Employers check your normalization design skills, understanding of ACID boundaries, and transaction concurrency schedules (deadlock detection, serializability).",
    whoLearn: "Software Developers, Data Engineers, and Database Architects.",
    roadmap: [
      "Understand Database architecture and schemas (3-schema architecture)",
      "Master Entity-Relationship (ER) modeling and relations mapping",
      "Understand Normalization rules (1NF, 2NF, 3NF, BCNF) and anomalies",
      "Master Keys: Candidate, Primary, Alternate, Super, and Foreign keys",
      "Understand Transaction schedules, serializability, and 2-Phase Locking (2PL)",
      "Learn database crash recovery methods (Log-based recovery, check-pointing)"
    ],
    faq: [
      {
        question: "What is database normalization and why is it needed?",
        answer: "Normalization is a systematic process of organizing data in a database to eliminate data redundancy (duplication) and prevent insertion, update, and deletion anomalies."
      },
      {
        question: "What is the difference between Candidate Key and Primary Key?",
        answer: "A Candidate Key is a minimal set of attributes that can uniquely identify a database row. The Primary Key is the specific candidate key selected by the database designer to identify rows."
      }
    ]
  },
  {
    title: "Operating Systems Interview Questions",
    slug: "os",
    description: "Solve OS concepts: processes, threads, scheduling, memory management, virtual memory, paging, and deadlocks.",
    keywords: ["Operating Systems Questions", "OS Process vs Thread", "Virtual Memory Paging", "OS Deadlock prevention"],
    updatedAt: "2026-06-15",
    readingTime: "15 min read",
    icon: "Cpu",
    relatedSlugs: ["linux", "sysdesign", "networks", "dsa"],
    introduction: "An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs. OS interviews focus on CPU execution contexts, memory paging, and deadlock states.",
    whyAsk: "OS concepts help you write efficient software that utilizes processes, handles threads safely, and avoids CPU context switching bottlenecks.",
    whoLearn: "Computer Science Students, Systems Programmers, and Backend Developers.",
    roadmap: [
      "Understand OS Kernel structure, user mode vs kernel mode",
      "Master Process vs Thread states, context switching, and scheduling",
      "Learn Process Synchronization, Mutexes, Semaphores, and Race conditions",
      "Understand Deadlocks, detection, and Bankers Avoidance Algorithm",
      "Master Memory management, paging, virtual memory, and page replacement",
      "Learn File systems, disk scheduling, and I/O management"
    ],
    faq: [
      {
        question: "What is the difference between a process and a thread?",
        answer: "A process is an independent execution program with its own memory space allocated by the OS. A thread is a subset of a process sharing its parent process’s memory space and resources, enabling fast context-switch execution."
      },
      {
        question: "What are the four necessary conditions for a deadlock?",
        answer: "A deadlock requires: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, and 4. Circular Wait."
      }
    ]
  },
  {
    title: "Computer Networks Interview Questions",
    slug: "networks",
    description: "Master OSI model layers, TCP/IP, IP routing, DNS, HTTP/HTTPS, SSL/TLS, and network security.",
    keywords: ["Computer Networks Interview", "OSI Model Layers", "TCP vs UDP protocols", "DNS lookup process"],
    updatedAt: "2026-06-15",
    readingTime: "14 min read",
    icon: "Globe",
    relatedSlugs: ["rest-api", "sysdesign", "os", "linux"],
    introduction: "Computer Networking is the discipline of connecting computers together to share data. Networking interviews test your understanding of data encapsulation, connection handshakes, routing, name resolution (DNS), and SSL/TLS secure channels.",
    whyAsk: "APIs and microservices interact over networks. Engineers must understand TCP packet drops, latencies, DNS flows, and encryption protocols to write reliable distributed software.",
    whoLearn: "Network Engineers, Backend Programmers, and Cloud/DevOps Administrators.",
    roadmap: [
      "Understand network topologies and networking hardware",
      "Master the 7 Layers of the OSI Model and 4 Layers of TCP/IP",
      "Understand IP addressing, subnet masking, and routing protocols",
      "Master Transport Protocols: TCP (handshake, congestion control) vs UDP",
      "Understand Application layer services: DNS lookup, DHCP, and HTTP/HTTPS",
      "Deep dive into SSL/TLS handshake and public-key cryptography"
    ],
    faq: [
      {
        question: "Explain the 7 layers of the OSI model.",
        answer: "They are: 1. Physical (transmits raw bits), 2. Data Link (node-to-node frames), 3. Network (packet routing/IP), 4. Transport (end-to-end TCP/UDP), 5. Session (manages dialogs), 6. Presentation (syntax/encryption), and 7. Application (user software APIs)."
      },
      {
        question: "How does the TCP 3-way handshake work?",
        answer: "It establishes a reliable connection: 1. Client sends SYN (Synchronize) packet, 2. Server replies with SYN-ACK, 3. Client sends ACK (Acknowledge) back to confirm."
      }
    ]
  },
  {
    title: "Data Structures Interview Questions",
    slug: "dsa",
    description: "Solve interview questions on arrays, linked lists, stacks, queues, trees, BSTs, heaps, and graphs.",
    keywords: ["Data Structures Questions", "Linked List Arrays", "Binary Search Tree Questions", "Graph Data Structures"],
    updatedAt: "2026-06-15",
    readingTime: "16 min read",
    icon: "GitCommit",
    relatedSlugs: ["algorithms", "oop", "javascript", "java"],
    introduction: "A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data. Mastering data structures is critical for passing algorithmic coding screens.",
    whyAsk: "Data structures test your ability to structure code data efficiently. Interviews evaluate if you know the time/space trade-offs of storing data in hashes, trees, or arrays.",
    whoLearn: "All developers preparing for technical coding assessments.",
    roadmap: [
      "Learn basic memory layout (Arrays and Dynamic Arrays)",
      "Master Linked Lists (Singly, Doubly, Circular, operations)",
      "Understand LIFO/FIFO structures: Stacks and Queues",
      "Master Hash Tables, hash functions, and collision resolutions",
      "Understand Hierarchical structures: Trees, Binary Search Trees, and Heaps",
      "Master Graphs (Representations: Adjacency list and matrix)"
    ],
    faq: [
      {
        question: "What is the difference between an Array and a Linked List?",
        answer: "Arrays store elements in contiguous memory slots, allowing O(1) random access but O(N) insert/delete shifts. Linked Lists store elements in non-contiguous nodes pointing to next addresses, allowing O(1) inserts but O(N) traversal lookups."
      },
      {
        question: "How does a Hash Table handle key collisions?",
        answer: "Collisions occur when different keys hash to the same bucket index. They are resolved via Chaining (storing colliding keys in a linked list at that index) or Open Addressing (finding another empty bucket slot using linear/quadratic probing)."
      }
    ]
  },
  {
    title: "Algorithms Interview Questions",
    slug: "algorithms",
    description: "Master sorting, searching, recursion, dynamic programming, greedy algorithms, and time/space complexity (Big O).",
    keywords: ["Algorithms Interview Questions", "Big O Notation Complexity", "Dynamic Programming Prep", "Sorting Searching Algorithms"],
    updatedAt: "2026-06-15",
    readingTime: "18 min read",
    icon: "GitCommit",
    relatedSlugs: ["dsa", "oop", "python", "cpp"],
    introduction: "An algorithm is a finite sequence of rigorous instructions, typically used to solve a class of specific problems or to perform a computation. Algorithm interviews assess time and space complexity efficiency (Big O).",
    whyAsk: "Employers look for logical thinking and problem-solving speed. They evaluate if you can write optimized algorithms that scale, rather than brute-force loops.",
    whoLearn: "Software Engineers preparing for FAANG/product company coding screens.",
    roadmap: [
      "Master Big O Notation, Time and Space complexity evaluation",
      "Understand Search (Binary Search, BFS, DFS) and recursion",
      "Master Sorting Algorithms (Bubble, Insertion, Merge, Quick, Heap sort)",
      "Learn Divide and Conquer and Greedy algorithms strategy",
      "Master Dynamic Programming (Memoization, Tabulation, Knapsack, LCS)",
      "Understand graph algorithms (Dijkstra, Kruskal, Prim, Topological sort)"
    ],
    faq: [
      {
        question: "What is Big O notation?",
        answer: "Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity, representing worst-case time/space scaling."
      },
      {
        question: "What is the difference between Merge Sort and Quick Sort?",
        answer: "Merge Sort is a stable sorting algorithm that splits arrays in half, recursively sorts them, and merges them back (always O(N log N) time, but O(N) space). Quick Sort is unstable, sorts in-place (O(1) space) by partitioning around a pivot, averaging O(N log N) time but worst-case O(N^2)."
      }
    ]
  },
  {
    title: "OOP Interview Questions",
    slug: "oop",
    description: "Master Object-Oriented Programming principles: Encapsulation, Inheritance, Polymorphism, Abstraction, and SOLID.",
    keywords: ["OOP Interview Questions", "SOLID Principles OOP", "Polymorphism Abstraction", "Encapsulation Inheritance"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Code2",
    relatedSlugs: ["java", "cpp", "python", "dsa"],
    introduction: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code. Standard OOP interviews test encapsulation, inheritance, polymorphism, and class designs.",
    whyAsk: "OOP is used to design clean, modular, and maintainable software architectures. Interviewers check if you know how to write classes that adhere to SOLID guidelines.",
    whoLearn: "Backend Engineers, UI Architects, and Java/C++ developers.",
    roadmap: [
      "Understand Procedural vs Object-Oriented design",
      "Master the 4 pillars of OOP (Encapsulation, Inheritance, Polymorphism, Abstraction)",
      "Learn Class constructors, destructors, overloading, and overriding",
      "Understand Interfaces, Abstract Classes, and Multiple Inheritance conflicts",
      "Master SOLID Design Principles (Single responsibility, Open-closed, etc.)",
      "Explore Gang of Four (GoF) design patterns (Singleton, Factory, Observer)"
    ],
    faq: [
      {
        question: "Explain the four pillars of Object-Oriented Programming.",
        answer: "They are: 1. Encapsulation (bundling data and methods, hiding internals), 2. Inheritance (reusing code from parent classes), 3. Polymorphism (allowing one interface to represent multiple forms), and 4. Abstraction (hiding implementation details and showing only essentials)."
      },
      {
        question: "What are the SOLID principles?",
        answer: "SOLID is an acronym for: S - Single Responsibility, O - Open/Closed (open for extension, closed for modification), L - Liskov Substitution, I - Interface Segregation, and D - Dependency Inversion."
      }
    ]
  },
  {
    title: "Behavioral Interview Questions",
    slug: "behavioral",
    description: "Structure your behavioral answers with the STAR method: leadership, teamwork, conflict resolution, and failures.",
    keywords: ["Behavioral Interview Questions", "STAR Method Interview", "Conflict Resolution Behavioral", "Leadership Situational Questions"],
    updatedAt: "2026-06-15",
    readingTime: "12 min read",
    icon: "Users",
    relatedSlugs: ["hr", "aptitude"],
    introduction: "Behavioral interviews test how you handled professional situations in the past to predict how you will act in the future. Candidates should prepare concise stories about conflict, leadership, failure, and teamwork.",
    whyAsk: "Technical skills get you interviews, but behavioral alignment gets you hired. Companies look for culture fit, grit, collaboration, communication, and self-reflection.",
    whoLearn: "All professionals preparing for job interviews.",
    roadmap: [
      "Understand why companies ask behavioral questions",
      "Master the STAR method structure (Situation, Task, Action, Result)",
      "Prepare stories for Teamwork and Collaboration scenarios",
      "Prepare stories for Leadership, Initiative, and Mentorship",
      "Formulate stories for Failure, Mistake, and handling stressful situations",
      "Practice clean verbal delivery and concise quantitative result framing"
    ],
    faq: [
      {
        question: "What is the STAR method?",
        answer: "STAR is a structured technique: S - Situation (describe context), T - Task (explain responsibility/challenge), A - Action (detail steps you took), and R - Result (share outcome metrics/lessons learned)."
      },
      {
        question: "How do you handle a disagreement on technical implementation with a senior teammate?",
        answer: "I active-listen to understand their design motivations, evaluate trade-offs objectively using data or code prototypes (POC), attempt to find alignment, and follow the 'disagree and commit' principle once a path is decided."
      }
    ]
  },
  {
    title: "Aptitude Interview Questions",
    slug: "aptitude",
    description: "Master quantitative aptitude, logical reasoning, and puzzle-solving questions commonly asked in screen rounds.",
    keywords: ["Aptitude Interview Questions", "Quantitative Aptitude puzzles", "Logical Reasoning questions", "Coding Aptitude Round"],
    updatedAt: "2026-06-15",
    readingTime: "11 min read",
    icon: "TrendingUp",
    relatedSlugs: ["behavioral", "hr"],
    introduction: "Aptitude assessments measure a candidate's cognitive abilities, numerical agility, logical reasoning, and puzzle-solving speed. They are commonly used as initial screening filters for software roles.",
    whyAsk: "Employers use aptitude questions to evaluate quick analytical thinking, numeric agility, pattern recognition, and problem-solving structures under timed constraints.",
    whoLearn: "Graduates and professionals preparing for initial hiring screens.",
    roadmap: [
      "Master Number Systems, Divisibility rules, and HCF/LCM",
      "Understand Arithmetic formulas (Percentages, Profit/Loss, Ratio & Proportion)",
      "Learn Time, Speed, Distance, and Work rate equations",
      "Master Logical Reasoning (Blood relations, syllogisms, sequence coding)",
      "Learn classic Tech Interview Puzzles (e.g., crossing bridges, burning ropes)",
      "Practice data interpretation charts and time management tactics"
    ],
    faq: [
      {
        question: "What is the best way to prepare for initial screening puzzles?",
        answer: "Study classic interview puzzles (like '3 lightbulbs and 3 switches' or '2 eggs and 100 floors'), and focus on explaining your logical reasoning path clearly, even if you do not find the exact numeric answer."
      },
      {
        question: "How is logical reasoning tested in coding assessments?",
        answer: "It is tested through pattern recognition questions, sequence tracking, syllogisms, and flow charts that mirror code conditional logic."
      }
    ]
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

