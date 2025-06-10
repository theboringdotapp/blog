---
title: "Where is Vini?"
description: "Real-time tracking of my brother's travel adventures."
date: "06/08/2025"
demoURL: "https://whereisvini.theboring.app/"
ideaToDeploy: 1
commits: 24
tools: ["Cursor", "v0", "Github Actions", "Vercel"]
models: ["claude-4-sonnet", "ChatGPT (image generation)" ]
screenshot: "/whereisvini.jpg"
summary: |
  My brother is constantly traveling and I never know where he is or when his next trip is.
  
  I made this tiny tool to keep track of his travels, based on his Flightradar24 profile.
---

A real-time flight tracking application that follows my brother Vini's globe-trotting adventures with complete privacy protection and beautiful visualizations.

## Features

**Live tracking**: Shows Vini's current location with country flags, local time, and countdown to his next departure. Displays comprehensive flight statistics including total flights, countries visited, and travel insights.

**Privacy-first design**: Only exposes countries and airport codes – all sensitive flight details, airline information, and aircraft data are sanitized before reaching the API.

**Beautiful interface**: Features animated gradient backgrounds with floating orbs, glassmorphism design cards with backdrop blur effects, and fully responsive mobile-optimized layouts.

**PWA capabilities**: Installable web app with manifest, service worker support, and complete SEO optimization including Open Graph previews and structured data markup.

## Architecture

Built with **Next.js 15 App Router** and **React 19**, featuring dedicated API routes for privacy-sanitized flight data. **Puppeteer-based scraper** runs every 12 hours via **GitHub Actions**, automatically collecting and updating flight data from Flightradar24.

**Data layer** consists of JSON files storing raw flight data and statistics, all auto-updated through the automated workflow. **API endpoints** serve sanitized responses with current location, next trip details, and comprehensive travel statistics.

## Technical implementation

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS with real-time countdown timers and animated UI components.

**Backend**: Next.js API Routes handling privacy-focused data processing and automated data collection via Puppeteer.

**Infrastructure**: GitHub Actions for scheduled workflows, Vercel deployment, complete SEO suite with perfect Lighthouse scores.

The system demonstrates how to build engaging real-time applications while maintaining strict privacy standards – no personal information, flight numbers, or sensitive travel details are ever exposed. 