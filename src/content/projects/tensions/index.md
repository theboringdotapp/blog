---
title: "Tensions"
description: "A thoughtful space for capturing, understanding, and dissolving mental tensions through gentle reflection and AI-powered insights."
date: "07/16/2025"
demoURL: "https://tensions.theboring.app/"
repoURL: "https://github.com/theboringdotapp/tensions"
ideaToDeploy: 3
commits: 23
tools: ["v0", "Cursor"]
models: ["v0", "claude-4-sonnet"]
screenshot: "/tensions.png"
summary: "I noticed I have a few themes that constantly pop into my mind. I call them tensions. Some are good, like flirting with a specific person. Some are bad, like thinking about the future. I want to capture them, expand on them and dissolve them over time. I hope this tool will do just that."
---

A minimalist journal app designed with the philosophy that naming and understanding our mental tensions prevents them from becoming worries or anxieties. Built with a cozy, Rick Rubin and Apple-inspired aesthetic, it provides a safe space for reflection and growth.

## Features

**Tension tracking system**: Capture and organize your mental tensions in a thoughtful, structured way. The app provides an intuitive interface for documenting recurring thoughts and themes that occupy your mind.

**Expressive journaling**: Add detailed thoughts and feelings to each tension entry, allowing for deep reflection and understanding of patterns in your mental landscape.

**AI-powered insights**: Get personalized reflections and perspectives through OpenAI GPT-4.1 integration that spark new ways of thinking about your tensions and help you process them constructively.

**Progressive Web App**: Works seamlessly offline with smart service worker caching, ensuring your reflections are always accessible when you need them most.

**Privacy-first approach**: All data is stored locally in your browser using IndexedDB. Information is only sent to OpenAI when you explicitly request AI insights, putting you in complete control of your data.

## Architecture

Built with **Next.js 15** using the App Router for modern React patterns, **TypeScript** for type safety, and **Tailwind CSS** with custom liquid glass components for a soothing, Apple-inspired interface.

**Client-side storage**: IndexedDB handles all local data persistence, ensuring your tensions and reflections remain private and accessible offline.

**State management**: Zustand provides lightweight, reactive state management across the application for seamless user experience.

**Progressive Web App features**: Custom service worker implementation with intelligent caching strategies for optimal performance and offline functionality.

## Technical implementation

**Frontend**: Next.js 15 with TypeScript and Tailwind CSS, featuring custom liquid glass design components inspired by Apple's Human Interface Guidelines.

**AI integration**: OpenAI GPT-4.1 API for generating thoughtful insights and reflections, with user-controlled data sharing for maximum privacy.

**Storage architecture**: Browser-based IndexedDB for local data persistence, with no external databases or user accounts required.

**Deployment pipeline**: Automated deployment to Vercel with cache versioning system for seamless PWA updates and user notifications.

The application demonstrates how to build intimate, personal tools that respect user privacy while leveraging AI to enhance self-reflection and mental well-being through gentle, thoughtful design patterns. 