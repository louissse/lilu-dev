---
order: 1
title: PocketSpells, a modern spell tracking app
subtitle: A mobile-first spell reference designed for quick use during D&D sessions.
live: "https://pocket-spells.vercel.app/"
github: "https://github.com/louissse/PocketSpells"
image:
  src: "../../images/projects/pocket-spells.png"
  alt: "PocketSpells project screenshot"
tags: ["React", "TypeScript", "TanStack Query"]
---

## The Problem

PocketSpells started from a real problem during D&D sessions. My friend Amalie needed a way to quickly look up spells mid-game without flipping through books or losing focus. We tried printed cards, but they became outdated fast.

## The Technical Challenge

The D&D API has rate limits, I couldn't fetch all spells upfront. I built infinite scroll with pagination (20 spells at a time), caching queries by filter state using TanStack Query. This also solved a tricky problem: if a user clicked multiple filters before a request completed, TanStack Query would wait for the most recent query and discard stale requests.

## User Experience

For the UI, I added a splash screen on initial load to hide the first fetch, and skeleton loaders when filtering, so users always know something's happening.

## Today

The app is live and being actively used by our D&D table. I'm developing new features based on what we find missing mid-session.
