---
title: "Unsubscriber"
description: "Clean your Gmail inbox with intelligent email unsubscription and batch processing."
date: "04/22/2025"
demoURL: "https://unsubscriber.theboring.app/"
repoURL: "https://github.com/theboringdotapp/unsubscriber"
ideaToDeploy: 6
commits: 114
tools: ["Cursor", "Vercel"]
models: ["claude-3.7-sonnet", "gemini-2.5-pro" ]
screenshot: "/unsubscriber.png"
summary: | 
    While cleaning my email inbox, I wondered how muhc of it could be automated.
    
    It took me 1.5h to have a simple working prototype.
    
    Then I decided to make it public, which took another 15 hours. 
    
    Unfortunately, Google requires certification for this kind of project, so it is not available for everyone. 
---

A privacy-focused Flask web application that streamlines Gmail inbox cleanup by automatically detecting subscriptions and facilitating one-click unsubscribes through intelligent email scanning.

## Features

**Smart subscription detection**: Scans recent Gmail messages for common unsubscribe headers and links, automatically grouping emails by sender for easier identification and management of subscription patterns.

**One-click unsubscribe automation**: Processes List-Unsubscribe headers supporting both mailto: and HTTP methods, enabling automated unsubscription from multiple services without manual intervention.

**Privacy-centric design**: Implements Google OAuth for secure authentication while maintaining transient data processing - no email content stored long-term, ensuring user privacy and data security.

**Batch processing capabilities**: Optional email archiving functionality with additional permissions, allowing users to clean up processed emails after successful unsubscription operations.

## Architecture

Built with **Flask** as a serverless backend deployed on **Vercel**, featuring optimized routing that serves static assets via CDN while processing API requests through serverless functions.

**Hybrid deployment strategy**: Static landing pages and privacy policies served directly by Vercel's edge network, while authenticated dashboard and scanning operations run as Python serverless functions.

**Google services integration**: Direct Gmail API integration with OAuth 2.0 authentication flow, ensuring secure access to user email data without storing credentials.

## Technical implementation

**Backend**: Flask application structured for serverless deployment with modular components for authentication, scanning logic, and Gmail service utilities.

**Frontend**: Static HTML/CSS/JavaScript with Jinja2 templating for authenticated views, featuring light/dark theme support and responsive design.

**Security model**: Google OAuth implementation with minimal permission requests, transient data processing, and no persistent storage of sensitive email content.

**Deployment architecture**: Vercel configuration optimizing for serverless functions while minimizing cold starts through efficient static asset serving.

The system demonstrates how to build effective email management tools while maintaining strict privacy standards and leveraging modern serverless deployment patterns for cost-effective scaling. 