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

It was built to solve a real problem: looking up spells mid-session is slow and breaks flow. The app focuses on fast search, filtering, and a personal spell collection that can be accessed instantly during play.

## Key Features

- Search and filter spells from an external API
- Personal “pocket” with locally stored spells
- Add custom spells
- Track spell slots during gameplay

## Technical Highlights

- Designed around API rate limits using paginated requests and caching
- Implemented with **TanStack Query** to handle async state and avoid unnecessary requests
- Handles rapid user input without inconsistent UI state

## Focus

Mobile-first design with fast interactions, optimized for real-time use during gameplay.
