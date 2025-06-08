---
title: "Insights"
description: "AI-powered GitHub activity analysis for developer growth and code review insights."
date: "05/16/2025"
demoURL: "https://insights.theboring.app/"
repoURL: "https://github.com/theboringdotapp/dev-insights"
ideaToDeploy: 30
commits: 133
tools: ["Cursor", "Vercel", "Claude Code CLI"]
models: ["claude-3.7-sonnet", "gemini-2.5-pro" ]
summary: | 
    I manage a few developers and it takes me quite some time to review their work and performance. 
    
    I wanted a simple dashboard that I could spot performance trends and have a general overview of their work. 
    
    This dashboard is just one of the tools I use, it is not a replacement for a proper performance review.
---

A privacy-first developer analytics tool that leverages AI to analyze GitHub activity and provide actionable feedback for improving coding practices and developer growth.

## Features

**GitHub activity analysis**: Comprehensive review of pull requests with detailed metrics, timeline visualization, and performance tracking across selected timeframes. Analyzes PR patterns, review cycles, and development velocity.

**AI-powered code feedback**: Individual pull request analysis using multiple AI providers (OpenAI, Anthropic, Google Gemini) to provide detailed code quality assessments, best practice recommendations, and improvement suggestions.

**Pattern recognition system**: Meta-analysis capabilities that identify recurring patterns across multiple PRs, helping developers recognize strengths, weaknesses, and growth opportunities over time.

**Privacy-centric architecture**: Completely browser-based application with no server-side code storage or processing. Direct GitHub API communication ensures sensitive code never leaves your environment.

## Architecture

Built with **React** and **TypeScript** for type-safe development, featuring **Zustand** for efficient state management and **Framer Motion** for smooth animations. **Recharts** handles data visualization and analytics dashboard rendering.

**Client-side processing**: All analysis happens locally in the browser, with direct API calls to GitHub for repository data and user-configured AI providers for code analysis.

**Multi-provider AI support**: Flexible integration with OpenAI, Anthropic Claude, and Google Gemini APIs, allowing users to choose their preferred AI provider with their own API keys.

## Technical implementation

**Frontend**: React with TypeScript, Tailwind CSS for styling, and Framer Motion for interactive animations and transitions.

**State management**: Zustand for lightweight, performant state handling across components without Redux complexity.

**Data visualization**: Recharts library for rendering pull request metrics, timeline charts, and developer growth analytics.

**Security model**: Browser-only architecture with user-provided API keys, ensuring complete data privacy and no third-party code storage.

The system demonstrates how to build sophisticated developer tools while maintaining strict privacy standards – all analysis happens locally with user-controlled AI provider access. 