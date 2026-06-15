# AI Agent Prompt: Build an SEO-First Interview Question Hub

## Project Goal

Build a modern, high-performance Interview Question Hub that helps students and professionals prepare for technical and HR interviews.

The website should be designed with SEO as the highest priority so that it can rank for long-tail keywords like:

* React Interview Questions
* Java Interview Questions
* Node.js Interview Questions
* JavaScript Interview Questions
* Python Interview Questions
* SQL Interview Questions
* MongoDB Interview Questions
* Express.js Interview Questions
* Next.js Interview Questions
* TypeScript Interview Questions
* Docker Interview Questions
* Kubernetes Interview Questions
* AWS Interview Questions
* DevOps Interview Questions
* HTML Interview Questions
* CSS Interview Questions
* C Programming Interview Questions
* C++ Interview Questions
* Data Structures Interview Questions
* Algorithms Interview Questions
* System Design Interview Questions
* OOP Interview Questions
* Operating System Interview Questions
* DBMS Interview Questions
* Computer Networks Interview Questions
* Git Interview Questions
* Linux Interview Questions
* REST API Interview Questions
* GraphQL Interview Questions
* HR Interview Questions

The architecture should allow thousands of interview pages in the future.

---

# Tech Stack

* Next.js 15 (App Router)
* React 19
* TypeScript
* Tailwind CSS
* shadcn/ui
* MDX for content
* next-sitemap
* Dynamic Metadata API
* Static Site Generation (SSG)
* ISR (Incremental Static Regeneration)
* Vercel optimized
* Server Components wherever possible

No unnecessary client components.

---

# Primary SEO Goals

This website should be built to maximize organic Google traffic.

## Every page must include

* SEO Title
* Meta Description
* Canonical URL
* Open Graph tags
* Twitter tags
* JSON-LD Schema
* Breadcrumb Schema
* FAQ Schema
* Article Schema
* Proper H1
* H2 hierarchy
* Internal linking
* Optimized URLs

Example:

/interview/react

/interview/nodejs

/interview/java

/interview/python

/interview/sql

No query parameters.

Only clean slugs.

---

# URL Structure

/

Homepage

/interview

Category listing

/interview/react

/interview/javascript

/interview/nodejs

/interview/java

/interview/python

/interview/sql

/interview/hr

Each technology gets its own landing page.

Future:

/interview/react/hooks

/interview/react/context-api

/interview/react/redux

etc.

---

# Homepage

Include:

Hero Section

Title:

"Master Technical Interviews with Curated Questions & Answers"

Subtitle explaining the platform.

Search bar

Popular technologies grid

Trending interview topics

Recently updated

Featured categories

Learning roadmap

CTA section

Newsletter placeholder

Footer with internal links

---

# Category Page Layout

For example:

React Interview Questions

Must contain:

Hero

Introduction

What companies ask React?

Who should learn React?

Table of Contents

100+ Interview Questions

Beginner Questions

Intermediate Questions

Advanced Questions

Scenario Based Questions

Coding Questions

MCQs

Practical Questions

FAQs

Related Topics

Internal links

Recommended roadmap

CTA

---

# Question Component

Every question should contain

Question

Difficulty

Answer

Detailed explanation

Code example

Real interview tip

Common mistakes

Related questions

Copy button

Syntax highlighting

Expandable explanation

---

# Search

Global search

Search by:

Technology

Question

Keyword

Topic

Should support fuzzy search.

---

# Navigation

Navbar (desktop/mobile)

Sticky TOC

Breadcrumb navigation

Footer navigation

---

# Sidebar

Popular categories

Latest categories

Recently updated

Top searched

Related technologies

Advertisement placeholder

---

# Internal Linking Strategy

Every page should automatically suggest

People also study

Related interview topics

Recommended next topic

Example:

React page links to

JavaScript

Next.js

TypeScript

Redux

Node.js

This should create a strong internal link graph.

---

# Structured Data

Implement JSON-LD for

Website

Organization

Article

FAQ

Breadcrumb

SearchAction

---

# Performance

Lighthouse target

Performance: 95+

SEO: 100

Accessibility: 95+

Best Practices: 100

Images lazy loaded

Fonts optimized

Code split

Server Components

No hydration issues

---

# Accessibility

Keyboard navigation

ARIA labels

Proper semantic HTML

Focus states

Screen reader friendly

---

# Initial Categories

React

JavaScript

Node.js

Express.js

Next.js

TypeScript

HTML

CSS

Tailwind CSS

Bootstrap

Python

Java

C

C++

SQL

MongoDB

PostgreSQL

MySQL

Git

GitHub

Docker

Kubernetes

AWS

Azure

Linux

REST API

GraphQL

Redis

System Design

DBMS

Operating Systems

Computer Networks

Data Structures

Algorithms

OOP

HR Interview

Behavioral Interview

Aptitude

---

# Content Format

Content should be MDX driven.

Each category should have frontmatter

title

description

slug

keywords

updatedAt

readingTime

faq

schema data

Questions stored separately so they can scale.

---

# Future Features

Bookmark questions

Dark mode

Progress tracking

Mock interview mode

AI interview simulator

Company-wise interview questions

Amazon

Google

Microsoft

Meta

Netflix

Uber

Flipkart

Swiggy

Zomato

Infosys

TCS

Wipro

Accenture

LeetCode integration

Coding playground

User authentication

Notes

Revision mode

Flashcards

Quiz mode

Premium courses

Community discussions

Interview experiences

Salary insights

Company hiring trends

---

# Design

Minimal

Fast

Modern

Responsive

Clean typography

Large readable content

Excellent mobile experience

Inspired by documentation websites rather than blogs.

---

# Deliverables

Create a production-ready Next.js project with:

* App Router
* Reusable components
* SEO optimized architecture
* MDX content system
* Dynamic metadata generation
* Scalable folder structure
* Sitemap generation
* robots.txt
* RSS support
* Search functionality
* Category pages
* Homepage
* Interview question rendering system
* Ready for deployment on Vercel

Code quality should be modular, maintainable, scalable, and follow modern Next.js best practices.
