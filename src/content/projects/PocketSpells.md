---
order: 1
title: PocketSpells, spell tracker for D&D
subtitle: A mobile-first React app for searching, filtering, and managing spells during D&D gameplay
live: "https://pocket-spells.vercel.app/"
github: "https://github.com/louissse/PocketSpells"
image:
  src: "../../images/projects/pocket-spells.png"
  alt: "PocketSpells project screenshot"
tags: ["React", "TypeScript", "TanStack Query"]
---

## Overview

PocketSpells is a mobile-first React app for managing spells during D&D gameplay.

Looking up spells mid-session is slow and interrupts flow. The goal of the app is to provide fast search, filtering, and a personal spell collection that can be accessed instantly during play.

## Key Features

- Fast search and filtering of spells from an external API
- Personal “pocket” with locally persisted spells
- Ability to add custom spells not available in the API
- Optimized for quick interaction during gameplay

## Technical Approach

The app uses the D&D 5e API, which has rate limits, so fetching all spells upfront was not feasible.

To handle this, I implemented:

- Infinite scroll with paginated requests (20 spells at a time)
- Query caching based on filter state using **TanStack Query**
- Automatic handling of race conditions, ensuring only the latest query result is applied

This makes filtering responsive and avoids inconsistent UI state when users interact quickly.

## User Experience

The app is designed for use during live sessions, where speed and clarity are critical.

- A splash screen hides the initial data load
- Skeleton loaders provide feedback during filtering
- The interface is optimized for mobile use and quick interactions

## Current Status

The app is live and actively used during D&D sessions.  
New features are continuously added based on real usage and feedback during gameplay.
