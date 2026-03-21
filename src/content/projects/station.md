---
order: 3
title: Station, website rebuild in Webflow
subtitle: A structured Webflow rebuild focused on clarity, maintainability, and predictable editing for the internal team
live: "https://station.dk/"
github: ""
image:
  src: "../../images/projects/station.png"
  alt: "Station project screenshot"
tags: ["Webflow", "JavaScript"]
---

## Overview

Rebuild of Station’s website in Webflow, focused on making the system predictable and maintainable for a non-technical team.

The goal was not just to implement a new design, but to create a structure that their team could confidently work with over time.

## The Problem

Station’s existing Webflow setup had become difficult to work with.

Small changes, like adjusting a text colour, could have unintended side effects due to Webflow’s class inheritance system. This made the team hesitant to make updates, creating friction in maintaining the site.

At the same time, switching platforms would introduce new complexity without solving the underlying issue.

## Solution

Instead of replacing Webflow, I focused on restructuring the system to make it predictable and easier to use.

This included:

- A set of dedicated utility classes for colours and design properties
- Reusable components to ensure consistency across the site
- Structured CMS collections for managing content across programs, activities, and communities

The result was a system where changes could be made locally without unexpected side effects.

## Technical Approach

- Built in **Webflow**, improving the existing setup rather than replacing it
- Introduced a utility-based class structure to avoid inheritance issues
- Created reusable components for consistency and scalability
- Structured CMS collections for flexible content management

## Handover

To ensure long-term usability, I created a Notion guide with video walkthroughs explaining how to update and maintain the site.

The documentation focuses on the patterns that could otherwise be confusing, making it easier for new team members to work with the system.

## Current Status

The site is live, and Station’s internal team maintains it independently.
