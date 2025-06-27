---
title: "Money"
description: "Privacy-first personal finance tracker with automated CSV processing and intelligent categorization."
date: "06/27/2025"
demoURL: "https://money.theboring.app/"
repoURL: "https://github.com/theboringdotapp/money"
ideaToDeploy: 4
commits: 58
tools: ["Cursor", "Vercel"]
models: ["claude-4-sonnet"]
screenshot: "/money.png"
summary: ""
---

A complete solution for managing your personal finances with automated CSV processing, intelligent categorization, and modern design. All data is processed and stored locally in your browser for maximum privacy and security.

## Features

**Privacy-first architecture**: All data processing and storage happens locally in your browser using IndexedDB. No data leaves your device, ensuring complete privacy and security for your financial information.

**Multi-bank CSV import**: Drag-and-drop CSV file processing with support for Nubank, Inter, Itaú, Bradesco, and Santander. Features intelligent duplicate detection and automatic transaction categorization.

**Smart categorization system**: Automatic transaction categorization using keyword matching, learning algorithms, and pattern recognition. The system learns from manual categorizations to improve accuracy over time.

**Mobile-optimized design**: Apple-inspired interface with liquid glass effects, touch-friendly interactions, and responsive design that works seamlessly across all device sizes.

**Internationalization**: Full i18n support with English and Portuguese (Brasil) translations, automatic browser language detection, and persistent language preferences.

## Architecture

Built with **SvelteKit 2.16+** and **TypeScript** for type-safe development, featuring **IndexedDB** with **Dexie.js** for client-side storage and **Tailwind CSS** for styling with custom glass morphism utilities.

**Client-side data storage**: Completely browser-based application with IndexedDB for data persistence, including bank accounts, categories, transactions, recurring patterns, and user settings.

**Feature-based architecture**: Organized with clear separation between dashboard metrics, transaction management, file upload functionality, and settings configuration.

**Multi-provider support**: Flexible CSV processing system that handles different bank formats automatically, with intelligent field mapping and data validation.

## Technical implementation

**Frontend**: SvelteKit with TypeScript, Tailwind CSS for styling, and Lucide Svelte for iconography with Chart.js for financial visualizations.

**Data processing**: PapaParse for robust CSV file parsing, Zod for type-safe data validation, and custom algorithms for transaction categorization and duplicate detection.

**State management**: Svelte stores for reactive state handling across components, including category filtering, internationalization, and toast notifications.

**Storage model**: Browser-only architecture with IndexedDB providing secure local storage, complete export/import functionality, and built-in database versioning.

The system demonstrates how to build sophisticated financial tools while maintaining strict privacy standards – all processing happens locally with user-controlled data management and zero external dependencies for sensitive information. 