---
title: "Gmail API permissions are a pain point"
type: "insight"
date: 2024-04-20
tags: ["gmail", "api", "oauth", "permissions"]
projectId: "unsubscriber"
description: "Understanding Google's certification requirements helped me realize why building email tools is harder than expected."
---

Building the unsubscriber tool taught me that Google's permission model for Gmail APIs is incredibly strict - and for good reason.

Getting access to read emails requires going through a verification process that can take weeks. For a side project, this means either:

1. Keep it private (what I ended up doing)
2. Go through the lengthy verification process
3. Build a completely different solution

The irony? The very thing that makes Gmail secure also makes it harder to build useful tools that could help users manage their privacy better.

Sometimes the best insight is learning what battles not to fight. 