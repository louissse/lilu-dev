---
order: 1
title: PocketSpells, a modern spell tracking app
subtitle: A mobile-first spell reference designed for quick use during D&D sessions.
live: "https://pocket-spells.vercel.app/"
github: "https://github.com/louissse/PocketSpells"
image:
  url: "/images/pocket-spells.png"
  alt: "PocketSpells project screenshot"
tags: ["React", "TypeScript", "TanStack Query"]
---

PocketSpells started from a small frustration during tabletop sessions.

A friend of mine, Amalie, plays D&D as a Ranger and prefers tracking her character on paper. Keeping track of spells, what they do, when to use them, and which ones are available, was always cumbersome.

We tried printing spell cards, which helped for a while, but they quickly became outdated and didn’t allow for browsing or filtering. That shaped the idea: build something that keeps the simplicity of paper while allowing fast search and filtering when needed.

The scope is intentionally narrow. The goal is simply to browse, read and track spells quickly during a session — nothing more.

The app is designed mobile-first, with fast filtering and fuzzy search so players can find spells even if they don’t remember the exact name. Spell data is fetched from an open D&D API and loaded progressively to keep the interface responsive on mobile.

Spell browsing is currently fully functional. I'm testing "prepared spells" functionality. Planned next steps include spell slot tracking and offline support.
