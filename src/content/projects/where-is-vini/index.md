---
title: "Where is Vini?"
description: "Real-time tracking of my brother's travel adventures."
date: "06/08/2025"
demoURL: "https://whereisvini.theboring.app/"
ideaToDeploy: 1
commits: 24
tools: ["Cursor", "v0", "Github Actions", "Vercel"]
models: ["claude-4-sonnet", "ChatGPT (image generation)" ]
summary: "My brother is constantly traveling and I never know where he is or when his next trip is. I made this tiny tool to keep track of his travels, based on his Flightradar24 profile."
---

My brother Vini travels constantly. I built this to track where he is in real-time.

### Features

Shows his current location with country flags and local time. Displays a countdown to his next flight. Only shows countries and airport codes – no sensitive flight details.

The UI has animated backgrounds and glassmorphism cards that look clean on mobile and desktop.

### How it works

GitHub Actions scrapes flight data from Flightradar24 every 12 hours. The data gets sanitized before hitting the API – flight numbers and aircraft details are removed for privacy.

Everything updates in real-time: location, countdowns, and travel stats.

### Tech

Next.js 15, React 19, TypeScript. Puppeteer handles scraping, GitHub Actions automates everything, deployed on Vercel.

Built to show how you can make engaging real-time tracking while keeping privacy intact. 